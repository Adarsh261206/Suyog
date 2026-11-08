import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { LinkedInIcon, FacebookIcon, WhatsAppIcon } from '../components/common/SocialIcons';
import useSEO from '../hooks/useSEO';
import { insightsData } from '../data/insights';

export default function InsightDetails() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const article = insightsData.find((a) => a.slug === slug);

  useSEO({
    title: article ? article.title : "Article Insight",
    description: article?.excerpt || "Executive article by Suyog Walke, Founder of GISA Global Solutions LLP."
  });

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://suyogwalke.com/insights/${article.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`"${article.title}" by Suyog Walke - Founder, GISA Global Solutions LLP:\n${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(currentUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareFacebook = () => {
    const url = encodeURIComponent(currentUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  return (
    <div className="py-10 md:py-16 space-y-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-brand-darkGreen transition mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to All Insights</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 pb-8 mb-8 border-b border-gray-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-emeraldTint px-3 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-darkGreen text-white font-serif font-bold flex items-center justify-center text-xs">
                SW
              </div>
              <div>
                <strong className="text-brand-darkCharcoal block font-medium">{article.author}</strong>
                <span>Founder – GISA Global Solutions LLP</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Social Share Bar (from Website Brief Section 20) */}
          <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="text-gray-400 flex items-center gap-1 mr-2 text-[11px] uppercase tracking-wider">
              <Share2 size={13} /> Share Article:
            </span>
            <button
              onClick={shareLinkedIn}
              className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#0A66C2] hover:text-white transition flex items-center gap-1.5 text-gray-700 cursor-pointer group"
            >
              <LinkedInIcon size={14} className="text-[#0A66C2] group-hover:text-white transition" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={shareWhatsApp}
              className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#1ebe5d] hover:bg-[#25D366] hover:text-white transition flex items-center gap-1.5 cursor-pointer group"
            >
              <WhatsAppIcon size={14} className="text-[#25D366] group-hover:text-white transition" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={shareFacebook}
              className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#1877F2] hover:text-white transition flex items-center gap-1.5 text-gray-700 cursor-pointer group"
            >
              <FacebookIcon size={14} className="text-[#1877F2] group-hover:text-white transition" />
              <span>Facebook</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg border border-gray-200 hover:border-brand-darkGreen hover:text-brand-darkGreen transition flex items-center gap-1.5 text-gray-600 bg-white cursor-pointer"
            >
              {copied ? <Check size={13} className="text-brand-darkGreen" /> : <Copy size={13} />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans space-y-6">
          <p className="text-lg font-serif italic text-gray-800 bg-brand-lightBg p-6 rounded-2xl border-l-4 border-brand-darkGreen">
            "{article.excerpt}"
          </p>

          <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed space-y-4">
            {article.content}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-lightBg border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-deepForest text-white flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0">
            SW
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-base font-bold font-serif text-brand-darkCharcoal">
              About Suyog Walke
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Founder of GISA Global Solutions LLP. Based in Mumbai, Maharashtra, India. Advising Indian service entrepreneurs and consulting practices on cross-border market entry, executive positioning, and client acquisition in North America, Europe, and the Middle East.
            </p>
            <div className="pt-1">
              <Link to="/about" className="text-xs font-bold text-brand-darkGreen hover:underline">
                Read Full Founder Profile →
              </Link>
            </div>
          </div>
        </div>

        {/* Next Articles Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <Link
            to="/insights"
            className="text-xs font-bold text-gray-600 hover:text-brand-darkGreen flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            <span>All Articles</span>
          </Link>
          <Link
            to="/book-consultation"
            className="text-xs font-bold text-brand-darkGreen hover:text-brand-deepForest flex items-center gap-1"
          >
            <span>Book Clarity Session with Suyog Walke</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </div>
  );
}
