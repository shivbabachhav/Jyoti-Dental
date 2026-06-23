/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, MessageSquare, Clock, Calendar, Compass, ExternalLink } from 'lucide-react';

export default function Contact() {
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      'Hello Jyoti Dental Clinic,\n\nI would like to book an appointment with Dr. Rohit Mamude.\n\nPlease contact me.'
    );
    return `https://wa.me/919422275457?text=${text}`;
  };

  const clinicHours = [
    { days: 'Monday – Saturday', hours: '10:00 AM – 01:30 PM, 04:30 PM – 09:00 PM' },
    { days: 'Sunday', hours: 'Emergency Only (On Call)' }
  ];

  return (
    <section id="contact" className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            CONNECT WITH US
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Schedule Your Visit Today
          </h2>
          <p className="font-sans text-base text-slate-500 font-light max-w-2xl mx-auto">
            Our luxury clinic is located in Satpur Colony, Nashik. Reach out to coordinate scheduling or for immediate emergencies.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Detailed Info Cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left space-y-4 hover:-translate-y-0.5 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-base text-slate-900">Clinic Address</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Shop No. 9, Engineer Prakash Chaudhary Marg, <br />
                  Near Madhur Sweets, Kale Nagar, Satpur Colony, <br />
                  Nashik, Maharashtra 422013
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Jyoti+Dental+Clinic+Satpur+Colony+Nashik"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Actions (Call, WhatsApp) */}
            <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left space-y-4 hover:-translate-y-0.5 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-base text-slate-900">Quick Contact</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-600 font-light">
                  Call our receptionist directly or text Dr. Rohit Mamude on WhatsApp.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+919422275457"
                  className="flex items-center justify-center space-x-2 font-sans text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 94222 75457</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center space-x-2 font-sans text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 px-5 py-3 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-950" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left space-y-4 hover:-translate-y-0.5 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-base text-slate-900">Business Hours</h4>
                <div className="space-y-2 pt-2">
                  {clinicHours.map((ch, i) => (
                    <div key={i} className="flex justify-between items-start text-xs sm:text-sm font-sans">
                      <span className="text-slate-500 font-medium">{ch.days}:</span>
                      <span className="text-slate-800 font-bold text-right pl-4">{ch.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Embedded Map Frame (Right) */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-4 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden relative border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.124844390509!2d73.7424915!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec0587d19275%3A0xe9db0f55cf4b5f90!2sJyoti%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1719168000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 filter grayscale-[10%] contrast-[105%] opacity-90"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Jyoti Dental Clinic Location Grid on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
