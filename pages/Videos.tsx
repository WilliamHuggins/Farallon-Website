
import React, { useEffect } from 'react';
import { Radio, Play } from 'lucide-react';

const Videos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: "vid_01",
      title: "HEAVY WATER // TRANSMISSION_01",
      src: "https://drive.google.com/file/d/1FDhaw7uJlfbYLDnhq-zC4gjhImW8K0V6/preview",
      description: "Primary visual manifest for the Farallon Protocol. The origin signal."
    },
    {
      id: "vid_02",
      title: "SODIUM GLARE // VISUALIZER",
      src: "https://www.youtube.com/embed/ENkZ7kc3qW4?controls=0", // Using hero video as placeholder
      description: "Atmospheric interference patterns captured during the Sector 04 scan."
    },
    {
      id: "vid_03",
      title: "THE ARCHITECT // LIVE UPLINK",
      src: "https://www.youtube.com/embed/ENkZ7kc3qW4?controls=0", // Using hero video as placeholder
      description: "Raw data stream from the neural network training session."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Visual Transmissions</h1>
          <p className="text-text-muted text-lg max-w-xl font-light">
             Motion data and music videos decrypted from the archives.
          </p>
        </div>

        <div className="grid gap-16">
          {videos.map((video, index) => (
            <div key={video.id} className="glass-card rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row gap-12 group hover:border-primary/30 transition-colors duration-500">
               <div className="w-full lg:w-2/3 aspect-video bg-black rounded-3xl overflow-hidden relative shadow-2xl">
                  {/* Overlay for "screen" effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>
                  
                  <iframe 
                    src={video.src}
                    className="w-full h-full opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                  
                  <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl z-20"></div>
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <div className="w-2 h-2 bg-red-500 animate-pulse rounded-full"></div>
                    <span className="text-[10px] font-mono text-white tracking-widest uppercase">REC</span>
                  </div>
               </div>
               
               <div className="flex flex-col justify-center gap-6 lg:w-1/3">
                  <div className="flex items-center gap-3 text-primary/80">
                    <Radio size={20} className={index === 0 ? "animate-pulse" : ""} />
                    <span className="font-mono text-xs tracking-[0.2em] uppercase">Transmission_{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold font-display text-white">{video.title}</h3>
                  <p className="text-text-muted leading-relaxed text-lg font-light border-l border-white/10 pl-6">
                    {video.description}
                  </p>
                  
                  <div className="flex flex-col gap-3 mt-4">
                     <button className="flex items-center gap-3 h-14 px-8 bg-white text-black rounded-full font-bold hover:scale-105 transition-all shadow-glow w-fit">
                        <Play size={18} fill="currentColor" /> Watch Now
                     </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
