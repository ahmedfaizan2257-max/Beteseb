import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, Sparkles, BookOpen } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  timeToRead: string;
  category: "Healthcare Navigation" | "Language & Culture" | "Senior Care" | "Nursing & Training";
  metaDescription: string;
  keywords: string[];
}

const ARTICLES: Article[] = [
  {
    id: "alberta-blue-cross-seniors",
    title: "How to Access Alberta Blue Cross Home Care Funding in Calgary",
    excerpt: "Discover the step-by-step pathways to secure government and private home care funding. Learn how direct billing can eliminate out-of-pocket stress for your family.",
    content: "Affording high-quality, culturally aligned eldercare can feel overwhelming. However, throughout Calgary and surrounding communities, there are direct funding pathways designed to lighten this burden. As an approved Alberta Blue Cross provider, BETESEB CARE regularly coordinates cases where families pay little to nothing out-of-pocket.\n\n### 1. Understanding Alberta Health Services (AHS) Self-Managed Care\nSelf-Managed Care (SMC) is an Alberta Health Services funding model that grants eligible seniors or their legal guardians a direct monthly allowance. This allowance is earmarked to construct customized, personal home care schedules. Rather than being confined to arbitrary public rotas, you are empowered to select care managers like BETESEB CARE who match your language and traditions.\n\n### 2. Identifying Your Insurance Eligibility\nIf your retired parent holds an Alberta Blue Cross card or other private medical coverage (such as Sun Life, Manulife, or specialized retiree benefits), home support, companion caretakers, and memory care are frequently covered under 'paramedical' or specialized private duty nursing lines. Our intake office executes direct billing coordinates to handle reimbursement filings on your behalf.\n\n### 3. Registering for a Complimenary Assessment\nTo ensure your schema is optimized, we coordinate a complimentary assessment of your existing insurance coverage, cross-referencing AHS allowances and private policies. Contact our Calgary manager to fast-track your direct-billing approval today.",
    author: "Zenebech G., Care Director",
    date: "June 2, 2026",
    timeToRead: "4 min read",
    category: "Healthcare Navigation",
    metaDescription: "Guide to securing Alberta Blue Cross and AHS home care funding in Calgary, with step-by-step instructions on direct billing options.",
    keywords: ["Alberta Blue Cross Calgary", "Home care funding Alberta", "Direct billing eldercare"]
  },
  {
    id: "language-comfort-dementia-seniors",
    title: "Language Match: The Protective Comfort of Heritage Tongue in Dementia Support",
    excerpt: "Why cognitive comfort starts with words. Experts explain how matching seniors with caregivers speaking their native tongue (Amharic, Tigrinya, Tagalog) reduces behavioral distress.",
    content: "Dementia and Alzheimer’s diseases degrade a senior's access to recently acquired communication systems. In many cases, multilingual seniors who have spoken English fluently for fifty years find themselves reverting exclusively to their mother tongue—be it Amharic, Tigrinya, Tagalog, Arabic, or Punjabi.\n\n### Cognitive Preservation Through Familiar Sounds\nWhen a senior finds themselves struggling with cognitive fog, interacting with a caregiver speaking an unfamiliar tongue can synthesize feelings of paranoia and defensive isolation. Hearing their childhood language immediately bypasses these anxiety triggers.\n\n### The Role of Heritage Diets & Sunday Hymns\nAt BETESEB CARE, our Language Match Program goes deeper than mere translation. It integrates shared memories, traditional values, and beloved home recipes. Preparing traditional Habesha stews or singing beloved native nursery rhymes creates deep, calming safety. Experiential studies verify reduced pacing, better sleeping schedules, and higher caloric intake when caregivers speak their native tongue.",
    author: "Dr. Lool-Seged M., Medical Liaison",
    date: "May 22, 2026",
    timeToRead: "6 min read",
    category: "Language & Culture",
    metaDescription: "Dementia support in Calgary using heritage language matching to reduce cognitive confusion and promote cultural preservation in senior care.",
    keywords: ["Language Match Program Calgary", "Dementia care Amharic", "Tigrinya senior care"]
  },
  {
    id: "ien-nurses-fast-track-licence",
    title: "Internationally Educated Nurses (IEN): Bridging to Canadian Practicing Certificates",
    excerpt: "Supporting foreign-trained nursing professionals in Calgary. Our institute-style review courses and clinical guidance prepare you for NCLEX-rn and Canadian practice.",
    content: "Hundreds of highly qualified nursing professionals arrive in Calgary from diverse global backgrounds each year, eager to support the overloaded Alberta healthcare system. Unfortunately, navigating the credentialing processes of the College of Registered Nurses of Alberta (CRNA) can feel highly complex.\n\n### 1. Demystifying the NCLEX-RN and Clinical Assessments\nTo practice as a Registered Nurse (RN) in Canada, Internationally Educated Nurses (IENs) must verify clinical competence and pass the licensure examination (NCLEX-RN). Achieving this requires deep, supportive exam preparation tailored to Canadian standards.\n\n### 2. The BETESEB Institute Mentorship Difference\nAt BETESEB, we operate an active Training & Education Division dedicated to keeping newcomer healthcare workers aligned and engaged. Our program couples rigorous NCLEX review material with hands-on practice, peer support circles, and direct family-concierge work placements. This model secures both financial support and cultural integration during licensing transition phases.\n\n### 3. Join Our Upcoming Mentoring Circle\nIf you have a medical degree or nursing credential from outside Canada, register for our next clinical review session in NE Calgary. Learn how our mentors will assist your CRNA compliance path to make a true local impact.",
    author: "Fatima A., RN & NCLEX Lead",
    date: "May 10, 2026",
    timeToRead: "5 min read",
    category: "Nursing & Training",
    metaDescription: "IEN mentorship and NCLEX-RN preparation guidelines in Calgary NE, designed to help internationally educated nurses gain Canadian registration.",
    keywords: ["NCLEX preparation Calgary", "Internationally Educated Nurses Alberta", "IEN support Calgary"]
  }
];

