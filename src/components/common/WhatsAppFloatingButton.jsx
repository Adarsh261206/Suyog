import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919172057497";

  const defaultMessage = "Hello Suyog Walke, I am interested in exploring international growth advisory with GISA Global Solutions LLP.";

  const quickOptions = [
    { label: "Book a Consultation", text: "Hello Suyog, I would like to schedule an exploratory consultation regarding international expansion." },
    { label: "Enquire About Services", text: "Hello Suyog, I would like more details about GISA's International Business Consultancy services." },
    { label: "Package Enquiries", text: "Hello Suyog, I would like to enquire about GISA's Business Growth Packages (Basic, Advanced, Premium)." },
    { label: "General Discussion", text: defaultMessage },
  ];

  const handleOpenWhatsApp = (customText) => {
    const encoded = encodeURIComponent(customText || defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 sm:mb-4 w-[calc(100vw-2rem)] max-w-xs sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-gradient-to-r from-brand-deepForest to-brand-darkGreen p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                SW
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Suyog Walke</h4>
                <p className="text-xs text-brand-lightGreen flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-brand-lightGreen animate-pulse"></span>
                  GISA Global Solutions LLP
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
              aria-label="Close WhatsApp popup"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 bg-brand-lightBg/50 text-xs text-gray-600">
            <p className="mb-3 leading-relaxed">
              Welcome! How can we assist your business in exploring international markets today?
            </p>
            <div className="space-y-2">
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(opt.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-gray-200 hover:border-brand-darkGreen hover:bg-brand-emeraldTint/40 text-brand-darkCharcoal text-xs font-medium transition duration-150 flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <span className="text-brand-darkGreen group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-400">
              Official WhatsApp: +91 9172057497 • Mumbai, India
            </p>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp with Suyog Walke"
      >
        <MessageCircle size={28} className="text-white fill-white" />
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lightGreen opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-darkGreen border-2 border-white"></span>
        </span>

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-brand-darkCharcoal text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}

