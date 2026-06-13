import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Heart, ShieldCheck, HelpCircle, Star, Sparkles } from "lucide-react";

interface LanguageDetail {
  code: string;
  name: string;
  nativeName: string;
  scriptGreeting: string;
  transliteration: string;
  translation: string;
  culturalInsight: string;
  dietaryPrecepts: string;
  familyValues: string;
  demographicContext: string;
}

const LANGUAGE_DATA: LanguageDetail[] = [
  {
    code: "am",
    name: "Amharic",
    nativeName: "አማርኛ",
    scriptGreeting: "እንኳን ደህና መጡ! ቤተሰብ ማለት ፍቅር ነው።",
    transliteration: "Inkuan dehna metu! 'Beteseb' malet fiqir new.",
    translation: "Welcome! 'Beteseb' means family, which means love.",
    culturalInsight: "Deep emphasis on respect for elder wisdom. Shaking hands with both hands is a traditional sign of honor for seniors.",
    dietaryPrecepts: "A preference for traditional flatbread (Injera) with stews. Frequent observance of fasting seasons (vegan dishes like lentils, chickpeas, and zero animal products on Wednesdays and Fridays).",
    familyValues: "Multigenerational households or active regular contact. Protecting connection to traditional church or community networks.",
    demographicContext: "Calgary's vibrant Ethiopian-Canadian community is supported by cultural association directories and community centers in NE/NW quadrants."
  },
  {
    code: "ti",
    name: "Tigrinya",
    nativeName: "ትግርኛ",
    scriptGreeting: "እንቋዕ ብደሓር መጻእኩም! ቤተሰብና ቤተሰብኩም እዩ።",
    transliteration: "Inqua'e bidahar mitsa'ikum! Betesebna betesebkum iyu.",
    translation: "Welcome! Our family is your family.",
    culturalInsight: "Traditions of oral history, community support circles, and intense respect for grandmother (Abbay) and grandfather (Adday).",
    dietaryPrecepts: "Enjoys traditional spices (Berbere) and familiar stews. Wednesdays and Fridays often involve fasting (purely plant-based diets).",
    familyValues: "Elder isolation is actively combatted. Children hold high responsibility to check on grandparents' daily living needs.",
    demographicContext: "Significant population in Calgary (including high densities in Saddletowne, Temple, and community parishes)."
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    scriptGreeting: "أهلاً وسهلاً بكم في عائلتنا! البيت بيتكم.",
    transliteration: "Ahlan wa sahlan bikum fi 'ailatina! Al-baytu baytukum.",
    translation: "Welcome to our family! Our home is your home.",
    culturalInsight: "Dignified protection of elder status (Al-Waleed/Al-Kabir). Caregivers always display high professional respect in address.",
    dietaryPrecepts: "Strict observance of Halal guidelines. Knowledge of Ramadan fasting and festive Eid cooking (Ma'amoul, traditional rice dishes).",
    familyValues: "Modesty, family confidentiality, and supporting daily prayer (Salah) schedules or Friday prayer attendances.",
    demographicContext: "Calgary is home to over 40,000 Arabic speakings, spanning Lebanese, Syrian, Moroccan, and Iraqi families across the service quadrants."
  },
  {
    code: "or",
    name: "Oromiffa",
    nativeName: "Afaan Oromoo",
    scriptGreeting: "Baga nagaan dhuftan! Beteseb jaalala dha.",
    transliteration: "Baga nagaan dhuftan! 'Beteseb' jaalala dha.",
    translation: "Welcome! Family represents unconditional love.",
    culturalInsight: "Deep respect for ancient Gadaa system community leadership. Buna (traditional coffee) represents peace and social tie integration.",
    dietaryPrecepts: "Traditional flatbreads, stews (Wot), and specialized roasted barley snacks (Qolo). Strict focus on family-style shared meals.",
    familyValues: "Seniors serve as the storytelling repositories of Oromo poetry and national history. Caregivers must foster conversation about heritage.",
    demographicContext: "Rapidly expanding Calgary cultural footprint, actively organizing regional celebrations and youth-senior mentoring events."
  },
  {
    code: "pa",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    scriptGreeting: "ਜੀ ਆਇਆਂ ਨੂੰ! ਸਾਡੇ ਪਰਿਵਾਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ।",
    transliteration: "Ji ayaan nu! Saade parivaar vich tuhaada suaagat hai.",
    translation: "Welcome! We warmly welcome you into our family.",
    culturalInsight: "Joint family tradition structures (Sanjha Chulha). Extremely vibrant, energetic community involvement, and temple (Gurudwara) ties.",
    dietaryPrecepts: "High frequency of lacto-vegetarian diets (no meat, eggs, or fish). Appreciation for traditional flatbreads (Roti, Paratha) and Lassi.",
    familyValues: "Unconditional duty to protect and house aged grandparents (Dada/Dadi, Nana/Nani). Interactive grand-parenting modeling is common.",
    demographicContext: "One of Calgary's largest multilingual demographics, with active presence and temples in Saddletowne, Falconridge, and Castleridge."
  },
  {
    code: "tl",
    name: "Tagalog",
    nativeName: "Filipino",
    scriptGreeting: "Maligayang pagdating sa ating pamilya!",
    transliteration: "Maligayang pagdating sa ating pamilya!",
    translation: "Welcome to our family!",
    culturalInsight: "Deep focus on bayanihan (community support) and pakikisama (relational harmony). Respect elements like saying 'Po' and 'Opo'.",
    dietaryPrecepts: "Culturally familiar Filipino comforts (rice dishes, adobo, broth-based sinigang, pancit noodles). Preference for warm home cooked meals.",
    familyValues: "Respecting the 'Mano Po' tradition (taking elder's hand to one's forehead as a blessing sequence). Church community connection is vital.",
    demographicContext: "Highly integrated throughout Calgary (Saddletowne, Forest Lawn, Rockyview quadrants) with dedicated health circles."
  }
];

