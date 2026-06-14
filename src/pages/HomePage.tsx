import React, { useEffect, useState } from 'react';
import { ArrowRight, Layers, Box, Layers3 } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { GeometricCube, GeometricPyramid, GeometricHexagon, GlowOrb, GridPattern, GeometricTriangle, GeometricSphere, GeometricSpiral, GeometricRing, GeometricDiamond, GeometricCross, ConcentricCircles, FloatingBubble } from '../components/GeometryBackground';

const Particle = ({ delay, size, left }: { delay: number; size: number; left: number }) => (
  <div
    className="absolute rounded-full bg-neon-blue/20 animate-particle"
    style={{ width: size, height: size, left: `${left}%`, animationDelay: `${delay}s` }}
  />
);

const Bubble = ({ delay, size, left, color }: { delay: number; size: number; left: number; color: string }) => (
  <div
    className={`absolute rounded-full animate-particle ${color === 'blue' ? 'bg-neon-blue/10' : color === 'purple' ? 'bg-neon-purple/10' : 'bg-neon-green/10'}`}
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      boxShadow: `inset 0 0 ${size/3}px ${color === 'blue' ? 'rgba(0, 212, 255, 0.2)' : color === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(0, 255, 136, 0.2)'}, 0 0 ${size/2}px ${color === 'blue' ? 'rgba(0, 212, 255, 0.1)' : color === 'purple' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0, 255, 136, 0.1)'}`,
    }}
  />
);

