
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Sun, Moon, Radio, Menu, X, Home as HomeIcon } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo / Home Link */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Radio className="text-primary size-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold font-display tracking-tight text-text-main-light dark:text-white">
              FARALLON
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${isActive('/') ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}
            >
              <HomeIcon size={14} /> Home
            </Link>
            <Link 
              to="/discography" 
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/discography') ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}
            >
              Music
            </Link>
            <Link 
              to="/bio" 
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/bio') ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}
            >
              Bio
            </Link>
            <Link 
              to="/videos" 
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/videos') ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}
            >
              Videos
            </Link>
            <Link 
              to="/visual-archives" 
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/visual-archives') ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/store" 
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/store') ? 'text-primary' : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'}`}
            >
              Store
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-text-main-light dark:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Link to="/about-project" className="hidden lg:flex h-10 px-6 items-center bg-text-main-light dark:bg-white text-white dark:text-black rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform">
              Credits
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text-main-light dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-black border-b border-slate-100 dark:border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-wider text-text-main-light dark:text-white">Home</Link>
            <Link to="/discography" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-wider text-text-main-light dark:text-white">Music</Link>
            <Link to="/bio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-wider text-text-main-light dark:text-white">Bio</Link>
            <Link to="/videos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-wider text-text-main-light dark:text-white">Videos</Link>
            <Link to="/visual-archives" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-wider text-text-main-light dark:text-white">Gallery</Link>
            <Link to="/store" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-wider text-text-main-light dark:text-white">Store</Link>
          </div>
        )}
      </nav>

      {/* Main Content Spacer for Fixed Header */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-black border-t border-slate-200 dark:border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="flex items-center gap-2 mb-2">
                <Radio className="text-primary size-5" />
                <span className="font-bold font-display tracking-tight text-lg text-text-main-light dark:text-white">FARALLON</span>
             </div>
             <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-mono tracking-widest uppercase mb-4">
               Electronic Music Project // SF
             </p>
             <a href="mailto:Farallon@farallonai.com" className="text-xs text-text-muted-light dark:text-text-muted-dark hover:text-primary font-mono transition-colors">
                Farallon@farallonai.com
             </a>
           </div>
           
           <div className="flex gap-8 text-sm font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">
              <Link to="/about-project" className="hover:text-primary transition-colors">Credits</Link>
              <Link to="/store" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="/" className="hover:text-primary transition-colors">Privacy</Link>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
