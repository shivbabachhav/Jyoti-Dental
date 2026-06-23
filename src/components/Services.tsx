/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Explicit icon mapping to prevent runtime issues
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Icons.Activity className="w-8 h-8 text-blue-600" />;
      case 'ShieldCheck': return <Icons.ShieldCheck className="w-8 h-8 text-teal-600" />;
      case 'Sparkles': return <Icons.Sparkles className="w-8 h-8 text-amber-500" />;
      case 'Smile': return <Icons.Smile className="w-8 h-8 text-blue-500" />;
      case 'Gem': return <Icons.Gem className="w-8 h-8 text-purple-500" />;
      case 'Layers': return <Icons.Layers className="w-8 h-8 text-indigo-500" />;
      case 'Award': return <Icons.Award className="w-8 h-8 text-blue-600" />;
      case 'Scissors': return <Icons.Scissors className="w-8 h-8 text-slate-500" />;
      case 'HeartHandshake': return <Icons.HeartHandshake className="w-8 h-8 text-teal-500" />;
      case 'Users': return <Icons.Users className="w-8 h-8 text-pink-500" />;
      case 'CheckCircle': return <Icons.CheckCircle className="w-8 h-8 text-emerald-500" />;
      case 'Briefcase': return <Icons.Briefcase className="w-8 h-8 text-slate-700" />;
      default: return <Icons.Activity className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            OUR DEPARTMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Premium Dental Services <br className="hidden sm:inline" />
            Designed For Exquisite Smiles
          </h2>
          <p className="font-sans text-base text-slate-500 font-light max-w-2xl mx-auto">
            Dr. Rohit Mamude performs top-tier restorative, preventive, cosmetic, and implant surgeries in Satpur. Click any service to explore detailed treatments and benefits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-[24px] p-6 border border-black/[0.05] hover:border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {service.title}
                </h3>
                
                {/* Short Description */}
                <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
              </div>

              {/* Learn More Button */}
              <button
                id={`btn-learn-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-blue-600 hover:text-blue-700 focus:outline-none"
              >
                <span>Learn More</span>
                <Icons.ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            role="dialog"
            aria-modal="true"
          >
            {/* Header / Accent Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8 text-white relative">
              <button
                id="modal-close-btn"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none"
                aria-label="Close details dialog"
              >
                <Icons.X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md">
                  {getIcon(selectedService.iconName)}
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-100">
                  CLINICAL DEPARTMENT
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                {selectedService.title}
              </h3>
            </div>

            {/* Content Body */}
            <div className="p-8 space-y-6 text-left overflow-y-auto max-h-[60vh] no-scrollbar">
              
              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="font-display text-sm font-bold text-slate-900">Treatment Overview</h4>
                <p className="font-sans text-sm text-slate-500 leading-relaxed font-light">
                  {selectedService.detailedDescription}
                </p>
              </div>

              {/* Patient Benefits */}
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-slate-900">Patient Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2.5">
                      <Icons.CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-sans text-xs text-slate-700 font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational parameters */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-3.5 rounded-2xl">
                  <span className="block font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    ESTIMATED DURATION
                  </span>
                  <span className="font-display text-sm font-bold text-slate-900 flex items-center space-x-1.5 mt-1">
                    <Icons.Clock className="w-4 h-4 text-blue-600" />
                    <span>{selectedService.duration}</span>
                  </span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl">
                  <span className="block font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    SUITABLE FOR
                  </span>
                  <span className="block font-sans text-xs font-semibold text-slate-700 mt-1 truncate">
                    {selectedService.suitability}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
              <button
                id="modal-close-foot-btn"
                onClick={() => setSelectedService(null)}
                className="font-sans text-sm font-bold text-gray-500 hover:text-gray-700 px-5 py-2.5 rounded-xl mr-3 focus:outline-none"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => {
                  setSelectedService(null);
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-sans text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl shadow-md shadow-blue-600/10 transition-colors focus:outline-none"
              >
                Inquire Treatment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
