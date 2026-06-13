import React, { useState, useEffect } from "react";
import { Lead } from "../types";
import { Loader, RefreshCw, Send, ShieldCheck, Mail, Phone, Calendar, Heart, Award } from "lucide-react";

export default function AdminPanel() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchLeadsFromAPI = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/leads");
      if (!response.ok) {
        throw new Error("Could not download care coordination files.");
      }
      const data = await response.json();
      if (data.success && data.data) {
        setLeads(data.data);
      } else {
        throw new Error("Lead fetch returned failure status.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Variance reading registry.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeadsFromAPI();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 font-sans text-left">
      {/* Header Panel */}
      <div className="bg-[#10243E] rounded-2xl p-6 text-white border border-[#C9A35E]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#C9A35E] font-bold">BETESEB Backoffice Registry</span>
          <h3 className="text-2xl font-serif text-[#F7F4EE]">Care Match Coordination Dashboard</h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Real-time display showing submitted caregiver MATCH leads and active family consultation bookings. Validates server synchronization.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchLeadsFromAPI}
          disabled={loading}
          className="px-4 py-2.5 bg-[#C9A35E]/20 border border-[#C9A35E]/40 text-[#C9A35E] hover:bg-[#C9A35E]/30 rounded-xl text-xs font-semibold uppercase tracking-widest transition duration-150 inline-flex items-center gap-2"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Sync Database Influx
        </button>
      </div>

      {loading && leads.length === 0 ? (
        <div className="py-12 text-center text-gray-500 font-sans text-sm flex flex-col items-center gap-3">
          <Loader className="w-8 h-8 text-[#C9A35E] animate-spin" />
          <span>Synchronizing records from the server...</span>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-xs rounded-xl">
          Error loading care coordination files: {error}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-[10px] text-gray-500">
            <span>Total Sync Leads: {leads.length} Active Records</span>
            <span>Local Calgary Area Sync Gateway: ABC-APPROVED_9921</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition"
              >
                {/* Header card info */}
                <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                  <div className="text-left space-y-0.5">
                    <h4 className="font-semibold text-base text-[#10243E]">{lead.fullName}</h4>
                    <p className="text-xs text-gray-400">
                      Relation: {lead.relationship} | Filed: {new Date(lead.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 text-[10px] font-bold font-mono rounded uppercase tracking-wider ${
                    lead.status.includes("Ready") || lead.status.includes("Matched")
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      : "bg-orange-50 text-orange-600 border border-orange-100"
                  }`}>
                    {lead.status}
                  </span>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">Contact Coordinates</span>
                    <div className="flex flex-col gap-1 text-gray-700">
                      <span className="inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#C9A35E]" /> {lead.email}</span>
                      <span className="inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#C9A35E]" /> {lead.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">Languages Aligned</span>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {lead.languages.map((l) => (
                        <span key={l} className="bg-sky-50 text-sky-700 border border-sky-100 text-[10px] font-semibold px-2 py-0.5 rounded">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Criteria */}
                <div className="space-y-1.5 pt-2 border-t border-gray-50 text-xs">
                  <div>
                    <strong className="text-gray-500 font-semibold font-sans">Traditions & Diet expectations:</strong>{" "}
                    <span className="text-gray-700">{lead.religionTraditions || "Flexible"}</span>
                  </div>
                  <div>
                    <strong className="text-gray-500 font-semibold font-sans">Expectations or Needs notes:</strong>{" "}
                    <span className="text-gray-700">{lead.expectations || "Standard care guidelines"}</span>
                  </div>
                </div>

                {/* Sub Match Candidate Result */}
                {lead.matchResult && (
                  <div className="bg-[#F7F4EE]/65 rounded-xl p-3.5 border border-[#C9A35E]/30 space-y-1.5 text-xs text-[#10243E] relative overflow-hidden">
                    <div className="flex justify-between items-center relative z-10">
                      <span className="font-semibold text-[#C9A35E] uppercase tracking-wider text-[10px]">Associated Candidate</span>
                      <div className="font-mono font-bold text-[#C9A35E] text-xs inline-flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-[#C9A35E]" /> {lead.matchResult.matchPercentage}% Compatibility Match
                      </div>
                    </div>
                    <div className="relative z-10 font-medium text-slate-800">
                      Name: {lead.matchResult.carerName} ({lead.matchResult.carerLang})
                    </div>
                    <p className="relative z-10 text-gray-500 text-[11px] leading-relaxed italic">
                      &ldquo;{lead.matchResult.carerBio}&rdquo;
                    </p>
                    <p className="text-[11px] font-semibold border-t border-[#C9A35E]/15 pt-1.5 mt-1 text-[#10243E]">
                      Alignment: {lead.matchResult.culturalAlignment}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
