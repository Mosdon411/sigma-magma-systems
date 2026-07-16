import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ThemeToggle({ darkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sigma-blue/50"
      aria-label="Toggle dark mode"
      id="theme-toggle-btn"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-amber-400 animate-pulse" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
}
