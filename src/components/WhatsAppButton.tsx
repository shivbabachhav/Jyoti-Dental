/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      'Hello Jyoti Dental Clinic,\n\nI would like to book an appointment with Dr. Rohit Mamude.\n\nPlease contact me.'
    );
    return `https://wa.me/919422275457?text=${text}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-4 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center space-x-2 border border-emerald-400/20 group hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-white text-emerald-500 shrink-0" />
      <span className="hidden sm:inline font-sans text-xs font-bold uppercase tracking-wider text-white">
        Consult Doctor
      </span>
    </a>
  );
}
