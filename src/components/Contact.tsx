import React, { useState } from 'react';
import { Upload, Send, FileText, CheckCircle } from 'lucide-react';
import { Button } from './Button';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    files: [] as File[],
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    <section id="contact" className="section-padding bg-surface-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label inline-flex mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            Contact
          </div>
          <h2 className="text-display-sm font-display font-bold text-white">
            Start Your Project
          </h2>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
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
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Project Type</option>
                    <option value="prototype">Prototype</option>
                    <option value="art">Art & Decor</option>
                    <option value="functional">Functional Part</option>
                    <option value="miniature">Miniature</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="input resize-none"
                  />
                </div>

                {/* File Upload */}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`
                    relative border border-dashed rounded-xl p-6 text-center transition-colors
                    ${dragActive
                      ? 'border-neon-blue bg-neon-blue/10'
                      : 'border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  <input
                    type="file"
                    multiple
                    accept=".stl,.obj,.3mf,.step,.stp,.pdf,.png,.jpg"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="h-6 w-6 text-white/30 mx-auto mb-2" />
                  <p className="text-sm text-white/50">Drop files or <span className="text-neon-blue">browse</span></p>
                  <p className="text-xs text-white/30 mt-1">STL, OBJ, 3MF, PDF, PNG</p>
                </div>

                {/* Files */}
                {formData.files.length > 0 && (
                  <div className="space-y-2">
                    {formData.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-surface-700/30 rounded-lg px-3 py-2 border border-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-neon-blue" />
                          <span className="text-sm text-white/70 truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-white/30 hover:text-white transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={status === 'submitting'}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Send Request
                </Button>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div className="flex justify-center gap-6 mt-8 text-sm">
            <a href="mailto:hello@maniaprint.com" className="text-white/40 hover:text-neon-blue transition-colors">
              hello@maniaprint.com
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/40">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

function X({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
