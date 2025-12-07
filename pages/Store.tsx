

import React, { useEffect } from 'react';
import { ShoppingBag, ExternalLink, Printer, Package } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

interface StoreProps {
  currentLang: Language;
}

const Store: React.FC<StoreProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
           <div className="flex items-center gap-3 mb-2 text-cyan-400">
             <ShoppingBag size={24} />
             <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest">
               {t.store.title}
             </h1>
           </div>
           <div className="w-24 h-1 bg-cyan-500 mb-4"></div>
           <p className="font-mono text-xs md:text-sm text-cyan-500/60 tracking-[0.3em] uppercase">
             {t.store.subtitle}
           </p>
        </div>

        {/* Printful Partner Notice */}
        <div className="max-w-3xl mx-auto mb-16 border border-gray-800 bg-black/40 p-4 md:p-6 backdrop-blur-sm flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
           <div className="p-3 bg-white/5 rounded-full">
             <Printer size={24} className="text-gray-400" />
           </div>
           <div className="flex-1">
             <p className="font-mono text-xs text-gray-300 uppercase tracking-wider">
               {t.store.partnerNotice}
             </p>
             <p className="text-[10px] text-gray-500 mt-1 font-mono">
               Global Fulfillment Network // On-Demand Fabrication
             </p>
           </div>
           <div className="p-3 bg-white/5 rounded-full">
             <Package size={24} className="text-gray-400" />
           </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
           
           {/* Product 1: T-Shirt */}
           <div className="flex flex-col gap-6">
              <div className="relative group aspect-[4/5] bg-gray-900 border border-gray-800 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/dtKwWfZn/Model-(Lower-quality).png" 
                  alt="Farallon SF Graphic Tee" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 border border-cyan-500/50 px-2 py-1 bg-black/60 backdrop-blur-sm">
                   <span className="font-mono text-[10px] text-cyan-400">ITEM_ID: TEE_01</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-cyan-500 pl-4">
                   <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                     {t.store.products.tshirt.name}
                   </h2>
                   <p className="font-mono text-xs text-cyan-400/80 uppercase">
                     Sector 01 // Limited Fabrication
                   </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                   {t.store.products.tshirt.description}
                </p>
                <a 
                   href="https://farallon.printful.me/product/womens-cotton-crew-neck-t-shirt" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-3 bg-cyan-900/20 border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 px-6 py-3 transition-all duration-300 group mt-2"
                 >
                    <span className="font-mono text-xs tracking-widest text-cyan-100 uppercase group-hover:text-white">
                      {t.store.products.tshirt.cta}
                    </span>
                    <ExternalLink size={14} className="text-cyan-400 group-hover:text-white" />
                 </a>
              </div>
           </div>

           {/* Product 2: Hoodie */}
           <div className="flex flex-col gap-6">
              <div className="relative group aspect-[4/5] bg-gray-900 border border-gray-800 overflow-hidden">
                <img 
                  src="https://i.postimg.cc/hG1WJ4tM/Hoodie-ad.png" 
                  alt="Farallon Stealth Hoodie" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 border border-cyan-500/50 px-2 py-1 bg-black/60 backdrop-blur-sm">
                   <span className="font-mono text-[10px] text-cyan-400">ITEM_ID: HOOD_01</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-cyan-500 pl-4">
                   <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                     {t.store.products.hoodie.name}
                   </h2>
                   <p className="font-mono text-xs text-cyan-400/80 uppercase">
                     Under Armour // Performance
                   </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                   {t.store.products.hoodie.description}
                </p>
                <a 
                   href="https://farallon.printful.me/product/under-armour-hoodie" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-3 bg-cyan-900/20 border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 px-6 py-3 transition-all duration-300 group mt-2"
                 >
                    <span className="font-mono text-xs tracking-widest text-cyan-100 uppercase group-hover:text-white">
                      {t.store.products.hoodie.cta}
                    </span>
                    <ExternalLink size={14} className="text-cyan-400 group-hover:text-white" />
                 </a>
              </div>
           </div>

        </div>

        {/* Full Store CTA */}
        <div className="flex justify-center">
           <a 
             href="https://farallon.printful.me" 
             target="_blank" 
             rel="noopener noreferrer"
             className="relative group px-12 py-6 bg-black border border-white/20 hover:border-orange-500 transition-colors duration-500 overflow-hidden"
           >
              <div className="absolute inset-0 bg-orange-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative flex items-center gap-4">
                 <ShoppingBag size={20} className="text-orange-500" />
                 <span className="font-mono text-sm md:text-base tracking-[0.2em] text-white uppercase">
                    {t.store.visitFullStore}
                 </span>
                 <ExternalLink size={16} className="text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
           </a>
        </div>

      </div>
    </div>
  );
};

export default Store;
