import React, { useState } from "react";
import { MapPin, Info, Users, Clock, Languages } from "lucide-react";

interface Sector {
  id: string;
  name: string;
  coordinates: string;
  primaryCommunities: string[];
  caregiverCount: number;
  fluentLangs: string[];
  intakeLeadTime: string;
}

const CALGARY_SECTORS: Sector[] = [
  {
    id: "ne",
    name: "Calgary Northeast (NE)",
    coordinates: "72%, 40%",
    primaryCommunities: ["Saddletowne", "Falconridge", "Castleridge", "Temple", "Whitehorn"],
    caregiverCount: 24,
    fluentLangs: ["Amharic", "Tigrinya", "Arabic", "Punjabi", "Tagalog"],
    intakeLeadTime: "24-48 Hours"
  },
  {
    id: "nw",
    name: "Calgary Northwest (NW)",
    coordinates: "35%, 32%",
    primaryCommunities: ["Brentwood", "Edgemont", "Bowness", "Varsity", "Royal Oak"],
    caregiverCount: 16,
    fluentLangs: ["English", "Arabic", "Tagalog", "Amharic"],
    intakeLeadTime: "48 Hours"
  },
  {
    id: "se",
    name: "Calgary Southeast (SE)",
    coordinates: "75%, 72%",
    primaryCommunities: ["Sundance", "Auburn Bay", "Forest Lawn", "McKenzie Towne", "Cranston"],
    caregiverCount: 18,
    fluentLangs: ["Tagalog", "English", "Punjabi", "Oromiffa"],
    intakeLeadTime: "24-48 Hours"
  },
  {
    id: "sw",
    name: "Calgary Southwest (SW)",
    coordinates: "32%, 70%",
    primaryCommunities: ["Signal Hill", "Killarney", "Altadore", "Woodbine", "Lincoln Park"],
    caregiverCount: 14,
    fluentLangs: ["English", "Arabic", "Amharic", "Tigrinya"],
    intakeLeadTime: "48 Hours"
  },
  {
    id: "surround",
    name: "Calgary Surrounding Communities",
    coordinates: "50%, 8%",
    primaryCommunities: ["Airdrie", "Cochrane", "Chestermere", "Okotoks", "Tsuut'ina Nation"],
    caregiverCount: 11,
    fluentLangs: ["English", "Punjabi", "Tagalog", "Tigrinya"],
    intakeLeadTime: "72 Hours"
  }
];

export default function CalgaryMap() {
  const [selectedSector, setSelectedSector] = useState<Sector>(CALGARY_SECTORS[0]);

  return (
    <div className="bg-[#10243E] text-white rounded-2xl p-6 border-2 border-[#C9A35E]/30 shadow-2xl relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A35E]/5 rounded-full blur-xl pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Vector Map Representation (Grid quadrant map) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="w-full aspect-[4/3] bg-sky-950/45 rounded-xl border border-sky-900 relative p-4 overflow-hidden">
            
            {/* Soft grid markings to look sophisticated */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-b border-r border-[#C9A35E]" />
              ))}
            </div>

            {/* Title Overlay */}
            <div className="absolute top-3 left-3 z-10 text-left">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#C9A35E] font-bold">Service Coverage Mapping</span>
              <h5 className="text-sm font-semibold font-sans text-slate-300">Calgary & Surroundings Active Zones</h5>
            </div>

            {/* Surrounding Ring representation of Calgary Stoney Trail outer ring */}
            <div className="absolute top-[15%] left-[15%] right-[15%] bottom-[15%] border border-[#C9A35E]/15 rounded-[18%] rotate-12 pointer-events-none" />
            <div className="absolute top-[30%] left-[30%] right-[30%] bottom-[30%] border border-[#758677]/15 rounded-[22%] -rotate-6 pointer-events-none" />

            {/* Interactive Pins on Map representation */}
            {CALGARY_SECTORS.map((sector) => {
              const [left, top] = sector.coordinates.split(", ");
              const isSelected = selectedSector.id === sector.id;
              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setSelectedSector(sector)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transition-transform duration-200 hover:scale-110 z-20 group"
                  style={{ left, top }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring animation */}
                    {isSelected && (
                      <span className="absolute w-8 h-8 bg-[#C9A35E] rounded-full opacity-35 animate-ping" />
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border shadow-md transition-all ${
                      isSelected
                        ? "bg-[#C9A35E] border-white text-[#10243E]"
                        : "bg-[#10243E] border-[#C9A35E] text-[#C9A35E] hover:bg-sky-900"
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    {/* Tiny tooltip indicator */}
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-sky-950/90 text-[9px] uppercase font-bold text-[#F7F4EE] px-1.5 py-0.5 rounded border border-sky-900 pointer-events-none transition opacity-0 group-hover:opacity-100 whitespace-nowrap">
                      {sector.name.split("Calgary ")[1] || sector.name}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Compass rose or watermark logo in map */}
            <div className="absolute bottom-3 left-3 opacity-30 text-[10px] font-mono tracking-wider">
              BETESEB HEALTH COORDINATION ZONE INDEX: ABC-PROV_1092
            </div>
          </div>
        </div>

        {/* Selected Sector Panel details */}
        <div className="lg:col-span-5 text-left space-y-4">
          <div className="bg-[#0f1f35] rounded-xl p-5 border border-sky-900 space-y-3.5">
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#C9A35E]/10 border border-[#C9A35E]/30 flex items-center justify-center shrink-0 text-[#C9A35E]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h6 className="font-semibold text-base font-sans text-white">{selectedSector.name}</h6>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A35E]">Qualified Care Registry</span>
              </div>
            </div>

            {/* General Specs */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-sky-950/60 p-2.5 rounded-lg border border-sky-900 text-left">
                <span className="text-[9px] uppercase font-mono text-[#C9A35E] block font-bold">Active Staff</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold">{selectedSector.caregiverCount} Caregivers</span>
                </div>
              </div>
              <div className="bg-sky-950/60 p-2.5 rounded-lg border border-sky-900 text-left">
                <span className="text-[9px] uppercase font-mono text-[#C9A35E] block font-bold">Intake Speed</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold">{selectedSector.intakeLeadTime}</span>
                </div>
              </div>
            </div>

            {/* Communities */}
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Primary Neighborhoods Coverages</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSector.primaryCommunities.map((c) => (
                  <span key={c} className="bg-slate-900 text-[10px] text-slate-300 px-2 py-1 rounded border border-slate-800">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages available */}
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400 block font-bold">Caregivers Fluent Languages</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSector.fluentLangs.map((l) => (
                  <span key={l} className="bg-[#C9A35E]/10 text-[#C9A35E] text-[10px] px-2.5 py-1 rounded border border-[#C9A35E]/20 font-serif">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-xs text-slate-300 leading-relaxed items-center bg-[#071322] p-3 rounded-lg">
            <Info className="w-5 h-5 text-[#C9A35E] shrink-0" />
            <p>
              BETESEB CARE satisfies <strong>WCAG AA accessibility</strong> standards with contrast guidelines, enabling safe, easy service area inspection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
