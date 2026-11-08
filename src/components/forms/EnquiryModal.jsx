import React from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function EnquiryModal({
  isOpen,
  onClose,
  title = "Enquire About International Growth",
  subtitle = "Discuss tailored advisory solutions with Suyog Walke",
  defaultService = "",
  defaultPackage = ""
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-darkCharcoal/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-2xl w-full p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-4 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-darkGreen">
              GISA GLOBAL SOLUTIONS LLP
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand-darkCharcoal mt-0.5">
              {title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <EnquiryForm
          defaultService={defaultService}
          defaultPackage={defaultPackage}
          onSuccessCallback={() => {
            // keep open long enough to see confirmation, user can dismiss or notify via WhatsApp
          }}
        />
      </div>
    </div>
  );
}

