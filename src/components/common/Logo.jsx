import React from 'react';
import { Link } from 'react-router-dom';
import gisaLogo from '../../assets/logo/gisa-logo.jpg';

export default function Logo({ variant = 'default', showTagline = false, className = '', imgClassName = '' }) {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official GISA Brand Logo */}
      <div
        className={`relative flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:scale-[1.02] ${
          isLight
            ? 'bg-white p-1.5 rounded-xl shadow-md border border-white/20'
            : 'bg-transparent'
        }`}
      >
        <img
          src={gisaLogo}
          alt="GISA Global Solutions LLP – Your Growth Our Mission"
          width="437"
          height="159"
          className={`h-11 xs:h-12 sm:h-13 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${imgClassName}`}
        />
      </div>

      {/* Subtitle / Legal Entity Text if Light/Footer */}
      {isLight && (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold tracking-tight text-white font-serif">
            GISA Global Solutions LLP
          </span>
          <span className="text-[10px] text-brand-lightGreen font-semibold tracking-wider uppercase">
            Suyog Walke • Founder
          </span>
        </div>
      )}
    </Link>
  );
}
