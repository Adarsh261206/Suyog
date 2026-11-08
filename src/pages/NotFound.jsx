import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Calendar } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="text-6xl sm:text-7xl font-serif font-extrabold text-brand-darkGreen">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal">
        Page Not Found
      </h1>
      <p className="text-sm text-gray-600 leading-relaxed">
        The international advisory resource or page you are looking for may have been moved or does not exist.
      </p>
      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-brand-darkGreen hover:bg-[#137217] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
        >
          <Home size={15} />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/book-consultation"
          className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:text-brand-darkGreen px-6 py-3 rounded-xl font-semibold text-xs transition hover:bg-white"
        >
          <Calendar size={15} />
          <span>Book a Consultation</span>
        </Link>
      </div>
    </div>
  );
}

