import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const currentYear = 2026; // Match additional metadata local time

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Consulting', href: '#services' },
    { name: 'Portfolio Records', href: '#portfolio' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 pt-20 pb-10 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <Logo size="md" showText={true} className="brightness-110" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Sigma Magma Systems is a licensed technology consultancy and system deployments start-up based in Abuja, Nigeria. We design robust power installations, autonomous robotics pipelines, and smart home facilities.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Corporate Affairs Registry Identification: RC 1920630
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Corporate Map
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                    id={`footer-link-${idx}`}
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Corporate Circular
            </h4>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Subscribe to receive feasibility guides, R&D progress briefs, and green energy news from our engineering headquarters.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl text-emerald-400 text-xs font-semibold animate-in fade-in duration-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                Subscription registered successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center max-w-xs">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700/80 text-white rounded-xl py-3 pl-4 pr-12 text-xs focus:outline-none focus:ring-2 focus:ring-sigma-blue placeholder:text-slate-500"
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 bg-sigma-blue hover:bg-blue-700 text-white rounded-lg transition-all focus:outline-none cursor-pointer"
                  aria-label="Subscribe"
                  id="newsletter-submit"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}

            {/* Social handles */}
            <div className="flex gap-4 items-center pt-2">
              <a
                href="https://www.facebook.com/share/1AUD9UafUS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-800"
                aria-label="Facebook"
                id="footer-social-fb"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/sigma-magma-systems/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-800"
                aria-label="LinkedIn"
                id="footer-social-in"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/sigma.magmasystems?igsh=MTA1dHNnNW84aG9oYQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-800"
                aria-label="Instagram"
                id="footer-social-ig"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 mt-12 border-t border-slate-800/60 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Sigma Magma Systems. All Rights Reserved.</p>
          <div className="flex gap-4 text-slate-500 font-mono">
            <span>CAC Nigeria: RC 1920630</span>
            <span>|</span>
            <a href="#about" className="hover:underline hover:text-slate-400">Security Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
