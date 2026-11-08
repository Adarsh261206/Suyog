import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';
import Logo from '../common/Logo';
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '../common/SocialIcons';
import { contactInfo } from '../../data/navigation';
import { servicesData } from '../../data/services';
import { packagesData } from '../../data/packages';

export default function Footer() {
  return (
    <footer className="bg-brand-darkCharcoal text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Band: Trust & Positioning Statement */}
        <div className="pb-12 mb-12 border-b border-gray-800 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lightGreen">
              FOUNDER & INTERNATIONAL ADVISORY
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
              "Your Growth Our Mission."
            </h3>
            <p className="text-sm text-gray-400 mt-2 max-w-2xl leading-relaxed">
              Empowering Indian professionals, boutique consultancies, and specialized service firms to build credible, high-value commercial presences across North America, the UK, Europe, and the Middle East.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-6 py-3 rounded-xl font-semibold text-sm transition shadow-lg"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-brand-lightGreen text-white px-5 py-3 rounded-xl font-semibold text-sm transition hover:bg-white/5"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Founder Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-3">
              <strong className="text-white font-medium">Suyog Walke</strong> is the Founder of <strong className="text-white font-medium">GISA Global Solutions LLP</strong>, an international business consultancy dedicated to taking Indian service expertise to lucrative overseas markets.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-lightGreen flex-shrink-0 mt-0.5" />
                <span>Operational Headquarters: Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-lightGreen flex-shrink-0" />
                <a href="tel:+919172057497" className="hover:text-white transition">+91 9172057497</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-lightGreen flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition">{contactInfo.email}</a>
              </div>
            </div>

            {/* Founder & Company Social Channels (Separated per Brief Section 15) */}
            <div className="pt-3 space-y-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1.5">
                  Founder Profiles (Suyog Walke)
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={contactInfo.founderSocials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-[#0A66C2] text-white transition text-xs font-medium flex items-center gap-1.5 group border border-gray-700/60"
                    title="Suyog Walke LinkedIn"
                  >
                    <LinkedInIcon size={14} className="text-[#0A66C2] group-hover:text-white transition" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={contactInfo.founderSocials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-[#E4405F] text-white transition text-xs font-medium flex items-center gap-1.5 group border border-gray-700/60"
                    title="Suyog Walke Instagram"
                  >
                    <InstagramIcon size={14} className="text-[#E4405F] group-hover:text-white transition" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={contactInfo.founderSocials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-[#1877F2] text-white transition text-xs font-medium flex items-center gap-1.5 group border border-gray-700/60"
                    title="Suyog Walke Facebook"
                  >
                    <FacebookIcon size={14} className="text-[#1877F2] group-hover:text-white transition" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1.5">
                  Company Profiles (GISA Global Solutions LLP)
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={contactInfo.companySocials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-[#0A66C2] text-white transition text-xs font-medium flex items-center gap-1.5 group border border-gray-700/60"
                    title="GISA LinkedIn Company Page"
                  >
                    <LinkedInIcon size={14} className="text-[#0A66C2] group-hover:text-white transition" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={contactInfo.companySocials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-[#E4405F] text-white transition text-xs font-medium flex items-center gap-1.5 group border border-gray-700/60"
                    title="GISA Instagram Profile"
                  >
                    <InstagramIcon size={14} className="text-[#E4405F] group-hover:text-white transition" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={contactInfo.companySocials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-gray-800/90 hover:bg-[#1877F2] text-white transition text-xs font-medium flex items-center gap-1.5 group border border-gray-700/60"
                    title="GISA Facebook Page"
                  >
                    <FacebookIcon size={14} className="text-[#1877F2] group-hover:text-white transition" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="hover:text-brand-lightGreen transition block py-0.5"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-brand-lightGreen font-semibold inline-flex items-center gap-1 mt-2">
                  <span>View All Services</span> →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Packages & Focus */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Growth Packages
            </h4>
            <ul className="space-y-2.5 text-xs">
              {packagesData.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="hover:text-brand-lightGreen transition block py-0.5"
                  >
                    <span className="font-bold text-white">{pkg.name}</span> – {pkg.subtitle}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/industries" className="hover:text-brand-lightGreen transition block py-0.5">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/global-markets" className="hover:text-brand-lightGreen transition block py-0.5">
                  Target Global Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Compliance */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-brand-lightGreen transition block py-0.5">
                  About Suyog Walke
                </Link>
              </li>
              <li>
                <Link to="/about-gisa" className="hover:text-brand-lightGreen transition block py-0.5">
                  About GISA Global Solutions
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-brand-lightGreen transition block py-0.5">
                  Certifications & MCA Reg.
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-brand-lightGreen transition block py-0.5">
                  Advisory Insights & Articles
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-brand-lightGreen transition block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-brand-lightGreen transition block py-0.5">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-brand-lightGreen transition block py-0.5">
                  Disclaimer & Jurisdiction
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">GISA Global Solutions LLP</span>. All Rights Reserved.
            </p>
            <p className="text-[11px] text-gray-400">
              Personal brand of Suyog Walke, Founder – GISA Global Solutions LLP. Registered in Mumbai, Maharashtra, India.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-gray-400">
              <ShieldCheck size={14} className="text-brand-lightGreen" />
              MCA Registered LLP
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Globe size={14} className="text-brand-lightGreen" />
              Serving Indian Exporters
            </span>
            <Link to="/disclaimer" className="hover:text-gray-300 underline underline-offset-2">
              Legal Disclaimers
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-brand-lightGreen transition" title="Founder Admin Portal">
              Portal Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

