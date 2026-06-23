/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { GOOGLE_REVIEWS } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalReviews = GOOGLE_REVIEWS.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Auto-scroll loop
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds auto-rotate
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="testimonials" className="py-24 bg-bg relative overflow-hidden">
      {/* Decorative gradient blur blocks */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Loved By Thousands Of Patients <br />
            Who Discovered Painless Care
          </h2>
        </div>

        {/* Carousel Visuals */}
        <div className="relative">
          
          {/* Quote Mark Background Accent */}
          <div className="absolute -top-10 left-10 text-slate-200/40 select-none pointer-events-none hidden md:block">
            <Quote className="w-24 h-24 rotate-180 fill-current" />
          </div>

          {/* Review Card Wrapper */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {GOOGLE_REVIEWS.map((review) => (
                <div key={review.id} className="w-full shrink-0 px-4">
                  <div className="bg-white border border-black/[0.05] p-8 sm:p-12 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left max-w-4xl mx-auto space-y-6 relative group">
                    
                    {/* Star Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Feedback Content */}
                    <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed font-light italic">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {/* Author Meta */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/10">
                        <img
                          src={review.reviewerImg || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'}
                          alt={review.reviewerName}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="block font-display font-bold text-sm text-slate-900">
                          {review.reviewerName}
                        </span>
                        <span className="block font-sans text-xs text-slate-400 font-medium mt-0.5">
                          Verified Patient • {review.date}
                        </span>
                      </div>
                      
                      {/* Source Logo/Text */}
                      <span className="ml-auto font-sans text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {review.source} Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex justify-center space-x-3 mt-8">
            <button
              id="testi-btn-prev"
              onClick={handlePrev}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testi-btn-next"
              onClick={handleNext}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center space-x-1.5 mt-4">
            {GOOGLE_REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-blue-600' : 'bg-slate-200'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
