import React from 'react';
import useSEO from '../hooks/useSEO';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink
} from 'lucide-react';
import EnquiryForm from '../components/forms/EnquiryForm';
import { contactInfo } from '../data/navigation';
import { LinkedInIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from '../components/common/SocialIcons';

export default function Contact() {
  useSEO({
    title: "Contact Us – GISA Global Solutions LLP (Mumbai)",
    description: "Connect with Suyog Walke's advisory office in Mumbai, Maharashtra, India. Enquire regarding international business development and strategy."
  });
  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
            <Mail size={14} />
            <span>EXECUTIVE ENGAGEMENT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
            Contact GISA Global Solutions LLP
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Connect directly with Founder Suyog Walke's advisory office in Mumbai. Whether you are validating early international demand or ready to build an active foreign acquisition pipeline, we welcome confidential discussions.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Sidebar + Lead Gen Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen">
                  OPERATIONAL HEADQUARTERS
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-darkCharcoal mt-0.5">
                  Mumbai Corporate Office
                </h3>
              </div>

              <div className="space-y-4 text-xs text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-lightBg flex items-center justify-center text-brand-darkGreen flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <strong className="block text-brand-darkCharcoal font-semibold">Location:</strong>
                    <span>Mumbai, Maharashtra, India</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      (All international advisory operations are directed from Mumbai)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-lightBg flex items-center justify-center text-brand-darkGreen flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <strong className="block text-brand-darkCharcoal font-semibold">Official Phone / WhatsApp:</strong>
                    <a href="tel:+919172057497" className="hover:text-brand-darkGreen font-semibold">
                      +91 9172057497
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-lightBg flex items-center justify-center text-brand-darkGreen flex-shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <strong className="block text-brand-darkCharcoal font-semibold">Corporate Email:</strong>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-darkGreen font-semibold">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-lightBg flex items-center justify-center text-brand-darkGreen flex-shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <strong className="block text-brand-darkCharcoal font-semibold">Advisory Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      (Accommodates US, UK & Gulf time zone calls by scheduled appointment)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                  <WhatsAppIcon size={16} className="text-[#25D366]" />
                  <span>Instant WhatsApp Communication</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  Need a rapid preliminary assessment? Message Suyog Walke directly on the official business WhatsApp.
                </p>
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#1ebe5d] hover:underline"
                >
                  <span>Chat on WhatsApp (+91 9172057497)</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Verified Social Channels */}
              <div className="pt-2 border-t border-gray-100 space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Founder Channels (Suyog Walke):
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <a
                      href={contactInfo.founderSocials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brand-lightBg hover:bg-[#0A66C2] hover:text-white text-brand-darkCharcoal transition font-semibold flex items-center gap-1.5 group border border-gray-200/80"
                    >
                      <LinkedInIcon size={14} className="text-[#0A66C2] group-hover:text-white transition" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={contactInfo.founderSocials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brand-lightBg hover:bg-[#E4405F] hover:text-white text-brand-darkCharcoal transition font-semibold flex items-center gap-1.5 group border border-gray-200/80"
                    >
                      <InstagramIcon size={14} className="text-[#E4405F] group-hover:text-white transition" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={contactInfo.founderSocials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brand-lightBg hover:bg-[#1877F2] hover:text-white text-brand-darkCharcoal transition font-semibold flex items-center gap-1.5 group border border-gray-200/80"
                    >
                      <FacebookIcon size={14} className="text-[#1877F2] group-hover:text-white transition" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Company Channels (GISA Global Solutions):
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <a
                      href={contactInfo.companySocials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brand-lightBg hover:bg-[#0A66C2] hover:text-white text-brand-darkCharcoal transition font-semibold flex items-center gap-1.5 group border border-gray-200/80"
                    >
                      <LinkedInIcon size={14} className="text-[#0A66C2] group-hover:text-white transition" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={contactInfo.companySocials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brand-lightBg hover:bg-[#E4405F] hover:text-white text-brand-darkCharcoal transition font-semibold flex items-center gap-1.5 group border border-gray-200/80"
                    >
                      <InstagramIcon size={14} className="text-[#E4405F] group-hover:text-white transition" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={contactInfo.companySocials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-brand-lightBg hover:bg-[#1877F2] hover:text-white text-brand-darkCharcoal transition font-semibold flex items-center gap-1.5 group border border-gray-200/80"
                    >
                      <FacebookIcon size={14} className="text-[#1877F2] group-hover:text-white transition" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen">
                CONFIDENTIAL SUBMISSION
              </span>
              <h2 className="text-2xl font-serif font-bold text-brand-darkCharcoal mt-0.5">
                Submit an Expansion Enquiry
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Please complete the fields below so we can prepare relevant market intelligence prior to speaking.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
