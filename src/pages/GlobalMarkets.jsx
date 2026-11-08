import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  Globe2,
  Clock,
  Coins,
  ShieldAlert,
  Calendar
} from 'lucide-react';
import { targetMarketsData } from '../data/markets';

export default function GlobalMarkets() {
  useSEO({
    title: "Target Global Markets – US, UK, Australia, UAE & APAC",
    description: "Evaluated international trade corridors for Indian service exporters. Strategic demand analysis for US, UK, Canada, Australia, UAE, and Singapore."
  });
  const { openEnquiryModal } = useOutletContext();
  const [activeRegion, setActiveRegion] = useState('ALL');

  const filteredPrimary = activeRegion === 'ALL'
    ? targetMarketsData.primary
    : targetMarketsData.primary.filter(m => m.region.toUpperCase().includes(activeRegion));

  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
            <Globe2 size={14} />
            <span>EXPORT ADVISORY CORRIDORS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
            Target Global Markets
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We analyze, evaluate, and prepare Indian service providers to enter high-demand international business hubs across North America, the United Kingdom, EMEA, and Asia-Pacific.
          </p>

          {/* Strict Mandatory Rule Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <ShieldAlert size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Transparent Advisory Disclosure:</strong> The countries listed below represent target commercial jurisdictions that we research and prepare clients for. GISA Global Solutions LLP operates strictly from its headquarters in <strong>Mumbai, Maharashtra, India</strong> and does not claim foreign branch offices or unconfirmed overseas physical presences.
            </div>
          </div>
        </div>
      </section>

      {/* Primary Target Markets Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal">
              Primary Target Markets
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Core high-affinity economies with proven appetite for Indian advisory and technical services.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {['ALL', 'NORTH AMERICA', 'EUROPE', 'MIDDLE EAST', 'ASIA-PACIFIC'].map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${
                  activeRegion === reg
                    ? 'bg-brand-darkGreen text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Market Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrimary.map((mkt) => (
            <div
              key={mkt.code}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{mkt.flag}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-emeraldTint px-2.5 py-1 rounded-full">
                    {mkt.region}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif text-brand-darkCharcoal group-hover:text-brand-darkGreen transition-colors mb-2">
                  {mkt.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {mkt.overview}
                </p>

                {/* Market Quick Specs */}
                <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <Coins size={14} className="text-brand-darkGreen" />
                      Invoicing Currency:
                    </span>
                    <strong className="text-brand-darkCharcoal font-mono">{mkt.currency}</strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <Clock size={14} className="text-brand-darkGreen" />
                      Time Zone Offset:
                    </span>
                    <span className="text-gray-700 font-medium">{mkt.timeDiff}</span>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      High-Demand Service Sectors:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mkt.keySectors.map((sec, i) => (
                        <span key={i} className="text-[10px] bg-brand-lightBg px-2 py-0.5 rounded text-gray-700 border border-gray-100">
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-brand-darkGreen">
                  {mkt.entryEase}
                </span>
                <button
                  onClick={() =>
                    openEnquiryModal({
                      title: `Target Market Advisory: ${mkt.name}`,
                      subtitle: `Explore expansion feasibility into ${mkt.name}`,
                      service: `Market Entry Strategy: ${mkt.name}`
                    })
                  }
                  className="text-xs font-bold text-brand-darkGreen hover:text-brand-deepForest transition"
                >
                  Enquire for {mkt.code} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Target Markets Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-darkCharcoal text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lightGreen">
              SPECIALIZED & EMERGING CORRIDORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Secondary Target Markets
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Evaluated on an individual engagement basis for specialized industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetMarketsData.secondary.map((sec, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{sec.flag}</span>
                  <span className="text-[10px] font-mono text-brand-lightGreen">{sec.currency}</span>
                </div>
                <h4 className="text-base font-bold font-serif text-white">
                  {sec.name}
                </h4>
                <p className="text-[11px] text-gray-400">
                  {sec.region}
                </p>
                <div className="pt-2 text-[10px] text-gray-300">
                  <strong>Key Focus:</strong> {sec.keySectors.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal">
            Wondering Which Global Market Fits Your Capability Best?
          </h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Schedule a confidential consultation with Suyog Walke to analyze your practice against international buyer willingness-to-pay.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow transition"
            >
              <Calendar size={16} />
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
