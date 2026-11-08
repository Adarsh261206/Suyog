import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import gisaLogo from '../assets/logo/gisa-logo.jpg';
import founderPhoto from '../assets/images/founder-suyog-walke.jpg';
import { FadeIn } from '../components/animations/MotionWrappers';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Target,
  Globe2,
  Compass,
  ShieldCheck,
  MessageCircle,
  Briefcase
} from 'lucide-react';
import { contactInfo } from '../data/navigation';
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '../components/common/SocialIcons';

export default function About() {
  useSEO({
    title: "About Suyog Walke – Founder, GISA Global Solutions LLP",
    description: "Meet Suyog Walke, Founder of GISA Global Solutions LLP in Mumbai, Maharashtra, India. Empowering Indian service enterprises to expand into high-value global markets."
  });

  const guidingPrinciples = [
    {
      title: "Commercial Integrity & Truth",
      desc: "We never advise expansion into markets without verified data. We present realistic hurdles, timelines, and honest assessments.",
      icon: ShieldCheck
    },
    {
      title: "Outcome Over Activity",
      desc: "Consultancy must yield meaningful client engagements, not endless slide decks. Every action is measured by pipeline momentum.",
      icon: Target
    },
    {
      title: "Elevating Indian Expertise",
      desc: "Indian consultants possess world-class capabilities. We refuse to let them compete solely on price when their value is strategic.",
      icon: Globe2
    },
    {
      title: "Execution-Backed Advisory",
      desc: "Strategy without execution support fails. We rehearse pitches, refine proposals, and optimize cross-border client onboarding.",
      icon: Compass
    }
  ];

  const visionPillars = [
    {
      title: "From Low-Cost Vendor to Strategic Authority",
      desc: "Shifting the global perception of Indian service providers from cheap offshore labor to authoritative, indispensable consulting partners commanding premium project rates."
    },
    {
      title: "Empirical Market Intelligence",
      desc: "Eliminating guesswork with rigorous target market research, trade data analysis, tariff assessment, and competitor intelligence across US, UK, EU, UAE, and APAC."
    },
    {
      title: "Structured Cross-Border Execution",
      desc: "Providing end-to-end operational roadmaps—from international business setup and contracts to multi-currency invoicing and SLA alignment."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero / Founder Profile Section */}
      <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F6F9F5] to-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Dedicated Founder Portrait Card */}
            <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto w-full lg:max-w-none">
              <FadeIn>
                <div className="relative group">
                  {/* Subtle Decorative Backdrop */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-darkGreen/15 via-[#7BCB25]/20 to-brand-darkGreen/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />

                  <div className="relative bg-white rounded-2xl p-4 sm:p-5 border border-[#E5EBE3] shadow-premium overflow-hidden">
                    
                    {/* Portrait Container */}
                    <div className="relative rounded-xl overflow-hidden bg-[#F6F9F5]">
                      {/* Top Status Pill */}
                      <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs border border-white/80 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#7BCB25] animate-pulse" />
                        <span className="text-[11px] font-bold text-[#171717]">
                          Suyog Walke • Founder
                        </span>
                      </div>

                      {/* Official GISA Brand Logo */}
                      <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-md p-1.5 rounded-xl shadow-xs border border-white/80">
                        <img
                          src={gisaLogo}
                          alt="GISA Global Solutions"
                          width="66"
                          height="24"
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      </div>

                      {/* Founder Portrait */}
                      <img
                        src={founderPhoto}
                        alt="Suyog Walke, Founder of GISA Global Solutions LLP"
                        width="576"
                        height="1024"
                        className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[360px] xs:min-h-[400px] sm:min-h-[450px] lg:min-h-[490px] object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-[1.01]"
                        loading="eager"
                      />

                      {/* Floating Credentials Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#171717]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold leading-tight">
                              Suyog Walke
                            </h4>
                            <p className="text-[11px] text-[#7BCB25] font-semibold">
                              Founder – GISA Global Solutions LLP
                            </p>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-gray-200">
                            Mumbai, India
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contact & Socials Information Box */}
                    <div className="mt-4 pt-3 border-t border-[#E5EBE3] space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#626B63]">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-brand-darkGreen" />
                          <span>Mumbai, Maharashtra, India</span>
                        </span>
                        <a
                          href={contactInfo.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-semibold text-brand-darkGreen hover:underline"
                        >
                          <MessageCircle size={14} />
                          <span>+91 9172057497</span>
                        </a>
                      </div>

                      {/* Verified Founder Social Links */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#626B63]">
                          Verified Profiles
                        </span>
                        <div className="flex items-center gap-1.5">
                          <a
                            href={contactInfo.founderSocials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-[#F6F9F5] hover:bg-[#0A66C2] hover:text-white text-[#171717] transition text-[11px] font-semibold flex items-center gap-1.5 border border-[#E5EBE3] group shadow-sm"
                            title="LinkedIn Profile"
                          >
                            <LinkedInIcon size={12} className="text-[#0A66C2] group-hover:text-white transition" />
                            <span>LinkedIn</span>
                          </a>
                          <a
                            href={contactInfo.founderSocials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-[#F6F9F5] hover:bg-[#E4405F] hover:text-white text-[#171717] transition text-[11px] font-semibold flex items-center gap-1.5 border border-[#E5EBE3] group shadow-sm"
                            title="Instagram Profile"
                          >
                            <InstagramIcon size={12} className="text-[#E4405F] group-hover:text-white transition" />
                            <span>Instagram</span>
                          </a>
                          <a
                            href={contactInfo.founderSocials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-[#F6F9F5] hover:bg-[#1877F2] hover:text-white text-[#171717] transition text-[11px] font-semibold flex items-center gap-1.5 border border-[#E5EBE3] group shadow-sm"
                            title="Facebook Profile"
                          >
                            <FacebookIcon size={12} className="text-[#1877F2] group-hover:text-white transition" />
                            <span>Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Narrative Biography, Vision & Ethos */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0.15}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-brand-darkGreen text-xs font-bold uppercase tracking-wider mb-2">
                  <Briefcase size={14} />
                  <span>FOUNDER PROFILE & ADVISORY LEADERSHIP</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] leading-tight">
                  Meet Suyog Walke
                </h1>

                <p className="text-base sm:text-lg text-brand-darkGreen font-semibold mt-1">
                  Founder – GISA Global Solutions LLP
                </p>
                <p className="text-xs uppercase tracking-widest text-[#626B63] font-mono">
                  "Your Growth Our Mission."
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="space-y-4 text-sm sm:text-base text-[#626B63] leading-relaxed">
                  <p>
                    As the Founder of <strong className="text-[#171717] font-semibold">GISA Global Solutions LLP</strong>, Suyog Walke established the firm in Mumbai, Maharashtra, India to address an urgent, structural disparity in India's modern service economy.
                  </p>
                  <p>
                    India produces exceptional software engineers, management consultants, creative directors, chartered accountants, and technical specialists. Yet, countless established domestic agencies remain trapped in exhausting local price wars, or serve as invisible third-tier subcontractors for overseas brokerages that retain 70% of the value.
                  </p>
                  <p>
                    Suyog's vision is built on empowering these service leaders to bypass intermediaries and engage directly with international enterprise clients across North America, the United Kingdom, Europe, the United Arab Emirates, and the Asia-Pacific corridor.
                  </p>
                  <p>
                    Under his leadership, GISA unites strategy, empirical market research, authoritative global branding, international business development, and operational cross-border governance under a single structured platform. He adheres strictly to factual validation, transparent metrics, and hands-on advisory.
                  </p>
                </div>
              </FadeIn>

              {/* Quick Credentials Strip */}
              <FadeIn delay={0.35}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-[#F6F9F5] rounded-xl border border-[#E5EBE3]">
                    <div className="text-[10px] font-bold text-[#626B63] uppercase tracking-wider">Entity</div>
                    <div className="text-xs font-bold text-[#171717] mt-0.5">GISA Global Solutions LLP</div>
                  </div>
                  <div className="p-3.5 bg-[#F6F9F5] rounded-xl border border-[#E5EBE3]">
                    <div className="text-[10px] font-bold text-[#626B63] uppercase tracking-wider">Headquarters</div>
                    <div className="text-xs font-bold text-[#171717] mt-0.5">Mumbai, India</div>
                  </div>
                  <div className="p-3.5 bg-[#F6F9F5] rounded-xl border border-[#E5EBE3] col-span-2 sm:col-span-1">
                    <div className="text-[10px] font-bold text-[#626B63] uppercase tracking-wider">Registrations</div>
                    <div className="text-xs font-bold text-brand-darkGreen mt-0.5">MCA & MSME Recognized</div>
                  </div>
                </div>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn delay={0.45}>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-xs transition"
                  >
                    <Calendar size={16} />
                    <span>Schedule Consultation with Suyog</span>
                  </Link>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#E5EBE3] text-brand-darkGreen hover:bg-[#F6F9F5] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition bg-white"
                  >
                    <MessageCircle size={16} />
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Professional Vision for Indian Service Exporters */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              STRATEGIC PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              Suyog Walke's Vision for Indian Enterprises
            </h2>
            <p className="text-sm text-[#626B63]">
              Transforming how Indian service businesses position, pitch, and deliver to international corporate buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {visionPillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E5EBE3] shadow-xs hover:border-brand-darkGreen transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#E8F5E9] text-brand-darkGreen flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#171717] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#E5EBE3] flex items-center text-xs font-semibold text-brand-darkGreen">
                  <CheckCircle2 size={14} className="mr-2" />
                  <span>Verified Growth Principle</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles / Leadership Philosophy */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              LEADERSHIP PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              The Principles Guiding Every Advisory Client
            </h2>
            <p className="text-sm text-[#626B63]">
              The ethical and operational anchors behind Suyog Walke's advisory practice at GISA Global Solutions LLP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {guidingPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E5EBE3] hover:border-brand-darkGreen transition-colors shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F6F9F5] text-brand-darkGreen flex items-center justify-center mb-4 border border-[#E5EBE3]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#171717] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connection with GISA Global Solutions LLP */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-deepForest to-brand-darkGreen text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7BCB25] font-mono">
                CORPORATE NEXUS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                GISA Global Solutions LLP – Mumbai, India
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                Suyog Walke leads all advisory operations from GISA Global Solutions LLP corporate headquarters in Mumbai, Maharashtra, India. Registered under the Ministry of Corporate Affairs (MCA) and the Ministry of MSME, Government of India.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#7BCB25] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> MCA Incorporated LLP
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> MSME Enterprise Recognition
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Mumbai, Maharashtra Only
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/about-gisa"
                className="bg-white text-brand-darkGreen hover:bg-gray-100 px-6 py-3 rounded-xl font-bold text-xs shadow transition text-center"
              >
                Explore GISA Firm Profile
              </Link>
              <Link
                to="/certifications"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-xs transition text-center"
              >
                View Registrations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
