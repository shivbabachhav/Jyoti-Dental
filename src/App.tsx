/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import GoogleReviews from './components/GoogleReviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingSystem from './components/BookingSystem';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [view, setView] = useState<'home' | 'admin'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Monitor scrolling to calculate scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll positioning on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [view]);

  return (
    <div className="relative min-h-screen flex flex-col bg-bg antialiased">
      {/* Premium Scroll Progress Bar */}
      {view === 'home' && (
        <div 
          className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-teal-400 to-emerald-500 z-50 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      {/* Sticky Premium Navbar */}
      <Navbar 
        currentView={view} 
        setView={setView} 
        openBookingModal={() => setIsBookingOpen(true)} 
      />

      {/* Main View Router */}
      {view === 'home' ? (
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero openBookingModal={() => setIsBookingOpen(true)} />

          {/* Trust Metrics Section */}
          <Stats />

          {/* Services Section */}
          <Services />

          {/* Doctor Introduction (Spotlight) Section */}
          <About />

          {/* Why Choose Section */}
          <WhyChoose />

          {/* Before & After Interactive Comparison */}
          <BeforeAfter />

          {/* Virtual Facility Tour / Photo Gallery */}
          <Gallery />

          {/* Patient Testimonials Carousel */}
          <Testimonials />

          {/* Google Ratings Profile & Map */}
          <GoogleReviews />

          {/* FAQ Accordion Section */}
          <FAQ />

          {/* Location details, opening hours, directions */}
          <Contact />

          {/* Floating WhatsApp Consulting Trigger */}
          <WhatsAppButton />

          {/* Floating Booking System Modal Dialog */}
          <BookingSystem 
            isOpen={isBookingOpen} 
            onClose={() => setIsBookingOpen(false)} 
          />
        </main>
      ) : (
        <div className="flex-grow">
          {/* Secure Admin Operations Portal */}
          <AdminDashboard onBackToWeb={() => setView('home')} />
        </div>
      )}

      {/* Modern Luxury Site Footer */}
      <Footer setView={setView} />
    </div>
  );
}