export const HomePage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-surface-900">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <GridPattern />
        <GlowOrb className="top-0 left-1/4" color="blue" size="lg" />
        <GlowOrb className="bottom-0 right-0" color="purple" size="md" />

        {/* Concentric circles in the middle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-40">
          <ConcentricCircles size={400} color="blue" />
        </div>

        {/* Floating 3D shapes - various positions */}
        <div className="absolute top-[15%] left-[5%] animate-float opacity-40">
          <GeometricCube size={80} color="blue" />
        </div>
        <div className="absolute top-[25%] right-[10%] animate-float-delayed opacity-30">
          <GeometricPyramid size={60} color="purple" />
        </div>
        <div className="absolute bottom-[20%] left-[10%] animate-float opacity-35">
          <GeometricHexagon size={70} color="green" />
        </div>
        <div className="absolute bottom-[30%] right-[5%] animate-float-delayed opacity-25">
          <GeometricCube size={50} color="purple" />
        </div>
        <div className="absolute top-[60%] left-[3%] animate-float opacity-20">
          <GeometricPyramid size={40} color="blue" />
        </div>

        {/* New abstract shapes */}
        <div className="absolute top-[10%] right-[25%] animate-float-delayed opacity-25">
          <GeometricSphere size={90} color="purple" />
        </div>
        <div className="absolute bottom-[35%] left-[20%] animate-float opacity-30">
          <GeometricTriangle size={55} color="pink" />
        </div>
        <div className="absolute top-[45%] right-[3%] animate-float-delayed opacity-20">
          <GeometricDiamond size={50} color="green" />
        </div>
        <div className="absolute bottom-[10%] right-[25%] animate-float opacity-25">
          <GeometricSpiral size={75} color="blue" />
        </div>
        <div className="absolute top-[70%] left-[25%] animate-float-delayed opacity-20">
          <GeometricRing size={55} color="purple" />
        </div>
        <div className="absolute top-[5%] left-[40%] animate-float opacity-15">
          <GeometricCross size={45} color="blue" />
        </div>
        <div className="absolute bottom-[50%] right-[15%] animate-float-delayed opacity-20">
          <GeometricSphere size={70} color="green" />
        </div>

        {/* Floating bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Bubble
              key={`bubble-${i}`}
              delay={i * 1.5}
              size={Math.random() * 30 + 10}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <Particle key={i} delay={i * 1.2} size={Math.random() * 4 + 2} left={Math.random() * 100} />
          ))}
        </div>

        {/* Additional concentric rings overlay */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 animate-spin-slow">
          <div className="absolute inset-0 rounded-full border border-neon-blue/10" />
          <div className="absolute inset-8 rounded-full border border-neon-blue/5" />
          <div className="absolute inset-16 rounded-full border border-neon-purple/10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neon-blue/5 border border-neon-blue/20 backdrop-blur-sm mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Layers className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-white/80">Premium 3D Printing</span>
            </div>

            {/* Main headline */}
            <h1 className={`text-display-md md:text-display-lg lg:text-display-xl font-display font-bold mb-6 leading-none tracking-tight transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-white">Your Vision.</span>
              <br />
              <span className="gradient-text neon-text">Layered to Life.</span>
            </h1>

            {/* Subtext */}
            <p className={`text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Custom designs. Premium materials. Limitless possibilities.
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link to="/services">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Printing
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="ghost" size="lg">Browse Shop</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={`mt-16 pt-8 border-t border-white/10 flex items-center justify-center gap-12 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-neon-blue">500+</div>
                <div className="text-sm text-white/40">Projects</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-neon-blue">50+</div>
                <div className="text-sm text-white/40">Materials</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-neon-blue">24h</div>
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

      {/* Features Preview */}
      <section className="relative py-24 bg-surface-800 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/2 left-1/4 -translate-y-1/2" color="blue" size="md" />
        <GlowOrb className="top-1/2 right-0 -translate-y-1/2" color="purple" size="sm" />

        {/* Floating shapes */}
        <div className="absolute top-[20%] right-[10%] animate-float opacity-20">
          <GeometricHexagon size={50} color="green" />
        </div>
        <div className="absolute bottom-[15%] left-[5%] animate-float-delayed opacity-15">
          <GeometricCube size={40} color="purple" />
        </div>
        <div className="absolute top-[60%] right-[5%] animate-float opacity-20">
          <GeometricSphere size={60} color="blue" />
        </div>
        <div className="absolute bottom-[30%] right-[20%] animate-float-delayed opacity-15">
          <GeometricTriangle size={45} color="pink" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Bubble
              key={`features-bubble-${i}`}
              delay={i * 2}
              size={Math.random() * 25 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
              <Box className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">What We Offer</span>
            </div>
            <h2 className="text-display-sm font-display font-bold text-white mb-4">
              Premium <span className="gradient-text neon-text">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers3, title: 'Custom Design', desc: 'From concept to 3D model', color: 'blue' },
              { icon: Box, title: 'Premium Materials', desc: '50+ filament options', color: 'purple' },
              { icon: Layers, title: 'Expert Printing', desc: 'Industry-leading quality', color: 'green' },
            ].map((feature, index) => (
              <Link key={index} to="/services" className="group p-8 rounded-2xl bg-surface-700/30 border border-white/5 backdrop-blur transition-all duration-500 hover:scale-[1.02] hover:shadow-glow" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`inline-flex rounded-xl p-3 mb-4 bg-neon-blue/10 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-surface-900 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="blue" size="lg" />

        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[15%] animate-float opacity-30">
          <GeometricHexagon size={60} color="green" />
        </div>
        <div className="absolute bottom-[20%] right-[20%] animate-float-delayed opacity-25">
          <GeometricPyramid size={50} color="purple" />
        </div>
        <div className="absolute top-[40%] right-[10%] animate-float opacity-20">
          <GeometricCube size={45} color="blue" />
        </div>
        <div className="absolute bottom-[40%] left-[8%] animate-float-delayed opacity-20">
          <GeometricSpiral size={55} color="purple" />
        </div>
        <div className="absolute top-[25%] right-[30%] animate-float opacity-15">
          <GeometricDiamond size={40} color="pink" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Bubble
              key={`cta-bubble-${i}`}
              delay={i * 1.8}
              size={Math.random() * 30 + 10}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-display-sm font-display font-bold text-white mb-6">
            Ready to <span className="gradient-text neon-text">Create?</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Start your project today. Our team is ready to bring your ideas to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get Started</Button>
            </Link>
            <Link to="/shop">
              <Button variant="ghost" size="lg">View Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
