import React from 'react';
import { useParams, Link, useOutletContext, Navigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { packagesData } from '../data/packages';
import { contactInfo } from '../data/navigation';

export default function PackageDetails() {
  const { slug } = useParams();
  const { openEnquiryModal } = useOutletContext();

  const pkg = packagesData.find((p) => p.slug === slug);

  useSEO({
    title: pkg ? `${pkg.name}: ${pkg.subtitle} – Package Deliverables` : "Package Details",
    description: pkg?.overview || "Comprehensive business growth package deliverables and 60-day setup workflow."
  });

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  const pkgWhatsAppUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Suyog Walke, I would like to enquire about the "${pkg.name} (${pkg.subtitle})" package for my company.`
  )}`;

  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-brand-darkGreen transition mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to All Packages</span>
        </Link>

        {/* Hero Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-emeraldTint px-3 py-1 rounded-full">
                {pkg.badge}
              </span>
              <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                <Clock size={13} className="text-brand-darkGreen" />
                {pkg.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
              {pkg.name} – {pkg.subtitle}
            </h1>

            <p className="text-base sm:text-xl text-brand-darkGreen font-semibold">
              {pkg.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {pkg.overview}
            </p>

            <div className="p-4 rounded-2xl bg-brand-lightBg border border-gray-100 text-xs text-brand-darkCharcoal italic">
              <strong>Ideal Client Profile:</strong> {pkg.idealFor}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  openEnquiryModal({
                    title: `Enquire: ${pkg.name} Package`,
                    subtitle: `Discuss commercial fit for ${pkg.subtitle}`,
                    pkg: `${pkg.name} (${pkg.subtitle})`
                  })
                }
                className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow transition cursor-pointer"
              >
                <span>Enquire for {pkg.name} Tier</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={pkgWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow transition"
              >
                <MessageCircle size={16} />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-brand-darkGreen text-gray-700 hover:text-brand-darkGreen px-6 py-3.5 rounded-xl text-sm font-semibold transition"
              >
                <Calendar size={16} />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Pillar Deliverables Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
            SERVICE CATALOGUE INCLUSIONS
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-darkCharcoal">
            Deliverables across the 5 Core Pillars
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Every deliverable adheres to the official GISA Service Catalogue standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Consultancy */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-darkGreen" />
              1. Business Consultancy
            </div>
            <ul className="space-y-2 text-xs text-gray-700">
              {pkg.inclusions.consultancy.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Market Research */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-darkGreen" />
              2. Market Research
            </div>
            <ul className="space-y-2 text-xs text-gray-700">
              {pkg.inclusions.marketResearch.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Branding */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-darkGreen" />
              3. Global Branding
            </div>
            <ul className="space-y-2 text-xs text-gray-700">
              {pkg.inclusions.branding.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Client Acquisition */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-darkGreen" />
              4. Client Acquisition
            </div>
            <ul className="space-y-2 text-xs text-gray-700">
              {pkg.inclusions.clientAcquisition.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Operations Support */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3 lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-darkGreen" />
              5. Operations Support
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
              {pkg.inclusions.operationsSupport.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 60-Day Guided Setup Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-darkCharcoal text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lightGreen">
              EXECUTION ROADMAP
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Phased Setup & Execution Workflow
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Structured milestone progression ensuring accountability at each interval.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pkg.setupProcess60Days.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-lightGreen block">
                  {phase.phase}
                </span>
                <h4 className="text-sm font-bold font-serif text-white">
                  {phase.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Specific FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
            PACKAGE QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal">
            Frequently Asked Questions for {pkg.name} Tier
          </h2>
        </div>

        <div className="space-y-4">
          {pkg.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2"
            >
              <h4 className="text-sm font-bold text-brand-darkCharcoal flex items-center gap-2">
                <HelpCircle size={16} className="text-brand-darkGreen flex-shrink-0" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs text-gray-600 pl-6 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-deepForest to-brand-darkGreen text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Take Your Next Step with the {pkg.name} Package
          </h3>
          <p className="text-sm text-gray-200 max-w-xl mx-auto">
            Contact us for a confidential qualification review. No commitment required.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() =>
                openEnquiryModal({
                  title: `Enquire: ${pkg.name} Package`,
                  subtitle: `Discuss commercial fit for ${pkg.subtitle}`,
                  pkg: `${pkg.name} (${pkg.subtitle})`
                })
              }
              className="bg-white text-brand-darkGreen hover:bg-gray-100 px-7 py-3.5 rounded-xl font-bold text-sm shadow transition cursor-pointer"
            >
              Submit Package Enquiry
            </button>
            <Link
              to="/book-consultation"
              className="border border-white/40 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition"
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
