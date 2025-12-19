
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ShoppingBag, Database, ArrowRight, Disc, Image } from 'lucide-react';
import { ALBUM_COVER_URL } from '../constants';
import ListenSection from '../components/ListenSection';
import { Language } from '../types';

interface HomeProps {
  currentLang: Language;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. CINEMATIC VIDEO HERO (YOUTUBE METHOD) */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="hero-video-wrapper">
           <div className="crt-overlay"></div>
           {/* YouTube Embed with parameters for autoplay, loop, mute, and hidden controls */}
           <iframe 
              src="https://www.youtube.com/embed/ENkZ7kc3qW4?autoplay=1&mute=1&controls=0&loop=1&playlist=ENkZ7kc3qW4&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
              className="hero-video-iframe"
              allow="autoplay; encrypted-media"
              title="Farallon Hero Video"
           ></iframe>
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-center text-center">
           <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] font-mono text-cyan-200 tracking-[0.25em] uppercase font-bold">New Release</span>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-bold leading-none tracking-tighter font-display text-white mb-8 drop-shadow-2xl">
                FARALLON <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-fuchsia-300">THE DEBUT ALBUM</span>
              </h1>
              
              <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-light mb-12 drop-shadow-lg">
                Electronic landscapes from the edge of San Francisco.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://open.spotify.com"
                  target="_blank"
                  className="w-full sm:w-auto h-14 px-8 bg-white text-black rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Play size={18} fill="currentColor" />
                  Listen Now
                </a>
                <Link 
                  to="/about-project"
                  className="w-full sm:w-auto h-14 px-8 bg-black/50 text-white border border-white/30 rounded-full font-bold hover:bg-black/70 transition-all backdrop-blur-md flex items-center justify-center gap-2"
                >
                  <Database size={18} />
                  Artist Bio
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 2. MUSIC PLAYER / LISTENING BAR */}
      <ListenSection />

      {/* 3. SUBPAGE PORTALS (THE HUB) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
         <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow"></div>
            <span className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-[0.3em]">Explore</span>
            <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* ABOUT CARD */}
            <Link to="/about-project" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Database size={100} className="text-primary" />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                     <Database size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-main-light dark:text-white mb-3">About Farallon</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-8">
                     Read the biography and learn about the story behind the project.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                     Read More <ArrowRight size={14} />
                  </span>
               </div>
            </Link>

            {/* GALLERY CARD */}
            <Link to="/visual-archives" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image size={100} className="text-secondary" />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                     <Image size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-main-light dark:text-white mb-3">Photo & Video Gallery</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-8">
                     Watch music videos and view the photo collection.
                  </p>
                  <span className="inline-flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                     View Gallery <ArrowRight size={14} />
                  </span>
               </div>
            </Link>

            {/* STORE CARD */}
            <Link to="/store" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShoppingBag size={100} className="text-accent" />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                     <ShoppingBag size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-main-light dark:text-white mb-3">Official Store</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-8">
                     Shop official Farallon t-shirts, hoodies, and more.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                     Shop Now <ArrowRight size={14} />
                  </span>
               </div>
            </Link>

         </div>
      </section>

      {/* 4. FEATURED RELEASE */}
      <section className="py-20 bg-white dark:bg-black/40 border-y border-slate-100 dark:border-white/5 transition-colors">
         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity"></div>
               <img 
                 src={ALBUM_COVER_URL} 
                 alt="Heavy Water Album" 
                 className="relative z-10 w-full rounded-[3rem] shadow-ethereal border border-white/20 transform group-hover:scale-[1.02] transition-transform duration-700"
               />
            </div>
            <div className="w-full md:w-1/2">
               <div className="flex items-center gap-2 mb-6">
                  <Disc className="text-primary animate-spin-slow" size={20} />
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.3em]">Now Streaming</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-6 leading-[0.9]">
                  HEAVY WATER
               </h2>
               <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-light leading-relaxed mb-10">
                  The new 14-track album featuring "Sodium Glare" and "The Architect".
               </p>
               <div className="flex flex-wrap gap-4">
                  <Link to="/about-project" className="h-12 px-8 bg-text-main-light dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                     Learn More
                  </Link>
                  <a href="https://open.spotify.com" target="_blank" className="h-12 px-8 border border-slate-300 dark:border-white/20 text-text-main-light dark:text-white rounded-full font-bold flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                     Spotify
                  </a>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
