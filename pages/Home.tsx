
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Play, ArrowDown, ChevronDown, ChevronUp, ImageOff } from 'lucide-react';
import { TRACK_LIST, OFFLINE_TRACK_LIST, ALBUM_COVER_URL, LATEST_SINGLE_COVER_URL, OFFLINE_SESSION_COVER_URL, GHOSTWRITER_COVER_URL } from '../constants';
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
  const [showOfflineTracklist, setShowOfflineTracklist] = useState(false);
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

          {/* Featured Listen Section (Moved to Top) */}
          <ListenSection title={t.album.inputStream} className="mb-20 md:mb-24" />

          {/* GHOSTWRITER TEASER */}
          <div className="w-full max-w-6xl mx-auto mb-24 relative overflow-hidden group">
             {/* Background glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-orange-500/10 blur-[100px] rounded-full"></div>
             
             <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-black/40 backdrop-blur-sm p-6 md:p-10">
                {/* Image */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                   <div className="relative aspect-square border border-gray-800 overflow-hidden shadow-2xl">
                      <img 
                        src={GHOSTWRITER_COVER_URL} 
                        alt="Ghostwriter Album Cover" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-125"
                      />
                      {/* Glitch overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                   </div>
                   <div className="absolute -bottom-4 -right-4 text-[100px] leading-none font-bold text-white/5 font-mono select-none pointer-events-none">2026</div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
                   <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                       <span className="font-mono text-xs text-red-500 tracking-[0.2em] uppercase">{t.ghostwriter.label}</span>
                   </div>
                   
                   <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest font-mono glitch-text" style={{ textShadow: '2px 2px 0px rgba(255,0,0,0.5)' }}>
                     {t.ghostwriter.title}
                   </h2>
                   
                   <h3 className="font-mono text-sm md:text-lg text-cyan-400 tracking-wider uppercase border-l-2 border-red-500 pl-4 py-1 bg-red-900/10">
                     {t.ghostwriter.headline}
                   </h3>
                   
                   <div className="space-y-4 text-gray-300 font-light leading-relaxed max-w-2xl">
                     <p className="font-mono text-xs md:text-sm text-orange-400/80 uppercase tracking-widest">
                       {t.ghostwriter.description}
                     </p>
                     <p>
                       {t.ghostwriter.body}
                     </p>
                     <p className="text-white font-medium italic border-t border-white/10 pt-4 mt-4">
                       "{t.ghostwriter.punchline}"
                     </p>
                   </div>
                </div>
             </div>
          </div>

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

          {/* Album 1: Heavy Water (Redesigned for consistency) */}
          <div className="w-full max-w-5xl mx-auto mb-24 border-t border-gray-800 pt-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Cover */}
              <div className="w-full md:w-1/3">
                <button 
                  onClick={() => setShowTracklist(!showTracklist)}
                  className="w-full relative group cursor-pointer focus:outline-none block text-left"
                  aria-label="Toggle Tracklist"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  
                  <div className="relative aspect-square w-full overflow-hidden shadow-2xl border border-white/10">
                    <img 
                        src={ALBUM_COVER_URL} 
                        alt="Heavy Water Album Cover" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
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
                  </div>
                  
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 border border-white/20 z-10">
                      <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                          AVAILABLE
                      </span>
                  </div>
                </button>
              </div>

              {/* Info & Tracks */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest mb-2">
                   HEAVY WATER
                </h3>
                <p className="font-mono text-cyan-500 text-xs tracking-[0.2em] mb-6 uppercase">
                   {t.album.catalog}
                </p>
                <p className="font-mono text-sm text-gray-400 mb-8 leading-relaxed border-l-2 border-gray-700 pl-4">
                   {t.manifesto.tagline}
                </p>

                {showTracklist && (
                  <div className="bg-black/40 border border-gray-800 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
                     <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                       Data Manifest // Tracklist
                     </h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
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
            </div>
          </div>

          {/* Album 2: Offline Session Preview */}
          <div className="w-full max-w-5xl mx-auto mb-24 border-t border-gray-800 pt-12">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                  {/* Cover */}
                  <div className="w-full md:w-1/3">
                      <button 
                          onClick={() => setShowOfflineTracklist(!showOfflineTracklist)}
                          className="w-full relative group cursor-pointer focus:outline-none block text-left"
                      >
                          <div className="relative aspect-square w-full overflow-hidden shadow-2xl border border-white/10">
                            {offlineImageError ? (
                                <div className="w-full h-full bg-black border border-red-900/50 flex flex-col items-center justify-center text-center p-4 shadow-lg">
                                    <ImageOff size={48} className="text-red-900 mb-4 opacity-50" />
                                    <span className="font-mono text-xs text-red-500 tracking-widest uppercase">NO SIGNAL // IMAGE OFF-LINE</span>
                                    <span className="font-mono text-[10px] text-red-900 mt-2">ERR_CODE: 404_NOT_FOUND</span>
                                </div>
                            ) : (
                                <img 
                                    src={OFFLINE_SESSION_COVER_URL} 
                                    alt="The Offline Session Cover" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                    onError={() => setOfflineImageError(true)}
                                />
                            )}

                            {/* Overlay Hint */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                <div className="bg-black/80 border border-cyan-500 px-4 py-2 flex items-center gap-2">
                                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                                    {showOfflineTracklist ? 'HIDE DATA' : 'REVEAL DATA MANIFEST'}
                                </span>
                                {showOfflineTracklist ? <ChevronUp size={14} className="text-cyan-400"/> : <ChevronDown size={14} className="text-cyan-400"/>}
                                </div>
                            </div>
                          </div>

                          <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 border border-white/20 z-10">
                              <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                                  {t.offline.status}
                              </span>
                          </div>
                      </button>
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

                      {showOfflineTracklist && (
                        <div className="bg-black/40 border border-gray-800 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
                            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                                Session Tracks
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                                {OFFLINE_TRACK_LIST.map((track) => (
                                    <TrackItem key={track.id} track={track} />
                                ))}
                            </div>
                        </div>
                      )}
                  </div>
              </div>
          </div>

          {/* Official Visuals Section (Moved to Bottom of Discography) */}
          <div className="w-full max-w-7xl mx-auto mt-24 pt-12 border-t border-gray-800">
            <div className="flex items-center gap-2 mb-8 justify-center opacity-80">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h4 className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase">Official Visuals</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
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

                {/* Video 2: Get Down */}
                <div className="group relative z-[60]">
                    <div className="aspect-video w-full bg-black border border-gray-800 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                         <iframe
                            src="https://www.youtube.com/embed/BI-wn6cWm5E?si=kMy8dl34Tl_5o4ux" 
                            className="absolute inset-0 w-full h-full"
                            title="Get Down Official Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                         ></iframe>
                         {/* Placeholder overlay if needed, but iframe handles it. Used Heavy Water ID as placeholder */}
                    </div>
                    <div className="mt-4 border-l-2 border-cyan-500 pl-4">
                        <h3 className="text-white font-bold tracking-widest uppercase text-lg">Get Down</h3>
                        <p className="text-cyan-500/60 font-mono text-xs uppercase mt-1 tracking-wider">Album: Heavy Water</p>
                    </div>
                </div>

                {/* Video 3: Live Wire */}
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
                        <p className="text-cyan-500/60 font-mono text-xs uppercase mt-1 tracking-wider">Album: Ghostwriter</p>
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
