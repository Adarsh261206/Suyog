import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, BarChart3, Compass, Target, Cpu, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe2: Globe2,
  BarChart3: BarChart3,
  Compass: Compass,
  Target: Target,
  Cpu: Cpu,
};

export default function ServiceCard({ service, onEnquire }) {
  const IconComponent = iconMap[service.icon] || Globe2;

  return (
    <div className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#E5EBE3] shadow-xs hover:shadow-card hover:border-brand-darkGreen transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Top Badges & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#F6F9F5] group-hover:bg-[#E8F5E9] text-brand-darkGreen flex items-center justify-center transition-colors duration-200">
            <IconComponent size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#626B63] group-hover:text-brand-darkGreen transition-colors bg-[#F6F9F5] group-hover:bg-[#E8F5E9] px-2.5 py-1 rounded-full border border-[#E5EBE3]">
            {service.badge}
          </span>
        </div>

        {/* Large Service Heading */}
        <h3 className="text-xl font-bold text-[#171717] group-hover:text-brand-darkGreen transition-colors mb-2 leading-snug">
          {service.title}
        </h3>

        {/* Short Tagline */}
        <p className="text-xs font-semibold text-brand-darkGreen mb-3">
          {service.tagline}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Key Highlights */}
        <div className="space-y-1.5 mb-6 pt-4 border-t border-[#E5EBE3]">
          {service.whatItCovers.slice(0, 3).map((item, i) => (
            <div key={i} className="text-xs text-[#626B63] flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lightGreen mt-1.5 flex-shrink-0" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer: Clear Learn More Link */}
      <div className="pt-4 border-t border-[#E5EBE3] flex items-center justify-between gap-3">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-darkGreen hover:text-brand-deepForest transition group-hover:translate-x-0.5"
        >
          <span>Learn More</span>
          <ArrowRight size={14} />
        </Link>

        {onEnquire && (
          <button
            onClick={() => onEnquire(service)}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E5EBE3] text-[#171717] hover:border-brand-darkGreen hover:text-brand-darkGreen hover:bg-[#F6F9F5] transition"
          >
            Enquire Now
          </button>
        )}
      </div>
    </div>
  );
}
