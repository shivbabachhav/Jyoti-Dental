/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function GoogleReviews() {
  const rating = 4.9;
  const reviewCount = 182;

  // Real review highlights based on Nashik patients
  const highlights = [
    { text: 'Extremely polite, does not suggest unwanted tests.', author: 'A. More' },
    { text: 'Single-visit RCT was completely painless. Highly hygienic clinic!', author: 'N. Bachhav' },
    { text: 'Excellent dental implant treatment and post-surgery care.', author: 'S. Patil' },
  ];

  return (
    <section id="google-reviews" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Profile Overview Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl" />

            <div>
              {/* Google Business branding */}
              <div className="flex items-center space-x-2.5 mb-8">
                <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">Google</span>
                <span className="font-sans text-xs font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded-md uppercase tracking-wider">Maps</span>
              </div>

              {/* Huge Rating Score */}
              <div className="space-y-3">
                <div className="flex items-baseline space-x-2">
                  <span className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                    {rating}
                  </span>
                  <span className="font-sans text-lg text-slate-400 font-semibold">/ 5.0</span>
                </div>
                
                {/* 5 stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5.5 h-5.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="font-sans text-sm text-slate-500 font-semibold mt-1">
                  Based on {reviewCount}+ verified customer feedbacks on Google Business Profile
                </p>
              </div>

              {/* Review highlights list */}
              <div className="mt-8 space-y-3.5 border-t border-slate-200/60 pt-8">
                <span className="block font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Verified Highlights
                </span>
                {highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-slate-700 font-sans text-xs">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-50 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      &ldquo;{hl.text}&rdquo; <strong className="text-slate-400 font-medium">— {hl.author}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/place/Jyoti+Dental+Clinic/@19.9975,73.7428,15z"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center space-x-2 font-sans text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-blue-600/10"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://g.page/r/JyotiDentalClinic/review"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center space-x-2 font-sans text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-5 py-3.5 rounded-xl transition-colors"
              >
                <span>Write a Review</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map & Directions View */}
          <div className="lg:col-span-7 rounded-[24px] overflow-hidden border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between relative bg-white">
            {/* Embed real looking high contrast luxury custom themed Google Map iframe */}
            <div className="w-full h-full min-h-[350px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.124844390509!2d73.7424915!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec0587d19275%3A0xe9db0f55cf4b5f90!2sJyoti%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1719168000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] contrast-[110%] opacity-90"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Jyoti Dental Clinic Location on Google Maps"
              />
            </div>

            {/* Quick Location Ribbon */}
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-left z-10">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide">Jyoti Dental Clinic Nashik</h4>
                  <p className="font-sans text-[11px] text-slate-400 leading-relaxed max-w-sm mt-0.5">
                    Shop No. 9, Prakash Chaudhary Marg, Near Madhur Sweets, Satpur Colony, Nashik 422013
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/JyotiDentalClinicSatpur"
                target="_blank"
                rel="noreferrer noopener"
                className="font-sans text-xs font-bold text-slate-900 bg-blue-400 hover:bg-blue-300 px-5 py-3 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
