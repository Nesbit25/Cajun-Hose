import React from 'react';
import { Button } from './Button';
import { FileText, PhoneCall, AlertTriangle } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        
        {/* Technical "Work Order" Container */}
        <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden relative border border-gray-300">
          
          {/* Top Hazard Stripe */}
          <div className="h-3 w-full bg-stripe-pattern"></div>

          <div className="md:flex">
            {/* Left Info Panel */}
            <div className="md:w-2/5 p-10 bg-brand-dark text-white flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 border border-brand-blue/50 bg-brand-blue/10 px-3 py-1 rounded mb-8">
                  <AlertTriangle size={14} className="text-brand-blue" />
                  <span className="text-xs font-mono text-brand-blue uppercase tracking-wider">Fast Track Response</span>
                </div>

                <h2 className="text-3xl font-black uppercase italic leading-none mb-6">Lorem Ipsum <br/>Dolor Sit?</h2>
                <p className="text-gray-400 mb-10 text-sm font-mono leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>

                <div className="mt-auto space-y-6">
                  <div className="border-t border-gray-700 pt-6">
                    <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Direct Line</span>
                    <a href="tel:2255550199" className="text-2xl font-bold text-white hover:text-brand-blue transition-colors flex items-center gap-3">
                      <PhoneCall size={24} /> (225) 555-0199
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Form Panel */}
            <div className="md:w-3/5 p-10 bg-white">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-brand-dark uppercase tracking-tight">Request For Quote</h3>
                <span className="text-xs font-mono text-gray-400">REF: WEB-FORM-01</span>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Quote request sent! We will contact you shortly.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-brand-blue focus:bg-white outline-none transition-colors font-mono text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-brand-blue focus:bg-white outline-none transition-colors font-mono text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-brand-blue focus:bg-white outline-none transition-colors font-mono text-sm"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Project Details / Part Numbers</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-brand-blue focus:bg-white outline-none transition-colors font-mono text-sm"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full justify-center gap-2 py-4 text-sm uppercase tracking-widest">
                    <FileText size={18} /> Submit Requisition
                  </Button>
                  <p className="text-[10px] text-gray-400 text-center mt-3 font-mono">
                    SECURE TRANSMISSION // PRIVACY POLICY APPLIES
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};