import React from 'react';
import { QuoteSection } from '../components/QuoteSection';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="relative min-h-screen">
       {/* Overlay */}
       <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
         <div className="bg-white/95 p-8 rounded-xl shadow-2xl border-2 border-brand-blue text-center max-w-md backdrop-blur-sm">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Content Under Construction</h2>
            <p className="text-gray-600">This page is currently being drafted. Final copy and imagery will be available for review in the next phase.</p>
         </div>
       </div>

      {/* Blurred Content */}
      <div className="filter blur-md opacity-50 pointer-events-none select-none h-screen overflow-hidden">
        <div className="bg-gray-100 py-12 border-b border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-brand-dark mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Lorem Ipsum Dolor</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur Elit', 'Sed Do Eiusmod'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-brand-blue flex-shrink-0" />
                      <span className="font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue transform translate-x-4 translate-y-4 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                  alt="Workshop" 
                  className="relative rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industries Served</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: 'Industry 1', icon: '🏗️' },
                { name: 'Industry 2', icon: '🚢' },
                { name: 'Industry 3', icon: '🏭' },
                { name: 'Industry 4', icon: '🚜' },
                { name: 'Industry 5', icon: '🛢️' },
                { name: 'Industry 6', icon: '🚛' },
                { name: 'Industry 7', icon: '♻️' },
                { name: 'Industry 8', icon: '⛏️' }
              ].map((industry, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="font-bold text-lg">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection />
      </div>
    </div>
  );
};