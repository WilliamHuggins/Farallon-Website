

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Play, ArrowDown, ChevronDown, ChevronUp, ImageOff } from 'lucide-react';
import { TRACK_LIST, OFFLINE_TRACK_LIST, ALBUM_COVER_URL, LATEST_SINGLE_COVER_URL, OFFLINE_SESSION_COVER_URL } from '../constants';
import GlitchHeader from '../components/GlitchHeader';
import TrackItem from '../components/TrackItem';
import TerminalBlock from '../components/TerminalBlock';
import LoreDossier from '../components/LoreDossier';
import ListenSection from '../components/ListenSection';
import { translations } from '../translations';
import { Language } from '../types';

interface HomeProps {
  currentLang: Language;
}

const Home: React.FC<HomeProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const location = useLocation();
  const [showTracklist, setShowTracklist] = useState(false);
  const [offlineImageError, setOfflineImageError] = useState(false);

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clean up state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-20">
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/YCPMSPxB/Hero-image.png" 
            alt="Farallon AI Hero" 
            className="w-full h-full object-cover object-top opacity-40" 
          />
        </div>

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010b13]/60 via-[#010b13]/50 to-[#010b13] z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 flex flex-col items-center w-full">
          <div className="mb-4 font-mono text-cyan-500/80 text-xs md:text-sm tracking-[0.5em] animate-pulse drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t.hero.initiating}
          </div>
          
          <GlitchHeader text="FARALLON" size="xl" className="mb-2 drop-shadow-2xl" />
          
          <h2 className="text-sm md:text-2xl font-light tracking-widest text-gray-200 mb-12 uppercase drop-shadow-md bg-black/30 px-4 py-1 backdrop-blur-sm">
            {t.hero.subtitle}
          </h2>

          <button 
            onClick={() => scrollToSection('album')}
            className="group relative px-8 py-3 bg-black/60 overflow-hidden border border-orange-500/50 hover:border-orange-500 transition-colors duration-300 backdrop-blur-sm"
          >
            <span className="absolute inset-0 w-0 bg-orange-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
            <span className="relative flex items-center gap-2 font-mono text-sm tracking-widest text-orange-400 group-hover:text-orange-300">
              {t.hero.cta}
              <Play size={14} className="fill-current" />
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 z-20 animate-bounce text-gray-400">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Album Section: Discography */}
      <section id="album" className="relative py-16 md:py-24 bg-black/40 z-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">

          {/* Latest Release Banner - NEW YEAR SPECIAL */}
          <div className="w-full max-w-5xl mx-auto mb-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 blur-xl"></div>
              <div className="relative border border-white/10 bg-black/60 backdrop-blur-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
                  
                  <div className="relative group shrink-0">
                       <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-500"></div>
                       <img 
                         src={LATEST_SINGLE_COVER_URL} 
                         alt="Midnight Meridian Cover" 
                         className="relative w-64 h-64 object-cover shadow-2xl border border-white/10" 
                       />
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                          <span className="font-mono text-xs text-cyan-400 tracking-[0.2em] uppercase">{t.latest.label}</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest mb-2 font-mono">{t.latest.title}</h2>
                      <p className="font-mono text-sm text-purple-300 uppercase tracking-widest mb-6">{t.latest.type}</p>
                      <div className="font-mono text-xs text-gray-400 max-w-md leading-relaxed">
                         {t.latest.description}
                      </div>
                  </div>
              </div>
          </div>
          
          {/* Featured Listen Section */}
          <ListenSection title={t.album.inputStream} className="mb-16" />

          {/* Album 1: Heavy Water */}
          <div className="w-full max-w-lg mx-auto mb-24">
            
            {/* Album Cover - Clickable */}
            <button 
              onClick={() => setShowTracklist(!showTracklist)}
              className="w-full relative group cursor-pointer focus:outline-none block mb-6"
              aria-label="Toggle Tracklist"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity blur-sm"></div>
              <img 
                src={ALBUM_COVER_URL} 
                alt="Heavy Water Album Cover" 
                className="relative w-full h-auto shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-[1.01]" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
              
              {/* Overlay Hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="bg-black/80 border border-cyan-500 px-4 py-2 flex items-center gap-2">
                   <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                      {showTracklist ? 'HIDE DATA' : 'REVEAL DATA MANIFEST'}
                   </span>
                   {showTracklist ? <ChevronUp size={14} className="text-cyan-400"/> : <ChevronDown size={14} className="text-cyan-400"/>}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/70 bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/10">
                 {t.album.catalog}
              </div>
            </button>

            {/* Tracklist (Collapsible - Positioned directly below cover) */}
            {showTracklist && (
              <div className="w-full animate-in slide-in-from-top-2 fade-in duration-300 bg-black/40 border border-gray-800 p-4 backdrop-blur-md">
                 <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                   <div className="w-2 h-2 bg-orange-500/50"></div>
                   <h3 className="font-mono text-sm text-gray-400 tracking-widest uppercase">Data Manifest // Tracklist</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-1">
                    {TRACK_LIST.map((track) => (
                      <TrackItem 
                        key={track.id} 
                        track={track} 
                      />
                    ))}
                 </div>
              </div>
            )}
          </div>

          {/* Album 2: Offline Session Preview */}
          <div className="w-full max-w-5xl mx-auto mb-24 border-t border-gray-800 pt-12">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                  {/* Cover */}
                  <div className="w-full md:w-1/3">
                      <div className="relative group">
                          {offlineImageError ? (
                              <div className="w-full aspect-square bg-black border border-red-900/50 flex flex-col items-center justify-center text-center p-4 shadow-lg">
                                  <ImageOff size={48} className="text-red-900 mb-4 opacity-50" />
                                  <span className="font-mono text-xs text-red-500 tracking-widest uppercase">NO SIGNAL // IMAGE OFF-LINE</span>
                                  <span className="font-mono text-[10px] text-red-900 mt-2">ERR_CODE: 404_NOT_FOUND</span>
                              </div>
                          ) : (
                              <img 
                                  src={OFFLINE_SESSION_COVER_URL} 
                                  alt="The Offline Session Cover" 
                                  className="w-full h-auto shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" 
                                  onError={() => setOfflineImageError(true)}
                              />
                          )}
                          <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 border border-white/20">
                              <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                                  {t.offline.status}
                              </span>
                          </div>
                      </div>
                  </div>

                  {/* Info & Tracks */}
                  <div className="w-full md:w-2/3">
                      <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest mb-2">
                          {t.offline.title}
                      </h3>
                      <p className="font-mono text-cyan-500 text-xs tracking-[0.2em] mb-6 uppercase">
                          {t.offline.subtitle}
                      </p>
                      <p className="font-mono text-sm text-gray-400 mb-8 leading-relaxed border-l-2 border-gray-700 pl-4">
                          {t.offline.description}
                      </p>

                      <div className="bg-black/40 border border-gray-800 p-6">
                          <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                              Session Tracks
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                              {OFFLINE_TRACK_LIST.map((track) => (
                                  <div key={track.id} className="flex justify-between items-center text-xs py-1 border-b border-gray-800/50 hover:bg-white/5">
                                      <span className="text-gray-300 font-mono">{String(track.id).padStart(2, '0')}. {track.title}</span>
                                      <span className="text-gray-600 font-mono text-[10px] uppercase">{track.duration}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Official Visuals Section (Moved to Bottom of Discography) */}
          <div className="w-full max-w-5xl mx-auto mt-24 pt-12 border-t border-gray-800">
            <div className="flex items-center gap-2 mb-8 justify-center opacity-80">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h4 className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase">Official Visuals</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Video 1: Heavy Water */}
                <div className="group relative z-[60]"> {/* z-[60] places it above the scanline overlay (z-50) */}
                    <div className="aspect-video w-full bg-black border border-gray-800 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                         <iframe
                            src="https://www.youtube.com/embed/am0Vvq9v16I?si=D7Rwq-FPnLvy3S5T"
                            className="absolute inset-0 w-full h-full"
                            title="Heavy Water Official Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                         ></iframe>
                    </div>
                    <div className="mt-4 border-l-2 border-cyan-500 pl-4">
                        <h3 className="text-white font-bold tracking-widest uppercase text-lg">Heavy Water</h3>
                        <p className="text-cyan-500/60 font-mono text-xs uppercase mt-1 tracking-wider">Album: Heavy Water</p>
                    </div>
                </div>

                {/* Video 2: Live Wire */}
                <div className="group relative z-[60]">
                    <div className="aspect-video w-full bg-black border border-gray-800 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                         <iframe
                            src="https://www.youtube.com/embed/M5P1mdq64U4?si=I9Tpe-G37Ub0UdGE"
                            className="absolute inset-0 w-full h-full"
                            title="Live Wire Official Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                         ></iframe>
                    </div>
                    <div className="mt-4 border-l-2 border-cyan-500 pl-4">
                        <h3 className="text-white font-bold tracking-widest uppercase text-lg">Live Wire</h3>
                        <p className="text-cyan-500/60 font-mono text-xs uppercase mt-1 tracking-wider">Album: Currently Unreleased</p>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* About Section: The Signal (Lore) */}
      <section id="about" className="relative py-16 md:py-32 px-4 md:px-6 container mx-auto z-20">
        <div className="flex flex-col items-center mb-16">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-cyan-500 mb-4"></div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-widest mb-2">{t.about.title}</h2>
          <div className="font-mono text-xs text-cyan-500/50 tracking-[0.5em]">{t.about.origin}</div>
        </div>
        
        <LoreDossier content={t.about.dossier} />
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="relative py-16 md:py-24 px-4 md:px-6 container mx-auto z-20">
        <TerminalBlock content={t.manifesto} />
      </section>
    </>
  );
};

export default Home;
