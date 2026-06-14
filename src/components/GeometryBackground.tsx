import React from 'react';

const colorMap = {
  blue: { stroke: '#00d4ff', fill: 'rgba(0, 212, 255, 0.05)', glow: 'rgba(0, 212, 255, 0.3)' },
  purple: { stroke: '#8b5cf6', fill: 'rgba(139, 92, 246, 0.05)', glow: 'rgba(139, 92, 246, 0.3)' },
  green: { stroke: '#00ff88', fill: 'rgba(0, 255, 136, 0.05)', glow: 'rgba(0, 255, 136, 0.3)' },
  pink: { stroke: '#ff6b9d', fill: 'rgba(255, 107, 157, 0.05)', glow: 'rgba(255, 107, 157, 0.3)' },
};

export const GeometricCube: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 120, color = 'blue', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
      <g opacity="0.6">
        <path d="M60 10 L100 35 L100 85 L60 110 L20 85 L20 35 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
        <path d="M60 10 L100 35 L60 60 L20 35 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
        <path d="M20 35 L60 60 L60 110 L20 85 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" opacity="0.7" />
        <path d="M60 60 L100 35 L100 85 L60 110 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" opacity="0.5" />
        <circle cx="60" cy="10" r="3" fill={c.stroke} />
        <circle cx="100" cy="35" r="3" fill={c.stroke} />
        <circle cx="100" cy="85" r="3" fill={c.stroke} />
        <circle cx="60" cy="110" r="3" fill={c.stroke} />
        <circle cx="20" cy="85" r="3" fill={c.stroke} />
        <circle cx="20" cy="35" r="3" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricPyramid: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 100, color = 'purple', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <g opacity="0.5">
        <path d="M50 90 L85 70 L50 50 L15 70 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
        <path d="M15 70 L50 10 L50 50 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" opacity="0.7" />
        <path d="M50 10 L85 70 L50 50 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" opacity="0.5" />
        <circle cx="50" cy="10" r="3" fill={c.stroke} />
        <circle cx="15" cy="70" r="2" fill={c.stroke} />
        <circle cx="85" cy="70" r="2" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricHexagon: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 80, color = 'green', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className}>
      <g opacity="0.5">
        <path d="M40 5 L70 20 L70 50 L40 65 L10 50 L10 20 Z" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
        <path d="M40 15 L55 25 L55 45 L40 55 L25 45 L25 25 Z" fill="none" stroke={c.stroke} strokeWidth="0.5" opacity="0.5" />
        <circle cx="40" cy="5" r="2" fill={c.stroke} />
        <circle cx="70" cy="20" r="2" fill={c.stroke} />
        <circle cx="70" cy="50" r="2" fill={c.stroke} />
        <circle cx="40" cy="65" r="2" fill={c.stroke} />
        <circle cx="10" cy="50" r="2" fill={c.stroke} />
        <circle cx="10" cy="20" r="2" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricTriangle: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 70, color = 'pink', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" className={className}>
      <g opacity="0.4">
        <path d="M35 5 L65 60 L5 60 Z" fill="none" stroke={c.stroke} strokeWidth="1" />
        <path d="M35 20 L50 50 L20 50 Z" fill={c.fill} stroke={c.stroke} strokeWidth="0.5" opacity="0.5" />
        <circle cx="35" cy="5" r="2" fill={c.stroke} />
        <circle cx="65" cy="60" r="2" fill={c.stroke} />
        <circle cx="5" cy="60" r="2" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricSphere: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 100, color = 'blue', className = ''
}) => {
  const c = colorMap[color];
  const r = size / 2 - 5;
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      <g opacity="0.4">
        {/* Outer circle */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={c.stroke} strokeWidth="1" />
        {/* Horizontal ellipses */}
        <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke={c.stroke} strokeWidth="0.5" opacity="0.6" />
        <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke={c.stroke} strokeWidth="0.5" opacity="0.6" transform={`rotate(60 ${cx} ${cy})`} />
        <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke={c.stroke} strokeWidth="0.5" opacity="0.6" transform={`rotate(120 ${cx} ${cy})`} />
      </g>
    </svg>
  );
};

