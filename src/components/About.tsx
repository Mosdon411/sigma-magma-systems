import React from 'react';
import { Target, Eye, Users, Award, ShieldCheck, Quote } from 'lucide-react';
import { CORE_VALUES, TEAM_MEMBERS } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sigma-blue dark:text-cyan-400 block mb-2">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Leading Tech Engineering & Consulting in Abuja, Nigeria
            </h2>
            
            <div className="mt-8 border-l-4 border-sigma-blue pl-4 py-1 italic text-slate-600 dark:text-slate-300">
              "We drive significant and measurable improvements—strategically, operationally, and financially—delivering enhanced value, increased productivity, deeper insights, and greater control."
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              <strong className="text-slate-900 dark:text-white font-semibold">Sigma Magma Systems</strong> is a limited liability company and a prominent start-up based in Abuja, Nigeria. As a leading independent consultancy and technology development organization, we enable you to maximize the efficiency, yield, and overall impact of your strategic investments.
            </p>
            <p>
              We focus on the research, development, and production of future systems, autonomous robots, energy systems, high-value real estate technology, AI-driven architectures, and IoT gateways for industrial, security, agriculture, and domestic purposes.
            </p>
            <p>
              With a growing team of operational professionals across multiple states, our systematic and adaptable approach to innovation and technology helps our client base navigate their most complex challenges with absolute confidence and precision.
            </p>
          </div>
        </div>

        {/* Mission & Vision Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <div className="relative overflow-hidden bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-8 text-slate-100 dark:text-slate-700/50 select-none pointer-events-none">
              <Target className="h-28 w-28 stroke-[0.5]" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-sigma-blue/10 dark:bg-sigma-blue/20 rounded-xl text-sigma-blue dark:text-cyan-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              To revolutionize industries through innovative technology solutions, empowering businesses and individuals with cutting-edge technologies, sustainable energy grids, and specialized advisory services.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative overflow-hidden bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-8 text-slate-100 dark:text-slate-700/50 select-none pointer-events-none">
              <Eye className="h-28 w-28 stroke-[0.5]" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-sigma-green/10 dark:bg-sigma-green/20 rounded-xl text-sigma-green dark:text-emerald-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              To be a global leader in providing intelligent systems, advanced robotics, and data analytics that enhance efficiency, corporate transparency, productivity, and security across diverse economic sectors.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sigma-blue dark:text-cyan-400 block mb-2">
              Our Foundations
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Core Principles We Live By
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              These fundamental guidelines dictate how we formulate solutions, design code, and foster relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800/80 shadow-sm transition-all duration-300 hover:shadow-md`}
                id={`core-value-${idx}`}
              >
                <div className={`h-2 w-12 rounded-full mb-4 bg-slate-200 dark:bg-slate-700`} />
                <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Leadership section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sigma-blue dark:text-cyan-400 block mb-2">
              Executive Leadership
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              The Minds Behind the Systems
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              Bringing deep technical operations and strategic oversight to Abuja’s infrastructure projects.
            </p>
          </div>

          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800/60 p-6 md:p-10"
              id={`team-member-${idx}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Photo & Badge */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="relative h-48 w-48 rounded-2xl overflow-hidden border-4 border-slate-100 dark:border-slate-700 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Bio Details */}
                <div className="md:col-span-8 space-y-4 text-center md:text-left">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h4>
                    <p className="text-sigma-blue dark:text-cyan-400 font-semibold tracking-wide text-sm mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <div className="relative py-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                    <Quote className="absolute -top-3 -left-2 h-6 w-6 text-slate-100 dark:text-slate-800 rotate-180 -z-0 select-none pointer-events-none" />
                    <p className="text-sm font-semibold tracking-wider font-display text-slate-700 dark:text-slate-200 uppercase relative z-10">
                      "{member.tagline}"
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2 flex justify-center md:justify-start items-center gap-3">
                    <span className="text-xs text-slate-400 font-medium">Headquarters Reach: Nigeria / Abuja / FCT</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
