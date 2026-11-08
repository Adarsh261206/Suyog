import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3 pb-6 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
          <Lock size={13} />
          <span>LEGAL COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkCharcoal">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: November 2024 • GISA Global Solutions LLP • Mumbai, Maharashtra, India
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            1. Introduction & Scope
          </h2>
          <p>
            GISA Global Solutions LLP ("GISA", "we", "us", or "our"), headquartered in Mumbai, Maharashtra, India, is committed to safeguarding the privacy and confidentiality of visitors, consultants, and business partners accessing our website and advisory services. This Privacy Policy details how we collect, store, and utilize business information submitted through our forms and consultation scheduling systems.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            2. Information We Collect
          </h2>
          <p>We collect information voluntarily submitted by you during enquiry submissions or appointment bookings, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name, Professional Designation, and Organization Name</li>
            <li>Business Email Address and WhatsApp / Mobile Contact Number</li>
            <li>Operational Category, Target International Corridors, and Project Context</li>
            <li>Session metadata, analytics cookies, and referrer source to optimize digital navigation</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            3. Purpose of Data Processing
          </h2>
          <p>The information collected is used solely to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evaluate your firm's international readiness and prepare tailored consultation briefings</li>
            <li>Schedule, confirm, and administer 1-on-1 strategy sessions with Founder Suyog Walke</li>
            <li>Communicate proposal scopes, research updates, and administrative details</li>
            <li>Comply with Indian regulatory, tax, and MCA corporate compliance directives</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            4. Non-Disclosure & Third-Party Protection
          </h2>
          <p>
            We adhere to strict corporate confidentiality. We do not sell, rent, monetize, or disclose your proprietary business information or client lists to third-party brokers, advertisers, or outside entities. When formal advisory engagements commence, a bilateral Non-Disclosure Agreement (NDA) is executed prior to reviewing sensitive company balance sheets or proprietary service mechanics.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            5. Jurisdiction & Contact Information
          </h2>
          <p>
            This Policy is governed by the laws of India, under the exclusive jurisdiction of the courts in Mumbai, Maharashtra. For inquiries regarding data protection, please contact our administrative desk:
          </p>
          <p className="bg-brand-lightBg p-4 rounded-xl border border-gray-100 font-mono text-xs text-gray-800">
            GISA Global Solutions LLP<br />
            Attention: Privacy & Compliance Officer<br />
            Mumbai, Maharashtra, India<br />
            Email: contact@gisaglobalsolutions.com<br />
            WhatsApp: +91 9172057497
          </p>
        </section>
      </div>
    </div>
  );
}

