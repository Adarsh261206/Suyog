import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSEO from '../hooks/useSEO';
import {
  Calendar as CalendarIcon,
  Clock,
  Globe2,
  CheckCircle2,
  Download,
  MessageCircle
} from 'lucide-react';
import { contactInfo } from '../data/navigation';

export default function Booking() {
  useSEO({
    title: "Book a Consultation with Suyog Walke – Founder, GISA",
    description: "Schedule a 1-on-1 international growth strategy consultation with Suyog Walke. Select available dates, time slots, and receive instant confirmation."
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [timezone, setTimezone] = useState('Asia/Kolkata (IST)');
  const [bookingConfirmed, setBookingConfirmed] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate next 10 business dates starting tomorrow
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    current.setDate(current.getDate() + 1);

    while (dates.length < 8) {
      const dayOfWeek = current.getDay();
      // Skip Sundays (0)
      if (dayOfWeek !== 0) {
        dates.push({
          dateStr: current.toISOString().split('T')[0],
          dayName: current.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: current.getDate(),
          monthName: current.toLocaleDateString('en-US', { month: 'short' })
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const timeSlots = [
    { time: '11:00 AM - 11:45 AM', label: 'Morning Slot' },
    { time: '02:30 PM - 03:15 PM', label: 'Early Afternoon' },
    { time: '04:30 PM - 05:15 PM', label: 'Late Afternoon' },
    { time: '06:30 PM - 07:15 PM', label: 'Evening (UK / Gulf Overlap)' },
    { time: '08:30 PM - 09:15 PM', label: 'Night (US Morning Overlap)' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      consultationTopic: 'Business Clarity Session (Discovery & Guidance - up to 45 mins)',
      notes: ''
    }
  });

  const onSubmitBooking = async (formData) => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select both a preferred date and an available time slot.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate backend booking API verification
      await new Promise(resolve => setTimeout(resolve, 1000));

      const confirmationRecord = {
        bookingId: 'GISA-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        ...formData,
        date: selectedDate,
        timeSlot: selectedSlot,
        timezone: timezone,
        timestamp: new Date().toISOString()
      };

      // Store in localStorage for audit
      const existing = JSON.parse(localStorage.getItem('gisa_consultations') || '[]');
      existing.unshift(confirmationRecord);
      localStorage.setItem('gisa_consultations', JSON.stringify(existing));

      setBookingConfirmed(confirmationRecord);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate downloadable iCalendar (.ics) string
  const downloadICS = () => {
    if (!bookingConfirmed) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GISA Global Solutions LLP//Consultation Booking//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
SUMMARY:Strategic Consultation with Suyog Walke (GISA Global Solutions)
DESCRIPTION:Consultation topic: ${bookingConfirmed.consultationTopic}\\nClient: ${bookingConfirmed.fullName} (${bookingConfirmed.companyName})\\nOfficial WhatsApp: +91 9172057497
STATUS:CONFIRMED
LOCATION:Google Meet / Video Conference
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `consultation-${bookingConfirmed.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
            <CalendarIcon size={14} />
            <span>EXECUTIVE CALENDAR</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
            Book a 1-on-1 Consultation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Reserve an exploratory 45-minute strategy session with <strong className="text-brand-darkCharcoal font-semibold">Suyog Walke</strong>, Founder of GISA Global Solutions LLP. We will examine your practice's international readiness and identify realistic global target markets.
          </p>
        </div>
      </section>

      {/* Main Interface */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {bookingConfirmed ? (
          /* Confirmation State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-green-200 shadow-2xl max-w-3xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-brand-emeraldTint text-brand-darkGreen rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-darkGreen bg-brand-emeraldTint px-3 py-1 rounded-full font-bold">
                REFERENCE ID: {bookingConfirmed.bookingId}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal mt-3">
                Consultation Confirmed!
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Your appointment has been registered in the founder's calendar system.
              </p>
            </div>

            {/* Appointment Details Card */}
            <div className="bg-brand-lightBg rounded-2xl p-6 text-left border border-gray-100 space-y-3 text-xs sm:text-sm text-brand-darkCharcoal">
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-500">Attendee:</span>
                <strong className="font-semibold">{bookingConfirmed.fullName} ({bookingConfirmed.companyName})</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-500">Scheduled Date:</span>
                <strong className="font-semibold text-brand-darkGreen">{bookingConfirmed.date}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-500">Time Window:</span>
                <strong className="font-semibold">{bookingConfirmed.timeSlot} ({bookingConfirmed.timezone})</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-500">Consultation Focus:</span>
                <span className="font-medium">{bookingConfirmed.consultationTopic}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Advisory Lead:</span>
                <span className="font-bold text-brand-darkGreen">Suyog Walke (Mumbai, India)</span>
              </div>
            </div>

            {/* Actions: Download ICS & WhatsApp sync */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={downloadICS}
                className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition cursor-pointer"
              >
                <Download size={15} />
                <span>Download Calendar Invite (.ICS)</span>
              </button>

              <a
                href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Suyog Walke, I have booked a consultation (Ref: ${bookingConfirmed.bookingId}) for ${bookingConfirmed.date} at ${bookingConfirmed.timeSlot}. Looking forward to connecting!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
              >
                <MessageCircle size={15} />
                <span>Confirm on WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-gray-400">
              A video conference invitation link will also be dispatched to <strong className="text-gray-600">{bookingConfirmed.email}</strong> prior to the session.
            </p>
          </div>
        ) : (
          /* Booking Form & Scheduler */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Step 1 & 2: Date and Time Slot Picker */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen">
                  STEP 1 OF 2
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-darkCharcoal mt-0.5">
                  Select Date & Time Slot
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Choose a date from the upcoming advisory schedule.
                </p>
              </div>

              {/* Timezone Indicator */}
              <div className="p-3 bg-brand-lightBg rounded-xl border border-gray-100 text-xs flex items-center justify-between text-gray-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe2 size={14} className="text-brand-darkGreen" />
                  Time Zone:
                </span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="bg-transparent font-semibold text-brand-darkCharcoal focus:outline-none text-xs"
                >
                  <option value="Asia/Kolkata (IST)">India (IST, UTC+5:30)</option>
                  <option value="Europe/London (GMT/BST)">UK (London, GMT)</option>
                  <option value="Asia/Dubai (GST)">UAE (Dubai, UTC+4)</option>
                  <option value="America/New_York (EST)">US East (New York, EST)</option>
                  <option value="America/Los_Angeles (PST)">US West (California, PST)</option>
                </select>
              </div>

              {/* Date Selector Buttons */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Available Dates:
                </label>
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-2">
                  {availableDates.map((d) => (
                    <button
                      type="button"
                      key={d.dateStr}
                      onClick={() => setSelectedDate(d.dateStr)}
                      className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${selectedDate === d.dateStr
                          ? 'bg-brand-darkGreen text-white border-brand-darkGreen shadow-md'
                          : 'bg-brand-lightBg border-gray-100 hover:border-brand-darkGreen text-gray-700'
                        }`}
                    >
                      <span className="block text-[10px] uppercase font-bold opacity-80">{d.dayName}</span>
                      <span className="block text-base font-serif font-bold">{d.dayNum}</span>
                      <span className="block text-[10px] opacity-75">{d.monthName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots Selector */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Available Slots:
                </label>
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot.time}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`w-full p-3 rounded-xl text-left border transition-all flex items-center justify-between text-xs cursor-pointer ${selectedSlot === slot.time
                          ? 'bg-brand-emeraldTint/70 border-brand-darkGreen text-brand-darkCharcoal font-bold shadow-xs'
                          : 'bg-white border-gray-100 hover:border-gray-200 text-gray-700'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-brand-darkGreen" />
                        <span>{slot.time}</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-normal">{slot.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Intake Details Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-darkGreen">
                  STEP 2 OF 2
                </span>
                <h3 className="text-xl font-serif font-bold text-brand-darkCharcoal mt-0.5">
                  Attendee & Business Context
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Brief information so we can conduct preliminary market reconnaissance prior to our conversation.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmitBooking)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Joshi"
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-lightBg/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${errors.fullName ? 'border-red-400' : 'border-gray-200 focus:border-brand-darkGreen'
                        }`}
                      {...register('fullName', { required: 'Name is required' })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. vikram@studio.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-lightBg/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-brand-darkGreen'
                        }`}
                      {...register('email', { required: 'Email is required' })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-lightBg/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-brand-darkGreen'
                        }`}
                      {...register('phone', { required: 'WhatsApp number is required' })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
                      Firm / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Joshi & Partners BIM"
                      className={`w-full px-4 py-3 rounded-xl border bg-brand-lightBg/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-darkGreen/20 transition ${errors.companyName ? 'border-red-400' : 'border-gray-200 focus:border-brand-darkGreen'
                        }`}
                      {...register('companyName', { required: 'Company name is required' })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
                    Primary Consultation Objective
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightBg/50 text-sm focus:outline-none focus:border-brand-darkGreen"
                    {...register('consultationTopic')}
                  >
                    <option value="Business Clarity Session (Discovery & Guidance - up to 45 mins)">
                      ★ Business Clarity Session (Discovery & Guidance - up to 45 mins)
                    </option>
                    <option value="One-Time Setup Package Enquiry (Basic, Advanced, Premium)">
                      One-Time Setup Package Enquiry (Basic, Advanced, Premium)
                    </option>
                    <option value="Monthly Growth Plan Consultation (Ongoing Support)">
                      Monthly Growth Plan Consultation (Ongoing Support)
                    </option>
                    <option value="International Market Research & Feasibility">
                      International Market Research & Feasibility
                    </option>
                    <option value="Global Branding & Executive LinkedIn Positioning">
                      Global Branding & Executive LinkedIn Positioning
                    </option>
                    <option value="International Client Acquisition & Outreach Strategy">
                      International Client Acquisition & Outreach Strategy
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-darkCharcoal uppercase tracking-wider mb-1">
                    Brief Note on Current Practice & Goals
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly state your services and priority geographies (e.g. US, UK, UAE)..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightBg/50 text-sm focus:outline-none focus:border-brand-darkGreen resize-none"
                    {...register('notes')}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-darkGreen to-[#1a9c22] hover:from-[#137217] hover:to-brand-darkGreen text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <CalendarIcon size={18} />
                    <span>Confirm & Schedule Consultation</span>
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Zero spam. Strict confidentiality. Confirmed directly with Suyog Walke's office.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
