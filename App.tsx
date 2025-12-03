import React, { useState, useEffect } from 'react';
import { Play, ArrowDown, ExternalLink, Disc } from 'lucide-react';
import { TRACK_LIST, ALBUM_COVER_URL } from './constants';
import GlitchHeader from './components/GlitchHeader';
import TrackItem from './components/TrackItem';
import TerminalBlock from './components/TerminalBlock';
import LoreDossier from './components/LoreDossier';
import ListenSection from './components/ListenSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5">
      <path d="M9 0h1.98c.144.715.54 1.617 1.093 2.512C12.842 3.878 14.537 4.73 16.01 4.95v4.25c-3.042-.212-3.968-1.54-4.09-1.61v.91c0 3.797-1.079 6.249-3.152 7.607-1.291.85-2.865 1.14-4.22.65-2.307-.81-3.69-3.415-2.705-5.917 1.127-2.862 4.675-3.655 6.772-1.637.525.505.813 1.011 1.05 1.543h3.553c-.344-3.08-2.693-5.525-5.834-5.38-3.84.17-6.723 3.32-6.52 7.185.19 3.634 3.197 6.635 6.84 6.822 2.72.14 5.215-1.27 6.44-3.49 1.45-2.61 1.255-6.623 1.255-9.38 0-.497.02-1.503.02-1.503h4.63V0h-9.09z" />
    </svg>
  );

  return (
    <div className="min-h-screen relative text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* CRT Scanline Overlay */}
      <div className="scanlines"></div>

      {/* Global Fog Background */}
      <div className="fog-container fixed inset-0">
        <div className="fog-img"></div>
        <div className="fog-img-2"></div>
      </div>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-gray-800 py-3' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="font-mono text-xs md:text-sm tracking-widest text-cyan-400">
            SYS.ID: FARALLON_AI
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex gap-4 md:gap-6">
              <button onClick={() => scrollToSection('about')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors">The Signal</button>
              <button onClick={() => scrollToSection('album')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors">Heavy Water</button>
              <button onClick={() => scrollToSection('manifesto')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors hidden md:block">Manifesto</button>
            </div>
            {/* Promoted TikTok Link */}
            <a 
              href="https://tiktok.com/@farallonai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors p-1"
              aria-label="Follow on TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-20">
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010b13]/60 via-transparent to-[#010b13] z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 flex flex-col items-center w-full">
          <div className="mb-4 font-mono text-cyan-500/60 text-xs md:text-sm tracking-[0.5em] animate-pulse">
            INITIATING CONNECTION...
          </div>
          
          <GlitchHeader text="FARALLON" size="xl" className="mb-2" />
          
          <h2 className="text-sm md:text-2xl font-light tracking-widest text-gray-400 mb-12 uppercase">
            The Signal in the Noise
          </h2>

          <button 
            onClick={() => scrollToSection('album')}
            className="group relative px-8 py-3 bg-transparent overflow-hidden border border-orange-500/50 hover:border-orange-500 transition-colors duration-300"
          >
            <span className="absolute inset-0 w-0 bg-orange-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
            <span className="relative flex items-center gap-2 font-mono text-sm tracking-widest text-orange-400 group-hover:text-orange-300">
              INITIATE PROTOCOL
              <Play size={14} className="fill-current" />
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 z-20 animate-bounce text-gray-600">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* About Section: The Signal (Lore) */}
      <section id="about" className="relative py-16 md:py-32 px-4 md:px-6 container mx-auto z-20">
        <div className="flex flex-col items-center mb-16">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-cyan-500 mb-4"></div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-widest mb-2">The Signal</h2>
          <div className="font-mono text-xs text-cyan-500/50 tracking-[0.5em]">ORIGIN STORY</div>
        </div>
        
        <LoreDossier />
      </section>

      {/* Album Section: Heavy Water */}
      <section id="album" className="relative py-16 md:py-24 bg-black/40 z-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
            <div className="w-full md:w-auto">
              <div className="font-mono text-orange-500 text-xs tracking-widest mb-2">CATALOG: FRLN-001</div>
              <GlitchHeader text="HEAVY WATER" size="lg" className="text-white" />
            </div>
            <div className="hidden md:block text-right">
              <div className="text-sm text-gray-500 font-mono">TOTAL RUNTIME</div>
              <div className="text-2xl text-cyan-400 font-mono">53:41</div>
            </div>
          </div>

          {/* Featured Listen Section (Promoted to Top) */}
          <ListenSection className="mb-20 mt-4" />

          {/* Featured Video Embed */}
          <div className="w-full max-w-5xl mx-auto mb-20 relative">
             <div className="flex items-center justify-between mb-4 pl-1">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-mono text-xs text-red-500 tracking-widest">VISUAL TRANSMISSION // HEAVY_WATER.MP4</span>
                </div>
             </div>
             
             <div className="relative w-full aspect-video border border-gray-800 bg-black/50 shadow-2xl group">
                {/* Cyber decorative corners - Z-Index 20, Pointer Events None */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                
                {/* Video Iframe - Z-Index 10 */}
                <iframe 
                  src="https://drive.google.com/file/d/1THB_liUyDIyi2iNnpm6fa_18rk1mPEdu/preview" 
                  className="w-full h-full object-cover relative z-10"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Heavy Water Music Video"
                ></iframe>
             </div>
          </div>

          {/* Tracklist - Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {TRACK_LIST.map((track) => (
              <TrackItem 
                key={track.id} 
                track={track} 
              />
            ))}
          </div>

          {/* DistroKid Link Card */}
          <div className="mt-20 pt-10 border-t border-gray-800/50">
             <div className="flex items-center gap-3 mb-8 justify-center opacity-80">
                 <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                 <h4 className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase">Input Stream: DistroKid</h4>
             </div>
             
             <div className="w-full max-w-2xl mx-auto relative group">
                {/* Frame Accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-500/80 transition-colors"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-500/80 transition-colors"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-500/80 transition-colors"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-500/80 transition-colors"></div>

                <a 
                    href="https://distrokid.com/hyperfollow/farallon1/heavy-water" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden bg-black/60 border border-white/10 backdrop-blur-sm p-8 md:p-12 hover:border-cyan-500/50 transition-all duration-500 group"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                         <img src={ALBUM_COVER_URL} alt="Background" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
                        <Disc size={48} className="text-cyan-500 animate-[spin_10s_linear_infinite]" />
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest mb-2 group-hover:text-cyan-400 transition-colors">ACCESS HYPERFOLLOW</h3>
                            <p className="font-mono text-orange-500 text-xs tracking-[0.3em]">SECURE_CONNECTION // DISTROKID</p>
                        </div>
                        
                        <div className="mt-6 px-6 py-2 border border-cyan-500/30 rounded flex items-center gap-2 text-sm text-cyan-300 group-hover:bg-cyan-500/10 transition-colors">
                            <span>INITIATE TRANSFER</span>
                            <ExternalLink size={14} />
                        </div>
                    </div>
                </a>
             </div>
          </div>

        </div>
      </section>

      {/* Manifesto / Transparency */}
      <section id="manifesto" className="relative py-16 md:py-24 px-4 md:px-6 container mx-auto z-20">
        <TerminalBlock />
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-900 bg-[#000508] pt-16 pb-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-2xl tracking-widest text-white mb-2">FARALLON</h4>
            <p className="text-xs text-gray-600 font-mono">
              &copy; 2025 PROJECT FARALLON.
            </p>
            <p className="text-xs text-orange-500/50 font-mono mt-1">
              END TRANSMISSION.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            {/* TikTok */}
            <a href="https://tiktok.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors" aria-label="TikTok">
               <TikTokIcon />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;