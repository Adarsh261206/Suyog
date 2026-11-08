import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import WhatsAppFloatingButton from '../components/common/WhatsAppFloatingButton';
import EnquiryModal from '../components/forms/EnquiryModal';
import useScrollToTop from '../hooks/useScrollToTop';

export default function MainLayout() {
  useScrollToTop();
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    subtitle: '',
    service: '',
    pkg: ''
  });

  const openEnquiryModal = ({ title, subtitle, service, pkg } = {}) => {
    setModalState({
      isOpen: true,
      title: title || "Enquire About International Advisory",
      subtitle: subtitle || "Discuss tailored global growth options with Suyog Walke",
      service: service || "",
      pkg: pkg || ""
    });
  };

  const closeEnquiryModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-darkText selection:bg-brand-lightGreen/30 selection:text-brand-darkGreen w-full max-w-full overflow-x-hidden relative">
      {/* Top Advisory Notice Bar */}
      <div className="bg-[#0B4710] text-white text-[11px] py-1.5 px-4 text-center border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide">
            Taking Indian Expertise to Global Opportunities • Mumbai, Maharashtra, India
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#7BCB25] font-semibold">Official WhatsApp: +91 9172057497</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">GISA Global Solutions LLP</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Page Content Outlet (Natural flow without hardcoded arbitrary top padding) */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Outlet context={{ openEnquiryModal }} />
      </main>

      {/* Persistent Global Floating WhatsApp */}
      <WhatsAppFloatingButton />

      {/* Global Contextual Enquiry Modal */}
      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={closeEnquiryModal}
        title={modalState.title}
        subtitle={modalState.subtitle}
        defaultService={modalState.service}
        defaultPackage={modalState.pkg}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
