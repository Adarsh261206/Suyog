import React from 'react';
import { Briefcase, HeartPulse, DraftingCompass, Terminal, Users, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Briefcase: Briefcase,
  HeartPulse: HeartPulse,
  DraftingCompass: DraftingCompass,
  Terminal: Terminal,
  Users: Users,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
};

export default function IndustryCard({ industry, onEnquire }) {
  const IconComponent = iconMap[industry.icon] || Briefcase;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5EBE3] shadow-xs hover:shadow-card hover:border-brand-darkGreen transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Header with Icon */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#F6F9F5] group-hover:bg-[#E8F5E9] text-brand-darkGreen flex items-center justify-center transition-colors">
            <IconComponent size={22} />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#626B63]">
              Sector Specialization
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-brand-darkGreen transition-colors">
              {industry.title}
            </h3>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed mb-4">
          {industry.shortDescription}
        </p>

        {/* Strategic Solutions preview */}
        <div className="space-y-2 mb-4 pt-3 border-t border-[#E5EBE3]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#626B63]">
            How GISA Supports:
          </div>
          {industry.solutions.slice(0, 2).map((sol, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#171717]">
              <CheckCircle2 size={13} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{sol}</span>
            </div>
          ))}
        </div>

        {/* Key Markets tag pill */}
        <div className="flex flex-wrap gap-1.5 pt-1 mb-4">
          {industry.keyMarkets.slice(0, 3).map((mkt, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium bg-[#F6F9F5] text-[#626B63] px-2.5 py-0.5 rounded-md border border-[#E5EBE3]"
            >
              {mkt}
            </span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-3 border-t border-[#E5EBE3] flex items-center justify-between">
        <span className="text-[11px] text-[#626B63] font-medium">
          Customized Advisory
        </span>
        <button
          onClick={() => onEnquire && onEnquire(industry)}
          className="text-xs font-bold text-brand-darkGreen hover:text-brand-deepForest transition cursor-pointer"
        >
          Consult for this Sector →
        </button>
      </div>
    </div>
  );
}
