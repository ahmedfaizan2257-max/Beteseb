import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Heart, ShieldCheck, Smile, Star, ClipboardList, RefreshCw, Users, CheckSquare } from "lucide-react";

interface Pillar {
  id: string;
  label: string;
  icon: any;
  title: string;
  highlight: string;
  description: string;
  metrics: string[];
}

export default function CareMatchCompass() {
  const [activePillar, setActivePillar] = useState<string>("language");

  const PILLARS: Pillar[] = [
    {
      id: "language",
      label: "Language Match",
      icon: MessageSquare,
      title: "Linguistic Concordance",
      highlight: "Primary Dialect Preservation",
      description: "Speaking a shared maternal language prevents the cognitive isolation, confusion, pacing, and behavioral anxieties that frequently arise in seniors navigating advanced or moderate memory loss.",
      metrics: [
        "Dialect concordance checking (Amharic, Tigrinya, Tagalog, Punjabi, Arabic, etc.)",
        "Accent familiarity matching for comfortable daily conversation",
        "Prevention of expressive or receptive linguistic isolation"
      ]
    },
    {
      id: "culture",
      label: "Cultural Customs",
      icon: Heart,
      title: "Traditional Heritage Alignment",
      highlight: "Respect for Family Rituals",
      description: "We align caregivers on shared traditions, weekly observation preferences, holiday pacing, and family rules so the senior feels fully respected and safe in their domestic sphere.",
      metrics: [
        "Matching Sabbath, Halal, or vegetarian dietary guidelines",
        "Respect for high-context communication and family hierarchies",
        "Socio-religious custom honoring and holiday collaboration"
      ]
    },
    {
      id: "lifestyle",
      label: "Lifestyle & Nutrition",
      icon: ShieldCheck,
      title: "Dietary & Activity Rhythm",
      highlight: "Nostalgic Comfort Cuisine",
      description: "Care is structured directly around familiar diets (such as Habesha stews, Filipino dishes, or South Asian culinary standards) and preferred home routines.",
      metrics: [
        "Culturally aligned meal prep of traditional comfort foods",
        "Preferred physical pace, morning walks, and resting cycles",
        "Coordination of familiar domestic layouts and spatial preferences"
      ]
    },
    {
      id: "personality",
      label: "Personality Pairing",
      icon: Smile,
      title: "Conversational & Pacing Chemistry",
      highlight: "Deep Companionship Concord",
      description: "We select compatible temperaments so care goes beyond physical chores. Whether the senior prefers energetic conversation, quiet companionship, gardening, or storytelling.",
      metrics: [
        "Temperament compatibility profiling during intake assessments",
        "Alignment with hobbies: storytelling, board games, or light gardening",
        "Aesthetic and conversational rhythm matching"
      ]
    },
    {
      id: "expectations",
      label: "Family Standards",
      icon: ClipboardList,
      title: "Advocacy & System Navigation",
      highlight: "Pristine Communication Loops",
      description: "Our caregivers act as family representatives, maintaining precise log sheets, medical check-ins, and coordination notes that bridge directly back to busy guardians.",
      metrics: [
        "Clinical transition logs and medical appointment chaperoning",
        "Active advocacy during appointments in Calgary clinics and wards",
        "Consistent feedback and digital review portals for guardians"
      ]
    },
    {
      id: "values",
      label: "Shared Values",
      icon: Star,
      title: "Core Integrity Preservation",
      highlight: "Mutual Respect & Safety",
      description: "Shared background perspectives build reciprocal relationships. Caregivers are curated to mirror the underlying family values of care, respect, and filial duty.",
      metrics: [
        "Filial piety principles aligned with immigrant or multigenerational contexts",
        "High-integrity personal care respecting physical modesty rules",
        "Uncompromising client safety reviews and credential auditing"
      ]
    }
  ];

  const current = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <div className="bg-[#10243E] text-[#F7F4EE] rounded-3xl p-6 md:p-10 border border-[#C9A35E]/30 shadow-2xl relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A35E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-85 h-85 bg-[#758677]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">Interactive Dynamic System</span>
          <h3 className="text-3xl font-serif text-white">The Beteseb Care Match Compass</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Click on each pillar below to see how our matching algorithm builds precise caregiver linkages.
          </p>
        </div>

        {/* Pillars Grid Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3">
          {PILLARS.map((p) => {
            const ActiveIcon = p.icon;
            const active = activePillar === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePillar(p.id)}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-2 transition duration-200 group text-center min-btn-48 ${
                  active
                    ? "bg-[#C9A35E] border-[#C9A35E] text-[#10243E]"
                    : "bg-[#10243E] border-slate-700/50 hover:border-slate-550 hover:bg-slate-800/40 text-slate-300"
                }`}
                style={{ minHeight: "48px" }}
              >
                <ActiveIcon className={`w-4 h-4 ${active ? "text-[#10243E]" : "text-[#C9A35E] group-hover:scale-110 transition"}`} />
                <span className="text-[10px] sm:text-xs font-bold tracking-wide font-sans">{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-sm items-start text-left"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A35E] font-bold">
                  {current.highlight}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-white">{current.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {current.description}
              </p>
              
              {/* Highlight Note */}
              <div className="border-t border-slate-800 pt-4">
                <p className="text-[11px] sm:text-xs text-[#C9A35E] font-serif italic">
                  "We intentionally match caregivers based on language, culture, traditions, and family values."
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#10243E] p-5 rounded-xl border border-slate-800/80 space-y-4">
              <h5 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-300 flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-[#C9A35E]" /> Matching Parameters
              </h5>
              <ul className="space-y-2.5">
                {current.metrics.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200 font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35E] shrink-0 mt-1.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
