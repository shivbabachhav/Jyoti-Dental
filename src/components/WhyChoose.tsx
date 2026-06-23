/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, HeartHandshake, Eye, Award, Sparkles, MapPin, CheckCircle, RefreshCcw } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    {
      title: 'Experienced Dental Care',
      desc: 'Led by Dr. Rohit Mamude, combining over 10 years of clinical success in implants and complex root canals.',
      icon: Award,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Modern Equipment',
      desc: 'Utilizing CAD/CAM dental mills, high-resolution low-radiation digital x-rays, and automatic patient comfort chairs.',
      icon: Sparkles,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
    {
      title: 'Comfortable Treatment',
      desc: 'Providing localized painless anesthesia delivery, stress-free clinical environment, and soothing musical aids.',
      icon: HeartHandshake,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Personalized Attention',
      desc: 'We map every treatment program specifically to your aesthetic demands, lifestyle constraints, and schedule.',
      icon: Eye,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Affordable Dental Solutions',
      desc: 'We maintain clear, upfront, and flexible cost packages without hidden operational premiums. High-end dentistry for all.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Convenient Nashik Location',
      desc: 'Centrally located in Satpur Colony near Madhur Sweets. Readily accessible with easy, stress-free patient parking.',
      icon: MapPin,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      title: 'Hygiene & Safety Standards',
      desc: 'Strict autoclave sterilization, custom disposable barriers for every patient, and certified air purification.',
      icon: CheckCircle,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Long-Term Oral Health Focus',
      desc: 'We emphasize proactive maintenance and patient schooling, preventing extensive treatments and securing lifelong smiles.',
      icon: RefreshCcw,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            CLINIC STANDARDS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Nashik Trusts <br className="hidden sm:inline" />
            Jyoti Dental Clinic
          </h2>
          <p className="font-sans text-base text-slate-500 font-light max-w-2xl mx-auto">
            Setting a gold standard in modern healthcare, combining technological precision with a highly compassionate patient philosophy.
          </p>
        </div>

        {/* Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-2xl ${point.color} border flex items-center justify-center mb-6`}>
                  <IconComp className="w-5 h-5" />
                </div>
                
                {/* Text Content */}
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
