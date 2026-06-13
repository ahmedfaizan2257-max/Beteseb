import React, { useState } from "react";
import { PageId } from "../types";
import Logo from "./Logo";
import { Menu, X, Phone, Heart, Award, ShieldCheck, Users } from "lucide-react";

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home" as PageId, label: "Home" },
    { id: "about" as PageId, label: "Our Story" },
    { id: "services" as PageId, label: "Services" },
    { id: "navigation" as PageId, label: "Healthcare Guidance" },
    { id: "languagematch" as PageId, label: "Language Match Program" },
    { id: "funding" as PageId, label: "Direct Billing & Funding" },
    { id: "training" as PageId, label: "Training & Education" },
    { id: "blog" as PageId, label: "Resources / Blog" },
    { id: "contact" as PageId, label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#C9A35E]/20 shadow-sm select-none">
      {/* Top Banner with Direct Tel and Badges */}
      <div className="bg-[#10243E] px-4 py-1.5 text-[#F7F4EE] flex justify-between items-center text-[10px] sm:text-[11px] font-sans">
        <div className="flex items-center gap-4">
          <a href="tel:403-389-6874" className="hover:text-[#C9A35E] transition inline-flex items-center gap-1 font-semibold">
            <Phone className="w-3 h-3 text-[#C9A35E]" /> <span>Inquiries: (403) 389-6874</span>
          </a>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">Serving Calgary Area</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#C9A35E] bg-slate-900/40 px-2 py-0.5 rounded border border-slate-800">
            <Award className="w-3 h-3" />
            <span className="font-semibold uppercase tracking-wider text-[8px] sm:text-[9px]">Alberta Blue Cross Provider</span>
          </div>
          <button 
            onClick={() => onNavigate("admin")}
            className="text-[9px] sm:text-[10px] text-slate-400 hover:text-white transition font-mono border border-slate-800 px-2 py-0.5 rounded bg-slate-900/60"
          >
            Leads Index
          </button>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Brand logo */}
        <button type="button" onClick={() => onNavigate("home")} className="focus:outline-none shrink-0">
          <Logo />
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 flex-wrap justify-center">
          {navItems.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-wider font-sans transition-all duration-150 relative py-1.5 px-2 rounded-md hover:bg-[#10243E]/5 ${
                  active ? "text-[#10243E] bg-[#10243E]/5 font-extrabold" : "text-gray-600 hover:text-[#10243E]"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C9A35E]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Call to Action & Security Badging */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href="tel:403-389-6874"
            className="p-2 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 transition duration-150 inline-flex items-center justify-center bg-white shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#C9A35E]" />
          </a>
          <button
            type="button"
            onClick={() => onNavigate("languagematch")}
            className="px-3.5 py-2 bg-[#C9A35E] hover:bg-[#b89150] text-[#10243E] rounded-xl text-[10px] xl:text-xs font-bold uppercase tracking-wider transition duration-150 shadow"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Match Tool
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#10243E] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Responsive Expandable Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-[#F7F4EE] px-4 pt-2 pb-6 space-y-1.5 text-left shadow-lg absolute left-0 right-0 z-50">
          <div className="flex flex-col gap-1 py-2">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-xs font-semibold uppercase tracking-widest rounded-xl transition duration-150 ${
                    active ? "bg-[#10243E] text-[#F7F4EE]" : "text-gray-600 hover:bg-[#10243E]/5"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="border-t border-gray-200/50 pt-4 flex flex-col gap-2.5">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#10243E] text-white">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#C9A35E] font-bold">Alberta Blue Cross Approved</span>
              <Award className="w-4 h-4 text-[#C9A35E]" />
            </div>
            <button
              onClick={() => {
                onNavigate("languagematch");
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#C9A35E] hover:bg-[#b89150] text-[#10243E] rounded-xl text-xs font-bold uppercase tracking-widest text-center transition"
            >
              Interactive Match Tool
            </button>
            <a
              href="tel:403-389-6874"
              className="w-full py-3 bg-white border border-gray-200 text-[#10243E] rounded-xl text-xs font-bold uppercase tracking-widest text-center inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C9A35E]" /> Place Callback call
            </a>
          </div>
        </div>
      )}

      {/* Sticky Mobile bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur border-t border-slate-100 py-2.5 px-4 z-40 flex justify-between items-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => onNavigate("languagematch")}
          className="bg-[#C9A35E] text-[#10243E] uppercase text-[10px] font-bold tracking-wider px-4 py-2.5 rounded-lg shrink-0 flex items-center gap-1.5"
        >
          <Users className="w-3.5 h-3.5" /> match caregiver
        </button>
        <span className="text-[10px] text-gray-400 font-sans tracking-wide">Direct billing approved</span>
        <a
          href="tel:403-389-6874"
          className="bg-[#10243E] text-white uppercase text-[10px] font-bold tracking-wider px-4 py-2.5 rounded-lg shrink-0 flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#C9A35E]" /> Call Manager
        </a>
      </div>
    </header>
  );
}
