/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data';
import { Appointment } from '../types';
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, Check, Sparkles, Loader } from 'lucide-react';

interface BookingSystemProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess?: () => void;
}

export default function BookingSystem({ isOpen, onClose, onBookingSuccess }: BookingSystemProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState('Root Canal Treatment');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Prevent selecting past dates
  const todayStr = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 
    '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please enter your full name';
    
    // Simple Indian phone number check
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\+?([0-9]{1,4})?[-. ]?([0-9]{10})$/.test(phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!date) newErrors.date = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury API response / network delay
    setTimeout(() => {
      // Form new appointment object
      const newBooking: Appointment = {
        id: `apt-${Math.floor(1000 + Math.random() * 9000)}`,
        name,
        phone,
        email: email || 'No email provided',
        treatment,
        date,
        time,
        message: message || 'No message provided',
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      // Retrieve existing appointments from local storage
      const existingStr = localStorage.getItem('jyoti_dental_appointments');
      let currentBookings: Appointment[] = [];
      
      if (existingStr) {
        try {
          currentBookings = JSON.parse(existingStr);
        } catch {
          currentBookings = [];
        }
      }

      // Add to beginning of array
      currentBookings.unshift(newBooking);
      localStorage.setItem('jyoti_dental_appointments', JSON.stringify(currentBookings));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Notify parent to refresh list if needed
      if (onBookingSuccess) {
        onBookingSuccess();
      }

      // Reset Form fields
      setName('');
      setPhone('');
      setEmail('');
      setDate('');
      setMessage('');
      
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Form Card */}
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300 relative text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Header bar */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6 text-white flex items-center justify-between">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-blue-100">
              FAST APPOINTMENT SCHEDULER
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              Book Your Appointment
            </h3>
          </div>
          <button
            id="book-close-x-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close scheduler"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success screen */}
        {isSuccess ? (
          <div className="p-10 text-center space-y-6 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 relative animate-bounce">
              <Check className="w-10 h-10" />
              <div className="absolute inset-0 rounded-full border-4 border-emerald-400/20 animate-ping" />
            </div>
            
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                <Sparkles className="w-3.5 h-3.5 fill-teal-100" />
                <span>CONFIRMED SECURELY</span>
              </span>
              <h4 className="font-display text-2xl font-extrabold text-slate-950">
                Appointment Requested!
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed font-light">
                Your request was processed successfully. Our clinic team will reach out to you within 30 minutes over call or WhatsApp to confirm your slot.
              </p>
            </div>

            {/* Print details */}
            <div className="bg-slate-50 p-4 rounded-2xl w-full border border-slate-100 space-y-1.5 text-xs text-slate-600 font-sans">
              <div className="flex justify-between">
                <span>Treatment:</span> <strong className="text-slate-800 font-semibold">{treatment}</strong>
              </div>
              <div className="flex justify-between">
                <span>Selected Slot:</span> <strong className="text-slate-800 font-semibold">{date} • {time}</strong>
              </div>
            </div>

            <button
              id="book-success-done-btn"
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full font-sans font-bold text-white bg-blue-600 hover:bg-blue-700 py-3.5 rounded-xl shadow-lg shadow-blue-600/15 transition-colors focus:outline-none"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Rahul Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full font-sans text-sm pl-11 pr-4 py-3 rounded-xl border bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                    errors.name ? 'border-red-400 focus:ring-red-400/10' : 'border-slate-200 focus:ring-blue-500/10 focus:border-blue-500'
                  }`}
                />
              </div>
              {errors.name && <p className="font-sans text-[10px] text-red-500 font-bold">{errors.name}</p>}
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full font-sans text-sm pl-11 pr-4 py-3 rounded-xl border bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.phone ? 'border-red-400 focus:ring-red-400/10' : 'border-slate-200 focus:ring-blue-500/10 focus:border-blue-500'
                    }`}
                  />
                </div>
                {errors.phone && <p className="font-sans text-[10px] text-red-500 font-bold">{errors.phone}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full font-sans text-sm pl-11 pr-4 py-3 rounded-xl border bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                      errors.email ? 'border-red-400 focus:ring-red-400/10' : 'border-slate-200 focus:ring-blue-500/10 focus:border-blue-500'
                    }`}
                  />
                </div>
                {errors.email && <p className="font-sans text-[10px] text-red-500 font-bold">{errors.email}</p>}
              </div>
            </div>

            {/* Department / Treatment Selection */}
            <div className="space-y-1.5">
              <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Dental Treatment
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer"
              >
                {CLINIC_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.title}>{srv.title}</option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full font-sans text-sm pl-11 pr-4 py-3 rounded-xl border bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 transition-all cursor-pointer ${
                      errors.date ? 'border-red-400 focus:ring-red-400/10' : 'border-slate-200 focus:ring-blue-500/10 focus:border-blue-500'
                    }`}
                  />
                </div>
                {errors.date && <p className="font-sans text-[10px] text-red-500 font-bold">{errors.date}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Preferred Hour
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full font-sans text-sm pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Message / Symptoms */}
            <div className="space-y-1.5">
              <label className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                Explain your symptoms or requests (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                <textarea
                  rows={2}
                  placeholder="Describe sensitivity, pain level, or custom aesthetic requests..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full font-sans text-sm pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                />
              </div>
            </div>

            {/* Note about Privacy / Doctor Guarantee */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start space-x-2.5 text-[10px] text-slate-400 font-sans leading-relaxed">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600 mt-0.5 shrink-0">✓</span>
              <span>Your medical records are highly confidential. Submitting this form secures your placement prioritization. Confirmation is entirely free.</span>
            </div>

            {/* Submission triggers */}
            <div className="flex items-center justify-end pt-2 space-x-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="font-sans text-sm font-bold text-slate-500 hover:text-slate-700 px-5 py-3 rounded-xl focus:outline-none"
              >
                Cancel
              </button>
              <button
                id="book-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center space-x-2 font-sans font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-lg shadow-blue-600/10 transition-colors disabled:opacity-75 focus:outline-none min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <span>Book Slot</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
