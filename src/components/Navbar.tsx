import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Consultancy & Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-100 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      {/* Top micro-bar for official address/contact */}
      <div className="hidden lg:block bg-slate-900 dark:bg-black text-slate-300 py-1.5 px-6 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Abuja Headquarters, Katampe Main, FCT
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-sigma-blue" />
              (+234) 8167657878
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">RC: 1920630</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              English (NG)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex-shrink-0" id="nav-brand-logo">
              <Logo size="md" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-sigma-blue dark:text-cyan-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.name}
              </a>
            ))}

            <div className="pl-3 border-l border-slate-200 dark:border-slate-700 ml-2 flex items-center gap-3">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden lg:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-sigma-blue hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                id="nav-cta-btn"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 shadow-xl border-b border-slate-100 dark:border-slate-800/80 animate-in fade-in slide-in-from-top-5 duration-200" id="mobile-drawer">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-sigma-blue dark:text-cyan-400 bg-slate-50 dark:bg-slate-900/60 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
                id={`mobile-nav-link-${link.id}`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 px-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-sigma-blue hover:bg-blue-700 shadow-md text-center"
                id="mobile-nav-cta"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