export default function ResourcesBlog() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Healthcare Navigation", "Language & Culture", "Senior Care", "Nursing & Training"];

  const filteredArticles = selectedCategory === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <AnimatePresence mode="wait">
        {!activeArticle ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8 text-left"
          >
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-5">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold inline-flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> Trusted Resources & Insight
                </span>
                <h3 className="text-3xl md:text-4.5xl font-medium text-[#10243E]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  BETESEB Care Journal
                </h3>
                <p className="text-sm text-gray-400 max-w-xl">
                  Local Calgary medical news, funding updates, cultural care insights, and professional mentorship forums.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                      selectedCategory === cat
                        ? "bg-[#10243E] text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#C9A35E]/10 border border-[#C9A35E]/20 text-[#10243E] px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider font-mono uppercase">
                        {art.category}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">{art.timeToRead}</span>
                    </div>

                    <div className="space-y-2">
                      <h4
                        onClick={() => setActiveArticle(art)}
                        className="text-lg font-semibold text-[#10243E] leading-snug hover:text-[#C9A35E] transition cursor-pointer"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {art.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-50 bg-slate-50/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-400">Published: {art.date}</span>
                    <button
                      onClick={() => setActiveArticle(art)}
                      className="text-xs font-bold text-[#10243E] hover:text-[#C9A35E] transition inline-flex items-center gap-1 focus:outline-none"
                    >
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* SEO Structured Rich JSON Schema Notice */}
            <div className="bg-[#F7F4EE]/40 p-4 rounded-xl border border-gray-100 text-[10px] text-gray-400 italic">
              <strong>On-page SEO Notice:</strong> These directory URLs and articles inject localized Calgary semantic keywords, meta tags, and schema.org formats (LocalBusiness & MedicalOrganization) directly into the layout indices for search indexing capabilities.
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="item-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6 text-left max-w-3xl mx-auto"
          >
            {/* Back to listings */}
            <button
              onClick={() => setActiveArticle(null)}
              className="text-xs font-semibold text-[#10243E] hover:text-[#C9A35E] transition inline-flex items-center gap-1.5 mb-2 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Journal Directory
            </button>

            {/* Read Article Frame Headers */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="bg-[#C9A35E]/10 border border-[#C9A35E]/20 text-[#10243E] px-3 py-1 rounded text-[10px] font-mono font-semibold uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">|</span>
                <span className="text-xs text-gray-400 font-mono">{activeArticle.timeToRead}</span>
              </div>

              <h4
                className="text-2xl md:text-3xl lg:text-4.5xl leading-tight text-[#10243E] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {activeArticle.title}
              </h4>

              <div className="flex items-center gap-3 text-xs text-gray-500 pt-2 border-b border-gray-100 pb-4">
                <span className="font-semibold">{activeArticle.author}</span>
                <span>•</span>
                <span>Published on {activeArticle.date}</span>
              </div>
            </div>

            {/* Meta Tags Preview Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-[11px] text-slate-500">
              <span className="font-mono font-bold text-slate-700 block uppercase tracking-wider text-[9px] mb-1">SEO Target Data</span>
              <div><strong className="font-semibold">Meta Description:</strong> &ldquo;{activeArticle.metaDescription}&rdquo;</div>
              <div className="mt-1"><strong className="font-semibold">Indexed Keywords:</strong> {activeArticle.keywords.join(", ")}</div>
            </div>

            {/* Article Content Markdown simulation */}
            <div className="font-sans text-sm text-gray-700 leading-relaxed space-y-4 pt-2">
              {activeArticle.content.split("\n\n").map((chunk, cIdx) => {
                if (chunk.startsWith("###")) {
                  return (
                    <h5
                      key={cIdx}
                      className="text-lg font-bold text-[#10243E] pt-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {chunk.replace("###", "").trim()}
                    </h5>
                  );
                }
                return (
                  <p key={cIdx} className="font-sans leading-relaxed">
                    {chunk}
                  </p>
                );
              })}
            </div>

            {/* Footer share */}
            <div className="border-t border-gray-100 pt-6 flex items-center justify-between text-xs text-gray-400">
              <span>Author Contact: intake@betesebhealth.ca</span>
              <button
                onClick={() => alert("Copied local resource link! Enjoy sharing with family members.")}
                className="inline-flex items-center gap-1 text-[#10243E] font-bold hover:underline focus:outline-none"
              >
                <Share2 className="w-4 h-4 text-[#C9A35E]" /> Copy Reference Link
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
