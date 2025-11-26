import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Wrench, Facebook, Linkedin, Mail, Crosshair } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-blue selection:text-white relative">
      
      {/* Technical Corner Markers (Fixed) */}
      <div className="fixed top-4 left-4 z-50 pointer-events-none text-brand-blue/30 hidden md:block">
        <Crosshair size={24} />
      </div>
      <div className="fixed top-4 right-4 z-50 pointer-events-none text-brand-blue/30 hidden md:block">
        <Crosshair size={24} />
      </div>
      <div className="fixed bottom-4 left-4 z-50 pointer-events-none text-brand-blue/30 hidden md:block">
        <Crosshair size={24} />
      </div>
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none text-brand-blue/30 hidden md:block">
        <Crosshair size={24} />
      </div>

      {/* Top Bar */}
      <div className="bg-brand-dark text-gray-400 text-xs py-2 hidden md:block border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6 font-mono uppercase tracking-wider">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-brand-blue" /> Baton Rouge, LA [HQ]</span>
            <span className="flex items-center gap-2"><Phone size={12} className="text-brand-blue" /> (225) 555-0199</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-300 font-bold">SYSTEMS ONLINE</span>
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-brand-dark text-white p-2.5 transform -skew-x-12 group-hover:bg-brand-blue transition-colors duration-300">
                <Wrench size={24} className="transform skew-x-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-brand-dark leading-none">CAJUN</span>
                <span className="text-xs font-bold tracking-[0.2em] text-brand-blue leading-none mt-0.5">HOSE & FITTINGS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-200 border-b-2 ${
                    isActive(link.path) 
                      ? 'text-brand-blue border-brand-blue' 
                      : 'text-gray-500 border-transparent hover:text-brand-dark hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              <Button size="sm" onClick={() => window.location.href = 'tel:2255550199'}>
                Request Quote
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-brand-dark p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl h-screen z-50">
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-bold uppercase tracking-tight ${
                    isActive(link.path) ? 'text-brand-blue' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
                 <a href="tel:2255550199" className="flex items-center gap-3 text-brand-dark font-bold text-lg bg-gray-50 p-4 rounded">
                    <Phone size={24} className="text-brand-blue" /> (225) 555-0199
                 </a>
                 <Button className="w-full py-4 text-lg">Request a Quote</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-industrial-grid bg-grid-sm">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-16 border-t-8 border-brand-blue relative overflow-hidden">
        {/* Footer Background element */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Wrench size={300} />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-blue text-white p-1.5 transform -skew-x-12">
                <Wrench size={20} className="skew-x-12" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Cajun Hose</span>
            </div>
            <p className="mb-8 max-w-sm text-lg leading-relaxed text-gray-500">
              Your trusted partner for industrial hose assemblies, hydraulic cylinder repair, and industrial tools. 
              Keeping South Louisiana running since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 text-white hover:bg-brand-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 text-white hover:bg-brand-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 text-white hover:bg-brand-blue transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-2">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-blue transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-blue"></span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-2">Contact HQ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin size={20} className="text-brand-blue group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">123 Industrial Blvd<br/>Baton Rouge, LA 70805</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone size={20} className="text-brand-blue group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">(225) 555-0199</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-sm font-bold text-green-500 uppercase tracking-wide">Open: 07:00 - 17:00</span>
                 </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Cajun Hose & Fittings. All rights reserved. </p>
        </div>
      </footer>
    </div>
  );
};