export default function LanguageHub() {
  const [selectedLang, setSelectedLang] = useState<LanguageDetail>(LANGUAGE_DATA[0]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Selector Ribbon */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-gray-100 pb-4">
        {LANGUAGE_DATA.map((lang) => {
          const isActive = selectedLang.code === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setSelectedLang(lang)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#10243E] text-[#F7F4EE] shadow-md border-[#10243E]"
                  : "bg-[#F7F4EE]/50 hover:bg-[#F7F4EE] border border-gray-100 text-[#10243E]"
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs tracking-wider uppercase opacity-80">{lang.name}</span>
                <span className="text-base font-serif mt-0.5">{lang.nativeName}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Display Pane */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLang.code}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#F7F4EE]/45 rounded-2xl p-6 md:p-8 border border-[#c9a35e]/30 grid grid-cols-1 lg:grid-cols-12 gap-6 relative"
        >
          {/* Accent watermark */}
          <div className="absolute bottom-5 right-5 text-gray-200/20 font-serif text-8xl pointer-events-none select-none">
            {selectedLang.nativeName}
          </div>

          {/* Left Script Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#C9A35E] uppercase">
              <Sparkles className="w-4 h-4" /> Fluent Alignment Program
            </span>
            <div className="space-y-2">
              <h4 
                className="text-2xl md:text-3xl lg:text-4xl text-[#10243E] leading-tight font-medium"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {selectedLang.scriptGreeting}
              </h4>
              <p className="text-base font-mono text-gray-500 italic mt-1">
                &ldquo;{selectedLang.transliteration}&rdquo;
              </p>
              <p className="text-base font-medium text-gray-700 font-sans mt-0.5">
                Translation: &ldquo;{selectedLang.translation}&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-1 text-sm text-gray-400 font-mono">
              <span>Quadrant Service Area: Calgary Surroundings & Quadrants</span>
              <span>Regional Demographics: {selectedLang.demographicContext}</span>
            </div>
          </div>

          {/* Right Cultural Pillars (3 Bento Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            {/* Value Pillar 1 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="w-9 h-9 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center border border-orange-100">
                  <Heart className="w-4 h-4 fill-orange-500" />
                </div>
                <h5 className="font-semibold text-base text-[#10243E] font-sans tracking-tight">Family-Led Values</h5>
                <p className="text-sm text-gray-650 leading-relaxed font-sans">{selectedLang.familyValues}</p>
              </div>
              <span className="text-[11px] font-mono text-[#C9A35E] font-bold uppercase tracking-wider">Social Alignment</span>
            </div>

            {/* Value Pillar 2 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h5 className="font-semibold text-base text-[#10243E] font-sans tracking-tight">Traditional Nutrition</h5>
                <p className="text-sm text-gray-650 leading-relaxed font-sans">{selectedLang.dietaryPrecepts}</p>
              </div>
              <span className="text-[11px] font-mono text-[#C9A35E] font-bold uppercase tracking-wider">Kitchen Dignity</span>
            </div>

            {/* Value Pillar 3 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#C9A35E]/30 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="w-9 h-9 bg-[#F7F4EE] text-[#C9A35E] rounded-full flex items-center justify-center border border-[#C9A35E]/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h5 className="font-semibold text-base text-[#10243E] font-sans tracking-tight">Cultural Protocols</h5>
                <p className="text-sm text-gray-655 leading-relaxed font-sans">{selectedLang.culturalInsight}</p>
              </div>
              <span className="text-[11px] font-mono text-[#C9A35E] font-bold uppercase tracking-wider">Interaction Protocol</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
