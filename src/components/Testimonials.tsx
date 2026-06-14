import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    text: 'ManiaPrint transformed our prototypes into stunning models. Quality exceeded expectations.',
  },
  {
    name: 'Michael Torres',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a65ee3e8fd7?w=400&q=80',
    text: 'Custom pieces were absolutely flawless. Their expertise made all the difference.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Game Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    text: 'My D&D miniatures came out incredibly detailed. Fast shipping and great quality.',
  },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Projects' },
  { value: '4.9', label: 'Rating' },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="portfolio" className="section-padding bg-surface-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label inline-flex mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            Testimonials
          </div>
          <h2 className="text-display-sm font-display font-bold text-white">
            Client Stories
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-surface-700/30 border border-white/5 backdrop-blur hover:border-neon-blue/20 transition-all duration-300"
            >
              <Quote className="h-6 w-6 text-neon-blue/30 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="font-medium text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white/40">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-display font-bold text-neon-blue neon-text-sm">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
