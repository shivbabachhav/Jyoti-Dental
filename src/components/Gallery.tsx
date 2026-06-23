/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { ZoomIn, X, Compass, ExternalLink } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exterior' | 'reception' | 'treatment' | 'equipment' | 'experience'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { label: 'All Media', value: 'all' },
    { label: 'Exterior', value: 'exterior' },
    { label: 'Waiting Lounge', value: 'reception' },
    { label: 'Treatment Rooms', value: 'treatment' },
    { label: 'Advanced Tech', value: 'equipment' },
    { label: 'Success Outcomes', value: 'experience' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            CLINIC PORTFOLIO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Take A Virtual Tour Of <br />
            Our World-Class Facility
          </h2>
          <p className="font-sans text-base text-slate-500 font-light max-w-2xl mx-auto">
            Review actual photography from our Google Business Profile representing our hygienic sterilizers, automated surgeries, and modern waiting lounge.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
              className={`font-sans text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl border transition-all ${
                activeFilter === filter.value
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-[4/3] rounded-[24px] overflow-hidden border border-black/[0.05] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-zoom-in hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            >
              <img
                src={item.imagePath}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />
              
              <div className="absolute inset-x-6 bottom-6 text-left opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                <span className="font-sans text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-display font-bold text-sm text-white">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="font-sans text-[11px] text-slate-300 font-light mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Floating zoom badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Outer Direct Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Jyoti+Dental+Clinic/@19.9975,73.7428,15z"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold text-slate-500 hover:text-blue-600 border border-slate-200 bg-white px-5 py-3 rounded-xl hover:border-blue-500/30 shadow-sm transition-all"
          >
            <Compass className="w-4 h-4 text-blue-500" />
            <span>View More Photos on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Popup */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
          <button
            id="lightbox-close-btn"
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none"
            aria-label="Close image popup"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src={lightboxItem.imagePath}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-center text-white mt-6 space-y-2 max-w-xl">
              <span className="font-sans text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                {lightboxItem.category}
              </span>
              <h3 className="font-display text-xl font-bold">
                {lightboxItem.title}
              </h3>
              {lightboxItem.description && (
                <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                  {lightboxItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
