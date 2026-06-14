import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const sizes = {
    sm: { mark: 28, text: 14 },
    md: { mark: 36, text: 18 },
    lg: { mark: 48, text: 24 },
  };

  const { mark: markSize, text: textSize } = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
          <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#006aff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <linearGradient id="neonGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a28" />
            <stop offset="100%" stopColor="#252535" />
          </linearGradient>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#neonGlow)">
          {/* 3D Layered M effect */}
          <path
            d="M58 24L22 44L22 64L58 44L58 24Z"
            fill="url(#neonGradient3)"
            opacity="0.9"
          />
          <path
            d="M58 16L22 36L22 56L58 36L58 16Z"
            fill="url(#neonGradient2)"
            opacity="0.8"
          />
          <path
            d="M58 8L22 28L22 48L58 28L58 8Z"
            fill="url(#neonGradient1)"
          />

          {/* Layer lines */}
          <path
            d="M40 21L40 38"
            stroke="#00d4ff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M48 17L48 34"
            stroke="#00d4ff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M32 24L32 41"
            stroke="#00d4ff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Corner nodes */}
          <circle cx="22" cy="28" r="3" fill="#00d4ff" className="animate-pulse-neon" />
          <circle cx="58" cy="8" r="3" fill="#00d4ff" className="animate-pulse-neon" />
          <circle cx="58" cy="44" r="3" fill="#00d4ff" className="animate-pulse-neon" />
        </g>
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display font-bold tracking-wider"
            style={{ fontSize: textSize }}
          >
            <span className="text-neon-blue neon-text-sm">MANIA</span>
            <span className="text-white">PRINT</span>
          </span>
        </div>
      )}
    </div>
  );
};
