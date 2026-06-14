import React from 'react';
import { Zap, Shield, Palette, Clock, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: '3-5 day delivery on standard orders.',
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
    border: 'hover:border-neon-blue/30',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every print inspected. Guaranteed.',
    color: 'text-neon-green',
    bg: 'bg-neon-green/10',
    border: 'hover:border-neon-green/30',
  },
  {
    icon: Palette,
    title: '50+ Materials',
    description: 'PLA, PETG, Resin, Nylon, TPU.',
    color: 'text-neon-purple',
    bg: 'bg-neon-purple/10',
    border: 'hover:border-neon-purple/30',
  },
  {
    icon: Layers,
    title: 'Custom Design',
    description: 'Don\'t have a model? We design it.',
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
    border: 'hover:border-neon-blue/30',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'We\'re here whenever you need.',
    color: 'text-neon-purple',
    bg: 'bg-neon-purple/10',
    border: 'hover:border-neon-purple/30',
  },
  {
    icon: Sparkles,
    title: 'Premium Finish',
    description: 'Post-processing and finishing options.',
    color: 'text-neon-green',
    bg: 'bg-neon-green/10',
    border: 'hover:border-neon-green/30',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-surface-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group p-6 rounded-2xl
                bg-surface-700/30 border border-white/5 backdrop-blur-sm
                transition-all duration-300 hover:bg-surface-700/50
                ${feature.border}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex rounded-xl p-3 mb-4 ${feature.bg} transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-white/50 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
