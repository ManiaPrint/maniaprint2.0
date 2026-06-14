import React, { useState } from 'react';
import { Send, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-surface-900 border-t border-white/5">
      {/* Newsletter */}
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-display font-bold text-white mb-4">Stay Updated</h3>
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-neon-green">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg border bg-surface-700/50 px-4 py-3 text-sm text-white placeholder:text-white/30 border-white/10 focus:border-neon-blue/50 focus:outline-none"
                required
              />
              <button type="submit" className="px-6 py-3 rounded-lg bg-neon-blue text-surface-900 font-semibold hover:shadow-neon-blue transition-shadow">
                <Send className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-6">
              <Link to="/">
                <Logo variant="mark" size="sm" />
              </Link>
              <div className="hidden md:flex items-center gap-4">
                {footerLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
              <span className="text-white/30 text-sm">&copy; {new Date().getFullYear()} ManiaPrint</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-surface-700/50 flex items-center justify-center text-white/30 hover:text-neon-blue hover:bg-surface-700 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
