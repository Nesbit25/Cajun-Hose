import React from 'react';
import { Button } from './Button';
import { FileText, PhoneCall } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 md:p-12 bg-brand-dark text-white flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-4">Lorem Ipsum Dolor Sit?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
                <span>Consectetur adipiscing elit sed do</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
                <span>Eiusmod tempor incididunt ut labore</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
                <span>Magna aliqua ut enim ad minim</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="tel:2255550199" className="inline-flex items-center gap-2 font-bold hover:text-brand-blue transition-colors">
                <PhoneCall size={20} /> (225) 555-0199
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quick Quote</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Quote request sent! We will contact you shortly.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                  required
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
                required
              />
              <textarea 
                placeholder="Describe what you need (Part numbers, dimensions, etc.)" 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
              ></textarea>
              <Button type="submit" className="w-full justify-center gap-2">
                <FileText size={18} /> Send Request
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};