export const GeometricSpiral: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 80, color = 'purple', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className}>
      <g opacity="0.35">
        <path
          d="M40 40 Q40 25 55 25 Q70 25 70 40 Q70 55 55 55 Q35 55 35 40 Q35 20 50 20 Q70 20 70 40"
          fill="none"
          stroke={c.stroke}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="40" cy="40" r="2" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricRing: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 60, color = 'green', className = ''
}) => {
  const c = colorMap[color];
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      <g opacity="0.4">
        <circle cx={cx} cy={cy} r={size / 2 - 8} fill="none" stroke={c.stroke} strokeWidth="1" />
        <circle cx={cx} cy={cy} r={size / 3} fill="none" stroke={c.stroke} strokeWidth="0.5" opacity="0.6" />
        <circle cx={cx} cy={cy} r="3" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricDiamond: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 60, color = 'pink', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 60 80" className={className}>
      <g opacity="0.4">
        <path d="M30 5 L55 35 L30 75 L5 35 Z" fill="none" stroke={c.stroke} strokeWidth="1" />
        <path d="M30 20 L45 35 L30 60 L15 35 Z" fill={c.fill} stroke={c.stroke} strokeWidth="0.5" opacity="0.5" />
        <circle cx="30" cy="5" r="2" fill={c.stroke} />
        <circle cx="55" cy="35" r="2" fill={c.stroke} />
        <circle cx="30" cy="75" r="2" fill={c.stroke} />
        <circle cx="5" cy="35" r="2" fill={c.stroke} />
      </g>
    </svg>
  );
};

export const GeometricCross: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 50, color = 'blue', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" className={className}>
      <g opacity="0.3">
        <line x1="25" y1="5" x2="25" y2="45" stroke={c.stroke} strokeWidth="1" />
        <line x1="5" y1="25" x2="45" y2="25" stroke={c.stroke} strokeWidth="1" />
        <circle cx="25" cy="5" r="2" fill={c.stroke} />
        <circle cx="25" cy="45" r="2" fill={c.stroke} />
        <circle cx="5" cy="25" r="2" fill={c.stroke} />
        <circle cx="45" cy="25" r="2" fill={c.stroke} />
        <circle cx="25" cy="25" r="3" fill={c.stroke} />
      </g>
    </svg>
  );
};

// Concentric circles with animation
export const ConcentricCircles: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 300, color = 'blue', className = ''
}) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      <g opacity="0.3">
        <circle cx={size/2} cy={size/2} r={size/2 - 10} fill="none" stroke={c.stroke} strokeWidth="1" />
        <circle cx={size/2} cy={size/2} r={size/2.5} fill="none" stroke={c.stroke} strokeWidth="0.8" opacity="0.8" />
        <circle cx={size/2} cy={size/2} r={size/3.5} fill="none" stroke={c.stroke} strokeWidth="0.6" opacity="0.6" />
        <circle cx={size/2} cy={size/2} r={size/5} fill="none" stroke={c.stroke} strokeWidth="0.4" opacity="0.4" />
        <circle cx={size/2} cy={size/2} r={size/8} fill="none" stroke={c.stroke} strokeWidth="0.3" opacity="0.3" />
        {/* Center dot */}
        <circle cx={size/2} cy={size/2} r="4" fill={c.stroke} />
      </g>
    </svg>
  );
};

// Floating bubble
export const FloatingBubble: React.FC<{ size?: number; color?: 'blue' | 'purple' | 'green' | 'pink'; className?: string }> = ({
  size = 20, color = 'blue', className = ''
}) => {
  const c = colorMap[color];
  return (
    <div
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${c.stroke}40 0%, transparent 70%)`,
        border: `1px solid ${c.stroke}30`,
        boxShadow: `inset 0 0 10px ${c.stroke}20, 0 0 20px ${c.stroke}10`,
      }}
    />
  );
};

export const GlowOrb: React.FC<{ className?: string; color?: 'blue' | 'purple' | 'green' | 'pink'; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '', color = 'blue', size = 'md'
}) => {
  const c = colorMap[color];
  const sizes = { sm: 'w-32 h-32', md: 'w-64 h-64', lg: 'w-96 h-96' };
  return (
    <div
      className={`absolute rounded-full blur-3xl ${sizes[size]} ${className}`}
      style={{ background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)` }}
    />
  );
};

export const GridPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  </div>
);

export const PrintLayers: React.FC<{ count?: number; className?: string }> = ({ count = 8, className = '' }) => (
  <div className={`relative ${className}`}>
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute left-0 right-0 h-2 border border-neon-blue/20 bg-neon-blue/5 rounded"
        style={{
          bottom: `${i * 4}px`,
          opacity: 0.6 - i * 0.06,
        }}
      />
    ))}
  </div>
);
