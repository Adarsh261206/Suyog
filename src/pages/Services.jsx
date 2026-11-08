import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { ArrowRight, HelpCircle } from 'lucide-react';
import ServiceCard from '../components/cards/ServiceCard';
import { servicesData } from '../data/services';

export default function Services() {
  useSEO({
    title: "Our Five Core International Services",
    description: "Explore GISA's 5 core pillars: International Business Consultancy, Market Research, Global Branding, Client Acquisition, and Operations Support."
  });
  const { openEnquiryModal } = useOutletContext();

  return (
    <div className="bg-white overflow-hidden">
      {/* Header */}
      <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F6F9F5] to-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
              <span>CORE ADVISORY PILLARS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#171717] leading-tight">
              Our Five Core International Services
            </h1>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              From strategic readiness audits and demand intelligence to international client acquisition and cross-border operational frameworks—our services are engineered to turn Indian service firms into globally sought-after partners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEnquire={(svc) =>
                  openEnquiryModal({
                    title: `Enquire: ${svc.title}`,
                    subtitle: `Discuss custom advisory for ${svc.title}`,
                    service: svc.title
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Service Methodology Strip */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                INTEGRATED DELIVERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                Modular Services or Comprehensive Packages?
              </h2>
              <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                While each of our five services can be engaged independently to solve specific business development bottlenecks, our Growth Packages bundle these capabilities into coordinated 60-day expansion roadmaps.
              </p>
              <div className="pt-2">
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-darkGreen hover:text-brand-deepForest"
                >
                  <span>Compare Business Growth Packages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#F6F9F5] border border-[#E5EBE3] space-y-2">
                <div className="text-[10px] font-bold text-brand-darkGreen uppercase tracking-wider">
                  Standalone Service Engagement
                </div>
                <h4 className="text-sm font-bold text-[#171717]">
                  Solve Specific Constraints
                </h4>
                <p className="text-xs text-[#626B63] leading-relaxed">
                  Ideal if your firm already has foreign clients but needs granular market intelligence on a new territory, or requires an executive collateral overhaul.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#E8F5E9]/40 border border-brand-darkGreen/20 space-y-2">
                <div className="text-[10px] font-bold text-brand-darkGreen uppercase tracking-wider">
                  Comprehensive Growth Packages
                </div>
                <h4 className="text-sm font-bold text-[#171717]">
                  End-to-End Expansion Engine
                </h4>
                <p className="text-xs text-[#626B63] leading-relaxed">
                  Ideal for firms seeking a coordinated setup covering research, branding, target accounts, discovery coaching, and operational SOPs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Services FAQ */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              General Questions on Our Services
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-[#E5EBE3] shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-[#171717] flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-darkGreen flex-shrink-0" />
                <span>Do you guarantee overseas client contracts?</span>
              </h4>
              <p className="text-xs text-[#626B63] pl-6 leading-relaxed">
                No genuine international advisory firm guarantees client revenue, as final contract closure depends on your internal technical fulfillment, price competitiveness, and responsiveness. We guarantee high-tier research, institutional positioning, verified target account lists, and rigorous coaching.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5EBE3] shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-[#171717] flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-darkGreen flex-shrink-0" />
                <span>Why are prices not listed on the website?</span>
              </h4>
              <p className="text-xs text-[#626B63] pl-6 leading-relaxed">
                Every professional firm has distinct geographic priorities, existing collateral quality, and team scale. We provide customized proposals following an initial consultation to ensure complete alignment of scope and commercial terms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5EBE3] shadow-xs space-y-2">
              <h4 className="text-sm font-bold text-[#171717] flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-darkGreen flex-shrink-0" />
                <span>How do we get started?</span>
              </h4>
              <p className="text-xs text-[#626B63] pl-6 leading-relaxed">
                You can schedule an introductory strategy call using our online booking calendar, or submit a confidential enquiry through our contact forms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
