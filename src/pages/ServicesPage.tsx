import React from 'react';
import { Upload, Settings, Printer, Truck, ArrowRight, Layers, Zap, Shield, Clock, Palette } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { GridPattern, GlowOrb, GeometricCube, GeometricPyramid, GeometricHexagon, GeometricSphere, GeometricTriangle, GeometricDiamond, GeometricSpiral, GeometricRing, ConcentricCircles } from '../components/GeometryBackground';

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

const processSteps = [
  { icon: Upload, step: '01', title: 'Upload', desc: 'Share your 3D files' },
  { icon: Settings, step: '02', title: 'Configure', desc: 'Choose material & finish' },
  { icon: Printer, step: '03', title: 'Print', desc: 'We bring it to life' },
  { icon: Truck, step: '04', title: 'Deliver', desc: 'Fast shipping' },
];

const materials = [
  { name: 'PLA', color: '#00d4ff', desc: 'Eco-friendly standard' },
  { name: 'PETG', color: '#00ff88', desc: 'Durable & resistant' },
  { name: 'Resin', color: '#8b5cf6', desc: 'Ultra-high detail' },
  { name: 'Nylon', color: '#5991ff', desc: 'Industrial strength' },
  { name: 'TPU', color: '#ff00ff', desc: 'Flexible & elastic' },
  { name: 'Carbon Fiber', color: '#40e0ff', desc: 'Rigid & lightweight' },
];

