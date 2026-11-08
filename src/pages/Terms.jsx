import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';

export default function Terms() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3 pb-6 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
          <FileText size={13} />
          <span>LEGAL FRAMEWORK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkCharcoal">
          Terms & Conditions
        </h1>
        <p className="text-xs text-gray-500">
          Last updated: November 2024 • GISA Global Solutions LLP • Mumbai, Maharashtra, India
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing this website, submitting an enquiry, or booking an advisory consultation with Suyog Walke, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of the platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            2. Nature of Advisory Services
          </h2>
          <p>
            GISA Global Solutions LLP provides strategic management consultancy, international market research, digital positioning guidance, client acquisition frameworks, and operational governance consulting. All materials, articles, and proposals provided are strategic recommendations designed to support your independent commercial decisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            3. Intellectual Property
          </h2>
          <p>
            All trademarks, logos, proprietary frameworks, editorial content, and brand design elements featured on this website are the intellectual property of Suyog Walke and GISA Global Solutions LLP. Unauthorized reproduction, modification, or commercial exploitation is prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            4. Limitation of Liability
          </h2>
          <p>
            International business expansion involves inherent market, regulatory, and currency risks. GISA Global Solutions LLP and its Founder, Suyog Walke, shall not be held liable for indirect, incidental, or consequential losses, including lost profits or business interruptions, arising from independent commercial transactions executed by client organizations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            5. Governing Law & Jurisdiction
          </h2>
          <p>
            These terms are governed exclusively by the laws of India. Any disputes or claims arising out of or in connection with these terms or our advisory services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra, India</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}

