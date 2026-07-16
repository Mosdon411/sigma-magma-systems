/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Setup default dark mode for excellent contrast and modern corporate look
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    // Synchronize HTML element class with dark mode state
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Structural Layout */}
      <main className="w-full">
        {/* Full-screen Carousel Hero Banner */}
        <Hero />

        {/* Corporate Profile Section (About, Mission, Team) */}
        <About />

        {/* Capabilities Grid (Core services, Custom advisory) */}
        <Services />

        {/* Interactive Dynamic Portfolio Showcase (Search, Category Filter, Sandboxed creation) */}
        <Portfolio />

        {/* Contact Form Terminal (Location coordinates, Inquiry validation, Messages log) */}
        <Contact />
      </main>

      {/* Standard Corporate Footer */}
      <Footer />
    </div>
  );
}

