/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Shield, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'admin';
  setView: (view: 'home' | 'admin') => void;
  openBookingModal: () => void;
}

export default function Navbar({ currentView, setView, openBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Dr. Rohit', href: '#about' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Results', href: '#before-after' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setView('home');
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView === 'admin'
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <div className="flex items-center space-x-2">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="block font-display font-bold text-lg leading-tight tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                  JYOTI DENTAL
                </span>
                <span className="block font-sans text-xs tracking-widest text-gray-500 uppercase font-semibold">
                  Dr. Rohit Mamude
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          {currentView === 'home' && (
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative py-2 focus:outline-none focus:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {currentView === 'home' ? (
              <>
                <button
                  id="nav-btn-admin"
                  onClick={() => setView('admin')}
                  className="font-sans text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 focus:outline-none"
                >
                  Portal
                </button>
                <a
                  href="tel:+919422275457"
                  className="flex items-center space-x-2 font-sans text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 px-4 py-2.5 rounded-xl border border-gray-100 transition-colors focus:outline-none"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Doctor</span>
                </a>
                <button
                  id="nav-btn-book"
                  onClick={openBookingModal}
                  className="flex items-center space-x-2 font-sans text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl shadow-sm shadow-blue-500/10 transition-colors focus:outline-none"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </>
            ) : (
              <button
                id="nav-btn-home"
                onClick={() => setView('home')}
                className="flex items-center space-x-2 font-sans text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl transition-colors focus:outline-none"
              >
                <span>Back to Website</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            {currentView === 'home' && (
              <button
                id="nav-btn-mobile-book"
                onClick={openBookingModal}
                className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 focus:outline-none"
                aria-label="Book appointment"
              >
                <Calendar className="w-5 h-5" />
              </button>
            )}
            <button
              id="nav-btn-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-4 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          {currentView === 'home' && (
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            {currentView === 'home' ? (
              <>
                <a
                  href="tel:+919422275457"
                  className="flex items-center justify-center space-x-2 font-sans font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-100 py-3 rounded-xl flex-1 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Clinic</span>
                </a>
                <button
                  id="mobile-nav-btn-book"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="flex items-center justify-center space-x-2 font-sans font-bold text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-xl flex-1 shadow-md shadow-blue-500/10 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
                <button
                  id="mobile-nav-btn-admin"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setView('admin');
                  }}
                  className="font-sans text-sm font-semibold text-center text-gray-500 hover:text-blue-600 py-2"
                >
                  Doctor Admin Portal
                </button>
              </>
            ) : (
              <button
                id="mobile-nav-btn-home"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setView('home');
                }}
                className="w-full text-center font-sans font-bold text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition-colors"
              >
                Back to Main Website
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
