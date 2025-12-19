
import React, { useEffect, useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Radio, ExternalLink, ShieldAlert, Maximize2, X } from 'lucide-react';

const VisualArchives: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Memory Fragments</h1>
          <p className="text-text-muted text-lg max-w-xl font-light">
             Decrypted visual fragments reconstructed from the oceanographic AI's core storage.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-white pb-4">
            <Radio className="text-secondary" />
            <h2 className="text-2xl font-bold font-display uppercase tracking-widest">Still Fragments</h2>
          </div>
          
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {GALLERY_IMAGES.map((img) => (
              <div 
                key={img.id} 
                className="break-inside-avoid group relative glass-card rounded-[2rem] p-4 overflow-hidden shadow-soft hover:shadow-ethereal transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="w-full rounded-2xl overflow-hidden relative bg-black/5">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                     <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white">
                        <Maximize2 size={24} />
                     </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center px-1">
                  <div className="bg-white/50 dark:bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                    <p className="font-mono text-[10px] text-text-main-light dark:text-white tracking-widest uppercase font-bold">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-12 pb-12 px-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4">
                <ShieldAlert className="text-slate-400" size={32} />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">
                Visual Synthesis Disclaimer
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono leading-relaxed max-w-3xl">
                Farallon is an AI-generated musician. The images displayed in this gallery are AI-generated renderings created to visualize the fictional character and persona of "Farallon". This character is entirely fictional and is not based on, nor intended to represent, any real person, living or deceased. Any resemblance to actual persons is purely coincidental. These images were not created in the likeness of any specific individual.
                </p>
            </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                }}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 rounded-full p-2"
            >
                <X size={32} />
            </button>

            <div 
                className="relative max-w-7xl max-h-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
                 <img 
                    src={selectedImage.url} 
                    alt={selectedImage.alt} 
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                 />
                 <div className="mt-6 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                    <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase font-bold">{selectedImage.caption}</p>
                 </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default VisualArchives;
