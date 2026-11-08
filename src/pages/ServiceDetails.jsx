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
  Target,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/services';
import { contactInfo } from '../data/navigation';

export default function ServiceDetails() {
  const { slug } = useParams();
  const { openEnquiryModal } = useOutletContext();

  const service = servicesData.find((s) => s.slug === slug);

  useSEO({
    title: service ? `${service.title} – International Advisory` : "Service Details",
    description: service?.shortDescription || "International advisory service details by GISA Global Solutions LLP."
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Pre-filled WhatsApp link for this specific service
  const serviceWhatsAppUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Suyog Walke, I am interested in discussing your "${service.title}" advisory service for my firm.`
  )}`;

  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Breadcrumb & Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-brand-darkGreen transition mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to All Core Services</span>
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-emeraldTint px-3 py-1 rounded-full">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-xl text-brand-darkGreen font-semibold">
              {service.tagline}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  openEnquiryModal({
                    title: `Enquire: ${service.title}`,
                    subtitle: `Discuss custom advisory for ${service.title}`,
                    service: service.title
                  })
                }
                className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow transition cursor-pointer"
              >
                <span>Enquire for This Service</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={serviceWhatsAppUrl}
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

      {/* What it Covers & Who Should Choose Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What the Service Covers */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card space-y-4">
            <div className="flex items-center gap-2 text-brand-darkGreen">
              <Layers size={20} />
              <h3 className="text-xl font-serif font-bold text-brand-darkCharcoal">
                What This Service Covers
              </h3>
            </div>
            <p className="text-xs text-gray-500">
              Granular scope elements addressed during the advisory engagement.
            </p>
            <div className="space-y-3 pt-2">
              {service.whatItCovers.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-brand-emeraldTint text-brand-darkGreen flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Choose This Service */}
          <div className="bg-brand-lightBg rounded-3xl p-8 border border-gray-200/70 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-brand-darkGreen">
              <Target size={20} />
              <h3 className="text-xl font-serif font-bold text-brand-darkCharcoal">
                Who Should Choose This Service
              </h3>
            </div>
            <p className="text-xs text-gray-500">
              Profiles and organizations that benefit most significantly.
            </p>
            <div className="space-y-3 pt-2">
              {service.whoShouldChoose.map((profile, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-100 text-xs sm:text-sm text-gray-700 flex items-start gap-3 shadow-xs">
                  <span className="font-bold text-brand-darkGreen text-xs mt-0.5">0{idx + 1}.</span>
                  <span className="leading-relaxed">{profile}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              STRATEGIC IMPACT
            </span>
            <h2 className="text-3xl font-serif font-bold text-brand-darkCharcoal">
              Key Benefits for Your Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-lightBg border border-gray-100 space-y-2 hover:border-brand-darkGreen transition"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-emeraldTint text-brand-darkGreen flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold font-serif text-brand-darkCharcoal">
                  {b.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-darkCharcoal text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lightGreen">
              TANGIBLE OUTPUTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Verified Deliverables Included
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Clear documentation, strategic collateral, and advisory assets handed over to your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 flex items-start gap-3"
              >
                <CheckCircle2 size={16} className="text-brand-lightGreen flex-shrink-0 mt-0.5" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
            HOW WE COLLABORATE
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-darkCharcoal">
            Our Working Approach
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            A structured, step-by-step roadmap from diagnostic audit to practical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.approach.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-2 relative"
            >
              <span className="text-2xl font-serif font-bold text-brand-darkGreen">
                {step.step}
              </span>
              <h4 className="text-sm font-bold font-serif text-brand-darkCharcoal">
                {step.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
            SERVICE FAQS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
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

      {/* Final Enquire Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-deepForest to-brand-darkGreen text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Initiate Strategic Advisory for {service.title}
          </h3>
          <p className="text-sm text-gray-200 max-w-xl mx-auto">
            Discuss your firm's specific cross-border targets directly with Founder Suyog Walke.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() =>
                openEnquiryModal({
                  title: `Enquire: ${service.title}`,
                  subtitle: `Discuss custom advisory for ${service.title}`,
                  service: service.title
                })
              }
              className="bg-white text-brand-darkGreen hover:bg-gray-100 px-7 py-3.5 rounded-xl font-bold text-sm shadow transition cursor-pointer"
            >
              Submit Confidential Enquiry
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
