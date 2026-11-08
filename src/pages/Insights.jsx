import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { insightsData } from '../data/insights';
import { contactInfo } from '../data/navigation';
import { LinkedInIcon } from '../components/common/SocialIcons';

export default function Insights() {
  useSEO({
    title: "Executive Insights on Cross-Border Business Expansion",
    description: "Thought leadership articles and strategic analysis by Suyog Walke on international buyer psychology, market selection, and SLA governance."
  });
  return (
    <div className="py-10 md:py-16 space-y-12 md:space-y-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emeraldTint text-brand-darkGreen text-xs font-bold uppercase tracking-wider">
            <BookOpen size={14} />
            <span>EXECUTIVE ADVISORY ARTICLES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-darkCharcoal leading-tight">
            Insights on Global Business Expansion
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Strategic perspectives, market analysis, and cross-border blueprints authored by Suyog Walke to help Indian consultants and service leaders scale globally.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-darkGreen bg-brand-emeraldTint px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-serif text-brand-darkCharcoal group-hover:text-brand-darkGreen transition-colors mb-3 leading-snug">
                  <Link to={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-brand-darkGreen text-white text-[10px] font-bold flex items-center justify-center font-serif">
                    SW
                  </div>
                  <span>{article.author}</span>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="text-xs font-bold text-brand-darkGreen group-hover:text-brand-deepForest inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Thought Leadership Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-darkCharcoal text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Stay Ahead in the Global Service Economy
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Connect directly with Suyog Walke on LinkedIn to read regular analyses of currency dynamics, international procurement trends, and cross-border trade policies.
          </p>
          <div className="pt-2">
            <a
              href={contactInfo.founderSocials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow transition group"
            >
              <LinkedInIcon size={18} className="text-white" />
              <span>Connect with Suyog Walke on LinkedIn</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
