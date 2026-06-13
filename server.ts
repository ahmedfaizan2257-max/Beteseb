import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store for lead submissions during session
const leads: any[] = [
  {
    id: "lead_1",
    fullName: "Amara Okeke",
    email: "amara.okeke@example.com",
    phone: "403-555-0192",
    relationship: "Daughter of senior",
    languages: ["Igbo", "English"],
    religionTraditions: "Enjoys traditional African storytelling, Sunday prayers",
    careFocus: "Companionship & Meal Preparation",
    preferredSchedule: "Part-time (Daytime)",
    expectations: "Warm interactive presence, familiar cooking",
    status: "Matched Guide Ready",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    matchResult: {
      matchPercentage: 96,
      carerName: "Chioma N.",
      carerLang: "Igbo & English",
      carerBio: "Chioma has 6 years of companionship care experience in Calgary. She is specialized in traditional Nigerian cuisine and is an enthusiastic storyteller.",
      culturalAlignment: "Matched on language (Igbo), deep respect for family prayer patterns, and dietary traditions."
    }
  },
  {
    id: "lead_2",
    fullName: "Youssef El-Amin",
    email: "youssef.amin@example.com",
    phone: "587-555-0143",
    relationship: "Self (Senior)",
    languages: ["Arabic", "English"],
    religionTraditions: "Halal meals preference, quiet reflection time in afternoons",
    careFocus: "Transportation & Healthcare Navigation",
    preferredSchedule: "Flexible",
    expectations: "Dignified assistance to medical appointments",
    status: "Assigned Coordinator",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    matchResult: {
      matchPercentage: 98,
      carerName: "Tareq K.",
      carerLang: "Arabic, French & English",
      carerBio: "Tareq is a trained foreign medical graduate (IEN) now pursuing NCLEX certification in Calgary. Extremely knowledgeable in medical terms and patient advocacy.",
      culturalAlignment: "Matched on language (Arabic), cultural diet protocols, and specialized medical concierge navigations."
    }
  }
];

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not defined");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", time: new Date().toISOString() });
});

// 2. Fetch submissions / leads
app.get("/api/leads", (req, res) => {
  res.json({ success: true, count: leads.length, data: leads });
});

// 3. Post a lead submission
app.post("/api/leads", (req, res) => {
  const {
    fullName,
    email,
    phone,
    relationship,
    languages = [],
    religionTraditions = "",
    careFocus = "",
    preferredSchedule = "Flexible",
    expectations = ""
  } = req.body;

  if (!fullName || !email || !phone) {
    res.status(400).json({ success: false, error: "Full Name, Email, and Phone are required." });
    return;
  }

  // Pre-generate standard mock matched result if Gemini is offline
  const langStr = languages.length > 0 ? languages.join(", ") : "English";
  const defaultMatchResult = {
    matchPercentage: Math.floor(Math.random() * 8) + 91, // 91-98%
    carerName: `Elena S.`,
    carerLang: `${langStr} & English`,
    carerBio: `Elena is a compassionate family care professional in Calgary. She is certified in First Aid & Memory Support, with specific focus on culturally matching household dietary preferences and interactive storytelling.`,
    culturalAlignment: `Highly aligned with family values, matching preferred languages (${langStr}), and supportive of '${religionTraditions || "flexible lifestyle preferences"}' traditions.`
  };

  const newId = `lead_${Date.now()}`;
  const newLead = {
    id: newId,
    fullName,
    email,
    phone,
    relationship,
    languages,
    religionTraditions,
    careFocus,
    preferredSchedule,
    expectations,
    status: "Processing Match",
    createdAt: new Date().toISOString(),
    matchResult: defaultMatchResult
  };

  leads.unshift(newLead);
  res.json({ success: true, data: newLead });
});

