import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'h-8 w-8', text: 'text-sm' },
    md: { icon: 'h-11 w-11', text: 'text-lg md:text-xl' },
    lg: { icon: 'h-16 w-16', text: 'text-2xl md:text-3xl' },
  };

  const selectedSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 4-Diamond Logo SVG */}
      <svg
        className={`${selectedSize.icon} shrink-0`}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Diamond - Rose/Red */}
        <path
          d="M60 10 L85 35 L60 60 L35 35 Z"
          className="fill-sigma-red transition-all duration-300 hover:opacity-90"
        />
        {/* Left Diamond - Emerald/Green */}
        <path
          d="M30 40 L55 65 L30 90 L5 65 Z"
          className="fill-sigma-green transition-all duration-300 hover:opacity-90"
        />
        {/* Right Diamond - Royal Blue */}
        <path
          d="M90 40 L115 65 L90 90 L65 65 Z"
          className="fill-sigma-blue transition-all duration-300 hover:opacity-90"
        />
        {/* Bottom Diamond - Amber/Yellow */}
        <path
          d="M60 70 L85 95 L60 120 L35 95 Z"
          className="fill-sigma-yellow transition-all duration-300 hover:opacity-90"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold tracking-wider leading-none text-sigma-red ${selectedSize.text}`}>
            SIGMA MAGMA
          </span>
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-sigma-blue dark:text-cyan-400 mt-1 uppercase">
            Systems
          </span>
        </div>
      )}
    </div>
  );
}
