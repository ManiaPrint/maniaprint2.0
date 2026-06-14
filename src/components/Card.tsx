import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
  padding = 'md',
}) => {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={`
        rounded-2xl bg-surface-800/50 border border-white/5 backdrop-blur
        transition-all duration-300
        ${paddingStyles[padding]}
        ${hover ? 'hover:border-neon-blue/30 hover:shadow-glow hover:-translate-y-1 cursor-pointer' : ''}
        ${onClick ? 'text-left w-full' : ''}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = '',
}) => (
  <div className={`relative overflow-hidden rounded-t-2xl ${className}`}>
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => <div className={`p-6 ${className}`}>{children}</div>;

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neon';
  size?: 'sm' | 'md';
  className?: string;
}

const badgeVariants = {
  primary: 'bg-neon-blue/20 text-neon-blue border-neon-blue/30',
  secondary: 'bg-white/10 text-white/70 border-white/20',
  success: 'bg-neon-green/20 text-neon-green border-neon-green/30',
  warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  error: 'bg-red-500/20 text-red-400 border-red-500/30',
  neon: 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
}) => (
  <span
    className={`
      inline-flex items-center rounded-full font-semibold border
      ${badgeVariants[variant]}
      ${badgeSizes[size]}
      ${className}
    `}
  >
    {children}
  </span>
);