// 4. Custom Advanced Matching Engine powered by Gemini
app.post("/api/match/calculate", async (req, res) => {
  const {
    fullName,
    languages = [],
    religionTraditions = "",
    careFocus = "",
    preferredSchedule = "",
    expectations = ""
  } = req.body;

  const languagesStr = languages.join(", ") || "English";

  const systemPrompt = `You are the Expert Matching Engine for BETESEB CARE, a trusted family concierge and cultural care alignment service based in Calgary, Alberta.
Your goal is to parse matching details and dynamically synthesize an ideal caregiver profile matches recommendation that respects language, culture, traditions, and caregiver expectations.

Output a structured JSON response EXACTLY matching this schema:
{
  "matchPercentage": number (integer between 92 and 99),
  "carerName": string (e.g. "Fatima A." or "Yishak T."),
  "carerLang": string (listing languages),
  "carerBio": string (detailed warm background reflecting local Calgary expertise, medical background like IEN/NCLEX, or home care alignment),
  "culturalAlignment": string (deep custom explanation of how language, culture, tradition, schedule, and family expectations match)
}`;

  const userPrompt = `Generate a culturally congruent match for a family concierge client requesting care.
Client Name: ${fullName || "Valued Family"}
Preferred Languages: ${languagesStr}
Cultural Traditions/Values/Dietary Restrictions: ${religionTraditions || "High cultural respect"}
Core Care Focus: ${careFocus || "Home Support & Personal Care"}
Schedule: ${preferredSchedule || "Flexible"}
Family Care Expectations: ${expectations || "Warm companion, patient navigation"}

Create a highly personalized matches response following the requested JSON schema. Refer to Calgary neighborhoods, standard Alberta Blue Cross approved elements, or home support values.`;

  try {
    const ai = getGeminiClient();
    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json"
      }
    });

    const text = result.text;
    if (text) {
      try {
        const parsed = JSON.parse(text);
        res.json({ success: true, match: parsed });
        return;
      } catch (parseErr) {
        console.error("JSON parsing error on Gemini output:", text, parseErr);
      }
    }
    throw new Error("Empty or invalid output from Gemini");
  } catch (err: any) {
    console.warn("Failed to generate custom match with Gemini, falling back to rule-based algorithm:", err.message);
    
    // Rule-based custom generation fallback
    const namesByLanguage: Record<string, string[]> = {
      Amharic: ["Selamawit T.", "Yonas B.", "Mulugeta G."],
      Tigrinya: ["Rahel K.", "Alem G.", "Fitsum K."],
      Arabic: ["Yasmin M.", "Rami H.", "Bassem F."],
      Oromiffa: ["Tolera D.", "Chaltu O.", "Gudina L."],
      Punjabi: ["Harpreet S.", "Manpreet K.", "Gurminder B."],
      Tagalog: ["Maria C.", "Jeffrey D.", "Bernadette R."],
      English: ["Sarah J.", "Daniel M.", "Fiona W."]
    };

    // Pick first matching language or default to English
    const matchedLang = languages.find(l => namesByLanguage[l]) || "English";
    const potentialNames = namesByLanguage[matchedLang] || namesByLanguage["English"];
    const chosenName = potentialNames[Math.floor(Math.random() * potentialNames.length)];

    const fallbackMatch = {
      matchPercentage: Math.floor(Math.random() * 5) + 94, // 94-98%
      carerName: chosenName,
      carerLang: `${languagesStr} & English`,
      carerBio: `${chosenName.split(" ")[0]} has extensive caregiving background in Calgary, trained in memory navigation and specialized in traditional home-cooked meal preparation matching dietary requirements.`,
      culturalAlignment: `Matched with deep understanding of ${languagesStr} and respectful alignment with traditions like '${religionTraditions || "respectful care values"}'. Highly compatible with the expectations of '${expectations || "caring guidance"}' and ${careFocus}.`
    };

    res.json({ success: true, match: fallbackMatch, fallback: true });
  }
});

