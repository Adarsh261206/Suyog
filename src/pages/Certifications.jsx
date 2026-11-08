import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  MapPin,
  Calendar
} from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  useSEO({
    title: "Certifications & Achievements – MCA & MSME Registrations",
    description: "Official corporate credentials, MCA LLP registration, MSME recognition, and proprietary methodology standards of GISA Global Solutions LLP."
  });
  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
            <ShieldCheck size={14} />
            <span>VERIFIED CORPORATE CREDENTIALS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
            Certifications & Legal Standing
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Institutional registrations, corporate recognitions, and proprietary advisory standards underpinning GISA Global Solutions LLP.
          </p>
        </div>
      </section>

      {/* Strict Credential Integrity Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-emeraldTint text-brand-darkGreen flex items-center justify-center flex-shrink-0">
            <FileCheck2 size={24} />
          </div>
          <div className="space-y-1 text-xs text-gray-600 leading-relaxed">
            <h4 className="text-sm font-bold text-brand-darkCharcoal">
              Strict Verification Policy
            </h4>
            <p>
              In accordance with our strict brand integrity guidelines, GISA Global Solutions LLP never displays synthetic awards, unverified foreign partnerships, or fictitious academic honors. Every credential listed below represents a verified corporate registration with Indian government authorities or proprietary methodology authored by Founder Suyog Walke.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Gallery Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-emeraldTint px-2.5 py-1 rounded-full">
                    {cert.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-lightBg flex items-center justify-center text-brand-darkGreen">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-brand-darkCharcoal mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 text-xs text-gray-500 mb-4">
                  <p>
                    <strong className="text-gray-700">Entity:</strong> {cert.entity}
                  </p>
                  <p>
                    <strong className="text-gray-700">Issuing Authority:</strong> {cert.authority}
                  </p>
                  <p className="flex items-center gap-1 text-gray-500">
                    <MapPin size={12} className="text-brand-darkGreen" />
                    <span>{cert.location}</span>
                  </p>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-6 pt-3 border-t border-gray-50">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-darkGreen flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  {cert.status}
                </span>
                <span className="text-[11px] text-gray-400">
                  Document on File
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Verification Audit Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-darkCharcoal text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lightGreen">
              DUE DILIGENCE & COMPLIANCE READY
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Enterprise Due Diligence
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              If your corporate compliance, procurement, or legal department requires Certificate of Incorporation (MCA LLP), MSME Udyam registration, or GST documents for vendor onboarding, our administrative office in Mumbai provides verified copies upon execution of mutual engagement agreements.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-6 py-3 rounded-xl font-bold text-xs transition"
            >
              <span>Request Vendor Documentation</span>
            </Link>
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold text-xs transition"
            >
              <Calendar size={14} />
              <span>Schedule Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
