/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle, HelpCircle as QuestionIcon } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            COMMON INQUIRIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base text-slate-500 font-light max-w-2xl mx-auto">
            Find immediate, certified answers to common questions regarding dental procedures, pain management, and timing.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-[24px] transition-all duration-300 text-left ${
                  isOpen
                    ? 'border-blue-600/30 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                    : 'border-black/[0.05] bg-white hover:border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-sm'
                }`}
              >
                {/* Header click bar */}
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5.5 h-5.5 shrink-0 transition-colors ${
                      isOpen ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4.5 h-4.5" /> : <ChevronDown className="w-4.5 h-4.5" />}
                  </div>
                </button>

                {/* Answer body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100/60 animate-in fade-in duration-200">
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-light pl-9">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro notice */}
        <div className="mt-12 text-center p-6 bg-white rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-w-xl mx-auto">
          <p className="font-sans text-xs text-slate-500 leading-relaxed">
            Have a specific clinical or insurance question not answered here? <br />
            Our chief surgeon <strong className="text-slate-900 font-semibold">Dr. Rohit Mamude</strong> provides personal consultations over WhatsApp or call.
          </p>
        </div>
      </div>
    </section>
  );
}
