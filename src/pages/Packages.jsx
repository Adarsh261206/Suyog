import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Repeat,
  Calendar
} from 'lucide-react';
import PackageCard from '../components/cards/PackageCard';
import { packagesData, monthlyGrowthPlansData, scopeAndDeliveryRules } from '../data/packages';

export default function Packages() {
  useSEO({
    title: "Business Growth Packages & Monthly Growth Plans",
    description: "Explore 60-day setup packages (BASIC, ADVANCED, PREMIUM) and 30-day renewable Monthly Growth Plans engineered for Indian service exporters."
  });
  const { openEnquiryModal } = useOutletContext();
  const [activePlanCategory, setActivePlanCategory] = useState('setup'); // 'setup' | 'monthly'

  return (
    <div className="bg-white overflow-hidden">
      {/* Header */}
      <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F6F9F5] to-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
              <span>COMPREHENSIVE ADVISORY ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#171717] leading-tight">
              Our Business Growth Packages & Plans
            </h1>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              From our 60-day foundational setup packages to ongoing 30-day monthly growth plans, GISA combines consultancy, market research, global branding, client acquisition, and operations support under one platform.
            </p>

            {/* Pricing Policy Statement */}
            <div className="p-3.5 bg-white border border-[#E5EBE3] rounded-xl text-xs text-[#626B63] flex items-start gap-3 shadow-xs">
              <ShieldCheck size={18} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#171717] block font-semibold mb-0.5">Corporate Advisory Standard:</strong>
                In alignment with international advisory practice and our Website Development Brief, commercial terms are tailored based on organizational scale and custom deliverables. No generic public pricing is displayed.
              </div>
            </div>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap gap-3 pt-8">
            <button
              onClick={() => setActivePlanCategory('setup')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activePlanCategory === 'setup'
                  ? 'bg-brand-darkGreen text-white shadow-xs'
                  : 'bg-white border border-[#E5EBE3] text-[#626B63] hover:bg-[#F6F9F5]'
              }`}
            >
              <Clock size={16} />
              <span>1. One-Time Setup Packages (60 Days)</span>
            </button>

            <button
              onClick={() => setActivePlanCategory('monthly')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activePlanCategory === 'monthly'
                  ? 'bg-brand-darkGreen text-white shadow-xs'
                  : 'bg-white border border-[#E5EBE3] text-[#626B63] hover:bg-[#F6F9F5]'
              }`}
            >
              <Repeat size={16} />
              <span>2. Monthly Growth Plans (30 Days Renewable)</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION A: 60-DAY SETUP PACKAGES */}
      {activePlanCategory === 'setup' && (
        <>
          <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                  FOUNDATIONAL EXPANSION TIERS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  One-Time Setup Packages (60 Days Validity)
                </h2>
                <p className="text-xs sm:text-sm text-[#626B63]">
                  All three setup packages combine the same five core service categories. Higher tiers deliver deeper research coverage, more prospect records, and broader implementation assets.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                {packagesData.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onEnquire={(selectedPkg) =>
                      openEnquiryModal({
                        title: `Enquire: ${selectedPkg.name} Package`,
                        subtitle: `Discuss commercial scope for ${selectedPkg.subtitle}`,
                        pkg: `${selectedPkg.name} (${selectedPkg.subtitle})`
                      })
                    }
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Official Setup Package Comparison Table (from Service Catalogue Page 5) */}
          <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5EBE3] shadow-card overflow-x-auto">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                    DELIVERABLES SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#171717] mt-1">
                    Setup Package Comparison Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B63] mt-1">
                    Detailed comparison based on the official GISA Service Catalogue.
                  </p>
                  <span className="text-[11px] font-semibold text-brand-darkGreen block sm:hidden mt-2">
                    ← Swipe horizontally to compare packages →
                  </span>
                </div>

                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-[#E5EBE3] text-[11px] font-bold uppercase tracking-wider text-[#626B63]">
                      <th className="py-4 px-4 w-1/4">Feature / Dimension</th>
                      <th className="py-4 px-4 w-1/4 text-[#171717] font-bold text-sm">BASIC (Starter)</th>
                      <th className="py-4 px-4 w-1/4 text-brand-darkGreen font-bold text-sm bg-[#E8F5E9]/50 rounded-t-xl">ADVANCED (Launch)</th>
                      <th className="py-4 px-4 w-1/4 text-[#171717] font-bold text-sm">PREMIUM (Complete)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5EBE3] text-xs text-[#171717]">
                    <tr>
                      <td className="py-4 px-4 font-bold text-[#171717]">Package Validity</td>
                      <td className="py-4 px-4 text-[#626B63]">60 calendar days</td>
                      <td className="py-4 px-4 bg-[#E8F5E9]/30 font-semibold text-brand-darkGreen">60 calendar days</td>
                      <td className="py-4 px-4 text-[#626B63]">60 calendar days</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-[#171717]">Target Countries Researched</td>
                      <td className="py-4 px-4 text-[#626B63]">1 Target Country</td>
                      <td className="py-4 px-4 bg-[#E8F5E9]/30 font-semibold text-brand-darkGreen">Up to 3 Target Countries</td>
                      <td className="py-4 px-4 font-semibold text-[#171717]">Up to 5 Target Countries</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-[#171717]">Target Companies Curated</td>
                      <td className="py-4 px-4 text-[#626B63]">Up to 25 Target Accounts</td>
                      <td className="py-4 px-4 bg-[#E8F5E9]/30 font-semibold text-brand-darkGreen">Up to 50 Target Accounts</td>
                      <td className="py-4 px-4 font-semibold text-[#171717]">Up to 100 Target Accounts</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-[#171717]">Branding Deliverables</td>
                      <td className="py-4 px-4 text-[#626B63]">Starter positioning + 1 LinkedIn asset</td>
                      <td className="py-4 px-4 bg-[#E8F5E9]/30 font-medium text-[#171717]">LinkedIn + 4-page corporate profile + content plan</td>
                      <td className="py-4 px-4 font-medium text-[#171717]">LinkedIn + 6-page profile + website structure + content plan</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-[#171717]">Client Acquisition</td>
                      <td className="py-4 px-4 text-[#626B63]">ICP + outreach starter (1 template + tracker)</td>
                      <td className="py-4 px-4 bg-[#E8F5E9]/30 font-medium text-[#171717]">Templates + prospect list (50) + outreach workflow</td>
                      <td className="py-4 px-4 font-medium text-[#171717]">Prospect list (100) + sequence + CRM setup + campaign plan</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-[#171717]">Operations Support</td>
                      <td className="py-4 px-4 text-[#626B63]">Basic export guidance + onboarding checklist</td>
                      <td className="py-4 px-4 bg-[#E8F5E9]/30 font-medium text-[#171717]">Editable quotation/invoices + onboarding checklist + payment process</td>
                      <td className="py-4 px-4 font-medium text-[#171717]">Export guidance + checklist + templates + onboarding + delivery SOP outline</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SECTION B: 30-DAY MONTHLY GROWTH PLANS */}
      {activePlanCategory === 'monthly' && (
        <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                ONGOING EXECUTION SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                Monthly Growth Plans (After 60-Day Setup)
              </h2>
              <p className="text-xs sm:text-sm text-[#626B63]">
                Recurring monthly services renewed every 30 days. Designed to sustain marketing momentum, enrich prospect pipelines, and review cross-border campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {monthlyGrowthPlansData.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-7 sm:p-8 border flex flex-col justify-between transition shadow-xs ${
                    plan.popular
                      ? 'bg-white border-2 border-brand-darkGreen shadow-premium'
                      : 'bg-white border-[#E5EBE3]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-darkGreen font-mono">
                        {plan.badge}
                      </span>
                      <span className="text-xs font-medium text-[#626B63]">
                        {plan.validity}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#171717] mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-brand-darkGreen font-semibold mb-4">
                      {plan.subtitle}
                    </p>

                    <p className="text-xs text-[#626B63] italic bg-[#F6F9F5] p-3 rounded-xl border border-[#E5EBE3] mb-6">
                      "{plan.idealFor}"
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#626B63]">
                        Agreed Monthly Deliverables:
                      </div>
                      {plan.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#171717]">
                          <Check size={14} className="text-brand-darkGreen flex-shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5EBE3]">
                    <button
                      onClick={() =>
                        openEnquiryModal({
                          title: `Enquire: ${plan.name}`,
                          subtitle: `Discuss ongoing support under ${plan.subtitle}`,
                          pkg: `Monthly Plan: ${plan.name}`
                        })
                      }
                      className="w-full bg-[#171717] hover:bg-black text-white font-semibold py-3 rounded-xl text-xs transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Enquire for {plan.name}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scope & Delivery Rules Strip */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7BCB25] font-mono">
              TRANSPARENCY & GOVERNANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Important Scope & Delivery Rules
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Clear commitments and professional boundaries governing GISA's advisory engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scopeAndDeliveryRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7BCB25]">
                  {rule.topic}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {rule.rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Clarity Session Banner */}
      <section className="py-10 md:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-deepForest to-brand-darkGreen text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-[#7BCB25]">
              STEP 1 IN YOUR JOURNEY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Start with a 1-on-1 Business Clarity Session
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto">
              Before committing to a setup package, book an introductory discovery discussion with Suyog Walke to review your firm's domestic services and export readiness.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/book-consultation"
                className="bg-white text-brand-darkGreen hover:bg-gray-100 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow transition"
              >
                Book Clarity Session Calendar
              </Link>
              <button
                onClick={() =>
                  openEnquiryModal({
                    title: "Enquire About Clarity Session",
                    subtitle: "Discuss introductory advisory with Suyog Walke",
                    service: "Business Clarity Session (Discovery & Guidance)"
                  })
                }
                className="border border-white/40 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer"
              >
                Submit Session Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
