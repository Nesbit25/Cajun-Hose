import React, { useState } from 'react';
import { ProductCategory } from '../types';
import { Button } from '../components/Button';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { QuoteSection } from '../components/QuoteSection';

const PRODUCTS: ProductCategory[] = [
  {
    id: 'product-1',
    title: 'Product Category 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    specs: ['Spec A', 'Spec B', 'Spec C', 'Spec D'],
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-88463833f954?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'product-2',
    title: 'Product Category 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    specs: ['Spec A', 'Spec B', 'Spec C', 'Spec D'],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64726?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'product-3',
    title: 'Product Category 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    specs: ['Spec A', 'Spec B', 'Spec C', 'Spec D'],
    imageUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'product-4',
    title: 'Product Category 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    specs: ['Spec A', 'Spec B', 'Spec C', 'Spec D'],
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5e98084d?q=80&w=400&auto=format&fit=crop'
  }
];

export const Products: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
        <div className="bg-brand-dark text-white py-16">
          <div className="container mx-auto px-4">
             <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products & Services</h1>
             <p className="text-xl text-gray-300 max-w-3xl">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
          </div>
        </div>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors md:flex md:justify-between md:items-center"
                    onClick={() => toggleExpand(product.id)}
                  >
                    <div className="flex items-center gap-6">
                      <img 
                        src={product.imageUrl} 
                        alt={product.title} 
                        className="w-24 h-24 object-cover rounded hidden sm:block"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-gray-600 hidden md:block">{product.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-4">
                       <span className="text-brand-blue font-bold text-sm uppercase md:hidden">View Details</span>
                       {expandedId === product.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                    </div>
                  </div>

                  {expandedId === product.id && (
                    <div className="px-6 pb-8 pt-2 bg-gray-50 border-t border-gray-100">
                      <div className="md:hidden mb-4">
                         <p className="text-gray-600">{product.description}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wide text-sm">Key Specifications</h4>
                          <ul className="space-y-2">
                            {product.specs.map((spec, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2"></div>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-center items-start border-l-2 border-gray-200 pl-6">
                           <div className="mb-4 bg-blue-50 text-blue-800 p-3 rounded text-sm flex gap-2">
                              <AlertCircle size={16} className="mt-0.5" />
                              <span>Lorem ipsum dolor sit amet consectetur.</span>
                           </div>
                           <Button onClick={() => window.location.hash = '#quote'}>
                             Request Quote
                           </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="quote">
           <QuoteSection />
        </div>
      </div>
    </div>
  );
};