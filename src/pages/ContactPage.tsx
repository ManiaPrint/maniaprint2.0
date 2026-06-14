import React, { useState } from 'react';
import { Upload, Send, FileText, CheckCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { GridPattern, GlowOrb, GeometricCube, GeometricHexagon, GeometricPyramid, GeometricSphere, GeometricTriangle, GeometricDiamond, GeometricSpiral, ConcentricCircles } from '../components/GeometryBackground';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

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

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '', files: [] as File[] });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesList = Array.from(e.target.files);
      setFormData({ ...formData, files: [...formData.files, ...filesList] });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files) {
      const filesList = Array.from(e.dataTransfer.files);
      setFormData({ ...formData, files: [...formData.files, ...filesList] });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const removeFile = (index: number) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    setFormData({ ...formData, files: newFiles });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', projectType: '', message: '', files: [] });
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-surface-900 pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-0 left-1/4" color="blue" size="lg" />
        <GlowOrb className="bottom-0 right-0" color="purple" size="md" />

        {/* Concentric circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-25">
          <ConcentricCircles size={300} color="blue" />
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 right-[15%] animate-float opacity-25">
          <GeometricHexagon size={70} color="green" />
        </div>
        <div className="absolute bottom-5 left-[10%] animate-float-delayed opacity-20">
          <GeometricCube size={50} color="purple" />
        </div>
        <div className="absolute top-[40%] right-[5%] animate-float opacity-15">
          <GeometricPyramid size={40} color="blue" />
        </div>
        <div className="absolute bottom-[35%] left-[20%] animate-float-delayed opacity-20">
          <GeometricSphere size={55} color="purple" />
        </div>
        <div className="absolute top-[25%] left-[5%] animate-float opacity-20">
          <GeometricTriangle size={45} color="pink" />
        </div>
        <div className="absolute bottom-[15%] right-[20%] animate-float-delayed opacity-15">
          <GeometricDiamond size={35} color="green" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Bubble
              key={`contact-hero-bubble-${i}`}
              delay={i * 1.5}
              size={Math.random() * 25 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-6">
              <MessageCircle className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">Get in Touch</span>
            </div>
            <h1 className="text-display-md font-display font-bold text-white mb-4">
              Let's <span className="gradient-text neon-text">Create</span> Together
            </h1>
            <p className="text-white/50 max-w-lg mx-auto">Share your project details. We'll respond within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative pb-20 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/2 left-1/4 -translate-y-1/2" color="blue" size="md" />

        {/* More shapes */}
        <div className="absolute top-[20%] right-[10%] animate-float opacity-15">
          <GeometricSpiral size={50} color="purple" />
        </div>
        <div className="absolute bottom-[30%] right-[5%] animate-float-delayed opacity-20">
          <GeometricHexagon size={40} color="green" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <Bubble
              key={`form-bubble-${i}`}
              delay={i * 2}
              size={Math.random() * 20 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="p-6 rounded-2xl bg-surface-800/50 border border-white/5 backdrop-blur">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@maniaprint.com" className="flex items-center gap-3 text-white/60 hover:text-neon-blue transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-neon-blue" />
                      </div>
                      <span className="text-sm">hello@maniaprint.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/60">
                      <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-neon-purple" />
                      </div>
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-neon-green" />
                      </div>
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-surface-800/50 border border-white/5 backdrop-blur">
                  <h3 className="text-lg font-semibold text-white mb-4">Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>Mon - Fri</span>
                      <span className="text-neon-blue">9am - 6pm PST</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Sat - Sun</span>
                      <span className="text-white/40">Closed</span>
                    </div>
                  </div>
                </div>

                {/* 3D decoration */}
                <div className="hidden lg:block relative h-40">
                  <div className="absolute top-0 left-0 animate-float opacity-30">
                    <GeometricPyramid size={60} color="blue" />
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="card p-8 border-neon-blue/20">
                  {status === 'success' ? (
                    <div className="flex flex-col items-center py-12">
                      <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mb-4 animate-scale-in">
                        <CheckCircle className="h-8 w-8 text-neon-green" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-white/50 text-sm">We'll respond within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="input" />
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="input" />
                      </div>
                      <select name="projectType" value={formData.projectType} onChange={handleChange} required className="input">
                        <option value="">Project Type</option>
                        <option value="prototype">Prototype</option>
                        <option value="art">Art & Decor</option>
                        <option value="functional">Functional Part</option>
                        <option value="miniature">Miniature</option>
                        <option value="production">Small Production</option>
                        <option value="custom">Custom Project</option>
                      </select>
                      <textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows={3} required className="input resize-none" />

                      {/* File Upload */}
                      <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className={`relative border border-dashed rounded-xl p-6 text-center transition-colors ${dragActive ? 'border-neon-blue bg-neon-blue/10' : 'border-white/10 hover:border-white/20'}`}>
                        <input type="file" multiple accept=".stl,.obj,.3mf,.step,.stp,.pdf,.png,.jpg" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <Upload className="h-6 w-6 text-white/30 mx-auto mb-2" />
                        <p className="text-sm text-white/50">Drop files or <span className="text-neon-blue">browse</span></p>
                        <p className="text-xs text-white/30 mt-1">STL, OBJ, 3MF, PDF, PNG</p>
                      </div>

                      {/* Files */}
                      {formData.files.length > 0 && (
                        <div className="space-y-2">
                          {formData.files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-surface-700/30 rounded-lg px-3 py-2 border border-white/5">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-neon-blue" />
                                <span className="text-sm text-white/70 truncate max-w-[200px]">{file.name}</span>
                              </div>
                              <button type="button" onClick={() => removeFile(index)} className="text-white/30 hover:text-white transition-colors text-lg">&times;</button>
                            </div>
                          ))}
                        </div>
                      )}

                      <Button type="submit" className="w-full" isLoading={status === 'submitting'} rightIcon={<Send className="w-4 h-4" />}>
                        Send Request
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-surface-800 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-1/2 right-0 -translate-y-1/2" color="purple" size="md" />

        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[5%] animate-float opacity-20">
          <GeometricHexagon size={50} color="blue" />
        </div>
        <div className="absolute bottom-[20%] right-[15%] animate-float-delayed opacity-25">
          <GeometricCube size={40} color="purple" />
        </div>
        <div className="absolute top-[40%] right-[8%] animate-float opacity-15">
          <GeometricSphere size={45} color="green" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Bubble
              key={`faq-bubble-${i}`}
              delay={i * 2.2}
              size={Math.random() * 20 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-white mb-3">
              Common <span className="gradient-text neon-text">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: 'How long does printing take?', a: 'Standard orders: 3-5 days. Rush orders available.' },
              { q: 'What file formats work?', a: 'STL, OBJ, 3MF, STEP, and STP files accepted.' },
              { q: 'Minimum order quantity?', a: 'No minimums. From single units to 1000+' },
              { q: 'Do you design models?', a: 'Yes! Our designers can create custom 3D models.' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-surface-700/30 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">{item.q}</h4>
                <p className="text-white/50 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
