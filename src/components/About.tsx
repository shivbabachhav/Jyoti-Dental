/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { DOCTOR_INFO } from '../data';
import { Award, GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg overflow-hidden relative">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Doctor Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-[2.5rem] rotate-3 scale-102 opacity-10" />
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden border border-black/[0.05] shadow-2xl bg-white">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-full object-cover object-center scale-100 hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Floating Certification Block */}
              <div className="absolute bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-[220px] text-left hidden md:block">
                <div className="flex items-center space-x-2 text-blue-600 mb-1.5">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">Expertise Badge</span>
                </div>
                <p className="font-sans text-xs text-slate-800 font-semibold">
                  Recognized Implantologist & Aesthetic Specialist in Maharashtra
                </p>
              </div>
            </motion.div>
          </div>

          {/* Doctor Info & Professional Intro */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
                MEET YOUR DENTIST
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                {DOCTOR_INFO.name}
              </h2>
              <p className="font-sans text-lg font-medium text-slate-600">
                {DOCTOR_INFO.credentials}
              </p>
            </div>

            <p className="font-sans text-slate-600 leading-relaxed font-light">
              {DOCTOR_INFO.about}
            </p>

            {/* Areas of Expertise */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Specialized Clinical Domains</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {DOCTOR_INFO.expertises.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="font-sans text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education and Memberships Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Credentials / Education */}
              <div className="bg-white p-6 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <h4 className="font-display text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <GraduationCap className="w-4.5 h-4.5 text-blue-600" />
                  <span>Academic Qualifications</span>
                </h4>
                <ul className="space-y-2">
                  {DOCTOR_INFO.education.map((edu, index) => (
                    <li key={index} className="font-sans text-xs text-slate-500 font-medium leading-relaxed">
                      • {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div className="bg-white p-6 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <h4 className="font-display text-sm font-bold text-slate-900 flex items-center space-x-2">
                  <Heart className="w-4.5 h-4.5 text-rose-500 fill-rose-50" />
                  <span>Professional Affiliations</span>
                </h4>
                <ul className="space-y-2">
                  {DOCTOR_INFO.memberships.map((member, index) => (
                    <li key={index} className="font-sans text-xs text-slate-500 font-medium leading-relaxed">
                      • {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Patient First Statement */}
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <span className="block font-sans text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">
                PATIENT-FIRST PHILOSOPHY
              </span>
              <p className="font-sans text-sm text-blue-900 font-medium italic">
                &ldquo;I believe that a dental appointment should never feel stressful. We designed Jyoti Dental Clinic to offer high-precision, pain-free treatments with an absolute emphasis on patient comfort, safety, and pristine hygiene standards.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
