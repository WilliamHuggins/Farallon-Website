
import React, { useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Radio, ExternalLink, Play } from 'lucide-react';

const VisualArchives: React.FC<{ currentLang: string }> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: "vid_01",
      title: "HEAVY WATER // TRANSMISSION_01",
      src: "https://drive.google.com/file/d/1FDhaw7uJlfbYLDnhq-zC4gjhImW8K0V6/preview",
      description: "Primary visual manifest for the Farallon Protocol."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Memory Fragments</h1>
          <p className="text-text-muted text-lg max-w-xl font-light">
             Decrypted visual and motion fragments reconstructed from the oceanographic AI's core storage.
          </p>
        </div>

        {/* Video Section First */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-white pb-4">
            <Radio className="text-primary animate-pulse" />
            <h2 className="text-2xl font-bold font-display uppercase tracking-widest">Motion Fragments</h2>
          </div>
          <div className="grid gap-12">
            {videos.map(video => (
              <div key={video.id} className="glass-card rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row gap-12">
                 <div className="w-full lg:w-2/3 aspect-video bg-black rounded-3xl overflow-hidden relative shadow-2xl">
                    <iframe 
                      src={video.src}
                      className="w-full h-full opacity-90"
                      title={video.title}
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl"></div>
                 </div>
                 <div className="flex flex-col justify-center gap-6 lg:w-1/3">
                    <h3 className="text-2xl font-bold font-display">{video.title}</h3>
                    <p className="text-text-muted leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex flex-col gap-3">
                       <button className="flex items-center gap-2 h-12 px-6 bg-text-main text-white rounded-full font-bold hover:bg-primary transition-all shadow-glow w-fit">
                          <Play size={16} fill="currentColor" /> Play Transmission
                       </button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Static Gallery */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-white pb-4">
            <Radio className="text-secondary" />
            <h2 className="text-2xl font-bold font-display uppercase tracking-widest">Still Fragments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {GALLERY_IMAGES.map((img) => (
              <div key={img.id} className="group relative aspect-video glass-card rounded-[2rem] p-4 overflow-hidden shadow-soft hover:shadow-ethereal transition-all duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="font-mono text-[10px] text-text-main tracking-widest uppercase font-bold">{img.caption}</p>
                  </div>
                  <div className="size-10 rounded-full bg-white/80 backdrop-blur-md border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 delay-75">
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualArchives;
