import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-dark py-4' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <Logo variant="full" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-neon-blue hover:after:w-1/2 after:transition-all after:duration-200 ${location.pathname === link.href ? 'text-neon-blue after:w-1/2' : 'text-white/70 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <button onClick={onCartClick} className="relative p-2 text-white/70 hover:text-white transition-colors">
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -right-1 -top-1 w-5 h-5 flex items-center justify-center rounded-full bg-neon-blue text-surface-900 text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <Link to="/contact">
              <Button variant="primary" size="sm">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={onCartClick} className="relative p-2 text-white/70 hover:text-white transition-colors">
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -right-1 -top-1 w-5 h-5 flex items-center justify-center rounded-full bg-neon-blue text-surface-900 text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white/70 hover:text-white transition-colors">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-surface-900/95 backdrop-blur-xl animate-slide-up">
          <nav className="container-custom py-8">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-4 text-lg font-medium text-white/70 hover:text-white transition-colors border-b border-white/5">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="px-4 py-4 text-lg font-medium text-white/70 hover:text-white transition-colors border-b border-white/5">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact" className="block">
                <Button variant="primary" className="w-full">Get Quote</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
