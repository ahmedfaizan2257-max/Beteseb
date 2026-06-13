import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader, Sparkles, Heart, Users, MapPin, Phone, MessageSquare, Award } from "lucide-react";
import { MatchResult } from "../types";

const LANGUAGES = [
  { id: "Amharic", name: "Amharic (አማርኛ)", region: "Ethiopia / East Africa" },
  { id: "Tigrinya", name: "Tigrinya (ትግርኛ)", region: "Eritrea / Ethiopia" },
  { id: "Arabic", name: "Arabic (العربية)", region: "Middle East / North Africa" },
  { id: "Oromiffa", name: "Oromiffa (Afaan Oromoo)", region: "East Africa" },
  { id: "Punjabi", name: "Punjabi (ਪੰਜਾਬੀ)", region: "South Asia" },
  { id: "Tagalog", name: "Tagalog (Filipino)", region: "Philippines" },
  { id: "English", name: "English", region: "International" },
];

const CARE_FOCUS_AREAS = [
  "Companionship & Social Support",
  "Meal Preparation & Cultural Diets",
  "Home Support & Household Tasks",
  "Memory Support & Dementia Support",
  "Transportation & Medical Appointments",
  "Family Respite & Rest",
];

const SCHEDULES = [
  "Hourly Support (Part-time)",
  "Full-time Assistance",
  "24/7 Concierge Coverage",
  "Overnight / Overnight Standby",
  "Flexible / On-demand",
];

interface LanguageMatchToolProps {
  onSuccessSubmit?: () => void;
}

