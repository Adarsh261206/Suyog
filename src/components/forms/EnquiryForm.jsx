import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../../data/services';
import { packagesData } from '../../data/packages';

export default function EnquiryForm({
  defaultService = '',
  defaultPackage = '',
  onSuccessCallback,
  compact = false
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      whatsappNumber: '',
      country: 'India',
      businessName: '',
      professionalCategory: 'Professional & Consulting Services',
      interestedService: defaultService || '',
      interestedPackage: defaultPackage || '',
      currentBusinessStage: 'Established Domestic Business (Ready to Export)',
      targetMarkets: ['United States', 'United Kingdom'],
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API integration (ready for CRM/Email endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Store in localStorage for CRM / session audit
      const existingLeads = JSON.parse(localStorage.getItem('gisa_leads') || '[]');
      const newLead = {
        ...data,
        id: 'LEAD-' + Date.now(),
        timestamp: new Date().toISOString(),
        source: window.location.pathname
      };
      existingLeads.unshift(newLead);
      localStorage.setItem('gisa_leads', JSON.stringify(existingLeads));

      setSubmittedData(data);
      setSubmitSuccess(true);
      reset();
      if (onSuccessCallback) {
        onSuccessCallback(newLead);
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-green-200 text-center shadow-lg animate-in fade-in">
        <div className="w-16 h-16 bg-brand-emeraldTint text-brand-darkGreen rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-xl font-bold font-serif text-brand-darkCharcoal mb-2">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-brand-darkCharcoal">{submittedData?.fullName}</strong>. Your enquiry regarding <strong className="text-brand-darkGreen">{submittedData?.interestedService || submittedData?.interestedPackage || 'International Expansion'}</strong> has been recorded. Suyog Walke's advisory office will review your details and reach out within 24 business hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/919172057497?text=${encodeURIComponent(`Hello Suyog Walke, I just submitted an enquiry for ${submittedData?.businessName || 'my business'}. Looking forward to connecting!`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow hover:bg-[#1ebe5d] transition"
          >
            <span>Notify via WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="inline-flex items-center justify-center text-xs font-semibold text-gray-500 hover:text-brand-darkGreen px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-brand-darkGreen'
            }`}
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="e.g. rahul@consultancy.com"
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-brand-darkGreen'
            }`}
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* WhatsApp Number and Business Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="e.g. +91 9876543210"
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${
              errors.whatsappNumber ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-brand-darkGreen'
            }`}
            {...register('whatsappNumber', { required: 'WhatsApp number is required' })}
          />
          {errors.whatsappNumber && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.whatsappNumber.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Business / Firm Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Apex Strategic Advisory"
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${
              errors.businessName ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-brand-darkGreen'
            }`}
            {...register('businessName', { required: 'Business name is required' })}
          />
          {errors.businessName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.businessName.message}
            </p>
          )}
        </div>
      </div>

      {/* Professional Category & Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Professional Category
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen text-brand-darkCharcoal"
            {...register('professionalCategory')}
          >
            <option value="Professional & Consulting Services">Professional & Consulting Services</option>
            <option value="Healthcare & Wellness">Healthcare & Wellness</option>
            <option value="Architecture, Engineering & Design">Architecture, Engineering & Design</option>
            <option value="Information Technology & Digital">Information Technology & Digital</option>
            <option value="Human Resources & Recruitment">Human Resources & Recruitment</option>
            <option value="Education & Training">Education & Training</option>
            <option value="Other Service-Based Business">Other Service-Based Business</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Your Location / Country
          </label>
          <input
            type="text"
            placeholder="e.g. India (Mumbai / Bangalore / Delhi)"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen"
            {...register('country')}
          />
        </div>
      </div>

      {/* Interested Service & Interested Package */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Interested Service
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen text-brand-darkCharcoal"
            {...register('interestedService')}
          >
            <option value="">-- Select Specific Service (Optional) --</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Interested Package
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen text-brand-darkCharcoal"
            {...register('interestedPackage')}
          >
            <option value="">-- Select Package (Optional) --</option>
            {packagesData.map((p) => (
              <option key={p.id} value={`${p.name} (${p.subtitle})`}>
                {p.name} – {p.subtitle}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Target International Markets & Current Stage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Current Stage of Business
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen text-brand-darkCharcoal"
            {...register('currentBusinessStage')}
          >
            <option value="Established Domestic Business (Ready to Export)">Established Domestic Business (Ready to Export)</option>
            <option value="Early-Stage Firm Exploring Global Demand">Early-Stage Firm Exploring Global Demand</option>
            <option value="Already Invoicing Overseas (Seeking Systematic Scale)">Already Invoicing Overseas (Seeking Systematic Scale)</option>
            <option value="Solo Practice / Senior Independent Consultant">Solo Practice / Senior Independent Consultant</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
            Target International Markets
          </label>
          <input
            type="text"
            placeholder="e.g. US, UK, UAE, Australia"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen"
            {...register('targetMarkets')}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
          Brief Context / Specific Expansion Objectives
        </label>
        <textarea
          rows={3}
          placeholder="Briefly describe what services you offer and what you hope to achieve internationally..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-darkGreen transition resize-none"
          {...register('message')}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-darkGreen to-[#1a9c22] hover:from-[#137217] hover:to-brand-darkGreen text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Transmitting Securely...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Submit Confidential Enquiry</span>
            </>
          )}
        </button>
        <p className="text-[11px] text-gray-400 text-center mt-2">
          Strict confidentiality guaranteed. We never share your business information with third parties.
        </p>
      </div>
    </form>
  );
}

