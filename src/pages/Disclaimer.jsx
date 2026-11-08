import React from 'react';
import { ShieldAlert, AlertTriangle, Building, MapPin } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3 pb-6 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider border border-amber-200">
          <ShieldAlert size={13} />
          <span>IMPORTANT REGULATORY DISCLOSURE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkCharcoal">
          Disclaimer & Jurisdictional Statements
        </h1>
        <p className="text-xs text-gray-500">
          Corporate transparency statement for Suyog Walke & GISA Global Solutions LLP
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
        {/* Core Location & Target Market Disclaimer */}
        <section className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-brand-darkCharcoal font-serif font-bold text-base">
            <MapPin size={18} className="text-brand-darkGreen" />
            <span>1. Sole Business Location: Mumbai, Maharashtra, India</span>
          </div>
          <p>
            GISA Global Solutions LLP is a corporate entity registered under the Ministry of Corporate Affairs (MCA), Government of India, with headquarters and operational facilities located solely in <strong>Mumbai, Maharashtra, India</strong>.
          </p>
          <p className="text-amber-800 bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            <strong>Target Markets Clarification:</strong> References on this website to international countries—including the United States, United Kingdom, Canada, Australia, United Arab Emirates, Singapore, Germany, and others—refer exclusively to geographic target markets that we analyze, evaluate, and prepare Indian service exporters to address. GISA Global Solutions LLP does not claim, imply, or maintain branch offices, physical subsidiaries, or local corporate establishments in foreign territories.
          </p>
        </section>

        {/* No Guaranteed Earnings / Outcomes Disclaimer */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            2. Professional Advisory Nature & No Guarantee of Financial Outcomes
          </h2>
          <p>
            The content, frameworks, and case perspectives provided across this website are intended for general business advisory and strategic educational purposes. GISA Global Solutions LLP does not guarantee specific revenue targets, closed overseas contracts, or immediate financial returns.
          </p>
          <p>
            Commercial success in international markets depends entirely on variables beyond our direct control, including the client firm's technical delivery caliber, price competitiveness, financial liquidity, cross-border compliance adherence, and broader macroeconomic conditions.
          </p>
        </section>

        {/* Pricing Transparency */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            3. Commercial Pricing Policy
          </h2>
          <p>
            In alignment with senior corporate consulting standards, GISA Global Solutions LLP does not publish fixed off-the-shelf prices. Commercial proposals are structured on an individual basis following comprehensive evaluation of client firm size, service vertical, target territory complexity, and deliverable scope.
          </p>
        </section>

        {/* Legal and Tax Advisory Disclaimer */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            4. Not a Substitute for Formal Legal or Tax Counsel
          </h2>
          <p>
            While GISA provides strategic operational guidance regarding international contracting, Service Level Agreements (SLAs), and market entry prerequisites, our consultancy does not constitute licensed legal practice or certified cross-border chartered accountancy. Clients are advised to engage licensed legal advocates and certified tax professionals within each respective foreign jurisdiction for statutory entity incorporation and local tax filings.
          </p>
        </section>

        {/* Official Channels */}
        <section className="space-y-2">
          <h2 className="text-base font-bold font-serif text-brand-darkCharcoal">
            5. Authorized Communication Channels
          </h2>
          <p>
            Official communication on behalf of Suyog Walke and GISA Global Solutions LLP is conducted solely through:
          </p>
          <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-gray-800">
            <li>Official WhatsApp & Phone: +91 9172057497</li>
            <li>Corporate Email: contact@gisaglobalsolutions.com</li>
            <li>Official Domain: https://gisaglobalsolutions.com / https://suyogwalke.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