export default function LanguageMatchTool({ onSuccessSubmit }: LanguageMatchToolProps) {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);
  const [traditions, setTraditions] = useState<string>("");
  const [careFocus, setCareFocus] = useState<string>("");
  const [schedule, setSchedule] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [relation, setRelation] = useState<string>("Daughter/Son");
  const [expectations, setExpectations] = useState<string>("");
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);

  const toggleLanguage = (langId: string) => {
    if (selectedLangs.includes(langId)) {
      setSelectedLangs(selectedLangs.filter((l) => l !== langId));
    } else {
      setSelectedLangs([...selectedLangs, langId]);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && selectedLangs.length === 0) {
      alert("Please select at least one language preference.");
      return;
    }
    if (step === 2 && !careFocus) {
      alert("Please select a primary care focus area.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const triggerDynamicMatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }

    setLoading(true);
    try {
      // 1. Trigger the advanced matching engine
      const response = await fetch("/api/match/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          languages: selectedLangs,
          religionTraditions: traditions,
          careFocus,
          preferredSchedule: schedule,
          expectations,
        }),
      });

      const resData = await response.json();
      if (resData.success && resData.match) {
        setMatchResult(resData.match);

        // 2. Persist this lead in server inbox
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            email,
            phone,
            relationship: relation,
            languages: selectedLangs,
            religionTraditions: traditions,
            careFocus,
            preferredSchedule: schedule,
            expectations,
          }),
        });

        setStep(4);
        if (onSuccessSubmit) onSuccessSubmit();
      } else {
        throw new Error(resData.error || "Calculated matches failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during calculations. Connecting with default matches.");
    } finally {
      setLoading(false);
    }
  };

  const resetTool = () => {
    setStep(1);
    setSelectedLangs([]);
    setTraditions("");
    setCareFocus("");
    setSchedule("");
    setFullName("");
    setEmail("");
    setPhone("");
    setRelation("Daughter/Son");
    setExpectations("");
    setMatchResult(null);
  };

  return (
    <div id="match-program-tool" className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[#F7F4EE] overflow-hidden">
      {/* Header Band */}
      <div className="bg-[#10243E] px-6 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="text-[#C9A35E] w-5 h-5 animate-pulse" />
          <div>
            <h3 className="font-semibold text-lg text-white font-sans tracking-tight">BETESEB Care Match Program™</h3>
            <p className="text-xs text-slate-300 font-sans uppercase tracking-widest mt-0.5">Advanced Cultural Care Compatibility</p>
          </div>
        </div>
        <div className="text-xs font-mono bg-sky-950 px-3 py-1.5 rounded-full border border-sky-900 text-[#C9A35E]">
          {step < 4 ? `Step ${step} of 3` : "Match Delivered"}
        </div>
      </div>

      {/* Progress Line */}
      {step < 4 && (
        <div className="w-full bg-slate-100 h-1.5 flex">
          <div className={`h-full bg-[#C9A35E] transition-all duration-300 ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`} />
        </div>
      )}

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl font-medium text-[#10243E]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Select Language & Heritage Preferences
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  We match seniors and caregivers who can converse fluently, protecting cognitive comfort and cultural connection.
                </p>
              </div>

              {/* Grid of Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {LANGUAGES.map((lang) => {
                  const selected = selectedLangs.includes(lang.id);
                  return (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => toggleLanguage(lang.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                        selected
                          ? "border-[#C9A35E] bg-[#F7F4EE]/60 ring-2 ring-[#C9A35E]/20"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div>
                        <p className={`font-medium ${selected ? "text-[#10243E]" : "text-gray-800"}`}>
                          {lang.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{lang.region}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        selected ? "bg-[#C9A35E] border-[#C9A35E]" : "border-gray-300"
                      }`}>
                        {selected && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Cultural Traditions, Values, Diets */}
              <div className="space-y-2 pt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Cultural Traditions, Religon Priorities or Heritage Nutrition Requirements
                </label>
                <textarea
                  value={traditions}
                  onChange={(e) => setTraditions(e.target.value)}
                  placeholder="e.g. Traditional Ethiopian cuisine (Injera), Halal meal preparation, Friday afternoon prayers, or high respect for silent reflection periods..."
                  className="w-full rounded-xl border border-gray-200 p-3.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20 focus:border-[#C9A35E] transition"
                  rows={3}
                />
                <p className="text-xs text-gray-400">
                  Providing these elements helps us verify caregiver capabilities regarding traditional recipe skills and values.
                </p>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-[#10243E] text-[#F7F4EE] rounded-xl font-medium text-sm hover:bg-[#1b3d63] transition duration-200 flex items-center gap-2 shadow"
                >
                  Continue to Priorities
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl font-medium text-[#10243E]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Care Focus & Household Schedules
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  What core task categories and schedules align with your family's concierge requirements?
                </p>
              </div>

              {/* Grid of Care Focus */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Primary Care Alignment</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CARE_FOCUS_AREAS.map((focus) => (
                    <button
                      key={focus}
                      type="button"
                      onClick={() => setCareFocus(focus)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition duration-150 ${
                        careFocus === focus
                          ? "border-[#C9A35E] bg-[#F7F4EE]/50 text-[#10243E]"
                          : "border-gray-200 hover:border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 ${
                        careFocus === focus ? "border-[#C9A35E] bg-[#C9A35E]" : "border-gray-300"
                      }`}>
                        {careFocus === focus && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm font-medium">{focus}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-3 pt-2">
                <label className="block text-sm font-medium text-gray-700">Preferred Support Frequency</label>
                <div className="flex flex-wrap gap-2.5">
                  {SCHEDULES.map((sch) => (
                    <button
                      key={sch}
                      type="button"
                      onClick={() => setSchedule(sch)}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition duration-150 ${
                        schedule === sch
                          ? "bg-[#C9A35E] border-[#C9A35E] text-white"
                          : "bg-white border-gray-200 hover:border-gray-300 text-gray-600"
                      }`}
                    >
                      {sch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Back / Next */}
              <div className="flex justify-between pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-[#10243E] text-[#F7F4EE] rounded-xl font-medium text-sm hover:bg-[#1b3d63] transition duration-200 shadow"
                >
                  Continue to Contact
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl font-medium text-[#10243E]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Family Consultation & Match Delivery
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  We deliver exact details of candidate matches straight to your inbox. No obligation, 100% private.
                </p>
              </div>

              <form onSubmit={triggerDynamicMatch} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Contact Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Tesfaye"
                      className="w-full rounded-xl border border-gray-200 p-3 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Your Relationship</label>
                    <select
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="w-full rounded-xl h-11 border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20 bg-white"
                    >
                      <option value="Daughter/Son">Daughter / Son</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Self (Senior)">Self (Senior Client)</option>
                      <option value="Guardian/Family Trustee">Guardian / Trustee</option>
                      <option value="Healthcare Provider / Social Worker">Medical Professional / Advocate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className="w-full rounded-xl border border-gray-200 p-3 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Phone Number (Calgary Area preferred)</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 403-555-0199"
                      className="w-full rounded-xl border border-gray-200 p-3 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Additional Family Expectations (Optional)</label>
                  <textarea
                    value={expectations}
                    onChange={(e) => setExpectations(e.target.value)}
                    placeholder="e.g. Looking for someone warm, highly structured, experienced with mobility aids, who likes taking walks in NE Calgary parks..."
                    className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A35E]/20"
                    rows={2}
                  />
                </div>

                <div className="flex items-start gap-3 bg-[#F7F4EE]/40 p-4 rounded-xl border border-slate-100 mt-2">
                  <Heart className="text-[#C9A35E] w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By submitting, our Calgary care coordination office is immediately notified. We securely execute our matching system algorithm and schedule a fast-track compliance call.
                  </p>
                </div>

                {/* Back / Calculate */}
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
                    disabled={loading}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-[#C9A35E] text-[#10243E] font-semibold rounded-xl text-sm hover:bg-[#b89150] transition duration-200 shadow flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Generating Your Match...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Calculate Care Matches
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && matchResult && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Success Sign */}
              <div className="text-center space-y-2 py-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-100">
                  <Heart className="w-7 h-7 fill-emerald-500" />
                </div>
                <h4 className="text-2xl font-semibold text-[#10243E] font-sans tracking-tight">Cultural Compatibility Match Located!</h4>
                <p className="text-sm text-gray-500 max-w-lg mx-auto">
                  Excellent! Our database has identified an ideal candidate profile matches aligned with your traditional and language background.
                </p>
              </div>

              {/* Match Card Layout */}
              <div className="bg-[#10243E] text-white rounded-2xl p-6 md:p-8 relative overflow-hidden border border-[#C9A35E]">
                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A35E]/5 rounded-full blur-2xl" />

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                  {/* Circular Match Percentage Meter */}
                  <div className="flex flex-col items-center justify-center shrink-0 mx-auto md:mx-0">
                    <div className="relative w-32 h-32 flex items-center justify-center border-4 border-[#C9A35E] rounded-full">
                      <div className="text-center">
                        <span className="text-3xl md:text-4xl font-mono text-[#C9A35E] font-bold">
                          {matchResult.matchPercentage}%
                        </span>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mt-1">Compatability</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile & Bio Description */}
                  <div className="space-y-3 font-sans text-left flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-[#C9A35E]/20 text-[#C9A35E] px-3 py-1 border border-[#C9A35E]/30 rounded-full font-mono text-xs font-semibold tracking-wider uppercase">
                        Preferred Match Candidate: {matchResult.carerName}
                      </span>
                      <div className="flex gap-1">
                        <Award className="text-[#C9A35E] w-4 h-4" />
                        <span className="text-xs text-[#C9A35E]">Alberta Blue Cross Qualified</span>
                      </div>
                    </div>

                    <h5 className="text-xl text-[#F7F4EE] leading-tight">
                      Conversant in: <strong className="text-[#C9A35E] font-semibold">{matchResult.carerLang}</strong>
                    </h5>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                      {matchResult.carerBio}
                    </p>

                    {/* Cultural Match Breakdown */}
                    <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800 text-xs text-slate-200 font-sans space-y-1">
                      <strong className="text-[#C9A35E] uppercase tracking-wider block font-semibold mb-1 text-[10px]">Cultural Alignment Analysis</strong>
                      <p>{matchResult.culturalAlignment}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={resetTool}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 text-[#10243E] hover:bg-slate-50 transition font-medium text-sm"
                >
                  Configure Another Profile
                </button>
                <a
                  href="tel:403-555-0100"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#10243E] text-white hover:bg-[#1b3d63] transition rounded-xl font-medium text-sm inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C9A35E]" />
                  Call Calgary Intake Office
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("consultation-booking-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#C9A35E] text-[#10243E] font-semibold hover:bg-[#b89150] transition rounded-xl text-sm inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Initiate Booking Inquiries
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
