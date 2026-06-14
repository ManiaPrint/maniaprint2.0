import React, { useEffect, useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Button } from './Button';

const Particle = ({ delay, size, left }: { delay: number; size: number; left: number }) => (
  <div
    className="absolute rounded-full bg-neon-blue/20 animate-particle"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      animationDelay: `${delay}s`,
    }}
  />
);

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface-900 flex items-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-lines opacity-50" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-glow-gradient opacity-60" />

      {/* Corner glow effects */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-corner-glow" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-corner-glow rotate-180" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 1.5}
            size={Math.random() * 4 + 2}
            left={Math.random() * 100}
          />
        ))}
      </div>

      {/* Large decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-neon-blue/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-neon-blue/5 rounded-full animate-float" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div
            className={`
              inline-flex items-center gap-2 px-5 py-2 rounded-full
              bg-neon-blue/5 border border-neon-blue/20 backdrop-blur-sm
              mb-8 transition-all duration-700
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <Layers className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-white/80">3D Printing Studio</span>
          </div>

          {/* Main headline */}
          <h1
            className={`
              text-display-md md:text-display-lg lg:text-display-xl
              font-display font-bold mb-6 leading-none tracking-tight
              transition-all duration-700 delay-100
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <span className="text-white">Your Vision.</span>
            <br />
            <span className="gradient-text neon-text">Layered to Life.</span>
          </h1>

          {/* Subtext */}
          <p
            className={`
              text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10
              transition-all duration-700 delay-200
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Premium 3D printing. Custom designs. Limitless possibilities.
          </p>

          {/* CTA buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4 justify-center
              transition-all duration-700 delay-300
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Printing
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Shop
            </Button>
          </div>

          {/* Stats - Minimal */}
          <div
            className={`
              mt-16 pt-8 border-t border-white/10
              flex items-center justify-center gap-12
              transition-all duration-700 delay-500
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-neon-blue neon-text-sm">500+</div>
              <div className="text-sm text-white/40">Projects</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-neon-blue neon-text-sm">50+</div>
              <div className="text-sm text-white/40">Materials</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-neon-blue neon-text-sm">24h</div>
              <div className="text-sm text-white/40">Turnaround</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-neon-blue rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
