
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Instagram, Youtube } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { translations } from '../translations';
import { Language } from '../types';

interface MainLayoutProps {
  children: React.ReactNode;
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentLang, setCurrentLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[currentLang];
  
  // Disable scanlines (glitch effect) on the Store page for a cleaner look
  const isStorePage = location.pathname === '/store';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile menu on click
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="w-[18px] h-[18px]">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );

  return (
    <div className="relative min-h-screen bg-[var(--deep-ocean)] text-slate-200 selection:bg-cyan-500/30">
      
      {/* Scanline Overlay - Conditional Rendering */}
      {!isStorePage && <div className="scanlines"></div>}
      
      {/* Fog Background */}
      <div className="fog-container">
        <div className="fog-img"></div>
        <div className="fog-img-2"></div>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-cyan-900/30 py-3' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo / System ID */}
          <Link 
            to="/" 
            className="font-mono text-xs md:text-sm text-cyan-400 tracking-widest hover:text-white transition-colors cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {t.nav.sysId} <span className="animate-pulse">_</span>
          </Link>

          {/* Desktop Menu - Visible on MD+ */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('album')} className="text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-wider uppercase transition-colors">{t.nav.heavyWater}</button>
            <button onClick={() => handleNavClick('about')} className="text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-wider uppercase transition-colors">{t.nav.theSignal}</button>
            <Link to="/store" className="text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-wider uppercase transition-colors">{t.nav.store}</Link>
            <Link to="/visual-archives" className="text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-wider uppercase transition-colors">{t.nav.gallery}</Link>
            <button onClick={() => handleNavClick('manifesto')} className="text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-wider uppercase transition-colors">{t.nav.manifesto}</button>
            <Link to="/about-project" className="text-xs font-mono text-slate-400 hover:text-cyan-400 tracking-wider uppercase transition-colors">{t.nav.credits}</Link>
          </div>

          {/* Right Side: Language & Socials & Mobile Toggle */}
          <div className="flex items-center gap-4 md:gap-6 z-50">
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Globe size={14} />
                <span className="uppercase">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-black/90 border border-cyan-900/50 backdrop-blur-md p-2 flex flex-col gap-1 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                  {(['en', 'es', 'ja', 'fr', 'zh'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`text-left px-2 py-1 text-xs font-mono uppercase hover:bg-cyan-900/30 hover:text-cyan-400 transition-colors ${currentLang === lang ? 'text-cyan-400' : 'text-slate-500'}`}
                    >
                      {lang === 'ja' ? 'JP' : lang === 'zh' ? 'CN' : lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-4 border-l border-gray-800 pl-6">
               <a href="https://youtube.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FF0000] transition-colors">
                  <Youtube size={18} />
               </a>
               <a href="https://tiktok.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00f2ea] transition-colors">
                  <TikTokIcon />
               </a>
               <a href="https://www.instagram.com/farallonai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E1306C] transition-colors">
                  <Instagram size={18} />
               </a>
               <a href="https://x.com/FarallonAI" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <XIcon />
               </a>
            </div>

            {/* Mobile Menu Toggle (Visible only on small screens) */}
            <button 
              className="md:hidden text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-500 md:hidden flex flex-col items-center justify-center ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="flex flex-col gap-8 text-center">
            <button onClick={() => handleNavClick('album')} className="text-xl font-mono text-slate-300 hover:text-cyan-400 tracking-widest uppercase">{t.nav.heavyWater}</button>
            <button onClick={() => handleNavClick('about')} className="text-xl font-mono text-slate-300 hover:text-cyan-400 tracking-widest uppercase">{t.nav.theSignal}</button>
            <Link to="/store" onClick={() => setMobileMenuOpen(false)} className="text-xl font-mono text-slate-300 hover:text-cyan-400 tracking-widest uppercase">{t.nav.store}</Link>
            <Link to="/visual-archives" onClick={() => setMobileMenuOpen(false)} className="text-xl font-mono text-slate-300 hover:text-cyan-400 tracking-widest uppercase">{t.nav.gallery}</Link>
            <button onClick={() => handleNavClick('manifesto')} className="text-xl font-mono text-slate-300 hover:text-cyan-400 tracking-widest uppercase">{t.nav.manifesto}</button>
            <Link to="/about-project" onClick={() => setMobileMenuOpen(false)} className="text-xl font-mono text-slate-300 hover:text-cyan-400 tracking-widest uppercase">{t.nav.credits}</Link>
            
            <div className="flex items-center gap-6 mt-8 justify-center">
               <a href="https://youtube.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FF0000]">
                  <Youtube size={24} />
               </a>
               <a href="https://tiktok.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00f2ea]">
                  <TikTokIcon />
               </a>
               <a href="https://www.instagram.com/farallonai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E1306C]">
                  <Instagram size={24} />
               </a>
               <a href="https://x.com/FarallonAI" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <XIcon />
               </a>
            </div>
         </div>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-900 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
             <div className="flex items-center gap-4 opacity-50">
               <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
               <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
               <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
             </div>
             <h2 className="font-mono text-xl md:text-2xl tracking-[0.5em] text-cyan-900 uppercase">Farallon</h2>
             <a href="mailto:farallon@farallonai.com" className="font-mono text-xs text-gray-600 hover:text-cyan-400 transition-colors uppercase tracking-widest border border-gray-900 hover:border-cyan-900/50 px-3 py-1 rounded">
               COMM_LINK: farallon@farallonai.com
             </a>
          </div>

          <div className="flex justify-center gap-6 mb-8">
             <a href="https://youtube.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
               <Youtube size={20} />
             </a>
             <a href="https://tiktok.com/@farallonai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
               <TikTokIcon />
             </a>
             <a href="https://www.instagram.com/farallonai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
                <Instagram size={20} />
             </a>
             <a href="https://x.com/FarallonAI" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
                <XIcon />
             </a>
          </div>
          
          <div className="space-y-2">
            <p className="font-mono text-xs text-gray-700">
              {t.footer.copyright}
            </p>
            <p className="font-mono text-[10px] text-gray-800 uppercase tracking-widest">
              {t.footer.endTransmission}
            </p>
            <div className="pt-4">
               <Link to="/about-project" className="font-mono text-[10px] text-gray-800 hover:text-cyan-700 uppercase tracking-widest border-b border-transparent hover:border-cyan-900 transition-all">
                  {t.footer.creditsLink}
               </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