const services = [
  { title: 'Custom Design', desc: 'From sketch to 3D model.', price: 'From $50', icon: Palette },
  { title: 'Rapid Prototyping', desc: 'Fast iteration for product development.', price: 'From $25', icon: Zap },
  { title: 'Small Batch Production', desc: 'Scale up from 10 to 1000+ units.', price: 'Quote based', icon: Layers },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-900 pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-0 left-1/4" color="blue" size="lg" />
        <GlowOrb className="bottom-0 right-0" color="purple" size="md" />

        {/* Concentric circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-30">
          <ConcentricCircles size={350} color="purple" />
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 right-[10%] animate-float opacity-25">
          <GeometricCube size={80} color="blue" />
        </div>
        <div className="absolute bottom-10 left-[5%] animate-float-delayed opacity-20">
          <GeometricPyramid size={60} color="purple" />
        </div>
        <div className="absolute top-[40%] right-[5%] animate-float opacity-15">
          <GeometricHexagon size={45} color="green" />
        </div>
        <div className="absolute bottom-[30%] left-[15%] animate-float-delayed opacity-20">
          <GeometricSphere size={50} color="blue" />
        </div>
        <div className="absolute top-[15%] left-[30%] animate-float opacity-20">
          <GeometricDiamond size={40} color="pink" />
        </div>
        <div className="absolute bottom-[15%] right-[30%] animate-float-delayed opacity-15">
          <GeometricTriangle size={35} color="green" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Bubble
              key={`services-hero-bubble-${i}`}
              delay={i * 1.5}
              size={Math.random() * 25 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-6">
              <Layers className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">Our Process</span>
            </div>
            <h1 className="text-display-md font-display font-bold text-white mb-4">
              From <span className="gradient-text neon-text">Idea</span> to Object
            </h1>
            <p className="text-white/50 max-w-lg mx-auto">Simple process. Professional results.</p>
          </div>

          {/* Process Steps */}
          <div className="relative mb-20">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="relative z-10 flex flex-col items-center p-6 rounded-2xl bg-surface-800/50 border border-white/5 backdrop-blur hover:border-neon-blue/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-3 right-4 w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                      <span className="text-xs font-bold text-neon-blue">{step.step}</span>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
                      <step.icon className="h-7 w-7 text-neon-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-white/40 text-sm text-center">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="relative py-20 bg-surface-800 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/2 left-0 -translate-y-1/2" color="purple" size="md" />

        {/* Floating shapes */}
        <div className="absolute bottom-[20%] right-[10%] animate-float opacity-20">
          <GeometricHexagon size={50} color="blue" />
        </div>
        <div className="absolute top-[30%] right-[5%] animate-float-delayed opacity-15">
          <GeometricSpiral size={45} color="purple" />
        </div>
        <div className="absolute bottom-[40%] left-[8%] animate-float opacity-20">
          <GeometricRing size={40} color="green" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Bubble
              key={`materials-bubble-${i}`}
              delay={i * 2}
              size={Math.random() * 20 + 6}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-white mb-3">
              Premium <span className="gradient-text neon-text">Materials</span>
            </h2>
            <p className="text-white/50">Choose the perfect material for your project</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials.map((material, index) => (
              <div key={index} className="group p-5 rounded-xl bg-surface-700/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-4 h-4 rounded-full mb-3 group-hover:scale-125 transition-transform" style={{ backgroundColor: material.color, boxShadow: `0 0 12px ${material.color}` }} />
                <h3 className="font-semibold text-white text-sm mb-1">{material.name}</h3>
                <p className="text-white/40 text-xs">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/3 right-1/4" color="green" size="md" />

        {/* Floating shapes */}
        <div className="absolute top-[20%] left-[10%] animate-float opacity-20">
          <GeometricHexagon size={50} color="green" />
        </div>
        <div className="absolute bottom-[15%] right-[5%] animate-float-delayed opacity-25">
          <GeometricCube size={40} color="purple" />
        </div>
        <div className="absolute top-[50%] left-[5%] animate-float opacity-15">
          <GeometricSphere size={55} color="blue" />
        </div>
        <div className="absolute bottom-[25%] left-[25%] animate-float-delayed opacity-20">
          <GeometricPyramid size={45} color="blue" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-white mb-3">
              Our <span className="gradient-text neon-text">Services</span>
            </h2>
            <p className="text-white/50">Solutions for every project size</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-surface-800/50 border backdrop-blur transition-all duration-500 hover:scale-[1.02] border-white/5 hover:border-neon-blue/30 hover:shadow-glow">
                <service.icon className="h-8 w-8 text-neon-blue mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm mb-4">{service.desc}</p>
                <div className="text-neon-blue font-display font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="relative py-20 bg-surface-800 overflow-hidden">
        <GridPattern />
        <GlowOrb className="bottom-0 left-1/2 -translate-x-1/2" color="blue" size="lg" />

        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[20%] animate-float opacity-15">
          <GeometricPyramid size={45} color="purple" />
        </div>
        <div className="absolute bottom-[25%] right-[15%] animate-float-delayed opacity-20">
          <GeometricDiamond size={35} color="blue" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <Bubble
              key={`guarantees-bubble-${i}`}
              delay={i * 2.5}
              size={Math.random() * 20 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'Quality Guaranteed', desc: 'Every print inspected' },
              { icon: Clock, title: 'Fast Turnaround', desc: '3-5 day delivery' },
              { icon: Zap, title: 'Instant Quotes', desc: 'Upload & get pricing' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-xl bg-surface-700/30 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="blue" size="lg" />

        {/* Floating shapes */}
        <div className="absolute top-[15%] right-[15%] animate-float opacity-30">
          <GeometricPyramid size={50} color="purple" />
        </div>
        <div className="absolute bottom-[20%] left-[10%] animate-float-delayed opacity-25">
          <GeometricCube size={45} color="blue" />
        </div>
        <div className="absolute top-[35%] left-[20%] animate-float opacity-20">
          <GeometricHexagon size={40} color="green" />
        </div>
        <div className="absolute bottom-[40%] right-[8%] animate-float-delayed opacity-15">
          <GeometricTriangle size={30} color="pink" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Bubble
              key={`cta-services-bubble-${i}`}
              delay={i * 1.5}
              size={Math.random() * 25 + 10}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-display-sm font-display font-bold text-white mb-6">
            Start Your <span className="gradient-text neon-text">Project</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Get a free quote. No commitment required.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get Free Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
