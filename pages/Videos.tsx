import React, { useEffect } from 'react';
import { Radio, Play } from 'lucide-react';
import SEO from '../components/SEO';

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
      id: "vid_heavy_water_official",
      title: "HEAVY WATER // OFFICIAL VIDEO",
      src: "https://www.youtube.com/embed/am0Vvq9v16I?si=4uQe7ZWkJHO0twRB",
      description: "Official music video for the title track of the debut album. A visual journey through the static."
    },
    {
      id: "vid_live_wire",
      title: "LIVE WIRE // OFFICIAL VIDEO",
      src: "https://www.youtube.com/embed/M5P1mdq64U4?si=fWI2ZvCASghcDLAK",
      description: "Visual transmission for 'Live Wire' from the Ghostwriter album. High voltage processing."
    },
    {
      id: "vid_get_down",
      title: "GET DOWN // OFFICIAL VIDEO",
      src: "https://www.youtube.com/embed/BI-wn6cWm5E?si=RijD0JpuOtBW9Ile",
      description: "Official visualizer for the single 'Get Down'. Kinetic typography and signal distortion."
    },
    {
      id: "vid_ghostwriter_promo",
      title: "GHOSTWRITER // PROMO",
      src: "https://www.youtube.com/embed/bnSS4opxsVY?si=-Klr6dDmYz8rj0K-",
      description: "Teaser transmission for the upcoming Ghostwriter album release. The digital phantom returns."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <SEO 
        title="Visual Archives - Music Videos"
        description="Watch official music videos and visual transmissions from Farallon."
        canonical="/videos"
      />
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                     {/* We remove the button since the video is embedded directly and play button is redundant/confusing if it doesn't control the iframe */}
                     <div className="flex items-center gap-2 text-white/50 text-sm font-mono uppercase tracking-wider">
                        <Play size={14} /> Official Visual
                     </div>
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