import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function PackageCard({ pkg, onEnquire }) {
  const isPopular = pkg.popular;

  return (
    <div
      className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isPopular
          ? 'bg-white border-2 border-brand-darkGreen shadow-premium lg:-translate-y-2'
          : 'bg-white border border-[#E5EBE3] shadow-xs hover:shadow-card hover:-translate-y-1'
      }`}
    >
      {/* Featured Package Badge for Advanced */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-darkGreen text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
          <Sparkles size={11} className="text-[#7BCB25]" />
          <span>Featured Strategy</span>
        </div>
      )}

      <div>
        {/* Tier Name & Duration */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen font-mono">
            {pkg.badge}
          </span>
          <span className="text-[11px] text-[#626B63] font-medium flex items-center gap-1">
            <Clock size={12} />
            {pkg.duration}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#171717] mb-1">
          {pkg.name}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-brand-darkGreen mb-4">
          {pkg.subtitle}
        </p>

        <p className="text-xs text-[#626B63] leading-relaxed mb-6 italic bg-[#F6F9F5] p-3 rounded-xl border border-[#E5EBE3]">
          "Ideal for: {pkg.idealFor}"
        </p>

        {/* Deliverables checklist */}
        <div className="space-y-2.5 mb-8">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#626B63]">
            Key Package Deliverables
          </div>
          {pkg.featuresSummary.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#171717]">
              <div className="w-4 h-4 rounded-full bg-[#E8F5E9] text-brand-darkGreen flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={11} strokeWidth={3} />
              </div>
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons: Enquire Now & View Inclusions */}
      <div className="space-y-2.5 pt-4 border-t border-[#E5EBE3]">
        <button
          onClick={() => onEnquire && onEnquire(pkg)}
          className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer ${
            isPopular
              ? 'bg-brand-darkGreen hover:bg-[#137217] text-white shadow-sm'
              : 'bg-[#171717] hover:bg-black text-white'
          }`}
        >
          <span>Enquire Now</span>
          <ArrowRight size={14} />
        </button>

        <Link
          to={`/packages/${pkg.slug}`}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#171717] hover:text-brand-darkGreen text-center block transition hover:bg-[#F6F9F5] border border-[#E5EBE3]"
        >
          View Full Deliverables & 60-Day Process
        </Link>

        <p className="text-[10px] text-[#626B63] text-center tracking-tight">
          Tailored commercial proposal following diagnostic review
        </p>
      </div>
    </div>
  );
}
