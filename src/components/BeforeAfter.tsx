/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Eye, ChevronLeft, ChevronRight, Sparkles, ZoomIn, Info } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  details: string;
}

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState<string>('c1');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const cases: CaseStudy[] = [
    {
      id: 'c1',
      title: 'Smile Designing Makeover',
      description: 'Restructured uneven tooth margins and spaces with premium E-Max cosmetic laminates.',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&blur=10', // slightly blurred to simulate discolored/chipped
      afterImg: '/src/assets/images/cosmetic_dentistry_1782243508731.jpg', // perfect white smile
      details: 'Designed meticulously by Dr. Rohit Mamude to match the patient\'s facial structure, lips line, and skin tone. High-translucency ceramic veneers were bonded with microscopic precision, instantly boosting the patient\'s confidence.'
    },
    {
      id: 'c2',
      title: 'Advanced Teeth Whitening',
      description: 'Medical-grade laser cool-light whitening to remove dark tea, coffee, and nicotine stains.',
      beforeImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&tint=yellow', // Simulated yellowish stain
      afterImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600', // Pristine dental clean
      details: 'Completed in a single comfortable 45-minute clinic session. Our advanced whitening gel, activated by laser energy, removed years of stubborn stains without inducing any temperature sensitivity in the teeth.'
    }
  ];

  const currentCase = cases.find(c => c.id === activeCase) || cases[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isResizing) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section id="before-after" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-600">
            CLINICAL TRIUMPHS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Interactive Before &amp; After <br />
            Transformation Slider
          </h2>
          <p className="font-sans text-base text-slate-500 font-light max-w-2xl mx-auto">
            Drag the slider handle to compare the incredible cosmetic, restorative, and alignment outcomes performed personally by Dr. Rohit Mamude.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-3 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCase(c.id);
                setSliderPosition(50);
              }}
              className={`font-sans text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border transition-all ${
                activeCase === c.id
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Slider Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Comparison Container */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={handleMouseDown}
              className={`relative aspect-[4/3] w-full max-w-xl rounded-[24px] overflow-hidden border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] select-none cursor-ew-resize bg-slate-950 ${
                isZoomed ? 'scale-105' : 'scale-100'
              } transition-transform duration-300`}
            >
              {/* After Image (Base) */}
              <img
                src={currentCase.afterImg}
                alt="After Dental Treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-20 shadow-md">
                After Restoration
              </span>

              {/* Before Image (Overlay clipped widthwise) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImg}
                  alt="Before Dental Treatment"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-20 shadow-md">
                Before Treatment
              </span>

              {/* Drag Handle Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-2xl flex items-center justify-center border-2 border-blue-600 z-40 transition-transform active:scale-95">
                  <ChevronLeft className="w-4 h-4 shrink-0 text-blue-600" />
                  <ChevronRight className="w-4 h-4 shrink-0 text-blue-600 -ml-1" />
                </div>
              </div>
            </div>

            {/* Instruction tooltip below slider */}
            <div className="flex items-center space-x-2 text-slate-400 font-sans text-xs mt-6">
              <Info className="w-4 h-4 text-blue-500" />
              <span>Click and drag left or right on the image to sweep the change</span>
            </div>
          </div>

          {/* Case Narrative */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                <Sparkles className="w-3.5 h-3.5 fill-teal-100" />
                <span>SUCCESS CASE STUDY</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {currentCase.title}
              </h3>
            </div>

            <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
              {currentCase.description}
            </p>

            <div className="p-6 bg-white rounded-[24px] border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-2">
              <span className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                CLINICAL DETAILS
              </span>
              <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                {currentCase.details}
              </p>
            </div>

            <button
              id="before-after-zoom-toggle"
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex items-center space-x-2 font-sans text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100/30 px-5 py-3 rounded-xl transition-all focus:outline-none"
            >
              <ZoomIn className="w-4 h-4" />
              <span>{isZoomed ? 'Exit Zoom Mode' : 'Toggle High-Resolution Zoom'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
