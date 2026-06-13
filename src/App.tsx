import React, { useState } from "react";
import { PageId } from "./types";
import Navigation from "./components/Navigation";
import LanguageMatchTool from "./components/LanguageMatchTool";
import LanguageHub from "./components/LanguageHub";
import CareMatchCompass from "./components/CareMatchCompass";
import AdvisorChat from "./components/AdvisorChat";
import FormConsultation from "./components/FormConsultation";
import CalgaryMap from "./components/CalgaryMap";
import ResourcesBlog from "./components/ResourcesBlog";
import AdminPanel from "./components/AdminPanel";
import Logo from "./components/Logo";

// Icons
import {
  Heart,
  ShieldCheck,
  Award,
  Sparkles,
  Phone,
  ArrowRight,
  Utensils,
  Brain,
  Clock,
  Car,
  Users,
  Compass,
  CheckCircle,
  PlusCircle,
  Smile,
  Check,
  ChevronRight,
  BookOpen,
  MapPin,
  HelpCircle,
  GraduationCap,
  MessageSquare,
  Mail
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [registeredIEN, setRegisteredIEN] = useState(false);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#2F3438] flex flex-col justify-between relative pb-16 lg:pb-0">
      {/* Dynamic Header Navbar config */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Pages Router Section */}
      <main className="flex-grow font-body">
        {/* ==================== 1. HOME VIEW ==================== */}
        {currentPage === "home" && (
          <div className="space-y-16 md:space-y-24 pb-12">
            
            {/* Sec 1: Classic Premium Hero Section with Full Background Image */}
            <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#10243E]">
              {/* Absolute Full Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/src/assets/images/eldercare_hero_bg_1781129720479.png"
                  alt="Eldercare Calgary Background"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Advanced Gradient Tint Overlay for Perfect Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#10243E]/95 via-[#10243E]/85 to-indigo-950/20" />
                <div className="absolute inset-0 bg-[#10243E]/20 mix-blend-multiply" />
              </div>

              {/* Foreground content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left w-full h-full">
                <div className="lg:col-span-8 space-y-6 md:space-y-8">
                  {/* Local Identity Above the Fold */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C9A35E]/20 border border-[#C9A35E]/40 text-[#F7F4EE] rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    <MapPin className="w-4 h-4 text-[#C9A35E]" /> <span>Proudly serving Calgary and surrounding communities</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6.5xl text-white font-bold leading-tight select-none font-serif">
                    Care That Speaks Your Language.
                  </h1>

                  <p className="text-lg sm:text-xl text-slate-100 font-serif italic leading-relaxed max-w-2xl border-l-2 border-[#C9A35E] pl-4">
                    Personalized support that respects your language, culture, traditions, and family values.
                  </p>

                  {/* Primary & Secondary CTAs */}
                  <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleNavigate("languagematch")}
                      className="px-6 py-4 bg-[#C9A35E] hover:bg-[#b89150] text-[#10243E] rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition duration-150 inline-flex items-center justify-center gap-2 shadow-lg mini-btn-48"
                      style={{ minHeight: "48px" }}
                    >
                      Request Your Language Match <ArrowRight className="w-4 h-4 text-[#10243E]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("consultation-form-block");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/30 text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition duration-150 text-center backdrop-blur-sm mini-btn-48"
                      style={{ minHeight: "48px" }}
                    >
                      Book Free Consultation
                    </button>
                    <a
                      href="tel:403-389-6874"
                      className="px-6 py-4 bg-[#10243E] hover:bg-[#1a385c] border border-slate-700 text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition duration-150 inline-flex items-center justify-center gap-2 shadow-sm mini-btn-48"
                      style={{ minHeight: "48px" }}
                    >
                      <Phone className="w-4 h-4 text-[#C9A35E]" /> Call 403-389-6874
                    </a>
                  </div>

                  {/* Funding and Eligibility Disclaimer with Great Readability */}
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 max-w-2xl backdrop-blur-md">
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-[#C9A35E] shrink-0 mt-0.5" />
                      <span>
                        <strong>Care Funding Access:</strong> Eligible clients may access services through approved funding programs. Many families can access personalized, language-concordant support with little or no out-of-pocket cost.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Overlaid trust highlight card */}
                <div className="lg:col-span-4 relative flex justify-center">
                  <div className="w-full max-w-sm rounded-3xl bg-slate-950/75 p-8 text-white relative shadow-2xl border border-[#C9A35E]/30 backdrop-blur-md text-left">
                    <div className="space-y-6">
                      <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/20 text-[#C9A35E] flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A35E] font-bold">Alberta Approved</span>
                        <h3 className="text-lg font-serif text-[#F7F4EE] leading-tight">Alberta Blue Cross Approved Provider</h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-body">
                          Direct electronic billing options enable us to claim coverages seamlessly, lifting complex paperwork stress out of your family.
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4 font-sans">
                        <div>
                          <span className="text-2xl font-bold font-serif text-[#C9A35E]">100%</span>
                          <p className="text-[8px] uppercase tracking-wider text-slate-400 mt-1">Language Match</p>
                        </div>
                        <div>
                          <span className="text-2xl font-bold font-serif text-[#C9A35E]">Calgary</span>
                          <p className="text-[8px] uppercase tracking-wider text-slate-400 mt-1">Local Network</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 2: Who We Serve Panel (Moved Up – First After Hero) */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-150">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-bold">Answered question: "Is this for people like me?"</span>
                  <h2 className="text-4xl md:text-5xl text-[#10243E] font-medium leading-tight font-serif">Who We Serve</h2>
                  <p className="text-base sm:text-lg text-gray-650 max-w-xl mx-auto font-body">
                    We bridge critical care and navigation gaps, offering premium, non-medical home support and health guidance for those seeking comfort and understanding.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {/* Card 1: Seniors & Elders */}
                  <div className="rounded-3xl bg-white border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                    <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                      <img 
                        src="/src/assets/images/caregiver_services_1781130222000.png" 
                        alt="Seniors aging at home" 
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#10243E] text-[#C9A35E] p-2.5 rounded-xl shadow-md">
                        <Heart className="w-5 h-5 fill-[#C9A35E]" />
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#10243E]">Seniors Aging at Home</h3>
                        <p className="text-sm text-gray-650 leading-relaxed font-body">
                          Protecting independence, dignity, and memory safety at home. We align supportive, premium care with your native dialect, traditional culinary recipes, and comfortable daily lifestyle pacing.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500 font-mono">
                        <span>Heritage Dialects</span>
                        <span className="text-[#C9A35E] font-bold">✓ Aligned</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Family Caregivers */}
                  <div className="rounded-3xl bg-white border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                    <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                      <img 
                        src="/src/assets/images/caregiver_nutrition_1781130244956.png" 
                        alt="Family caregivers support" 
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#10243E] text-[#C9A35E] p-2.5 rounded-xl shadow-md">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#10243E]">Family Caregivers & Respite</h3>
                        <p className="text-sm text-gray-650 leading-relaxed font-body">
                          Providing trust-backed, professional relief intervals. We handle care coordination, appointment schedules, and detailed compliance logs, giving families true comfort and peace of mind.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500 font-mono">
                        <span>Respite Coordination</span>
                        <span className="text-[#C9A35E] font-bold">✓ Comprehensive</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Newcomers & Refugees */}
                  <div className="rounded-3xl bg-white border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                    <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                      <img 
                        src="/src/assets/images/nurse_guidance_1781130262020.png" 
                        alt="Clinical guidance for newcomers and refugees" 
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#10243E] text-[#C9A35E] p-2.5 rounded-xl shadow-md">
                        <Compass className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#10243E]">Newcomers & Refugees</h3>
                        <p className="text-sm text-gray-650 leading-relaxed font-body">
                          Easing community settling with premium support and clinical guidance. We bridge critical language gaps and help families traverse dense local AHS rules with gentle, patient advocates.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500 font-mono">
                        <span>AHS Compliance Help</span>
                        <span className="text-[#C9A35E] font-bold">✓ Integrated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 3: Why Choose Beteseb (Trust Layer) */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 py-12">
              <div className="text-center space-y-3">
                <span className="text-sm uppercase tracking-wider font-mono text-[#D4AF37] font-bold">Why Families Choose Our Team</span>
                <h2 className="text-4xl md:text-5xl text-[#10243E] font-medium font-serif">Why Families Choose Beteseb</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-2.5xl sm:text-3xl text-[#10243E] leading-tight font-serif font-normal">
                    More than caregivers — we are integrated family partners, bridging expert system assistance with cultural pride.
                  </h3>
                  <p className="text-base text-gray-650 leading-relaxed font-body">
                    Local programs frequently assign random staff with zero language or dietary alignment. We address this directly, ensuring your loved one has an advocate who respects their heritage.
                  </p>
                  
                  {/* Trust Badges - 7 Points Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      { title: "Personalized Matching", desc: "Caregivers matched by personality, language, and culture." },
                      { title: "Cultural Understanding", desc: "Deep respect for family hierarchy and religious needs." },
                      { title: "Language-Concordant Support", desc: "Native speakers for stress-free communication." },
                      { title: "RN-Informed Guidance", desc: "Clinical review of matching metrics and progress logs." },
                      { title: "Family-Centered Planning", desc: "Durable care designs built with parent/guardian inputs." },
                      { title: "Local Calgary Team", desc: "On-the-ground advocates serving Calgary zones." },
                      { title: "CDHCI Approved Provider", desc: "Fully approved to offer services under public billing programs." }
                    ].map((badge, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <div className="w-5 h-5 rounded-full bg-[#758677]/10 flex items-center justify-center text-[#758677] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#10243E]">{badge.title}</h4>
                          <p className="text-xs text-gray-600 font-sans mt-0.5">{badge.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aesthetic Visual Side Column */}
                <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-150">
                  <img 
                    src="/src/assets/images/training_hub_1781130277523.png" 
                    alt="The Beteseb Standard Group Training" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#10243E]/90 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/60 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A35E] font-bold">The Beteseb Standard</span>
                    <div className="space-y-6">
                      <blockquote className="text-lg sm:text-xl font-serif text-[#F7F4EE] leading-relaxed italic">
                        "They don't just help my mother eat and move; they talk with her about the foods she loved as a girl, respecting our Shabbat traditions, in her native language."
                      </blockquote>
                      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                        <div className="w-10 h-10 rounded-full bg-[#C9A35E] text-[#10243E] flex items-center justify-center font-bold text-xs uppercase shadow shrink-0">
                          SR
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Sarah R., Calgary Guardian</p>
                          <p className="text-[10px] text-[#C9A35E] uppercase tracking-wider font-sans">Amharic Language Match</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 4: Care in the Language You Trust */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-150 animate-fadeIn">
              <div className="max-w-7xl mx-auto space-y-10 text-center">
                <div className="space-y-3 max-w-2xl mx-auto">
                  <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-bold">Language Match Program</span>
                  <h2 className="text-4xl md:text-5xl text-[#10243E] font-medium leading-tight font-serif">Care in the Language You Trust.</h2>
                  <p className="text-base sm:text-lg text-[#2F3438] font-serif italic max-w-xl mx-auto">
                    Your language. Your culture. Your traditions. Your home.
                  </p>
                </div>

                {/* Embedded Language Hub component */}
                <LanguageHub />

                <div className="text-center pt-4">
                  <p className="text-xs sm:text-sm text-gray-500 font-sans">
                    <strong>Don’t see your language?</strong> We work on-demand to find and recruit caregivers matching your exact background criteria. <span className="text-[#C9A35E] font-bold underline cursor-pointer" onClick={() => handleNavigate("contact")}>Contact our intake team</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* Sec 5: Services Grid */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-left py-12">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-bold">Comprehensive Support</span>
                <h2 className="text-4xl md:text-5xl text-[#10243E] font-medium font-serif">How We Support Families</h2>
                <p className="text-base sm:text-lg text-gray-650 font-body">
                  No cookie-cutter rotas. We coordinate a personalized care matrix structured around our innovative Two-Pillar support model.
                </p>
              </div>

              {/* Two-Pillar Model side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pillar 1 */}
                <div className="bg-[#F7F4EE] rounded-3xl p-8 border border-[#C9A35E]/20 space-y-6 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A35E]" />
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">PILLAR ONE</span>
                    <h3 className="text-2xl font-serif text-[#10243E]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Home Support Services</h3>
                    <p className="text-xs text-gray-650 leading-relaxed font-sans">
                      Structured daily living assistance designed to preserve comfort, nutrition, and mental companionship in a secure home.
                    </p>
                  </div>
                  <ul className="space-y-3 font-sans text-xs text-gray-700">
                    {[
                      { item: "Companionship", d: "Intellectual engagement, dialogic companionship, and isolation reduction." },
                      { item: "Transportation & Medical Escort", d: "Escorted rides to Calgary specialist systems, clinics, and visits." },
                      { item: "Meal Preparation & Cultural Diets", d: "Heritage stews, halal food prepping, and specialized nutritionist reviews." },
                      { item: "Family Respite Support", d: "Structured physical break windows for family and child caregivers." },
                      { item: "Personal Assistance", d: "Daily living cues, modest bathing, grooming, and clothing coordination." }
                    ].map((p, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <Check className="text-[#C9A35E] w-4 h-4 shrink-0 mt-0.5" />
                        <span><strong>{p.item}</strong>: {p.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="bg-[#10243E] text-[#F7F4EE] rounded-3xl p-8 border border-slate-800 space-y-6 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#758677]" />
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#758677] font-bold">PILLAR TWO</span>
                    <h3 className="text-2xl font-serif text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Healthcare Guidance & Care Coordination</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Advanced health navigation led by our patient advocates, bridging the gap between clinical systems and your home.
                    </p>
                  </div>
                  <ul className="space-y-3 font-sans text-xs text-[#F7F4EE]/90">
                    {[
                      { item: "Care Coordination", d: "Consolidating medical routines, home log sheets, and diagnostic reviews." },
                      { item: "Healthcare System Support", d: "Navigating Alberta Health Services compliance rules and discharge steps." },
                      { item: "Patient Advocacy", d: "Representing client wishes clearly during medical rounds and diagnostic reviews." },
                      { item: "Transition Planning & Discharge", d: "Ensuring flawless transfers back home from inpatient hospital clinics." },
                      { item: "Community Resource Connection", d: "Active referral loops linking families directly with local resources and programs." }
                    ].map((p, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <Check className="text-[#758677] w-4 h-4 shrink-0 mt-0.5" />
                        <span><strong className="text-white">{p.item}</strong>: {p.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Cards Head */}
              <div className="text-center pt-8">
                <p className="text-xs uppercase tracking-widest font-mono text-[#758677] font-bold">Our On-Demand Support Categories</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Serv 1 */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm space-y-5 hover:border-[#C9A35E] transition duration-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A35E]/10 justify-center items-center flex text-[#C9A35E]">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10243E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Home Support Services</h3>
                    <p className="text-sm sm:text-base text-gray-605 leading-relaxed font-body font-normal">
                      Light housekeepings, organization coordinates, clothing laundry support, and clean habitat safety grids. Ensuring a secure, comfortable domicile free of clutter.
                    </p>
                  </div>
                  <button onClick={() => handleNavigate("services")} className="text-left text-sm text-[#10243E] font-bold hover:text-[#C9A35E] inline-flex items-center gap-1 pt-4 border-t border-gray-55">
                    See Home Support details <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </div>

                {/* Serv 2 */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm space-y-5 hover:border-[#C9A35E] transition duration-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A35E]/10 justify-center items-center flex text-[#C9A35E]">
                      <Heart className="w-5 h-5 fill-[#C9A35E]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10243E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Companionship Alignment</h3>
                    <p className="text-sm sm:text-base text-gray-605 leading-relaxed font-body font-normal">
                      Intellectual engagement, storytelling sharing, reading assistance, garden leisure strolls, board games, and matching linguistic family backgrounds.
                    </p>
                  </div>
                  <button onClick={() => handleNavigate("services")} className="text-left text-sm text-[#10243E] font-bold hover:text-[#C9A35E] inline-flex items-center gap-1 pt-4 border-t border-gray-55">
                    See Companionship details <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </div>

                {/* Serv 3 */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm space-y-5 hover:border-[#C9A35E] transition duration-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A35E]/10 justify-center items-center flex text-[#C9A35E]">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10243E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Meal Prep & Heritage Diet</h3>
                    <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body font-normal">
                      Precision diet plans customized around your heritage. We prepare meals matching halal, Sabbath dietary restrictions, diabetic guidelines, or beloved traditional stews.
                    </p>
                  </div>
                  <button onClick={() => handleNavigate("services")} className="text-left text-sm text-[#10243E] font-bold hover:text-[#C9A35E] inline-flex items-center gap-1 pt-4 border-t border-gray-55">
                    See Meal Prep details <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </div>

                {/* Serv 4 */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm space-y-5 hover:border-[#C9A35E] transition duration-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A35E]/10 justify-center items-center flex text-[#C9A35E]">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10243E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Memory Support Navigation</h3>
                    <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body font-normal">
                      Alzheimer's and progressive dementia cognitive stabilization. Caregivers are fully trained in validation cues, minimizing confusion through native speech patterns.
                    </p>
                  </div>
                  <button onClick={() => handleNavigate("services")} className="text-left text-sm text-[#10243E] font-bold hover:text-[#C9A35E] inline-flex items-center gap-1 pt-4 border-t border-gray-55">
                    See Memory Support details <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </div>

                {/* Serv 5 */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm space-y-5 hover:border-[#C9A35E] transition duration-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A35E]/10 justify-center items-center flex text-[#C9A35E]">
                      <Car className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10243E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Healthcare Escort & Transit</h3>
                    <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body font-normal">
                      Safe transportation parameters for medical visits, shopping requirements, and community center festivals. Helping with navigation logs and pharmacy pick ups.
                    </p>
                  </div>
                  <button onClick={() => handleNavigate("services")} className="text-left text-sm text-[#10243E] font-bold hover:text-[#C9A35E] inline-flex items-center gap-1 pt-4 border-t border-gray-55">
                    See Transit details <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </div>

                {/* Serv 6 */}
                <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm space-y-5 hover:border-[#C9A35E] transition duration-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A35E]/10 justify-center items-center flex text-[#C9A35E]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10243E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Family Caregivers Respite</h3>
                    <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body font-normal">
                      Giving parent guardians much-deserved physical breaks. Knowing your father has an expert companion allows you to rest with zero cognitive friction.
                    </p>
                  </div>
                  <button onClick={() => handleNavigate("services")} className="text-left text-sm text-[#10243E] font-bold hover:text-[#C9A35E] inline-flex items-center gap-1 pt-4 border-t border-gray-55">
                    See Respite details <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                </div>
              </div>
            </section>

            {/* Sec 6: Interactive Integration (Care Match Compass & Find Your Match tool) */}
            <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="max-w-7xl mx-auto">
                <CareMatchCompass />
              </div>

              <div id="match-generator-tool" className="max-w-7xl mx-auto space-y-10">
                <div className="text-center text-white space-y-2 max-w-xl mx-auto">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Find Your Caregiver Match</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#F7F4EE]">Request Your Cultural Eligibility Matching</h2>
                  <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans">
                    Complete this brief request layout to calculate availability instantly against our active verified caregiver base in Calgary. No obligations.
                  </p>
                </div>
                
                {/* Real-time calculated Matching Tool */}
                <LanguageMatchTool onSuccessSubmit={() => console.log("Form Lead tracked successfully")} />
              </div>
            </section>

            {/* Sec 7: Direct Billing & Funding Coordination */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-gray-100">
              <div className="space-y-6">
                <span className="text-sm font-bold uppercase tracking-wider text-[#C9A35E] font-mono flex items-center gap-1.5">
                  <Award className="w-5 h-5 text-[#C9A35E]" /> Direct Billing & Funding Approval
                </span>
                <h2 className="text-4xl text-[#10243E] font-medium leading-tight font-serif">
                  Quality Care. Simplified Access.
                </h2>
                <p className="text-lg text-gray-700 font-serif leading-normal italic">
                  As an authorized Alberta Blue Cross CDHCI Provider, we offer direct billing options for eligible clients.
                </p>
                <div className="bg-[#758677]/10 rounded-xl p-5 border border-[#758677]/30 space-y-3">
                  <p className="text-sm text-[#10243E] leading-relaxed">
                    <strong>✓ Funding Eligibility:</strong> Eligible clients may access services through approved funding programs and direct billing options. Many eligible families can access services with little or no out-of-pocket cost.
                  </p>
                </div>
                
                <div className="space-y-3.5 text-xs text-gray-700 font-sans">
                  <div className="flex items-start gap-2.5">
                    <Check className="text-[#758677] w-4.5 h-4.5 shrink-0 mt-0.5" />
                    <span><strong>Self-Managed Care (SMC)</strong>: Fully compatible. We structure care logs matching Alberta Health Services reimbursement parameters.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="text-[#758677] w-4.5 h-4.5 shrink-0 mt-0.5" />
                    <span><strong>No Up-Front Claims Burden</strong>: Our Calgary administration office registers and files your paramedical claims electronically.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigate("funding")}
                    className="px-6 py-3.5 bg-[#10243E] text-[#F7F4EE] hover:bg-[#203c5c] font-bold text-xs uppercase tracking-widest rounded-xl transition shadow"
                  >
                    Review Funding Pathways
                  </button>
                </div>
              </div>

              {/* Trust Shield & Visual Pathway */}
              <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-lg space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A35E]" />
                
                {/* Visual Trust Shield */}
                <div className="flex items-center gap-4 bg-[#F7F4EE] rounded-2xl p-5 border border-[#C9A35E]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#10243E] flex items-center justify-center text-[#C9A35E] font-bold shadow-sm shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10243E] uppercase tracking-wide">Alberta Blue Cross Approved Provider</h4>
                    <p className="text-xs text-gray-650 mt-0.5">Verified Direct Electronic Billing Registry ID (CDHCI)</p>
                  </div>
                </div>

                {/* Visual Pathway Arrow Flow */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#10243E] font-sans">
                    Your Pathway to Matched Care Support
                  </h4>
                  
                  <div className="flex flex-col gap-3">
                    {[
                      { step: "1", title: "Free Consultation", desc: "Intake call or home visit to outline required language matches and schedules." },
                      { step: "2", title: "Eligibility Verification", desc: "AHS compliance review and direct electronic billing eligibility setup." },
                      { step: "3", title: "Language & Cultural Match", desc: "Assigning suitable caregiver pairing with shared recipes and dialetical familiarity." },
                      { step: "4", title: "Direct-Billed Support Begins", desc: "Care launches with automatic billing, leaving your family entirely free of administrative stress." }
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-3 items-center">
                        <div className="w-6 h-6 rounded-full bg-[#10243E] text-[#C9A35E] font-bold flex items-center justify-center text-xs shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-xs font-bold text-[#10243E] block">{step.title}</span>
                          <span className="text-[10px] text-gray-500 block leading-tight">{step.desc}</span>
                        </div>
                        {idx < 3 && <span className="hidden md:inline text-gray-300 font-bold">➔</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 8: Calgary Area Interactive Map */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-150">
              <div className="max-w-7xl mx-auto space-y-10 text-center">
                <div className="space-y-2 max-w-xl mx-auto">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Local Community Presence</span>
                  <h2 className="text-3xl md:text-4xl text-[#10243E] font-semibold">Active Care Quadrants in Calgary</h2>
                  <p className="text-sm text-gray-500">
                    Click on different geographic sectors on our custom Calgary locator deck to view localized communities and active care counts.
                  </p>
                </div>
                {/* Custom Calgary Map component */}
                <CalgaryMap />
              </div>
            </section>

            {/* Sec 8.5: Strengthening Families and Communities */}
            <section className="bg-[#758677]/5 py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-150">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-sm uppercase tracking-wider font-mono text-[#758677] font-bold">Beyond Care | Caring Beyond the Home</span>
                  <h2 className="text-4xl md:text-5xl text-[#10243E] font-medium leading-tight font-serif">Strengthening Families and Communities</h2>
                  <p className="text-base text-gray-650 font-body">
                    Our purpose extends beyond standard support. We strive to uplift whole households, protecting cultural roots while promoting health integrity and community connections throughout Calgary.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
                  {/* Goal 1 */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#758677]/10 text-[#758677] flex items-center justify-center">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#10243E]">Supporting Newcomers</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Welcoming recent immigrants and refugees to Calgary with instant familiarity, familiar comfort foods, and trusted advisors.
                      </p>
                    </div>
                  </div>

                  {/* Goal 2 */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#758677]/10 text-[#758677] flex items-center justify-center">
                        <Smile className="w-5 h-5 text-[#758677]" />
                      </div>
                      <h4 className="text-base font-bold text-[#10243E]">Reducing Isolation</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Eradicating loneliness and social withdrawal through regular visits by companion partners who speak their native dialect.
                      </p>
                    </div>
                  </div>

                  {/* Goal 3 */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#758677]/10 text-[#758677] flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#10243E]">Promoting Health Literacy</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Educating families on complex healthcare systems, compliance parameters, and billing opportunities in the language they trust.
                      </p>
                    </div>
                  </div>

                  {/* Goal 4 */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#758677]/10 text-[#758677] flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#10243E]">Connecting Resources</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Helping parent guardians navigate local community centers, and non-profit integration plans in Alberta districts.
                      </p>
                    </div>
                  </div>

                  {/* Goal 5 */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#758677]/10 text-[#758677] flex items-center justify-center">
                        <Heart className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#10243E]">Empowering Independence</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Enabling elderly community members to remain independent, safe, and deeply respected in the place they call home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 9: Testimonials */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-2">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Unconditional Praise</span>
                <h2 className="text-3xl md:text-4xl text-[#10243E] font-semibold">What Calgary Families Are Saying</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4 relative">
                  <div className="text-yellow-500 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-650 leading-relaxed font-sans italic">
                    &ldquo;My Amharic-speaking father has progressive memory decline. When the agency we worked with previously kept sending caregivers who only spoke English, he would become isolated. Since we found BETESEB CARE, Selamawit visits him thrice a week. They cook traditional dishes, pray together, and converse for hours in our native tongue. His behavioral anxieties dropped entirely.&rdquo;
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm text-[#10243E]">Makeda T. (Daughter)</h4>
                    <p className="text-[10px] text-gray-400 font-mono">Calgary NE, Alberta Blue Cross Insured</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4 relative">
                  <div className="text-yellow-500 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-650 leading-relaxed font-sans italic">
                    &ldquo;As a primary family group coordinate, navigating my grandfather's transportation to cardiac tests was difficult with my corporate schedules. BETESEB coordinate care transit, advocating during check-ins and feeding diagnostic logs directly to us. They even accommodate halal dinners. They are an absolute blessing.&rdquo;
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm text-[#10243E]">Youssef E. (Grandson)</h4>
                    <p className="text-[10px] text-gray-400 font-mono">Calgary NW, Care Coordination Client</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sec 10: Lead Capture Final Action */}
            <section id="consultation-form-block" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <FormConsultation />
            </section>

          </div>
        )}

        {/* ==================== 2. ABOUT US VIEW ==================== */}
        {currentPage === "about" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            {/* Header Banner */}
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Our Legacy & Mission</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Company Story & Core Foundations
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                BETESEB CARE is a family-first initiative founded in Calgary to preserve family unity, language heritage, and health dignity.
              </p>
            </div>

            {/* About Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-72 w-full relative shadow-md">
              <img 
                src="/src/assets/images/training_hub_1781130277523.png" 
                alt="Intensive nursing mentorship and caregiving hub" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-sm text-[#C9A35E] font-bold uppercase tracking-wide">Alberta Mentorship</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">Building Culturally Capable Care Teams</h3>
              </div>
            </div>

            {/* Mission / Vision Two-Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#10243E] text-[#F7F4EE] rounded-2xl p-8 border border-[#C9A35E]/30 space-y-4">
                <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Our Mission</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">To help individuals and families remain safe, independent, connected, and respected in the place they call home.</h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-body">
                  We champion the preservation of dignity by delivering high-end, language-matched support that respects family integrity and heritage values across Calgary communities.
                </p>
              </div>

              <div className="bg-[#758677] text-white rounded-2xl p-8 space-y-4">
                <span className="text-sm uppercase tracking-wider font-[#10243E] font-bold font-mono text-slate-200">Our Vision</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">A world where every family can access care that respects their language, culture, traditions, and dignity.</h3>
                <p className="text-sm sm:text-base text-emerald-50 leading-relaxed font-body">
                  We envision clinical care that transcends language gaps, reducing loneliness and connecting families with specialized navigation tools that protect their core traditions.
                </p>
              </div>
            </div>

            {/* Our Story editorial */}
            <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-150 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-3xl text-[#10243E] font-serif font-medium leading-tight">
                  Born from Personal Experience: How Beteseb Care Began
                </h3>
                <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body font-normal">
                  Our journey began when our founder’s grandmother, residing in Calgary, required intensive personal support. Although public health nurses were highly skilled, the language barrier was thick. Unable to describe basic pain coordinates or ask for her favorite foods, she slipped into anxious cognitive decline.
                  <br /><br />
                  Recognizing that family care is intrinsically rooted in communication and shared background history, we created the <strong>Language Match Program</strong>. By marrying expert nursing mentorship with cultural matching algorithms, we built an agency where seniors never experience linguistic isolation.
                </p>
                <div className="flex gap-6 pt-2">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold font-serif text-[#10243E]">100%</span>
                    <p className="text-xs text-gray-500 tracking-wider font-mono">Calgary Community Owned</p>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold font-serif text-[#10243E]">15+</span>
                    <p className="text-xs text-gray-500 tracking-wider font-mono">Languages & Dialects Spoken</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-[#F7F4EE] rounded-2xl p-6 border border-[#C9A35E]/20 space-y-5">
                <div className="overflow-hidden rounded-xl h-44 w-full relative mb-1 shadow-sm">
                  <img 
                    src="/src/assets/images/nurse_guidance_1781130262020.png" 
                    alt="Culturally responsive care support" 
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-semibold text-base text-[#10243E] font-sans">Our Care Values System</h4>
                <ul className="space-y-3.5 text-sm text-gray-700 font-sans leading-relaxed">
                  <li className="flex gap-2">
                    <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Family Honor</strong>: Treating seniors with maternal and paternal filial duty.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Cultural Preservation</strong>: Active support of linguistic dialogue, Sunday songs, and heritage recipe skills.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Local Loyalty</strong>: Dedicated specifically to coordinating health security structures in Calgary quadrants.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* ==================== 3. SERVICES VIEW ==================== */}
        {currentPage === "services" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Uncompromising Family Support</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Our Professional Care Services
              </h2>
              <p className="text-base sm:text-lg text-gray-650">
                No cookie-cutter rotas. We create customized, personal caregiver schedules mapped to your traditions and budget rules.
              </p>
            </div>

            {/* Services Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-64 w-full relative shadow-md">
              <img 
                src="/src/assets/images/services_elder_care_1781376929355.jpg" 
                alt="Direct Caregiver Services support" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Personalized Itinerary</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">Holistic Concierge Support For Seniors</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/10 flex items-center justify-center text-[#C9A35E]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10243E] font-sans">Home Support</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body font-normal">
                    We keep your home safe, hygienic, and free of clutter. Our tasks include light housekeepings, organizing cabinets, daily laundry support, and clean kitchen habitat setups.
                  </p>
                </div>
                <ul className="text-xs sm:text-sm text-[#C9A35E] font-sans font-medium space-y-1 bg-slate-50 p-3 rounded-lg">
                  <li>• Light Housekeeping</li>
                  <li>• Organization Guidance</li>
                  <li>• Clean Environments</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/10 flex items-center justify-center text-[#C9A35E]">
                    <Heart className="w-5 h-5 fill-[#C9A35E]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10243E] font-sans">Companionship</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body font-normal">
                    We match seniors with caregivers who speak their native tongue (Amharic, Tigrinya, Arabic, Tagalog, Punjabi) to enjoy poetry, garden walks, board games, and shared laughter.
                  </p>
                </div>
                <ul className="text-xs sm:text-sm text-[#C9A35E] font-sans font-medium space-y-1 bg-slate-50 p-3 rounded-lg">
                  <li>• Fluent Heritage Dialogue</li>
                  <li>• Interactive Storytelling</li>
                  <li>• Active Community Walks</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/10 flex items-center justify-center text-[#C9A35E]">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10243E] font-sans">Meal Preparation</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body font-normal">
                    Cooking traditional home recipes that respect specific nutritional constraints, halal protocols, diabetic structures, or vegan Wednesdays and Fridays.
                  </p>
                </div>
                <ul className="text-xs sm:text-sm text-[#C9A35E] font-sans font-medium space-y-1 bg-slate-50 p-3 rounded-lg">
                  <li>• Halal Compliance Options</li>
                  <li>• Fasting Day Vegan Cooking</li>
                  <li>• Nutritional Health Reviews</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/10 flex items-center justify-center text-[#C9A35E]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10243E] font-sans">Memory Support</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body font-normal">
                    Specialized cognitive care mapping. Our team structures comforting sensory parameters and validation triggers in their native language to prevent progressive distress.
                  </p>
                </div>
                <ul className="text-xs sm:text-sm text-[#C9A35E] font-sans font-medium space-y-1 bg-slate-50 p-3 rounded-lg">
                  <li>• Validation Therapy Triggers</li>
                  <li>• Mother Tongue Conversation</li>
                  <li>• Cognitive Calming Exercises</li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/10 flex items-center justify-center text-[#C9A35E]">
                    <Car className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10243E] font-sans">Transportation</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body font-normal">
                    Safe transit concierge. Escorting seniors to dental clinics, Foothills Hospital, local grocery shopping, family weddings, and religious community festivals with deep physical assistances.
                  </p>
                </div>
                <ul className="text-xs sm:text-sm text-[#C9A35E] font-sans font-medium space-y-1 bg-slate-50 p-3 rounded-lg">
                  <li>• Secure Transit Escorts</li>
                  <li>• Shopping Alignment Support</li>
                  <li>• Calgary surroundings Transit</li>
                </ul>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A35E]/10 flex items-center justify-center text-[#C9A35E]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10243E] font-sans">Family Respite</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body font-normal">
                    Allowing primary family guardians the space to recover. We cover overnight support or part-time loops, keeping diagnostic indices fully recorded so you stay peaceful.
                  </p>
                </div>
                <ul className="text-xs sm:text-sm text-[#C9A35E] font-sans font-medium space-y-1 bg-slate-50 p-3 rounded-lg">
                  <li>• Regular Wellness Reports</li>
                  <li>• Weekend & Holidays Respite</li>
                  <li>• Safe Overnights Standby</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#10243E] rounded-3xl p-8 text-[#F7F4EE] flex flex-col md:flex-row items-center gap-6 justify-between border border-[#C9A35E]">
              <div className="space-y-2">
                <h4 className="text-2xl font-serif text-[#C9A35E]">Ready to map out a personalized care concierge plan?</h4>
                <p className="text-sm text-slate-300 max-w-xl font-body font-light">
                  Get in touch with an intake manager now. We can structure coverage details and match cultural professionals.
                </p>
              </div>
              <button
                onClick={() => handleNavigate("contact")}
                className="px-6 py-3bg-[#C9A35E] hover:bg-[#b89150] rounded-xl text-sm font-bold text-[#10243E] tracking-widest uppercase transition shrink-0"
              >
                Inquire now
              </button>
            </div>
          </div>
        )}

        {/* ==================== 4. HEALTHCARE NAVIGATION VIEW ==================== */}
        {currentPage === "navigation" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Family Concierges that Understand Healthcare</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Healthcare Navigation & Care Coordination
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Hospital systems can be deeply confusing, and finding resources is tough. We provide specialized, licensed care coordination to act as your local patient advocate.
              </p>
            </div>

            {/* Navigation Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-64 w-full relative shadow-md">
              <img 
                src="/src/assets/images/nurse_guidance_1781130262020.png" 
                alt="Licensed Nurse Guidance and Patient Advocacy" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Clinical Care Coordination</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">Advocating for Family Safety Pathways</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                <h3 className="text-2.5xl sm:text-3xl text-[#10243E] font-serif leading-tight">
                  Seamless Transition Planning, Medical Advocacy, and Coordination Controls.
                </h3>
                <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body">
                  When a parent undergoes surgery or receives a complex diagnosis at direct Calgary institutions like Rockyview General Hospital or Foothills Hospital, family coordinators can quickly feel overwhelmed. Our care navigators serve as the clinical bridge:
                </p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="bg-white rounded-xl p-5 border border-gray-150 flex gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-[#C9A35E] flex items-center justify-center shrink-0 border">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-[#10243E] font-sans">Patient Advocacy Logs</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1 font-body">
                        We attend medical consultations with seniors, noting prescription grids, dosage adjustments, and diagnostic outputs, communicating detailed reports back to children immediately.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white rounded-xl p-5 border border-gray-150 flex gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-[#C9A35E] flex items-center justify-center shrink-0 border">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-[#10243E] font-sans">Transition Planning Management</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1 font-body">
                        Transitioning from a fast-paced acute ward room to clean home environments requires coordinated planning. We configure mobility coordinates, safety holds, and companion checklists.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white rounded-xl p-5 border border-gray-150 flex gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-[#C9A35E] flex items-center justify-center shrink-0 border">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-[#10243E] font-sans">Alberta Healthcare Resources Coordination</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1 font-body">
                        We match family needs with community resources, helping you locate sensory equipment, wheelchair accessories, and funding grants from Calgary nonprofits and local foundations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Column: Visual checklist */}
              <div className="lg:col-span-12 xl:col-span-5 bg-[#10243E] text-white rounded-3xl p-8 border border-[#C9A35E] space-y-6">
                <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Intake Assessment Checklist</span>
                <h3 className="text-2xl font-serif text-[#F7F4EE]">What Our Care Coordination Covers:</h3>
                
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
                    <span>Cross-referencing AHS allowances and private policies for maximum funding efficiency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
                    <span>Mapping out medication management charts and reviewing compliance schedules.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
                    <span>Matching physical schedules with specific, culturally aligned companion professionals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
                    <span>Structuring continuous, cloud-updated wellness reporting to communicate indicators.</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleNavigate("contact")}
                  className="w-full h-12 bg-[#C9A35E] hover:bg-[#b89150] text-[#10243E] font-bold rounded-xl text-xs uppercase tracking-widest text-center transition block"
                >
                  Book Free Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 5. LANGUAGE MATCH VIEW ==================== */}
        {currentPage === "languagematch" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Linguistic Comfort & Shared Heritage</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                The Language Match Program®
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Why matching seniors with caregivers speaking their native tongue reduces distress and enhances wellness. Explore our custom interactive matches tool below.
              </p>
            </div>

            {/* Language Match Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-64 w-full relative shadow-md">
              <img 
                src="/src/assets/images/caregiver_nutrition_1781130244956.png" 
                alt="Caregiver preparing home cooked nutritious meal" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">The Language Match Program®</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">Heritage Tongues, Traditional Nutrition</h3>
              </div>
            </div>

            {/* Methodology detail card */}
            <div className="bg-[#F7F4EE]/45 rounded-3xl p-6 sm:p-10 border border-[#c9a35e]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-2.5xl sm:text-3xl text-[#10243E] font-serif leading-tight">
                  Our Scientific & Cultural Matching Methodology
                </h3>
                <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body">
                  When seniors battle Alzheimer's or dementia, foreign language skills are often the first cognitive systems to slip. A lifelong English-speaking immigrant might suddenly find themselves reverted exclusively to Amharic, Tigrinya, Arabic, or Tagalog.
                  <br /><br />
                  Providing companionship in their child-world vocabulary is clinical preservation. This is why our matchmaking parses specific dimensions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-body text-sm">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <strong className="text-[#10243E] font-semibold font-sans block mb-1">Heritage Language</strong>
                    <span className="text-gray-655 leading-relaxed">Accents, local dialects, and traditional protocols matching regional backgrounds.</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <strong className="text-[#10243E] font-semibold font-sans block mb-1">Recipe & Nutritional Matching</strong>
                    <span className="text-gray-655 leading-relaxed">Mastery of local dishes (e.g. halal recipes, doro wot, pinoy pancit).</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#10243E] text-white p-6 sm:p-8 rounded-2xl border border-[#C9A35E]">
                  <h4 className="font-semibold text-base text-[#C9A35E] font-sans uppercase tracking-wider">Benefits Index:</h4>
                  <ul className="space-y-4 mt-4 text-sm sm:text-base font-sans leading-relaxed">
                    <li className="flex gap-2">
                      <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                      <span>Reduces pacing, confusion, and defensive isolation loops.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                      <span>Promotes appetite through comforting traditional cuisine prepared natively.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                      <span>Eases communication of medical symptoms or physical discomfort.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Embedded custom matching tool */}
            <div className="pt-6">
              <div className="text-center space-y-2 max-w-xl mx-auto mb-8">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold bg-[#C9A35E]/15 px-3 py-1 rounded">Interactive Companion Calculator</span>
                <h3 className="text-2xl text-[#10243E] font-semibold">Test Your Alignment Compatibility</h3>
              </div>
              <LanguageMatchTool />
            </div>
          </div>
        )}

        {/* ==================== 6. FUNDING & BILLING VIEW ==================== */}
        {currentPage === "funding" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">Alberta Health Pathways</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Direct Billing & Funding Pathways
              </h2>
              <p className="text-base sm:text-lg text-gray-650">
                You do not have to struggle under complex paperwork burden. Learn how our Alberta Blue Cross Approved Provider status eliminates out-of-pocket stress.
              </p>
            </div>

            {/* Funding Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-64 w-full relative shadow-md">
              <img 
                src="/src/assets/images/funding_billing_map_1781376948342.jpg" 
                alt="Direct billing and blue cross support" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold font-extrabold">Blue Cross Approved Provider</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">Direct Claims Electronic Submission</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                <h3 className="text-2.5xl sm:text-3xl text-[#10243E] font-serif leading-tight">
                  Navigating Alberta Blue Cross & Government Support Methods
                </h3>
                <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-body">
                  BETESEB CARE is a fully authorized <strong>Approved Provider for Alberta Blue Cross</strong>. This enables our administrative billing office to file claims directly and retrieve funds electronically, eliminating complex claims burden from seniors and children.
                </p>

                <div className="space-y-4 font-body text-sm sm:text-base">
                  <div className="bg-white p-6 rounded-xl border border-gray-150 shadow-sm space-y-2">
                    <h4 className="font-semibold text-base text-[#10243E] font-sans">1. AHS Self-Managed Care (SMC) Program</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Alberta Health Services (AHS) offers direct monthly funds to eligible seniors or legal proxies through the SMC allowance. We structure care plans to fully comply with and facilitate SMC reimbursement claims, ensuring you retain perfect control over schedules.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-150 shadow-sm space-y-2">
                    <h4 className="font-semibold text-base text-[#10243E] font-sans">2. Private Insurance Coordinates</h4>
                    <p className="text-gray-600 leading-relaxed">
                      If your retiree parent holds private medical benefits (such as Manulife, Sun Life, or paramedical corporate insurances), they are frequently covered under specialized private nursing lines. Our billing team reviews individual policies free.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps panel */}
              <div className="lg:col-span-12 xl:col-span-5 bg-gradient-to-b from-[#10243E] To-[#173256] text-white rounded-3xl p-8 border border-[#C9A35E] space-y-6">
                <div className="flex gap-2 text-[#C9A35E] items-center text-xs uppercase font-mono tracking-wider font-extrabold">
                  <ShieldCheck className="w-5 h-5" /> Billing Support Sequence
                </div>
                <h3 className="text-2xl font-serif text-[#F7F4EE]">Complimentary Claims Analysis</h3>

                <ul className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-[#C9A35E] text-[#10243E] font-extrabold rounded-full flex items-center justify-center shrink-0 text-xs">1</span>
                    <span>Intake coordinator reviews your parental health policies and Blue Cross id cards.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-[#C9A35E] text-[#10243E] font-extrabold rounded-full flex items-center justify-center shrink-0 text-xs">2</span>
                    <span>We connect with AHS or policy providers to verify specific eligibility parameters.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-[#C9A35E] text-[#10243E] font-extrabold rounded-full flex items-center justify-center shrink-0 text-xs">3</span>
                    <span>We establish electronic direct-billing paths to receive funds directly, leaving your payments clean.</span>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("consultation-form-block");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full h-12 bg-[#C9A35E] text-[#10243E] font-bold hover:bg-[#b89150] rounded-xl text-xs uppercase tracking-widest text-center transition"
                >
                  Schedule My Policy Review
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 7. TRAINING & EDUCATION VIEW ==================== */}
        {currentPage === "training" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold">The Beteseb Institute</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Healthcare Training & Education Portal
              </h2>
              <p className="text-base sm:text-lg text-gray-650">
                Building local healthcare competence, support grids for Internationally Educated Nurses (IENs), and public health literacy clinics.
              </p>
            </div>

            {/* Training Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-64 w-full relative shadow-md">
              <img 
                src="/src/assets/images/clinical_training_class_1781376974404.jpg" 
                alt="NCLEX-RN Review internationally Educated Nurses tutoring" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Bridging Licensure Pathways</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">The Beteseb Institute Calgary</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm animate-fadeIn">
              <div className="lg:col-span-12 xl:col-span-12 space-y-5 lg:pr-4">
                <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold inline-flex items-center gap-1.5">
                  <GraduationCap className="w-5 h-5" /> Professional Licensure Fast-track
                </span>
                <h3 className="text-2.5xl sm:text-3xl text-[#10243E] font-serif leading-tight font-medium">
                  NCLEX-RN Review & internationally Educated Nurses (IEN) Mentorship Group
                </h3>
                <p className="text-sm sm:text-base text-gray-655 leading-relaxed font-body">
                  Hundreds of highly trained medical and nursing practitioners arrive in Calgary from abroad each year. We help immigrant nurses bridge licensing credentials, pass licensing exams (NCLEX-RN), and integrate into practicing networks:
                </p>

                <ul className="space-y-3 text-sm sm:text-base font-sans text-gray-650">
                  <li className="flex gap-2">
                    <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Rigorous Review Sessions</strong>: Structured review modules preparing nurses for NCLEX examinations.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Clinical Transition Mentorship</strong>: Navigating College of Registered Nurses of Alberta (CRNA) requirements.</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Income Bridging Placements</strong>: Safe employment placements within our family-concierge system during transits.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-12 xl:col-span-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-4">
                <h4 className="font-semibold text-sm text-[#10243E] font-sans">Current Class Openings</h4>
                <div className="space-y-3 text-xs text-sm">
                  <div className="p-3 bg-white rounded-lg border border-slate-100 flex justify-between items-center shadow-sm">
                    <div>
                      <strong className="block text-slate-700 font-sans font-semibold">NCLEX exam prep cohort</strong>
                      <span className="text-xs text-gray-400">Class starts Saturday afternoons</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Open slots</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-100 flex justify-between items-center shadow-sm">
                    <div>
                      <strong className="block text-slate-700 font-sans font-semibold">Health literacy for newcomers</strong>
                      <span className="text-xs text-gray-400">Public workshop in NE Calgary</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Free Entry</span>
                  </div>
                </div>

                {registeredIEN ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl space-y-1 text-sm font-sans animate-fadeIn">
                    <strong className="block">✓ Registration Received</strong>
                    <p className="text-xs text-emerald-700">Thank you for registering. An institute mentor will email you class times and material briefs within 24 hours.</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setRegisteredIEN(true)}
                    className="w-full text-center py-2.5 bg-[#10243E] hover:bg-[#1f426c] text-[#F7F4EE] rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition duration-150 shadow-md"
                  >
                    Apply to Institute Program
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== 8. JOURNAL & RESOURCES BLOG ==================== */}
        {currentPage === "blog" && (
          <div className="py-6">
            {/* Embedded Blog module */}
            <ResourcesBlog />
          </div>
        )}

        {/* ==================== 9. CONTACT US VIEW ==================== */}
        {currentPage === "contact" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
            <div className="text-center space-y-3 max-w-2xl mx-auto pb-4">
              <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold font-bold">Connecting Calgary Families</span>
              <h2 className="text-4xl sm:text-5xl text-[#10243E] font-medium font-serif" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Contact Our Coordination Offices
              </h2>
              <p className="text-base sm:text-lg text-gray-655">
                Have questions about billing pathways, companion caretakers, or memory matching? Send us an inquiry.
              </p>
            </div>

            {/* Contact Page Hero Banner Image */}
            <div className="overflow-hidden rounded-3xl h-64 w-full relative shadow-md">
              <img 
                src="/src/assets/images/calgary_office_support_1781376995390.jpg" 
                alt="Connecting Calgary Families care offices" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Calgary HQ & Regional Intakes</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE]">We are here to walk with you</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form col */}
              <div className="lg:col-span-7">
                <FormConsultation />
              </div>

              {/* Physical details col */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#10243E] text-[#F7F4EE] rounded-3xl p-6 sm:p-8 border border-[#C9A35E]/40 space-y-6">
                  <span className="text-sm uppercase tracking-wider font-mono text-[#C9A35E] font-extrabold font-bold">Office Information</span>
                  <h3 className="text-2xl font-serif text-white">Intake Coordinates</h3>

                  <div className="space-y-5 text-sm sm:text-base font-sans leading-relaxed">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#C9A35E] w-6 h-6 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-base text-white">Calgary HQ Registry Office</strong>
                        <p className="text-slate-200 mt-1">Calgary, Alberta, Canada</p>
                        <p className="text-xs text-slate-400 mt-1">Quadrant Coverages: NE, NW, SW, SE Calgary</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-[#C9A35E] w-6 h-6 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-base text-white">Call Center Helpline</strong>
                        <p className="text-slate-200 mt-1">Intake Line: (587) 555-0143</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-[#C9A35E] w-6 h-6 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-base text-white">Email Enquiries</strong>
                        <p className="text-slate-200 mt-1 font-semibold">intake@betesebhealth.ca</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* mini Calgary map highlights representation */}
                <div className="border border-gray-150 p-6 rounded-2xl bg-white shadow-sm font-sans space-y-3">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C9A35E] font-bold block">Regional Service Area</span>
                  <p className="text-sm text-gray-650 leading-relaxed font-body font-normal">
                    We cover Calgary proper alongside key surroundings including Airdrie, Chestermere, Cochrane, Okotoks, and Tsuut'ina Nation settlements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 10. SECRET ADMIN WORKSPACE VIEW ==================== */}
        {currentPage === "admin" && (
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <AdminPanel />
          </div>
        )}
      </main>

      {/* Persistent slide Advisor Chat bottom right */}
      <AdvisorChat />

      {/* Visual Footer */}
      <footer className="bg-[#10243E] text-[#F7F4EE] border-t border-[#C9A35E]/30 select-none pb-20 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 text-left font-sans">
          
          <div className="md:col-span-5 space-y-4">
            <Logo iconOnly={false} />
            <p className="text-xs text-slate-300 leading-relaxed font-body font-light">
              We position BETESEB CARE as Calgary's ultimate healthcare concierge, dedicating custom-matched caretakers to respect elder memories and heritage scripts.
            </p>
            <div className="text-[10px] text-slate-400 font-mono">
              Alberta Approved Registry: ABC-PROV_1092
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C9A35E] font-sans">Core Programs</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300 font-sans">
              <button onClick={() => handleNavigate("languagematch")} className="hover:text-white transition text-left">Language Match Program</button>
              <button onClick={() => handleNavigate("services")} className="hover:text-white transition text-left">Home Support Concierge</button>
              <button onClick={() => handleNavigate("navigation")} className="hover:text-white transition text-left">Healthcare Advocacy</button>
              <button onClick={() => handleNavigate("training")} className="hover:text-white transition text-left">NCLEX-RN Review Forum</button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C9A35E] font-sans">Calgary Coordination Address</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-body">
              For immediate family coordinate callbacks or complaints reviews, connect with us physically or digital:
            </p>
            <div className="text-xs font-mono text-slate-300">
              Tel: <a href="tel:587-555-0143" className="hover:text-[#C9A35E] transition font-semibold">(587) 555-0143</a><br />
              Email: <span className="text-[#C9A35E]">intake@betesebhealth.ca</span>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-slate-800 py-6 px-4 text-center text-slate-400 text-[10px] font-sans font-light select-none">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
            <span>&copy; {new Date().getFullYear()} BETESEB CARE. All Rights Reserved. Coordinated in Calgary, Alberta.</span>
            <div className="flex gap-4">
              <span className="text-[#C9A35E]">Approved Alberta Blue Cross Provider</span>
              <span>•</span>
              <button onClick={() => handleNavigate("admin")} className="hover:underline">Internal Admin Logs</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
