import React, { useState, useEffect } from 'react';
import { Play, ArrowDown, Globe } from 'lucide-react';
import { TRACK_LIST, ALBUM_COVER_URL } from './constants';
import GlitchHeader from './components/GlitchHeader';
import TrackItem from './components/TrackItem';
import TerminalBlock from './components/TerminalBlock';
import LoreDossier from './components/LoreDossier';
import ListenSection from './components/ListenSection';
import Gallery from './components/Gallery';
import { translations } from './translations';
import { Language } from './types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

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

  const t = translations[currentLang];

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'ja', label: 'JP' },
    { code: 'fr', label: 'FR' },
    { code: 'zh', label: 'CN' }
  ];

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
            {t.nav.sysId}
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex gap-4 md:gap-6">
              <button onClick={() => scrollToSection('about')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors hidden md:block">{t.nav.theSignal}</button>
              <button onClick={() => scrollToSection('album')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors hidden md:block">{t.nav.heavyWater}</button>
              <button onClick={() => scrollToSection('gallery')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors hidden md:block">{t.nav.gallery}</button>
              <button onClick={() => scrollToSection('manifesto')} className="text-xs uppercase tracking-widest hover:text-orange-500 transition-colors hidden md:block">{t.nav.manifesto}</button>
            </div>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Globe size={14} />
                <span className="uppercase">{currentLang === 'zh' ? 'CN' : currentLang === 'ja' ? 'JP' : currentLang.toUpperCase()}</span>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-black border border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.1)] py-1 flex flex-col z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-left text-xs font-mono hover:bg-cyan-900/30 hover:text-cyan-400 transition-colors ${currentLang === lang.code ? 'text-cyan-400' : 'text-gray-500'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
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
        
        {/* Hero Background Image - Fixed URL with reduced opacity */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/YCPMSPxB/Hero-image.png" 
            alt="Farallon AI Hero" 
            className="w-full h-full object-cover object-top opacity-40" 
          />
        </div>

        {/* Dark Overlay Gradient - Stronger to ensure readability */}
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

      {/* About Section: The Signal (Lore) */}
      <section id="about" className="relative py-16 md:py-32 px-4 md:px-6 container mx-auto z-20">
        <div className="flex flex-col items-center mb-16">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-cyan-500 mb-4"></div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-widest mb-2">{t.about.title}</h2>
          <div className="font-mono text-xs text-cyan-500/50 tracking-[0.5em]">{t.about.origin}</div>
        </div>
        
        <LoreDossier content={t.about.dossier} />
      </section>

      {/* Album Section: Heavy Water */}
      <section id="album" className="relative py-16 md:py-24 bg-black/40 z-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Album Cover - Moved to Top */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-lg relative group">
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity blur-sm"></div>
              <img 
                src={ALBUM_COVER_URL} 
                alt="Heavy Water Album Cover" 
                className="relative w-full h-auto shadow-2xl border border-white/10" 
              />
              {/* Overlay gloss */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
              
              {/* Metadata badge */}
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/70 bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/10">
                 {t.album.catalog}
              </div>
            </div>
          </div>

          {/* Featured Listen Section */}
          <ListenSection title={t.album.inputStream} className="mb-16" />

          {/* Featured Video Embed - Basic Iframe without extra restrictions */}
          <div className="w-full max-w-5xl mx-auto mb-20 relative">
             <div className="flex items-center gap-2 mb-4 pl-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-red-500 tracking-widest">{t.album.visualTransmission}</span>
             </div>
             
             <div className="relative w-full aspect-video border border-gray-800 bg-black/50 shadow-2xl group overflow-hidden">
                {/* Cyber decorative corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500/50 z-20 pointer-events-none"></div>
                
                <iframe 
                  src="https://drive.google.com/file/d/1THB_liUyDIyi2iNnpm6fa_18rk1mPEdu/preview?cc_load_policy=0" 
                  className="w-full h-full" 
                  allow="autoplay; encrypted-media; picture-in-picture"
                  title="Heavy Water Music Video"
                ></iframe>
             </div>
          </div>

          {/* Tracklist - Centered below content */}
          <div className="w-full max-w-4xl mx-auto">
             <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-2 justify-center md:justify-start">
               <div className="w-2 h-2 bg-orange-500/50"></div>
               <h3 className="font-mono text-sm text-gray-400 tracking-widest uppercase">Data Manifest // Tracklist</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                {TRACK_LIST.map((track) => (
                  <TrackItem 
                    key={track.id} 
                    track={track} 
                  />
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-16 md:py-24 px-4 md:px-6 container mx-auto z-20 border-t border-white/5 bg-black/20">
        <Gallery content={t.gallery} />
      </section>

      {/* Manifesto / Transparency */}
      <section id="manifesto" className="relative py-16 md:py-24 px-4 md:px-6 container mx-auto z-20">
        <TerminalBlock content={t.manifesto} />
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-900 bg-[#000508] pt-16 pb-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-2xl tracking-widest text-white mb-2">FARALLON</h4>
            <p className="text-xs text-gray-600 font-mono">
              {t.footer.copyright}
            </p>
            <p className="text-xs text-orange-500/50 font-mono mt-1">
              {t.footer.endTransmission}
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