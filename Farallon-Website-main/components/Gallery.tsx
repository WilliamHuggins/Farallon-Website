import React from 'react';
import { Image, Scan } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import { translations } from '../translations';

interface GalleryProps {
  content: typeof translations['en']['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/30 pb-4">
        <div className="flex items-center gap-3">
          <Image size={20} className="text-cyan-400" />
          <h3 className="font-mono text-lg md:text-xl tracking-[0.2em] text-cyan-100 uppercase">
            {content.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-orange-500/80 animate-pulse">
          <Scan size={14} />
          <span className="uppercase hidden sm:inline">{content.status}</span>
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.id} className="group relative aspect-[4/3] bg-black border border-gray-800 overflow-hidden">
            
            {/* Image Layer */}
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
            
            {/* CRT Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

            {/* Cyan Tint Overlay (Removes on hover) */}
            <div className="absolute inset-0 bg-cyan-900/40 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50 z-20 transition-all group-hover:border-cyan-400 group-hover:w-4 group-hover:h-4"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50 z-20 transition-all group-hover:border-cyan-400 group-hover:w-4 group-hover:h-4"></div>

            {/* Caption Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-cyan-900/50 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
              <p className="font-mono text-[10px] text-cyan-400 tracking-widest truncate">
                {img.caption}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
