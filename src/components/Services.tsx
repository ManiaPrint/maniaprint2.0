import React from 'react';
import { Upload, Settings, Printer, Truck, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const processSteps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configure',
  },
  {
    icon: Printer,
    step: '03',
    title: 'Print',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Deliver',
  },
];

const materials = [
  { name: 'PLA', color: '#00d4ff' },
  { name: 'PETG', color: '#00ff88' },
  { name: 'Resin', color: '#8b5cf6' },
  { name: 'Nylon', color: '#5991ff' },
  { name: 'TPU', color: '#ff00ff' },
  { name: 'ABS', color: '#40e0ff' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-surface-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            How It Works
          </div>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white">
            Simple Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step node */}
                <div className="
                  relative z-10 flex flex-col items-center p-6 rounded-2xl
                  bg-surface-800/50 border border-white/5 backdrop-blur-sm
                  hover:border-neon-blue/30 hover:shadow-glow
                  transition-all duration-300
                ">
                  {/* Step number */}
                  <div className="absolute -top-3 right-4 w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                    <span className="text-xs font-bold text-neon-blue">{step.step}</span>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
                    <step.icon className="h-7 w-7 text-neon-blue" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="card p-8 md:p-10 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Premium Materials
            </h3>
            <p className="text-white/50">Choose from our curated selection</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-700/50 border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: material.color, boxShadow: `0 0 8px ${material.color}` }}
                />
                <span className="text-white/80 text-sm font-medium">{material.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Material Sample
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
