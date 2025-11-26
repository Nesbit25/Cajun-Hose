import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Wrench, Settings } from 'lucide-react';
import { Button } from '../components/Button';
import { QuoteSection } from '../components/QuoteSection';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - KEPT INT AS REQUESTED */}
      <section className="relative bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518332304455-a64d9b188c1c?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Warehouse Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Industrial Hose & <br/>
              <span className="text-brand-blue">Hydraulic Solutions</span> <br/>
              That Keep You Running.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              From hydraulic cylinder repair to hard-to-find fittings and safety supplies. 
              We are Baton Rouge's trusted partner for industrial downtime prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => window.location.hash = '#quote'}>
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'tel:2255550199'}>
                Call (225) 555-0199
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props - LOREM IPSUM */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Dolor Sit Amet</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Consectetur Elit</h3>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Categories - LOREM IPSUM */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Products & Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nisi est. Sit amet facilisis magna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Hydraulic Hose', 
                img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop', 
                desc: 'Lorem ipsum dolor sit amet consectetur.' 
              },
              { 
                title: 'Fittings & Adapters', 
                img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop', 
                desc: 'Adipiscing elit sed do eiusmod tempor.' 
              },
              { 
                title: 'Cylinder Repair', 
                img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop', 
                desc: 'Incididunt ut labore et dolore magna.' 
              },
              { 
                title: 'Industrial Tools', 
                img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop', 
                desc: 'Ut enim ad minim veniam quis nostrud.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <Link to="/products" className="text-brand-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Products <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="secondary">View Full Catalog</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Teaser - LOREM IPSUM */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4 text-brand-blue">
              <Settings size={24} className="animate-spin-slow" />
              <span className="font-bold uppercase tracking-wider">Now Hiring</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join the Cajun Hose Team</h2>
            <p className="text-gray-300 text-lg mb-0 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-start md:justify-end">
             <Link to="/careers">
               {/* Updated to use Primary Blue variant */}
               <Button size="lg" variant="primary">
                 View Open Positions
               </Button>
             </Link>
          </div>
        </div>
      </section>

      <div id="quote">
        <QuoteSection />
      </div>
    </>
  );
};