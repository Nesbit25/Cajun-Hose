import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Wrench, Facebook, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Bar */}
      <div className="bg-brand-dark text-gray-300 text-xs py-2 hidden md:block border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-blue" /> Baton Rouge, LA</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-brand-blue" /> (225) 555-0199</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Emergency Service Available 24/7</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-brand-blue text-white p-2 rounded transform group-hover:rotate-3 transition-transform">
                <Wrench size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tighter text-brand-dark leading-none">CAJUN</span>
                <span className="text-sm font-bold tracking-widest text-brand-blue leading-none">HOSE & FITTINGS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    isActive(link.path) ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button size="sm" onClick={() => window.location.href = 'tel:2255550199'}>
                Request Quote
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-semibold ${
                    isActive(link.path) ? 'text-brand-blue' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                 <a href="tel:2255550199" className="flex items-center gap-3 text-gray-600 font-medium">
                    <Phone size={20} className="text-brand-blue" /> Call Now: (225) 555-0199
                 </a>
                 <Button className="w-full">Request a Quote</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t-4 border-brand-blue">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-blue text-white p-1.5 rounded">
                <Wrench size={20} />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">CAJUN HOSE</span>
            </div>
            <p className="mb-6 max-w-sm">
              Your trusted partner for industrial hose assemblies, hydraulic cylinder repair, and industrial tools. 
              Keeping South Louisiana running since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-blue transition-colors">{link.name}</Link>
                </li>
              ))}
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue mt-1" />
                <span>123 Industrial Blvd<br/>Baton Rouge, LA 70805</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue" />
                <span>(225) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-sm font-semibold text-green-500">Open Now: 7AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cajun Hose & Fittings. All rights reserved. Proudly serving South Louisiana.</p>
        </div>
      </footer>
    </div>
  );
};