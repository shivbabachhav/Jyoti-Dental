/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Users, Shield, Award, Heart } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // States for animated counters
  const [patients, setPatients] = useState(0);
  const [experience, setExperience] = useState(0);
  const [techLevel, setTechLevel] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Fast count ups
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing function outQuad
      const ease = progress * (2 - progress);

      setPatients(Math.round(ease * 1000));
      setExperience(Math.round(ease * 10));
      setTechLevel(Math.round(ease * 100)); // Representing "100%" tech level
      setSatisfaction(Math.round(ease * 99)); // Representing "99.8%" satisfaction

      if (frame >= totalFrames) {
        clearInterval(timer);
        setPatients(1000);
        setExperience(10);
        setTechLevel(100);
        setSatisfaction(100);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const statCards = [
    {
      label: 'Happy Patients Restored',
      target: '1000+',
      current: patients === 1000 ? '1000+' : `${patients}+`,
      icon: Users,
      color: 'text-blue-600 bg-blue-50',
      desc: 'Lifelong smiles designed across Nashik'
    },
    {
      label: 'Years Clinical Experience',
      target: '10+ Years',
      current: experience === 10 ? '10+' : `${experience}+`,
      icon: Award,
      color: 'text-teal-600 bg-teal-50',
      desc: 'Dr. Rohit\'s decade-long expertise'
    },
    {
      label: 'Advanced Dental Care',
      target: '100%',
      current: techLevel === 100 ? '100%' : `${techLevel}%`,
      icon: Shield,
      color: 'text-blue-600 bg-blue-50',
      desc: 'ISO standards & digital rotary setups'
    },
    {
      label: 'Patient Satisfaction',
      target: '99.8%',
      current: satisfaction === 100 ? '99.8%' : `${(satisfaction * 0.998).toFixed(1)}%`,
      icon: Heart,
      color: 'text-emerald-600 bg-emerald-50',
      desc: 'Voted 5-stars by local families'
    }
  ];

  return (
    <section
      id="trust-metrics"
      ref={containerRef}
      className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center space-x-5 hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                <IconComp className="w-7 h-7" />
              </div>
              <div className="text-left">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.current}
                </span>
                <span className="block font-sans text-sm font-semibold text-slate-800 mt-0.5">
                  {stat.label}
                </span>
                <span className="block font-sans text-xs text-slate-400 mt-0.5">
                  {stat.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
