/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Appointment } from '../types';
import { INITIAL_APPOINTMENTS } from '../data';
import { 
  Lock, ArrowLeft, Search, Filter, Trash2, CheckCircle2, 
  XCircle, Clock, Check, Download, ChevronRight, Sparkles, 
  TrendingUp, Calendar, AlertCircle, RefreshCw, BarChart2, ShieldCheck
} from 'lucide-react';

interface AdminDashboardProps {
  onBackToWeb: () => void;
}

export default function AdminDashboard({ onBackToWeb }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [treatmentFilter, setTreatmentFilter] = useState<string>('all');

  // Load appointments
  useEffect(() => {
    const existingStr = localStorage.getItem('jyoti_dental_appointments');
    if (existingStr) {
      try {
        setAppointments(JSON.parse(existingStr));
      } catch {
        // Fallback if corrupt
        setAppointments(INITIAL_APPOINTMENTS);
        localStorage.setItem('jyoti_dental_appointments', JSON.stringify(INITIAL_APPOINTMENTS));
      }
    } else {
      setAppointments(INITIAL_APPOINTMENTS);
      localStorage.setItem('jyoti_dental_appointments', JSON.stringify(INITIAL_APPOINTMENTS));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcode is admin or jyoti123
    if (password === 'admin' || password === 'jyoti123' || password === 'rohit123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid medical credentials. Please try again.');
    }
  };

  // Status Updater
  const updateStatus = (id: string, newStatus: Appointment['status']) => {
    const updated = appointments.map(apt => {
      if (apt.id === id) {
        return { ...apt, status: newStatus };
      }
      return apt;
    });
    setAppointments(updated);
    localStorage.setItem('jyoti_dental_appointments', JSON.stringify(updated));
  };

  // Delete Record
  const deleteRecord = (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment record permanently?')) {
      const updated = appointments.filter(apt => apt.id !== id);
      setAppointments(updated);
      localStorage.setItem('jyoti_dental_appointments', JSON.stringify(updated));
    }
  };

  // CSV Exporter
  const exportCSV = () => {
    const headers = ['ID', 'Patient Name', 'Phone', 'Email', 'Treatment', 'Date', 'Time', 'Status', 'Symptoms', 'Created At'];
    const rows = appointments.map(apt => [
      apt.id,
      apt.name,
      apt.phone,
      apt.email,
      apt.treatment,
      apt.date,
      apt.time,
      apt.status,
      apt.message.replace(/,/g, ';'), // avoid CSV breaks
      apt.createdAt
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Jyoti_Clinic_Appointments_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter & Search Logic
  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = 
      apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    const matchesTreatment = treatmentFilter === 'all' || apt.treatment === treatmentFilter;

    return matchesSearch && matchesStatus && matchesTreatment;
  });

  // Analytics Computation
  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    completed: appointments.filter(a => a.status === 'completed').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length,
  };

  // Distinct treatments for filters
  const treatmentTypes = Array.from(new Set(appointments.map(a => a.treatment)));

  // Calculate percentages for analytics visualizer
  const pendingPercentage = stats.total > 0 ? (stats.pending / stats.total) * 100 : 0;
  const confirmedPercentage = stats.total > 0 ? (stats.confirmed / stats.total) * 100 : 0;
  const completedPercentage = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;
  const cancelledPercentage = stats.total > 0 ? (stats.cancelled / stats.total) * 100 : 0;

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient lighting accents */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] w-full max-w-md shadow-2xl space-y-8 relative z-10 text-left">
          
          {/* Logo & Header */}
          <div className="space-y-3 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                Clinic Portal Login
              </h2>
              <p className="font-sans text-xs text-slate-400">
                Authorized clinical credentials only
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="block font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                Doctor Passcode
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                <input
                  type="password"
                  placeholder="Enter admin or jyoti123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full font-sans text-sm pl-11 pr-4 py-3.5 rounded-xl border border-slate-800 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              {loginError && (
                <p className="font-sans text-[11px] text-red-400 font-bold flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{loginError}</span>
                </p>
              )}
            </div>

            <button
              id="admin-login-submit"
              type="submit"
              className="w-full font-sans font-bold text-white bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl shadow-lg shadow-blue-500/10 transition-colors cursor-pointer text-center focus:outline-none"
            >
              Authenticate Portal
            </button>
          </form>

          <hr className="border-slate-800/80" />

          {/* Quick return triggers */}
          <button
            id="admin-login-back-btn"
            onClick={onBackToWeb}
            className="w-full flex items-center justify-center space-x-2 font-sans text-xs font-bold text-slate-400 hover:text-white transition-colors py-2 focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Public Website</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="text-left">
            <span className="inline-flex items-center space-x-1 font-sans text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-teal-100" />
              <span>SYSTEM ONLINE</span>
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Jyoti Dental Admin Portal
            </h1>
            <p className="font-sans text-xs text-slate-400 font-medium">
              Overseeing scheduling metrics, patient queues, and appointment exports for Dr. Rohit Mamude.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              id="admin-btn-export"
              onClick={exportCSV}
              className="flex items-center space-x-1.5 font-sans text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl transition-colors shadow-sm focus:outline-none"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            <button
              id="admin-btn-logout"
              onClick={() => {
                setIsAuthenticated(false);
                setPassword('');
              }}
              className="font-sans text-xs font-bold text-red-600 hover:bg-red-50 border border-red-100 px-4 py-2.5 rounded-xl transition-colors focus:outline-none"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Dashboard Analytics grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Counters widget (Left) */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left">
              <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Schedulings</span>
              <span className="font-display text-3xl font-black text-slate-900 mt-2">{stats.total}</span>
              <span className="font-sans text-[10px] text-blue-600 font-semibold mt-1">100% Volume</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left">
              <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pending Verification</span>
              <span className="font-display text-3xl font-black text-amber-500 mt-2">{stats.pending}</span>
              <span className="font-sans text-[10px] text-slate-400 font-medium mt-1">Requires doctor check</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left">
              <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confirmed Slots</span>
              <span className="font-display text-3xl font-black text-blue-600 mt-2">{stats.confirmed}</span>
              <span className="font-sans text-[10px] text-emerald-600 font-semibold mt-1">Secured in system</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left">
              <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">Finished Checks</span>
              <span className="font-display text-3xl font-black text-emerald-600 mt-2">{stats.completed}</span>
              <span className="font-sans text-[10px] text-slate-400 font-medium mt-1">Visits completed</span>
            </div>

          </div>

          {/* Visual Progress Chart (Right) */}
          <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between text-left space-y-4">
            <div>
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 flex items-center space-x-1.5">
                <BarChart2 className="w-4 h-4 text-blue-500" />
                <span>Status Breakdown</span>
              </h3>
              
              {/* Stacked bar or lines showing percentage */}
              <div className="space-y-3 mt-4">
                
                {/* Confirmed */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-sans text-[11px] font-semibold text-slate-600">
                    <span>Confirmed</span> <span>{stats.confirmed} ({confirmedPercentage.toFixed(0)}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${confirmedPercentage}%` }} />
                  </div>
                </div>

                {/* Pending */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-sans text-[11px] font-semibold text-slate-600">
                    <span>Pending Action</span> <span>{stats.pending} ({pendingPercentage.toFixed(0)}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${pendingPercentage}%` }} />
                  </div>
                </div>

                {/* Completed */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-sans text-[11px] font-semibold text-slate-600">
                    <span>Completed</span> <span>{stats.completed} ({completedPercentage.toFixed(0)}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${completedPercentage}%` }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-4 justify-between">
          {/* Search bar */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search patients by name, mobile, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full font-sans text-xs sm:text-sm pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Filtering dropdowns */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            
            {/* Status dropdown */}
            <div className="flex items-center space-x-1 text-xs text-slate-500">
              <Filter className="w-3.5 h-3.5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="font-sans font-semibold border border-slate-200 rounded-lg p-2 bg-white focus:outline-none cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Treatment dropdown */}
            <select
              value={treatmentFilter}
              onChange={(e) => setTreatmentFilter(e.target.value)}
              className="font-sans text-xs font-semibold border border-slate-200 rounded-lg p-2 bg-white focus:outline-none cursor-pointer"
            >
              <option value="all">All Treatments</option>
              {treatmentTypes.map((type, idx) => (
                <option key={idx} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Queued Appointments List Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden text-left">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50/60 border-b border-slate-100 font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <th className="py-4 px-6">ID / Patient</th>
                  <th className="py-4 px-6">Contact details</th>
                  <th className="py-4 px-6">Treatment Required</th>
                  <th className="py-4 px-6">Preferred slot</th>
                  <th className="py-4 px-6">Symptoms</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50/40 transition-colors">
                      {/* ID / Name */}
                      <td className="py-5 px-6">
                        <span className="block font-sans text-[10px] font-mono text-slate-400 font-semibold uppercase">{apt.id}</span>
                        <span className="block font-display font-bold text-sm text-slate-900 mt-0.5">{apt.name}</span>
                      </td>

                      {/* Contact details */}
                      <td className="py-5 px-6 font-sans text-xs">
                        <span className="block text-slate-700 font-semibold">{apt.phone}</span>
                        <span className="block text-slate-400 mt-0.5">{apt.email}</span>
                      </td>

                      {/* Treatment required */}
                      <td className="py-5 px-6 font-sans text-xs">
                        <span className="inline-flex items-center text-blue-700 font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/40">
                          {apt.treatment}
                        </span>
                      </td>

                      {/* Preferred slot */}
                      <td className="py-5 px-6 font-sans text-xs">
                        <span className="block text-slate-700 font-bold">{apt.date}</span>
                        <span className="block text-slate-400 mt-0.5">{apt.time}</span>
                      </td>

                      {/* Symptoms */}
                      <td className="py-5 px-6 font-sans text-xs text-slate-500 max-w-xs truncate leading-relaxed">
                        {apt.message}
                      </td>

                      {/* Status */}
                      <td className="py-5 px-6">
                        {apt.status === 'pending' && (
                          <span className="inline-flex items-center space-x-1 text-amber-700 bg-amber-50 border border-amber-100/50 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            <Clock className="w-3 h-3 text-amber-500" />
                            <span>Pending</span>
                          </span>
                        )}
                        {apt.status === 'confirmed' && (
                          <span className="inline-flex items-center space-x-1 text-blue-700 bg-blue-50 border border-blue-100/50 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                            <span>Confirmed</span>
                          </span>
                        )}
                        {apt.status === 'completed' && (
                          <span className="inline-flex items-center space-x-1 text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Completed</span>
                          </span>
                        )}
                        {apt.status === 'cancelled' && (
                          <span className="inline-flex items-center space-x-1 text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                            <XCircle className="w-3 h-3 text-slate-400" />
                            <span>Cancelled</span>
                          </span>
                        )}
                      </td>

                      {/* Quick action buttons */}
                      <td className="py-5 px-6 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          {apt.status === 'pending' && (
                            <button
                              id={`btn-confirm-${apt.id}`}
                              onClick={() => updateStatus(apt.id, 'confirmed')}
                              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none"
                              title="Confirm Appointment"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                          )}
                          {apt.status === 'confirmed' && (
                            <button
                              id={`btn-complete-${apt.id}`}
                              onClick={() => updateStatus(apt.id, 'completed')}
                              className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors focus:outline-none"
                              title="Mark as Completed"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          )}
                          {apt.status !== 'cancelled' && apt.status !== 'completed' && (
                            <button
                              id={`btn-cancel-${apt.id}`}
                              onClick={() => updateStatus(apt.id, 'cancelled')}
                              className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-600 hover:text-white transition-colors focus:outline-none"
                              title="Cancel Appointment"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            id={`btn-delete-${apt.id}`}
                            onClick={() => deleteRecord(apt.id)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors focus:outline-none"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 px-6 text-center text-slate-400 font-sans text-sm">
                      No patient records matched the specified search criteria or status filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
