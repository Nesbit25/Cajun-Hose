import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Wrench, Settings, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { QuoteSection } from '../components/QuoteSection';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Diagonal Split */}
      <section className="relative bg-brand-dark text-white overflow-hidden pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518332304455-a64d9b188c1c?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Warehouse Background" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl relative">
            {/* Decorative decorative line */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-blue/30 hidden md:block"></div>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="px-2 py-1 bg-brand-blue/20 border border-brand-blue text-brand-blue text-xs font-mono font-bold uppercase tracking-widest">
                System Status: Operational
              </span>
              <div className="h-px w-12 bg-brand-blue/50"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 uppercase italic tracking-tighter">
              Industrial Hose & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Hydraulic Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light border-l-4 border-gray-700 pl-6">
              Baton Rouge's trusted partner for downtime prevention. <br/>
              <strong className="text-white">We fix it. We get you back to work.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="clip-chamfer shadow-[0_0_20px_rgba(0,98,168,0.4)]" onClick={() => window.location.hash = '#quote'}>
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="clip-chamfer border-gray-600 text-gray-300 hover:text-white hover:border-white" onClick={() => window.location.href = 'tel:2255550199'}>
                Call Service: (225) 555-0199
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Cut */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white clip-diagonal origin-bottom-right transform scale-y-100 translate-y-1 z-20"></div>
      </section>

      {/* Value Props - Floating Overlap */}
      <section className="relative -mt-32 z-30 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 shadow-2xl border-t-4 border-brand-blue relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Clock size={80} />
              </div>
              <div className="w-12 h-12 bg-brand-dark text-white flex items-center justify-center mb-6 clip-chamfer">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-brand-dark tracking-tight">Rapid Response</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="bg-brand-blue p-8 shadow-2xl border-t-4 border-white relative group overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
                <Wrench size={80} />
              </div>
              <div className="w-12 h-12 bg-white text-brand-blue flex items-center justify-center mb-6 clip-chamfer">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-white tracking-tight">Expert Repair</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>

            <div className="bg-white p-8 shadow-2xl border-t-4 border-brand-blue relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={80} />
              </div>
              <div className="w-12 h-12 bg-brand-dark text-white flex items-center justify-center mb-6 clip-chamfer">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-brand-dark tracking-tight">Certified Safety</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Categories - Technical Grid */}
      <section className="py-20 bg-industrial-grid">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-gray-200 pb-6">
            <div>
              <span className="text-brand-blue font-mono font-bold text-sm tracking-widest uppercase mb-2 block">// CATALOG_V.2024</span>
              <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter">Core Products</h2>
            </div>
            <p className="text-gray-600 max-w-md text-right mt-4 md:mt-0 font-mono text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nisi est. Sit amet facilisis magna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: 'Hydraulic Hose', 
                id: 'HH-01',
                img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop', 
                desc: 'Lorem ipsum dolor sit amet.' 
              },
              { 
                title: 'Fittings & Adapters', 
                id: 'FA-02',
                img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop', 
                desc: 'Adipiscing elit sed do.' 
              },
              { 
                title: 'Cylinder Repair', 
                id: 'CR-03',
                img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop', 
                desc: 'Incididunt ut labore et.' 
              },
              { 
                title: 'Industrial Tools', 
                id: 'IT-04',
                img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop', 
                desc: 'Ut enim ad minim veniam.' 
              },
            ].map((item, idx) => (
              <Link to="/products" key={idx} className="group relative block bg-white h-80 overflow-hidden border border-gray-200 hover:border-brand-blue transition-all duration-300">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-brand-dark/60 group-hover:bg-brand-dark/30 transition-colors"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-white/50 font-mono text-xs border border-white/20 px-2 py-1">{item.id}</span>
                    <div className="w-8 h-8 bg-brand-blue text-white flex items-center justify-center transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">{item.title}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="secondary" className="font-mono uppercase text-sm tracking-widest">
                [ View Full Catalog ]
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Teaser - Slanted */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden clip-diagonal md:mb-12">
        <div className="absolute inset-0 bg-stripe-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-brand-blue animate-pulse rounded-full"></div>
              <span className="font-mono text-brand-blue font-bold uppercase tracking-widest text-sm">Careers @ Cajun Hose</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Join the Crew</h2>
            <p className="text-gray-400 text-lg mb-0 max-w-xl border-l-2 border-brand-blue pl-6 py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-start md:justify-end">
             <Link to="/careers">
               <Button size="lg" variant="primary" className="shadow-[0_0_30px_rgba(0,98,168,0.3)]">
                 View Open Positions
               </Button>
             </Link>
          </div>
        </div>
      </section>

      <div id="quote" className="relative z-10">
        <QuoteSection />
      </div>
    </>
  );
};