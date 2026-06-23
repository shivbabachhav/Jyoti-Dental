/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, MapPin, Phone, MessageSquare, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'admin') => void;
}

export default function Footer({ setView }: FooterProps) {
  
  const targetAreas = [
    'Satpur Colony', 'Vivekanand Nagar', 'Kale Nagar', 
    'Gangapur Road', 'College Road', 'Nashik'
  ];

  const sitemapLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Doctor Profile', href: '#about' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'Treatment Results', href: '#before-after' },
    { label: 'Virtual Tour', href: '#gallery' },
    { label: 'Patient FAQs', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setView('home');
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800 text-left relative z-20">
      
      {/* Upper Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Clinic Intro */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                <Shield className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="block font-display font-bold text-lg leading-tight tracking-tight text-white">
                  JYOTI DENTAL
                </span>
                <span className="block text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
                  Dr. Rohit Mamude
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Redefining the dental experience with modern German machinery, sterile surgical standards, and advanced restorative, implant, and cosmetic treatments. Rated 4.9 stars by families in Satpur.
            </p>

            {/* Social media connections */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook Profile"
              >
                <span className="text-xs font-bold">Fb</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-500 transition-colors"
                aria-label="Instagram Profile"
              >
                <span className="text-xs font-bold">In</span>
              </a>
              <a 
                href="https://practo.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500 transition-colors"
                aria-label="Practo Profile"
              >
                <span className="text-xs font-bold">Pr</span>
              </a>
            </div>
          </div>

          {/* Sitemap Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">Sitemap</h4>
            <ul className="space-y-2">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Target Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">Local Areas Served</h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {targetAreas.map((area) => (
                <span
                  key={area}
                  className="text-[10px] font-semibold text-slate-500 bg-slate-800/60 border border-slate-800 px-2.5 py-1 rounded-full whitespace-nowrap"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed pt-1 font-light">
              Convenient dental home for patients near Madhur Sweets, Satpur Colony, and surrounding areas in Nashik, Maharashtra.
            </p>
          </div>

          {/* Legal / Contact Quick Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">Emergency Support</h4>
            <div className="space-y-3 pt-1">
              <a
                href="tel:+919422275457"
                className="flex items-center space-x-2.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 94222 75457</span>
              </a>
              <div className="flex items-start space-x-2.5 text-xs">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  Shop No. 9, Prakash Chaudhary Marg, Satpur Colony, Nashik 422013
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Bar */}
      <div className="bg-slate-950 py-6 border-t border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left font-light">
            © {new Date().getFullYear()} Jyoti Dental Clinic – Dr. Rohit Mamude. All Rights Reserved. Designed by top-tier Healthcare Branding.
          </p>
          <div className="flex items-center space-x-4">
            <button
              id="footer-btn-portal"
              onClick={() => {
                setView('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-slate-500 hover:text-white transition-colors font-semibold"
            >
              Doctor Portal Login
            </button>
            <span>•</span>
            <button
              id="footer-btn-scroll-top"
              onClick={handleScrollTop}
              className="text-slate-500 hover:text-white transition-colors flex items-center space-x-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
