/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Calendar, Check, Award, Shield, Cpu, MessageSquare } from 'lucide-react';

interface HeroProps {
  openBookingModal: () => void;
}

export default function Hero({ openBookingModal }: HeroProps) {
  // WhatsApp Link generator
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      'Hello Jyoti Dental Clinic,\n\nI would like to book an appointment with Dr. Rohit Mamude.\n\nPlease contact me.'
    );
    return `https://wa.me/919422275457?text=${text}`;
  };

  const trustBadges = [
    { text: 'Modern Dental Care', icon: Shield },
    { text: 'Patient-Focused Treatment', icon: Award },
    { text: 'Advanced Technology', icon: Cpu },
    { text: 'Comfortable Experience', icon: Check },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Large Primary Hero Banner (Col span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-8 bg-gradient-to-br from-[#0066FF] to-[#004dcc] text-white p-8 md:p-12 rounded-[24px] relative overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-blue-700/30 text-left min-h-[480px]"
          >
            {/* Background Clinic Texture overlay */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay">
              <img
                src="/src/assets/images/clinic_hero_banner_1782243463561.jpg"
                alt="Clinic Backdrop"
                className="w-full h-full object-cover scale-105 filter blur-[0.5px]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Ambient lighting bubble */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Pill badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-sans text-[11px] font-bold tracking-wider text-blue-100 uppercase">
                  Now Accepting New Patients in Nashik
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Your Smile Deserves <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-white font-black">
                  Expert Care
                </span>
              </h1>

              {/* Paragraph */}
              <p className="font-sans text-sm sm:text-base text-blue-50/90 max-w-xl leading-relaxed font-light">
                Advanced, comfortable, and personalized dental treatments by{' '}
                <strong className="text-white font-semibold">Dr. Rohit Mamude</strong> at Jyoti Dental Clinic, Satpur. Combining global dental tech with gentle care.
              </p>
            </div>

            {/* CTAs */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 pt-8 mt-auto">
              <button
                id="hero-btn-book"
                onClick={openBookingModal}
                className="group relative flex items-center justify-center space-x-2 font-sans font-bold text-[#0066FF] bg-white hover:bg-blue-50 px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer shrink-0"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+919422275457"
                className="flex items-center justify-center space-x-2 font-sans font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-xl backdrop-blur-md transition-colors"
              >
                <Phone className="w-4.5 h-4.5 text-teal-300" />
                <span>Call +91 94222 75457</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center space-x-2 font-sans font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-400/10"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-emerald-950" />
                <span>WhatsApp Consult</span>
              </a>
            </div>
          </motion.div>

          {/* Bento Card 2: Doctor Profile & Portrait (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-4 rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-slate-950 flex flex-col justify-end relative min-h-[480px] group text-left"
          >
            {/* Double Border Frame inside card */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/doctor_portrait_1782243492576.jpg"
                alt="Dr. Rohit Mamude Portrait"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            {/* Float Badge 1 (ISO) */}
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2 shadow-lg">
              <div className="w-7 h-7 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-blue-400 shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="font-display text-[10px] font-bold text-white leading-tight">ISO Certified</h4>
                <p className="font-sans text-[8px] text-slate-400 leading-none">Pristine standards</p>
              </div>
            </div>

            {/* Float Badge 2 (Reviews) */}
            <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2 shadow-lg">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <span className="font-sans text-[10px] font-black">4.9★</span>
              </div>
              <div className="text-left">
                <h4 className="font-display text-[10px] font-bold text-white leading-tight">4.9 Star Rating</h4>
                <p className="font-sans text-[8px] text-slate-400 leading-none">Top Google Choice</p>
              </div>
            </div>

            {/* Doctor Caption Overlay */}
            <div className="relative z-10 p-6 md:p-8">
              <span className="font-sans text-[10px] font-bold text-teal-400 tracking-wider uppercase block mb-1">
                Chief Dental Surgeon
              </span>
              <h3 className="font-display text-xl md:text-2xl font-extrabold text-white leading-tight">
                Dr. Rohit Mamude
              </h3>
              <p className="font-sans text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                BDS, certified specialist in advanced dental implantology & premium aesthetic dental veneers.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Micro Grid for Trust badges - 4 Bento blocks below (grid cols 4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {trustBadges.map((badge, index) => {
            const IconComp = badge.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                key={index}
                className="bg-white rounded-2xl border border-slate-100 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center space-x-3 text-slate-800 text-left hover:border-blue-500/10 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs font-semibold text-slate-700 tracking-wide leading-snug">
                  {badge.text}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
