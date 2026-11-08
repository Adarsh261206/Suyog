import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import founderPhoto from '../assets/images/founder-suyog-walke.jpg';
import {
  Globe2,
  Building2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Target,
  Award
} from 'lucide-react';
import Logo from '../components/common/Logo';

export default function AboutGisa() {
  useSEO({
    title: "About GISA Global Solutions LLP – Corporate Profile & Vision",
    description: "GISA Global Solutions LLP is an international business consultancy founded by Suyog Walke in Mumbai, Maharashtra, India. Your Growth Our Mission."
  });

  const coreValues = [
    {
      title: "Integrity Above All",
      desc: "We prioritize realistic, data-backed assessments over flattering promises. If a market isn't viable for your offering, we tell you frankly."
    },
    {
      title: "Strategic Depth",
      desc: "International corporate buyers are sophisticated. We develop robust business models, high-tier pricing logic, and defensible positioning."
    },
    {
      title: "Execution Discipline",
      desc: "Strategy without execution is a distraction. We provide hands-on templates, outreach workflows, and cross-border operational guidance."
    },
    {
      title: "National Pride",
      desc: "We exist to showcase the true depth of Indian intellect and professionalism on the world's most demanding corporate stages."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#F6F9F5] to-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
              <Building2 size={14} />
              <span>CORPORATE ADVISORY FIRM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#171717] leading-tight">
              About GISA Global Solutions LLP
            </h1>
            <p className="text-base sm:text-lg text-brand-darkGreen font-semibold">
              "Your Growth Our Mission."
            </p>
            <p className="text-sm sm:text-base text-[#626B63] leading-relaxed">
              Founded by Suyog Walke, GISA Global Solutions LLP is an international business consultancy dedicated to helping Indian service-oriented enterprises, consultants, and technical agencies navigate, enter, and thrive in global commercial markets.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview Card */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F6F9F5] rounded-2xl p-8 sm:p-12 border border-[#E5EBE3] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                Empowering Indian Service Firms to Expand Beyond Domestic Horizons
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#626B63] leading-relaxed">
                <p>
                  GISA was established to address the critical gap facing Indian service businesses: having stellar domestic capability, but lacking the specialized international business development architecture needed to compete on the global stage.
                </p>
                <p>
                  From our corporate headquarters in Mumbai, Maharashtra, India, we work directly with founders, practice directors, and agency leaders across India. Our comprehensive advisory encompasses the five pillars of cross-border scale: international consultancy, market research, global branding, client acquisition, and operational governance.
                </p>
                <p>
                  We do not operate speculative overseas offices or make unverified claims. Our focus is squarely on strategic advisory and execution support delivered right from India, enabling your team to invoice in foreign currencies and build sustainable international relationships.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-[#171717]">
                <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#E5EBE3]">
                  <MapPin size={14} className="text-brand-darkGreen" />
                  Mumbai, Maharashtra, India
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#E5EBE3]">
                  <ShieldCheck size={14} className="text-brand-darkGreen" />
                  MCA Registered LLP
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#E5EBE3]">
                  <Award size={14} className="text-brand-darkGreen" />
                  MSME Registered Enterprise
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 border border-[#E5EBE3] flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <Logo showTagline={true} />
                <div className="border-t border-[#E5EBE3] pt-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#626B63] mb-2.5">
                    Key Corporate Facts
                  </h4>
                  <ul className="space-y-2 text-xs text-[#171717]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-brand-darkGreen mt-0.5 flex-shrink-0" />
                      <span><strong>Entity:</strong> GISA Global Solutions LLP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-brand-darkGreen mt-0.5 flex-shrink-0" />
                      <span><strong>Founder:</strong> Suyog Walke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-brand-darkGreen mt-0.5 flex-shrink-0" />
                      <span><strong>Tagline:</strong> "Your Growth Our Mission."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-brand-darkGreen mt-0.5 flex-shrink-0" />
                      <span><strong>Headquarters:</strong> Mumbai, Maharashtra, India</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-brand-darkGreen mt-0.5 flex-shrink-0" />
                      <span><strong>Primary Sectors:</strong> Consulting, Tech, Healthcare, Architecture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E5EBE3] mt-6">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white py-3 rounded-xl text-xs font-semibold transition shadow-xs"
                >
                  <span>Connect with Corporate Office</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#171717] text-white rounded-2xl p-8 sm:p-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-darkGreen text-white flex items-center justify-center">
                <Target size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                To systematically enable Indian consultants, technical specialists, and service enterprises to overcome cross-border barriers, establish authoritative international positioning, and secure high-value global contracts through verified research, strategic guidance, and actionable execution support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-deepForest to-brand-darkGreen text-white rounded-2xl p-8 sm:p-10 space-y-4 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#7BCB25] flex items-center justify-center">
                <Globe2 size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-100 leading-relaxed">
                To be the premier international business advisory partner for India's service economy—recognized for transforming domestic service firms into respected, globally competitive consulting practices that command international pricing and lasting corporate respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership: Meet the Founder */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5] border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E5EBE3] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-darkGreen to-brand-lightGreen rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition" />
                <div className="relative rounded-xl overflow-hidden bg-[#F6F9F5] shadow-xs border border-[#E5EBE3]">
                  <img
                    src={founderPhoto}
                    alt="Suyog Walke, Founder of GISA Global Solutions LLP"
                    width="576"
                    height="1024"
                    className="w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] min-h-[340px] sm:min-h-[380px] object-cover object-[center_28%]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#171717]/90 backdrop-blur-md p-3 rounded-xl text-white text-xs border border-white/10">
                    <p className="font-bold text-sm">Suyog Walke</p>
                    <p className="text-[#7BCB25] text-[11px] font-semibold">Founder – GISA Global Solutions LLP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-darkGreen font-mono">
                FIRM LEADERSHIP & VISIONARY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                Guided by Founder Suyog Walke
              </h3>
              <p className="text-xs sm:text-sm text-[#626B63] leading-relaxed">
                GISA Global Solutions LLP was conceived and founded by Suyog Walke to give Indian service-based enterprises, consultants, and technical agencies a clear, structured, and realistic path into international commerce. Operating from Mumbai, Suyog personally advises practice leaders on market readiness, value positioning, and cross-border client acquisition.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-xs transition"
                >
                  <span>Read Suyog Walke's Full Profile</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 border border-[#E5EBE3] text-brand-darkGreen hover:bg-[#F6F9F5] px-5 py-2.5 rounded-xl font-semibold text-xs transition bg-white"
                >
                  <span>Schedule a Session with Founder</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 md:py-12 lg:py-14 bg-white border-b border-[#E5EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-darkGreen">
              ETHICAL FOUNDATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
              The Values That Drive GISA
            </h2>
            <p className="text-sm text-[#626B63]">
              Upholding the highest standards of professional advisory and corporate transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#F6F9F5] border border-[#E5EBE3] space-y-2 hover:border-brand-darkGreen transition shadow-xs"
              >
                <div className="text-xs font-bold text-brand-darkGreen font-mono">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-[#171717]">
                  {v.title}
                </h4>
                <p className="text-xs text-[#626B63] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 md:py-12 lg:py-14 bg-[#F6F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E5EBE3] text-center space-y-4 shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              Ready to Explore How GISA Can Guide Your Firm?
            </h3>
            <p className="text-xs sm:text-sm text-[#626B63] max-w-xl mx-auto">
              Schedule an initial consultation with Founder Suyog Walke to review your firm's international readiness.
            </p>
            <div className="pt-2">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition"
              >
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
