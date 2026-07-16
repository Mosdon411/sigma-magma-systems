import React, { useState } from 'react';
import { Zap, Cpu, Building2, GraduationCap, BarChart3, TrendingUp, CheckCircle, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap = {
  Zap,
  Cpu,
  Building2,
  GraduationCap,
  BarChart3,
  TrendingUp,
};

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const toggleServiceExpand = (id: string) => {
    setActiveServiceId(activeServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sigma-blue dark:text-cyan-400 block mb-2">
            Consulting & Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Corporate Solutions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Combining rigorous research, data-driven diagnostics, and tactical implementations to drive real bottom-line value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Cpu;
            const isExpanded = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isExpanded
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl ring-2 ring-sigma-blue/30 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700 hover:-translate-y-1'
                }`}
                onClick={() => toggleServiceExpand(service.id)}
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Category Indicator */}
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                    isExpanded ? 'text-cyan-400' : 'text-sigma-blue dark:text-cyan-500'
                  }`}>
                    {service.category}
                  </span>

                  {/* Header / Icon */}
                  <div className="flex items-start justify-between mt-3 mb-5">
                    <div className={`p-3 rounded-xl ${
                      isExpanded ? 'bg-white/10 text-cyan-400' : 'bg-slate-50 dark:bg-slate-800 text-sigma-blue dark:text-cyan-400'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <span className={`text-xs flex items-center gap-1 font-medium ${
                      isExpanded ? 'text-slate-400' : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {isExpanded ? 'Collapse' : 'Details'}
                      <ArrowUpRight className={`h-3 w-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display text-lg font-bold mb-3 ${
                    isExpanded ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isExpanded ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Sub-features checklist */}
                <div className={`space-y-2.5 transition-all duration-300 origin-top overflow-hidden ${
                  isExpanded ? 'max-h-80 opacity-100 mt-2 border-t border-slate-800 pt-5' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
                    Key Features:
                  </p>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-16 bg-slate-50 dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Need a Custom Tech Integration or Feasibility Report?
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
              Our engineering labs and advisory teams are equipped to prototype hardware systems, write post-campaign diagnostic codes, or structure real estate developments from ground up.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-sigma-blue hover:bg-blue-700 text-white font-semibold rounded-lg text-sm tracking-wide transition-colors whitespace-nowrap cursor-pointer"
            id="service-cta-btn"
          >
            Initiate Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
