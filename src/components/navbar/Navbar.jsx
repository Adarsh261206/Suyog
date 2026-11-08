import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Calendar } from 'lucide-react';
import Logo from '../common/Logo';
import { navLinks, contactInfo } from '../../data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or ESC key
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMobileSubmenu = (name) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2 border-b border-[#E5EBE3]'
          : 'bg-white/95 backdrop-blur-sm py-2.5 lg:py-3 border-b border-[#E5EBE3]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <div className="flex-shrink-0">
            <Logo showTagline={false} />
          </div>

          {/* Navigation Links in Middle (Desktop & Laptop: 1024px+) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-0.5 xl:space-x-1"
          >
            {navLinks.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isActive =
                location.pathname === item.path ||
                (hasDropdown && item.dropdown.some((d) => location.pathname === d.path));

              if (hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={openDropdown === item.name}
                      className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-[13px] font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen rounded-lg ${
                        isActive
                          ? 'text-brand-darkGreen font-bold'
                          : 'text-brand-darkText hover:text-brand-darkGreen'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.name
                            ? 'rotate-180 text-brand-darkGreen'
                            : 'text-gray-400'
                        }`}
                      />

                      {/* Active / Hover Underline Indicator */}
                      <span
                        className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-brand-darkGreen rounded-full transition-all duration-200 ${
                          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        }`}
                      />
                    </button>

                    {/* Smooth Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-2xl shadow-premium border border-[#E5EBE3] p-3 overflow-hidden">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-[#626B63] px-3 py-1.5 border-b border-[#E5EBE3] mb-1 font-mono">
                            {item.name} Directory
                          </div>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block p-2.5 rounded-xl hover:bg-[#F6F9F5] transition-colors group/sub focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-darkGreen"
                            >
                              <div className="text-xs font-semibold text-brand-darkText group-hover/sub:text-brand-darkGreen flex items-center justify-between">
                                <span>{subItem.name}</span>
                                <ArrowRight
                                  size={12}
                                  className="opacity-0 group-hover/sub:opacity-100 transition-opacity text-brand-darkGreen"
                                />
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-[#626B63] mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-[13px] font-semibold tracking-tight transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen rounded-lg ${
                    isActive
                      ? 'text-brand-darkGreen font-bold'
                      : 'text-brand-darkText hover:text-brand-darkGreen'
                  }`}
                >
                  <span>{item.name}</span>

                  {/* Active / Hover Underline */}
                  <span
                    className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-brand-darkGreen rounded-full transition-all duration-200 ${
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Consultation Button on Right (Desktop: 1024px+) */}
          <div className="hidden lg:flex items-center">
            {/* Premium CTA Button */}
            <Link
              to="/book-consultation"
              className="group inline-flex items-center gap-2 bg-brand-darkGreen hover:bg-[#126e17] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 border border-[#137217] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkGreen focus-visible:ring-offset-2"
            >
              <Calendar size={15} className="text-[#7BCB25] group-hover:text-white transition-colors" />
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* Mobile Actions & Toggle (< 1024px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-1 text-xs font-bold bg-brand-darkGreen text-white px-2.5 sm:px-3 py-1.5 rounded-lg shadow-xs min-h-[36px]"
            >
              <Calendar size={13} />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-brand-darkText hover:text-brand-darkGreen hover:bg-[#F6F9F5] transition focus-visible:ring-2 focus-visible:ring-brand-darkGreen min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Down Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5EBE3] shadow-xl max-h-[85vh] overflow-y-auto px-4 py-4 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="border-b border-[#E5EBE3] pb-3 mb-2 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#626B63] uppercase tracking-wider font-mono">
              Navigation Menu
            </span>
            <span className="text-xs font-bold text-brand-darkGreen">
              Suyog Walke • GISA
            </span>
          </div>

          {navLinks.map((item) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isSubOpen = mobileSubmenu === item.name;

            if (hasDropdown) {
              return (
                <div key={item.name} className="border-b border-[#E5EBE3]/50 pb-1">
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-brand-darkText hover:text-brand-darkGreen cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={`text-[#626B63] transition-transform ${
                        isSubOpen ? 'rotate-180 text-brand-darkGreen' : ''
                      }`}
                    />
                  </button>
                  {isSubOpen && (
                    <div className="pl-3 pb-2 space-y-1 bg-[#F6F9F5] rounded-xl p-2 my-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2.5 px-3 text-xs font-medium text-brand-darkText hover:text-brand-darkGreen hover:bg-white rounded-lg transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-semibold text-brand-darkText hover:text-brand-darkGreen border-b border-[#E5EBE3]/50"
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile Drawer Actions */}
          <div className="pt-3 space-y-2">
            <Link
              to="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white font-semibold py-3 rounded-xl shadow-xs text-center text-sm min-h-[44px]"
            >
              <Calendar size={16} />
              <span>Book a Consultation</span>
            </Link>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-[#E5EBE3] text-brand-darkText hover:border-brand-darkGreen font-semibold py-2.5 rounded-xl text-center text-xs bg-[#F6F9F5] min-h-[44px]"
            >
              <span>WhatsApp Direct (+91 9172057497)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
