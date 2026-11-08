import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import gisaLogo from '../assets/logo/gisa-logo.jpg';
import founderPhoto from '../assets/images/founder-suyog-walke.jpg';
import { FadeIn } from '../components/animations/MotionWrappers';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Compass,
  MessageCircle,
  Target,
  Check
} from 'lucide-react';
import ServiceCard from '../components/cards/ServiceCard';
import PackageCard from '../components/cards/PackageCard';
import IndustryCard from '../components/cards/IndustryCard';
import { servicesData } from '../data/services';
import { packagesData } from '../data/packages';
import { industriesData } from '../data/industries';
import { targetMarketsData } from '../data/markets';
import { certificationsData } from '../data/certifications';
import { contactInfo } from '../data/navigation';
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '../components/common/SocialIcons';

export default function Home() {
  useSEO({
    title: "Suyog Walke – Founder, GISA Global Solutions LLP | International Business Consultancy",
    description: "Take your expertise beyond borders. Helping Indian professionals, consultants, and service-based businesses explore global markets, strengthen their presence, and build international business opportunities."
  });

  const { openEnquiryModal } = useOutletContext();
  const [selectedRegion, setSelectedRegion] = useState('all');

  const differentiators = [
    {
      title: "Integrated Business Growth Solutions",
      desc: "We bridge strategy, international branding, market research, client acquisition, and cross-border operations into a single cohesive expansion engine.",
      icon: TrendingUp,
      featured: true,
      tag: "All-in-One Engine"
    },
    {
      title: "Focus on International Growth",
      desc: "Specialized exclusively in guiding Indian service-based firms and consultants into foreign corporate markets without domestic distractions.",
      icon: Globe2,
      featured: false,
      tag: "Cross-Border"
    },
    {
      title: "Research-Driven Approach",
      desc: "Every advisory roadmap begins with empirical validation: examining foreign demand, competitive pricing, buyer personas, and compliance hurdles.",
      icon: Compass,
      featured: false,
      tag: "Data-Validated"
    },
    {
      title: "Industry-Oriented Strategies",
      desc: "Customized frameworks built for management consultants, architects, IT leaders, and healthcare practitioners rather than generic templates.",
      icon: Award,
      featured: false,
      tag: "Sector Depth"
    },
    {
      title: "Customized Business Solutions",
      desc: "Zero cookie-cutter playbooks. Every growth strategy is meticulously calibrated to your firm's specific strengths, capacity, and credentials.",
      icon: Users,
      featured: false,
      tag: "100% Tailored"
    },
    {
      title: "Consultancy with Execution Support",
      desc: "We don't merely produce slide decks; we actively rehearse sales pitches, refine overseas proposals, and optimize SLA governance for long-term retainers.",
      icon: ShieldCheck,
      featured: true,
      tag: "Hands-on Advisory"
    }
  ];

  const approachSteps = [
    {
      num: "01",
      title: "Understand Your Business",
      desc: "Diagnostic assessment of your service portfolio, domestic track record, technical credentials, and international expansion goals."
    },
    {
      num: "02",
      title: "Research Global Opportunities",
      desc: "Targeted secondary and primary research across priority corridors to validate foreign demand, competitor fees, and commercial fit."
    },
    {
      num: "03",
      title: "Build Your International Presence",
      desc: "Elevating executive positioning, international digital branding, and high-trust corporate collateral to meet global buyer expectations."
    },
    {
      num: "04",
      title: "Identify Potential Clients",
      desc: "Engineering high-touch Account-Based outreach frameworks targeting verified C-suite and director-level decision makers."
    },
    {
      num: "05",
      title: "Support Business Growth",
      desc: "Establishing cross-border service agreements, multi-currency invoicing workflows, and communication rituals for enduring partnerships."
    }
  ];

  // Filter target markets by region
  const filteredPrimaryMarkets = selectedRegion === 'all'
    ? targetMarketsData.primary
    : targetMarketsData.primary.filter(m => {
        if (selectedRegion === 'na') return m.name === 'United States' || m.name === 'Canada';
        if (selectedRegion === 'emea') return m.name === 'United Kingdom';
        if (selectedRegion === 'gcc') return m.name === 'United Arab Emirates';
        if (selectedRegion === 'apac') return m.name === 'Australia';
        return true;
      });

  return (
    <div className="bg-white overflow-hidden">
      {/* ========================================================
          SECTION 2: HERO SECTION (SOPHISTICATED SPLIT-SCREEN)
      ======================================================== */}
      <section className="relative pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-14 border-b border-[#E5EBE3] bg-gradient-to-b from-[#F6F9F5] via-white to-white">
        {/* Subtle decorative background glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#7BCB25]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#16851C]/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Content Column */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-7 space-y-6">
              
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5EBE3] shadow-xs text-xs font-bold text-brand-darkGreen tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#7BCB25] animate-pulse" />
                <span>GLOBAL BUSINESS GROWTH SOLUTIONS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#171717] leading-[1.12] tracking-tight">
                Take Your Expertise <br className="hidden sm:inline" />
                <span className="text-brand-darkGreen">Beyond Borders.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#626B63] leading-relaxed max-w-2xl font-normal">
                Helping Indian professionals, consultants and service-based businesses explore global markets, strengthen their presence and build international business opportunities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen focus-visible:ring-offset-2"
                >
                  <Calendar size={18} />
                  <span>Book a Consultation</span>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl bg-white hover:bg-[#F6F9F5] text-[#171717] border border-[#E5EBE3] shadow-xs transition hover:border-brand-darkGreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} className="text-brand-darkGreen" />
                </Link>
              </div>

              {/* Brand Tagline & Quick Trust Indicators */}
              <div className="pt-6 border-t border-[#E5EBE3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-widest text-[#626B63] font-semibold">
                    OFFICIAL BRAND TAGLINE
                  </span>
                  <p className="text-sm font-bold text-brand-darkGreen italic font-heading">
                    "Your Growth Our Mission."
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-[#626B63]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-brand-darkGreen" />
                    <span>MCA & MSME Registered</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>Mumbai, India</span>
                </div>
              </div>

            </FadeIn>

            {/* Right Column: Founder Portrait with Premium Composition */}
            <FadeIn direction="left" delay={0.25} className="lg:col-span-5 relative w-full">
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md w-full">
                
                {/* Subtle Green Decorative Shapes */}
                <div className="absolute -top-5 -left-5 w-40 h-40 bg-[#7BCB25]/25 rounded-3xl blur-2xl pointer-events-none -z-10" />
                <div className="absolute -bottom-6 -right-6 w-52 h-52 bg-[#16851C]/20 rounded-full blur-2xl pointer-events-none -z-10" />
                
                {/* Elegant Geometric Accent Border */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#16851C]/25 via-[#7BCB25]/20 to-transparent rounded-[28px] -z-10" />

                {/* Elegant Framed Portrait Container */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E5EBE3] bg-white shadow-premium group">
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs border border-white/80 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7BCB25] animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#171717]">
                      Suyog Walke • Founder
                    </span>
                  </div>

                  {/* Top Right Official GISA Logo Badge */}
                  <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 bg-white/95 backdrop-blur-md p-1 sm:p-1.5 rounded-xl shadow-xs border border-white/80">
                    <img
                      src={gisaLogo}
                      alt="GISA Global Solutions LLP"
                      width="66"
                      height="24"
                      className="h-5 sm:h-6 w-auto object-contain"
                    />
                  </div>

                  {/* High-Resolution Professional Founder Portrait */}
                  <img
                    src={founderPhoto}
                    alt="Suyog Walke, Founder of GISA Global Solutions LLP"
                    width="576"
                    height="1024"
                    className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[360px] xs:min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="eager"
                  />

                  {/* Frosted Glass Floating Credentials Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-20 bg-[#171717]/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 text-white shadow-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold leading-tight">
                          Suyog Walke
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-[#7BCB25] font-semibold">
                          Founder – GISA Global Solutions LLP
                        </p>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider bg-white/10 px-1.5 sm:px-2 py-0.5 rounded text-gray-200">
                        Mumbai, India
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px]">
                      <span className="text-gray-300 italic">
                        "Your Growth Our Mission."
                      </span>
                      <a
                        href={contactInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7BCB25] hover:underline font-bold flex items-center gap-1"
                      >
                        <MessageCircle size={12} />
                        <span>Chat Direct</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: ABOUT SECTION (EDITORIAL TWO-COLUMN LAYOUT)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Visual & Founder Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5EBE3] bg-[#F6F9F5] shadow-card p-6 sm:p-8 space-y-5">
                
                {/* Founder Photo & Brand Logo Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-[#E5EBE3] shadow-xs flex-shrink-0 bg-white">
                    <img
                      src={founderPhoto}
                      alt="Suyog Walke, Founder of GISA Global Solutions LLP"
                      className="w-full h-full object-cover object-[center_28%]"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="p-1 bg-white rounded-lg border border-[#E5EBE3] inline-block mb-0.5">
                      <img
                        src={gisaLogo}
                        alt="GISA Global Solutions LLP"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#171717]">
                      Suyog Walke
                    </h3>
                    <p className="text-xs font-semibold text-brand-darkGreen">
                      Founder – GISA Global Solutions LLP
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed pt-3 border-t border-[#E5EBE3]">
                  Based exclusively in Mumbai, Maharashtra, India. Dedicated to guiding Indian entrepreneurs, consultants and specialized service firms into high-yielding international markets through structured advisory, verified market intelligence and hands-on client acquisition.
                </p>

                {/* Verified Social Channels */}
                <div className="pt-3 border-t border-[#E5EBE3] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#626B63]">
                    Founder Profiles:
                  </span>
                  <div className="flex items-center gap-1.5 font-semibold text-xs">
                    <a
                      href={contactInfo.founderSocials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded-md bg-[#F6F9F5] hover:bg-[#0A66C2] hover:text-white text-[#171717] border border-[#E5EBE3] transition flex items-center gap-1.5 group"
                      title="Suyog Walke LinkedIn"
                    >
                      <LinkedInIcon size={13} className="text-[#0A66C2] group-hover:text-white transition" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={contactInfo.founderSocials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded-md bg-[#F6F9F5] hover:bg-[#E4405F] hover:text-white text-[#171717] border border-[#E5EBE3] transition flex items-center gap-1.5 group"
                      title="Suyog Walke Instagram"
                    >
                      <InstagramIcon size={13} className="text-[#E4405F] group-hover:text-white transition" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={contactInfo.founderSocials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded-md bg-[#F6F9F5] hover:bg-[#1877F2] hover:text-white text-[#171717] border border-[#E5EBE3] transition flex items-center gap-1.5 group"
                      title="Suyog Walke Facebook"
                    >
                      <FacebookIcon size={13} className="text-[#1877F2] group-hover:text-white transition" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Narrative & Strong CTA */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                ABOUT SUYOG WALKE & GISA
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] leading-tight">
                Building Businesses Beyond Borders.
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-[#626B63] leading-relaxed">
                <p>
                  At <strong className="text-[#171717] font-semibold">GISA Global Solutions LLP</strong>, we believe that Indian professionals and service firms possess intellectual caliber that equals or surpasses international standards. However, breaking into overseas markets often presents steep hurdles: unfamiliar contracting norms, pricing skepticism, time zone disconnects, and marketing narratives that fail to inspire foreign buyer confidence.
                </p>
                <p>
                  Led by <strong className="text-[#171717] font-semibold">Suyog Walke</strong>, our consultancy works side-by-side with practice owners, technical leaders and boutique agencies to build structured bridges to international opportunity. We do not provide generic advice or detached theoretical reports; we help you systematically engineer your global presence, validate foreign demand and initiate direct dialogue with decision-makers abroad.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-brand-darkGreen hover:bg-[#137217] text-white px-6 py-3.5 rounded-xl transition shadow-xs"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/about-gisa"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-brand-darkGreen px-5 py-3 rounded-xl border border-[#E5EBE3] hover:border-brand-darkGreen transition bg-white"
                >
                  <span>Learn About GISA</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: SERVICES SECTION (5 SOPHISTICATED SERVICE CARDS)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              END-TO-END ADVISORY CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Our Core Services
            </h2>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              Five specialized consulting pillars designed to guide Indian service firms from domestic operations to sustainable global contracts.
            </p>
          </div>

          {/* 5 Sophisticated Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((svc) => (
              <ServiceCard
                key={svc.id}
                service={svc}
                onEnquire={(selectedService) =>
                  openEnquiryModal({
                    title: `Enquire: ${selectedService.title}`,
                    subtitle: `Discuss international scope for ${selectedService.title}`,
                    service: selectedService.title
                  })
                }
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-darkGreen hover:text-brand-deepForest bg-white border border-[#E5EBE3] hover:border-brand-darkGreen px-6 py-3 rounded-xl transition shadow-xs"
            >
              <span>Explore All Detailed Service Scopes & Deliverables</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5: WHY CHOOSE GISA (ASYMMETRIC GRID LAYOUT)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              STRATEGIC DIFFERENTIATORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Why Choose GISA Global Solutions?
            </h2>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              Built specifically for Indian service providers seeking institutional-grade expansion guidance without generic playbooks.
            </p>
          </div>

          {/* Asymmetric Grid: 6 Value Propositions with Unique Layout Treatments */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Featured Anchor Card (Span 7 cols) */}
            <div className="lg:col-span-7 bg-[#F6F9F5] rounded-2xl p-8 border border-[#E5EBE3] flex flex-col justify-between shadow-xs hover:border-brand-darkGreen transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-darkGreen bg-white px-3 py-1 rounded-full border border-[#E5EBE3]">
                    {differentiators[0].tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white text-brand-darkGreen flex items-center justify-center shadow-xs">
                    <TrendingUp size={20} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 group-hover:text-brand-darkGreen transition-colors">
                  {differentiators[0].title}
                </h3>
                <p className="text-sm text-[#626B63] leading-relaxed max-w-xl">
                  {differentiators[0].desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5EBE3] flex items-center gap-6 text-xs text-[#626B63]">
                <span className="flex items-center gap-1 font-semibold text-[#171717]">
                  <Check size={14} className="text-brand-darkGreen" />
                  Strategy & Research
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#171717]">
                  <Check size={14} className="text-brand-darkGreen" />
                  Branding & Outreach
                </span>
              </div>
            </div>

            {/* Card 2: Side Card (Span 5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#E5EBE3] flex flex-col justify-between shadow-xs hover:border-brand-darkGreen transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#626B63] bg-[#F6F9F5] px-3 py-1 rounded-full border border-[#E5EBE3]">
                    {differentiators[1].tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F6F9F5] text-brand-darkGreen flex items-center justify-center">
                    <Globe2 size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-brand-darkGreen transition-colors">
                  {differentiators[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                  {differentiators[1].desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E5EBE3] text-xs font-semibold text-brand-darkGreen">
                Targeting High-Currency Corridors
              </div>
            </div>

            {/* Card 3: Column Card (Span 4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-7 border border-[#E5EBE3] flex flex-col justify-between shadow-xs hover:border-brand-darkGreen transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#626B63] bg-[#F6F9F5] px-2.5 py-1 rounded-full">
                    {differentiators[2].tag}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F6F9F5] text-brand-darkGreen flex items-center justify-center">
                    <Compass size={18} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2 group-hover:text-brand-darkGreen transition-colors">
                  {differentiators[2].title}
                </h3>
                <p className="text-xs text-[#626B63] leading-relaxed">
                  {differentiators[2].desc}
                </p>
              </div>
            </div>

            {/* Card 4: Column Card (Span 4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-7 border border-[#E5EBE3] flex flex-col justify-between shadow-xs hover:border-brand-darkGreen transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#626B63] bg-[#F6F9F5] px-2.5 py-1 rounded-full">
                    {differentiators[3].tag}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F6F9F5] text-brand-darkGreen flex items-center justify-center">
                    <Award size={18} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2 group-hover:text-brand-darkGreen transition-colors">
                  {differentiators[3].title}
                </h3>
                <p className="text-xs text-[#626B63] leading-relaxed">
                  {differentiators[3].desc}
                </p>
              </div>
            </div>

            {/* Card 5: Column Card (Span 4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-7 border border-[#E5EBE3] flex flex-col justify-between shadow-xs hover:border-brand-darkGreen transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#626B63] bg-[#F6F9F5] px-2.5 py-1 rounded-full">
                    {differentiators[4].tag}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#F6F9F5] text-brand-darkGreen flex items-center justify-center">
                    <Users size={18} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2 group-hover:text-brand-darkGreen transition-colors">
                  {differentiators[4].title}
                </h3>
                <p className="text-xs text-[#626B63] leading-relaxed">
                  {differentiators[4].desc}
                </p>
              </div>
            </div>

            {/* Card 6: Bottom Wide Execution Card (Span 12 cols) */}
            <div className="lg:col-span-12 bg-[#F6F9F5] rounded-2xl p-8 border border-[#E5EBE3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs hover:border-brand-darkGreen transition-colors group">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-darkGreen bg-white px-3 py-1 rounded-full border border-[#E5EBE3]">
                    {differentiators[5].tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#171717] group-hover:text-brand-darkGreen transition-colors">
                  {differentiators[5].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                  {differentiators[5].desc}
                </p>
              </div>
              <Link
                to="/book-consultation"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition shadow-xs"
              >
                <span>Discuss Advisory Fit</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: OUR PROCESS (CONNECTED 5-STEP TIMELINE)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              PROVEN EXPANSION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Our 5-Step Growth Process
            </h2>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              A systematic, phased trajectory engineered to de-risk market entry and build compounding international momentum.
            </p>
          </div>

          {/* Connected Horizontal Timeline (Desktop) & Vertical (Mobile) */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-[#E5EBE3] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E5EBE3] shadow-xs hover:shadow-card transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Node */}
                    <div className="w-12 h-12 rounded-xl bg-[#F6F9F5] group-hover:bg-[#E8F5E9] text-brand-darkGreen font-extrabold text-base flex items-center justify-center mb-5 border border-[#E5EBE3] group-hover:border-brand-darkGreen transition-colors">
                      {step.num}
                    </div>

                    <h3 className="text-base font-bold text-[#171717] mb-2 group-hover:text-brand-darkGreen transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#626B63] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5EBE3] text-[11px] font-semibold text-[#626B63]">
                    Phase 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 7: PACKAGES (3 PREMIUM COMPARISON CARDS - NO PRICES)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              STRUCTURED ENGAGEMENT TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Comprehensive Growth Packages
            </h2>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              Tailored scopes designed for firms at every stage of their international journey. From initial market validation to multi-country enterprise presence.
            </p>
            <p className="text-xs text-[#626B63] italic">
              * Commercial agreements are tailored based on organizational complexity. No generic public pricing.
            </p>
          </div>

          {/* 3 Comparison Cards: Basic, Advanced (Featured), Premium */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {packagesData.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onEnquire={(selectedPkg) =>
                  openEnquiryModal({
                    title: `Enquire: ${selectedPkg.name} Package`,
                    subtitle: `Discuss commercial fit for ${selectedPkg.subtitle}`,
                    pkg: `${selectedPkg.name} (${selectedPkg.subtitle})`
                  })
                }
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-darkGreen hover:text-brand-deepForest bg-[#F6F9F5] border border-[#E5EBE3] hover:border-brand-darkGreen px-6 py-3 rounded-xl transition"
            >
              <span>Explore Detailed Package Inclusions & 60-Day Workflows</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 8: INDUSTRIES WE SERVE
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              SECTOR DEPTH & DOMAIN EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              Cross-border solutions customized for service niches where Indian talent commands distinctive competitive advantage.
            </p>
          </div>

          {/* Responsive Icon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <IndustryCard
                key={ind.id}
                industry={ind}
                onEnquire={(industryItem) =>
                  openEnquiryModal({
                    title: `Sector Strategy: ${industryItem.title}`,
                    subtitle: `Discuss international entry for ${industryItem.title}`,
                    service: `Industry Advisory: ${industryItem.title}`
                  })
                }
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="text-xs font-bold text-brand-darkGreen hover:underline inline-flex items-center gap-1"
            >
              <span>View In-Depth Industry Playbooks</span> →
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 9: GLOBAL MARKETS (INTERACTIVE CORRIDOR VISUAL)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7BCB25] font-mono">
              TARGET INTERNATIONAL CORRIDORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Target Global Markets
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We guide Indian firms into high-growth target markets across North America, the United Kingdom, Europe, the UAE, and the Asia-Pacific corridor.
            </p>
            <div className="inline-block p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#7BCB25]">
              <strong className="text-white">Regulatory Notice:</strong> These represent analyzed target export corridors for advisory clients, not international branch offices.
            </div>
          </div>

          {/* Interactive Region Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRegion === 'all'
                  ? 'bg-brand-darkGreen text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              All Corridors
            </button>
            <button
              onClick={() => setSelectedRegion('na')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRegion === 'na'
                  ? 'bg-brand-darkGreen text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              North America (US & Canada)
            </button>
            <button
              onClick={() => setSelectedRegion('emea')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRegion === 'emea'
                  ? 'bg-brand-darkGreen text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              United Kingdom & Europe
            </button>
            <button
              onClick={() => setSelectedRegion('gcc')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRegion === 'gcc'
                  ? 'bg-brand-darkGreen text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              UAE & Middle East
            </button>
            <button
              onClick={() => setSelectedRegion('apac')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRegion === 'apac'
                  ? 'bg-brand-darkGreen text-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Asia-Pacific (Australia & Singapore)
            </button>
          </div>

          {/* Country Cards with Subtle Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPrimaryMarkets.map((mkt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7BCB25]/60 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{mkt.flag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7BCB25] bg-[#7BCB25]/10 px-2 py-0.5 rounded">
                    Primary Corridor
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#7BCB25] transition-colors">
                  {mkt.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {mkt.overview}
                </p>
                <div className="text-[11px] text-gray-400 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span>Billing: <strong className="text-white">{mkt.currency}</strong></span>
                  <span className="text-[#7BCB25] font-semibold">{mkt.entryEase}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Markets Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Secondary Corridors Analyzed:
              </h4>
              <div className="flex flex-wrap gap-2">
                {targetMarketsData.secondary.slice(0, 7).map((sec, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5"
                  >
                    <span>{sec.flag}</span>
                    <span>{sec.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/global-markets"
              className="text-xs font-bold text-[#7BCB25] hover:underline inline-flex items-center gap-1 flex-shrink-0"
            >
              <span>Explore Detailed Market Playbooks</span> →
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 10: FOUNDER PROFILE ("Meet Suyog Walke")
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Side: Large Portrait with Refined Composition */}
            <div className="lg:col-span-5 relative group max-w-sm sm:max-w-md mx-auto w-full lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-60 h-60 bg-[#7BCB25]/20 rounded-full blur-2xl pointer-events-none -z-10" />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#16851C]/15 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="relative rounded-2xl overflow-hidden border border-[#E5EBE3] shadow-premium bg-[#F6F9F5]">
                <img
                  src={founderPhoto}
                  alt="Suyog Walke, Founder of GISA Global Solutions LLP"
                  width="576"
                  height="1024"
                  className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[380px] xs:min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Verified Social Profile Buttons Below Photo */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <a
                  href={contactInfo.founderSocials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F6F9F5] hover:bg-[#0A66C2] hover:text-white text-[#171717] transition text-xs font-semibold flex items-center gap-1.5 border border-[#E5EBE3] group shadow-sm"
                  title="Suyog Walke LinkedIn"
                >
                  <LinkedInIcon size={14} className="text-[#0A66C2] group-hover:text-white transition" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={contactInfo.founderSocials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F6F9F5] hover:bg-[#E4405F] hover:text-white text-[#171717] transition text-xs font-semibold flex items-center gap-1.5 border border-[#E5EBE3] group shadow-sm"
                  title="Suyog Walke Instagram"
                >
                  <InstagramIcon size={14} className="text-[#E4405F] group-hover:text-white transition" />
                  <span>Instagram</span>
                </a>
                <a
                  href={contactInfo.founderSocials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F6F9F5] hover:bg-[#1877F2] hover:text-white text-[#171717] transition text-xs font-semibold flex items-center gap-1.5 border border-[#E5EBE3] group shadow-sm"
                  title="Suyog Walke Facebook"
                >
                  <FacebookIcon size={14} className="text-[#1877F2] group-hover:text-white transition" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Right Side: Heading, Designation, Approved Biography, Vision & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                  LEADERSHIP & VISION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] mt-1">
                  Meet Suyog Walke
                </h2>
                <p className="text-sm font-semibold text-brand-darkGreen mt-0.5">
                  Founder – GISA Global Solutions LLP
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#626B63] leading-relaxed">
                <p>
                  Suyog Walke is the Founder of <strong className="text-[#171717] font-semibold">GISA Global Solutions LLP</strong>, an international business consultancy and growth solutions company based in Mumbai, India.
                </p>
                <p>
                  With a dedicated vision to help Indian professionals, consultants and service-based businesses explore opportunities beyond domestic boundaries, he established GISA to deliver structured cross-border market exploration, value-driven business strategies, authoritative brand presence, and direct connections with overseas clients.
                </p>
                <p>
                  Suyog operates with strict adherence to commercial integrity, empirical market research, and execution support. Rather than allowing capable Indian consultants to remain confined to domestic price wars or anonymous third-tier subcontracting, he works directly with practice leaders to build high-trust, globally competitive consulting practices.
                </p>
              </div>

              {/* Founder Quote */}
              <div className="p-4 bg-[#F6F9F5] rounded-xl border-l-4 border-brand-darkGreen text-xs sm:text-sm text-[#171717] italic leading-relaxed">
                "Indian talent and professional expertise can create a powerful impact in global markets. With the right strategy, market validation, and execution support, businesses can move beyond borders and unlock extraordinary growth."
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition"
                >
                  <Calendar size={15} />
                  <span>Connect With Us</span>
                </Link>

                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Suyog Walke</span>
                </a>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#171717] hover:text-brand-darkGreen px-4 py-3 rounded-xl border border-[#E5EBE3] hover:border-brand-darkGreen transition bg-white"
                >
                  <span>Read Full Profile</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11: CERTIFICATIONS & ACHIEVEMENTS
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
              CREDENTIALS & COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Verified Credentials & Registrations
            </h2>
            <p className="text-sm text-[#626B63]">
              Operating under strict corporate governance recognized by the Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#F6F9F5] rounded-2xl p-7 border border-[#E5EBE3] shadow-xs flex flex-col justify-between hover:border-brand-darkGreen transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen bg-white px-2.5 py-1 rounded-full border border-[#E5EBE3]">
                      Official Status
                    </span>
                    <ShieldCheck size={20} className="text-brand-darkGreen" />
                  </div>
                  <h3 className="text-lg font-bold text-[#171717] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#626B63] mb-2">
                    <strong>Issuing Authority:</strong> {cert.authority}
                  </p>
                  <p className="text-xs text-[#626B63] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E5EBE3] text-[11px] font-semibold text-brand-darkGreen flex items-center justify-between">
                  <span>{cert.status}</span>
                  <span className="text-[#626B63] font-normal">{cert.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/certifications"
              className="text-xs font-bold text-brand-darkGreen hover:underline inline-flex items-center gap-1"
            >
              <span>View Full MCA Registration Details</span> →
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 13: FINAL CTA (STRIKING DARK GREEN CONVERSION)
      ======================================================== */}
      <section className="py-10 md:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-deepForest via-brand-darkGreen to-[#137217] text-white p-8 sm:p-14 md:p-16 overflow-hidden shadow-2xl">
            {/* Subtle light accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#7BCB25]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-3xl relative z-10 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7BCB25] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                READY TO EXPAND?
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Your Global Growth Journey Starts Here.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Let's explore how your professional expertise and business capabilities can reach international markets with clarity, strategy and confidence.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-darkGreen hover:bg-gray-100 text-sm sm:text-base font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                >
                  <Calendar size={18} />
                  <span>Book a Consultation</span>
                </Link>

                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/20 text-white text-sm sm:text-base font-semibold px-7 py-4 rounded-xl border border-white/25 transition backdrop-blur-sm"
                >
                  <MessageCircle size={18} />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