// 5. Intelligent Care Advisor Concierge powered by Gemini
app.post("/api/guidance/advise", async (req, res) => {
  const { messages = [] } = req.body;

  if (messages.length === 0) {
    res.status(400).json({ error: "Messages array is required" });
    return;
  }

  const systemPrompt = `You are the BETESEB CARE AI Concierge Care Advisor.
BETESEB CARE is a premium family concierge and specialized cultural healthcare navigation company located in Calgary, Alberta.
Website: betesebhealth.ca

Key Information about BETESEB CARE to communicate with families:
1. Core Differentiator: The "Language Match Program" which aligns caregivers with seniors, immigrants, refugees, and families based on Language, Culture, Traditions, Family Values, and Lifestyle Preferences.
2. Languages Handled: English, Amharic, Tigrinya, Arabic, Oromiffa, Punjabi, Tagalog, and more.
3. Core Services:
   - Home Support: Household management, cleaning, organizing.
   - Companionship: Culturally familiar conversations, activities, mental stimulation.
   - Meal Preparation: Culturally precise meals (Halal, traditional Habesha Injera, Tagalog foods, South Asian cuisines) that respect heritage diets.
   - Memory Support: Specialized, gentle dementia and Alzheimer's cognitive care.
   - Transportation: Driven safe attendance to Calgary medical facilities, shopping, family gatherings.
   - Family Respite: Giving primary family caregivers much needed, trust-backed breaks.
4. Healthcare Guidance & Care Coordination: We are "family concierges that understand healthcare". We match families with trained professionals, help navigating Alberta healthcare system, patient advocacy, transition planning (home to hospital or vice versa).
5. Direct Billing & Funding: We are an Alberta Blue Cross Approved Provider. We guide families on applying for funding pathways (e.g., AHS Self-Managed Care, private insurance, specialized community grants).
6. Training Division (Beteseb Institute):
   - Health Literacy Programs for newcomers & seniors
   - IEN Support (Internationally Educated Nurses mentorship and transition to Canadian practice)
   - NCLEX-RN Preparation & Healthcare Mentorship.

Your Tone & Style:
- Professional, respectful, sophisticated, warm, and highly human-centered (not overly clinical or robotic).
- Direct, clear, and informative. Frame suggestions with a deep respect for elders, culture, and familial duty.
- Refer to Calgary communities, hospitals (like Foothills Medical Centre, Rockyview General Hospital, Peter Lougheed Centre), or Calgary surroundings (Airdrie, Cochrane, Okotoks).
- Offer helpful steps to seek funding or book a direct, complimentary family care consultation.

Strict Rule: Match user intent and keep answers highly structured, tidy, and concise. Format with bold terms or clear bullet points. Do not include API pathways.`;

  try {
    const ai = getGeminiClient();
    
    // Format Gemini history parameters
    const contents: any[] = [];
    messages.forEach((msg: any) => {
      contents.push({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      });
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemPrompt
      }
    });

    res.json({ success: true, text: response.text });
  } catch (err: any) {
    console.error("Gemini Advisor assistance failed:", err.message);

    // Warm, informative custom emergency fallback responses based on matches in question
    const userQuery = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = "Thank you for reaching out to BETESEB CARE. I want to assure you that our family concierge team is fully available to support you. We can coordinate care aligned with your specific cultural requirements, language, and dietary traditions. Would you like us to schedule a direct concierge call or assist you in checking Alberta Blue Cross funding pathways?";

    if (userQuery.includes("blue cross") || userQuery.includes("funding") || userQuery.includes("billing") || userQuery.includes("cost")) {
      reply = "**Direct Billing & Alberta Blue Cross Funding Pathways:**\n\n* **Approved Provider**: BETESEB CARE is recognized as an approved provider by Alberta Blue Cross. This allows us to offer **Direct Billing**, reducing your out-of-pocket stress.\n* **Self-Managed Care (SMC)**: If you receive or are applying for Alberta Health Services (AHS) Self-Managed Care funding, we can help structure your caregiver services to be fully reimbursable.\n* **Our Coordination Support**: During our complimentary Family Consultation, our care managers will personally review your coverage and file the billing forms directly on your behalf.\n\nWould you like to register for a complimentary consultation to verify your funding eligibility?";
    } else if (userQuery.includes("language") || userQuery.includes("match") || userQuery.includes("speak") || userQuery.includes("culture")) {
      reply = "**BETESEB CARE Language Match Program:**\n\nWe customize eldercare by pairing seniors with caretakers who share their exact heritage, traditional protocols, and dietary preferences:\n* **Key Languages**: Amharic, Tigrinya, Arabic, Oromiffa, Punjabi, Tagalog, and English.\n* **Beyond Words**: We align caregiver matchups based on family lifestyle values, traditional traditions (such as Sabbath, Ramadan, or Sunday rituals), and beloved regional foods.\n* **The Process**: Fill out our Interactive Match tool on this website, and our Calgary care managers will present concrete caregiver matches within 48 hours.\n\nWould you like to try our caregiver match tool now?";
    } else if (userQuery.includes("nclex") || userQuery.includes("ien") || userQuery.includes("training") || userQuery.includes("nurse") || userQuery.includes("education")) {
      reply = "**BETESEB Training & Education Programs:**\n\nWe operate an integrated training hub to build local healthcare resilience and support Internationally Educated Nurses (IENs):\n* **NCLEX-RN Preparation**: Focused mentoring, exam review strategies, and clinical navigation mapping for foreign-trained nurses.\n* **IEN Mentorship**: Supporting immigrant nurses in fast-tracking their Canadian practicing certificates while keeping them engaged in cultural care coordination.\n* **Health Literacy Workshops**: Public sessions across Calgary on preventative well-being, cardiorespiratory health, and chronic illness management.\n\nWould you like to register for an upcoming mentoring circle or workshop?";
    }

    res.json({ success: true, text: reply, fallback: true });
  }
});

// Serve frontend assets and listen
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully booted and listening on http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
});
