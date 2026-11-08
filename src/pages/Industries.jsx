import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  Briefcase,
  HeartPulse,
  DraftingCompass,
  Terminal,
  Users,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { industriesData } from '../data/industries';

const iconMap = {
  Briefcase: Briefcase,
  HeartPulse: HeartPulse,
  DraftingCompass: DraftingCompass,
  Terminal: Terminal,
  Users: Users,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
};

export default function Industries() {
  useSEO({
    title: "Industries We Serve – Sector-Specific Advisory",
    description: "Tailored international expansion strategies for Management Consulting, Healthcare, Architecture & Engineering, IT & Digital Services, and HR Recruitment."
  });
  const { openEnquiryModal } = useOutletContext();
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  const ActiveIcon = iconMap[selectedIndustry.icon] || Briefcase;

  return (
    <div className="bg-white overflow-hidden">
      {/* Header */}
      <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F6F9F5] to-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
              <span>SECTOR FOCUS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#171717] leading-tight">
              Industries We Serve
            </h1>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              International business development cannot rely on generic, copy-paste formulas. We craft vertical-specific expansion blueprints attuned to the procurement nuances, certifications, and buyer triggers of your specific service domain.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sector Deep-Dive & Selector */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Sector Navigation Tabs */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#626B63] mb-3 px-2">
                Select Your Industry Domain
              </div>
              {industriesData.map((ind) => {
                const Icon = iconMap[ind.icon] || Briefcase;
                const isSelected = selectedIndustry.id === ind.id;

                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-white border-brand-darkGreen shadow-sm text-[#171717]'
                        : 'bg-transparent border-[#E5EBE3] hover:bg-white text-[#626B63]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#E8F5E9] text-brand-darkGreen'
                            : 'bg-white text-[#626B63] border border-[#E5EBE3]'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#171717] leading-tight">
                          {ind.title}
                        </h4>
                        <span className="text-[11px] text-[#626B63] line-clamp-1 mt-0.5">
                          {ind.targetRoles.join(', ')}
                        </span>
                      </div>
                    </div>
                    <ArrowRight
                      size={15}
                      className={`transition-transform ${
                        isSelected ? 'text-brand-darkGreen translate-x-1' : 'text-gray-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Active Deep-Dive Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 border border-[#E5EBE3] shadow-card space-y-7">
              <div className="flex items-center justify-between pb-6 border-b border-[#E5EBE3]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] text-brand-darkGreen flex items-center justify-center">
                    <ActiveIcon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen font-mono">
                      Selected Sector Blueprint
                    </span>
                    <h3 className="text-2xl font-bold text-[#171717]">
                      {selectedIndustry.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() =>
                    openEnquiryModal({
                      title: `Sector Strategy: ${selectedIndustry.title}`,
                      subtitle: `Discuss international entry for ${selectedIndustry.title}`,
                      service: `Industry Advisory: ${selectedIndustry.title}`
                    })
                  }
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-brand-darkGreen text-white px-4 py-2.5 rounded-xl hover:bg-[#137217] transition shadow-xs"
                >
                  <span>Consult for Sector</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                {selectedIndustry.shortDescription}
              </p>

              {/* Common Industry Challenges */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <AlertCircle size={14} />
                  <span>Common Expansion Hurdles in This Sector:</span>
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.challenges.map((ch, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs text-[#171717] flex items-start gap-2.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GISA Tailored Strategic Solutions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen flex items-center gap-1.5 font-mono">
                  <CheckCircle2 size={14} />
                  <span>How GISA Solves This:</span>
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.solutions.map((sol, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#E8F5E9]/40 border border-brand-darkGreen/20 text-xs text-[#171717] flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Decision Makers & Key Markets */}
              <div className="pt-4 border-t border-[#E5EBE3] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#626B63] uppercase tracking-wider block mb-1 text-[10px]">
                    Target Decision-Maker Titles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedIndustry.targetRoles.map((role, i) => (
                      <span key={i} className="bg-[#F6F9F5] px-2.5 py-1 rounded-md text-[#171717] font-medium border border-[#E5EBE3]">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#626B63] uppercase tracking-wider block mb-1 text-[10px]">
                    High-Priority Foreign Corridors:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedIndustry.keyMarkets.map((mkt, i) => (
                      <span key={i} className="bg-[#E8F5E9] text-brand-darkGreen px-2.5 py-1 rounded-md font-semibold">
                        {mkt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="sm:hidden pt-4">
                <button
                  onClick={() =>
                    openEnquiryModal({
                      title: `Sector Strategy: ${selectedIndustry.title}`,
                      subtitle: `Discuss international entry for ${selectedIndustry.title}`,
                      service: `Industry Advisory: ${selectedIndustry.title}`
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-brand-darkGreen text-white py-3 rounded-xl shadow-xs"
                >
                  <span>Consult for This Sector</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sector Consultation Banner */}
      <section className="py-10 md:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#171717] text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Do You Operate in an Unlisted Niche Service?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              From environmental consulting and compliance audits to specialized media post-production, we structure custom international entry roadmaps.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition"
              >
                <span>Discuss Your Specific Practice</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
