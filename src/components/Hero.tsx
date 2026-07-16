import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Cpu, Zap, Building2, ShieldAlert } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Sigma Magma Systems',
      subtitle: 'Future Systems & Intelligent Robotics',
      description: 'Researching, developing, and deploying autonomous systems, heavy-payload drones, and smart IoT telemetry systems for industrial, security, and agricultural sectors.',
      icon: <Cpu className="h-10 w-10 text-rose-500" />,
      tag: 'Applied Deep Tech',
      bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600',
    },
    {
      title: 'Sustainable Energy',
      subtitle: 'Smart Solar-Hybrid Microgrids',
      description: 'Engineering and integrating highly reliable commercial solar systems, load-balancing battery interfaces, and automated electrical controls to secure Abuja’s energy future.',
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      tag: 'Eco Infrastructure',
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    },
    {
      title: 'Modern Infrastructure',
      subtitle: 'Smart Real Estate & Advisory Solutions',
      description: 'Comprehensive property asset advisory, full-scale IoT building automation, competitive media investment audits, and specialized enterprise retraining protocols.',
      icon: <Building2 className="h-10 w-10 text-blue-500" />,
      tag: 'Strategic Advisory & PMS',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Overlays & Grid */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      
      {/* Visual Dot Matrix Pattern */}
      <div className="absolute inset-0 z-10 opacity-15" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }} 
      />

      {/* Carousel Render */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={index}
                className="absolute inset-0 h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1 }}
              >
                {/* Hero Content Container */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                      {/* Top Label */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wider text-cyan-300 uppercase mb-5"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                        {slide.tag}
                      </motion.div>

                      {/* Heading */}
                      <motion.h1
                        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        className="text-lg sm:text-xl font-medium text-slate-300 mb-5 font-display"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* Description */}
                      <motion.p
                        className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>

                      {/* Actions */}
                      <motion.div
                        className="flex flex-wrap gap-4 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <button
                          onClick={() => scrollToSection('about')}
                          className="px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm"
                          id={`hero-action-about-${index}`}
                        >
                          Discover Our Vision
                        </button>
                        <button
                          onClick={() => scrollToSection('services')}
                          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 cursor-pointer text-sm"
                          id={`hero-action-services-${index}`}
                        >
                          Our Services
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Manual Slide Controls */}
      <div className="absolute bottom-10 right-4 sm:right-10 z-30 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white hover:text-cyan-400 transition-all focus:outline-none"
          aria-label="Previous slide"
          id="hero-btn-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white hover:text-cyan-400 transition-all focus:outline-none"
          aria-label="Next slide"
          id="hero-btn-next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Quick Stats Overlay (Floating at the bottom-left on desktop) */}
      <div className="hidden lg:flex absolute bottom-10 left-10 z-30 gap-10 bg-slate-900/60 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl">
        <div className="flex flex-col">
          <span className="text-2xl font-bold font-display text-white">RC: 1920630</span>
          <span className="text-xs text-slate-400 font-medium">Federal Registration Registry</span>
        </div>
        <div className="h-10 w-[1px] bg-slate-800 self-center" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold font-display text-emerald-400">Abuja</span>
          <span className="text-xs text-slate-400 font-medium">Headquarters & Labs</span>
        </div>
        <div className="h-10 w-[1px] bg-slate-800 self-center" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold font-display text-amber-400">100%</span>
          <span className="text-xs text-slate-400 font-medium">Committed to Quality & Safety</span>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            id={`hero-indicator-${idx}`}
          />
        ))}
      </div>
    </section>
  );
}
