
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Database, ArrowRight, Disc, Image, ShoppingBag, Instagram, Youtube, Mail } from 'lucide-react';
import { MINISTRY_OF_PLENTY_COVER_URL } from '../constants';
import ListenSection from '../components/ListenSection';
import SEO from '../components/SEO';

// Custom X (Twitter) Icon
const XIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// Custom TikTok Icon
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Home: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Farallon",
    "url": "https://farallonai.com",
    "logo": "https://i.postimg.cc/jdfN9Gxb/Album-cover.png",
    "image": "https://i.postimg.cc/jdfN9Gxb/Album-cover.png",
    "sameAs": [
      "https://x.com/farallonai",
      "https://www.instagram.com/farallonai",
      "https://www.youtube.com/@FarallonAI",
      "https://www.tiktok.com/@farallonai",
      "https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr"
    ],
    "description": "An immersive, cyber-noir experience for the generative AI music artist Farallon.",
    "genre": ["Electronic", "Ambient", "Glitch"]
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Ministry of Plenty - New Album Out Now"
        description="Official site of Farallon. Listen to the new album Ministry of Plenty. An immersive, cyber-noir experience exploring the intersection of human emotion and machine learning."
        canonical="/"
        jsonLd={structuredData}
      />
      
      {/* 1. CINEMATIC VIDEO HERO (YOUTUBE METHOD) */}
      <section 
        className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black"
        style={{ backgroundColor: '#000000', minHeight: '90vh' }}
      >
        
        {/* Social Media Bar - Top Center */}
        <div className="absolute top-0 left-0 right-0 z-40 flex justify-center items-center pt-8 pb-24 bg-gradient-to-b from-black/90 via-black/60 to-transparent pointer-events-none">
          <div className="pointer-events-auto flex gap-8">
            <a href="https://www.tiktok.com/@farallonai" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <TikTokIcon size={24} />
            </a>
            <a href="https://x.com/farallonai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <XIcon size={22} />
            </a>
            <a href="https://www.instagram.com/farallonai/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/@FarallonAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <Youtube size={26} />
            </a>
            <div className="w-px h-6 bg-white/40 drop-shadow-md"></div>
            <a href="mailto:Farallon@farallonai.com" aria-label="Email" className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Video Wrapper */}
        <div className="hero-video-wrapper z-0">
           <div className="crt-overlay"></div>
           {/* YouTube Embed with parameters for autoplay, loop, mute, and hidden controls */}
           <iframe 
              src="https://www.youtube.com/embed/ENkZ7kc3qW4?autoplay=1&mute=1&controls=0&loop=1&playlist=ENkZ7kc3qW4&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
              className="hero-video-iframe"
              allow="autoplay; encrypted-media"
              title="Farallon Hero Video"
           ></iframe>
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

        {/* Hero Overlay Content - Clean Title Hierarchy */}
        <div className="relative z-20 max-w-5xl w-full px-6 flex flex-col items-center text-center mt-12">
           <div className="animate-fade-in-up flex flex-col items-center">
              
              {/* Artist Name - Massive for Recognition */}
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold font-retro tracking-[0.25em] text-slate-100 uppercase mb-4 drop-shadow-[0_0_20px_rgba(147,197,253,0.55)]">
                 FARALLON
              </h2>
              
              {/* Album Name - Massive, Impactful */}
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-[0.03em] font-retro text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-fuchsia-300 mb-8 drop-shadow-[0_0_28px_rgba(56,189,248,0.45)]">
                MINISTRY OF PLENTY
              </h1>
              
              {/* Release Type - Badge Style */}
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md border border-indigo-500/50 mb-12 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                <span className="text-xs md:text-sm font-mono text-white tracking-widest uppercase font-bold">New Album Out Now</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <Link 
                  to="/discography"
                  className="w-full sm:w-auto h-14 px-8 bg-white text-black rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Play size={18} fill="currentColor" />
                  Listen Now
                </Link>
                <Link 
                  to="/bio"
                  className="w-full sm:w-auto h-14 px-8 bg-black/60 text-white border border-white/40 rounded-full font-bold hover:bg-black/80 transition-all backdrop-blur-md flex items-center justify-center gap-2 shadow-lg"
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
            <Link to="/bio" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
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
                  <h3 className="text-2xl font-bold font-display text-text-main-light dark:text-white mb-3">Photo Gallery</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-8">
                     View the photo collection from the archives.
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

      {/* 4. FEATURED RELEASE: MINISTRY OF PLENTY */}
      <section className="py-20 bg-white dark:bg-black/40 border-y border-slate-100 dark:border-white/5 transition-colors">
         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
            {/* Image Left */}
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-indigo-600 opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity"></div>
               <img 
                 src={MINISTRY_OF_PLENTY_COVER_URL} 
                 alt="Ministry of Plenty Album" 
                 className="relative z-10 w-full rounded-[3rem] shadow-ethereal border border-white/20 transform group-hover:scale-[1.02] transition-transform duration-700"
               />
            </div>
            {/* Content Right */}
            <div className="w-full md:w-1/2">
               <div className="flex items-center gap-2 mb-6">
                  <Disc className="text-teal-500" size={20} />
                  <span className="font-mono text-xs font-bold text-teal-500 uppercase tracking-[0.3em]">New Album // 2025</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-6 leading-[0.9]">
                  MINISTRY OF PLENTY
               </h2>
               <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-light leading-relaxed mb-10">
                  A dystopian synth journey through an 80&apos;s San Francisco under total surveillance, inspired by Orwell&apos;s 1984.
               </p>
               
               {/* Spotify Album Embed */}
               <div className="mb-10 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                 <iframe 
                   data-testid="embed-iframe" 
                   style={{borderRadius: '12px'}} 
                   src="https://open.spotify.com/embed/album/6Iq3SvlEQW9HcQUeU1eBq7?utm_source=generator&theme=0" 
                   width="100%" 
                   height="352" 
                   frameBorder="0" 
                   allowFullScreen 
                   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                   loading="lazy"
                   title="Ministry of Plenty Album Spotify Embed"
                 ></iframe>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Link to="/discography" className="h-12 px-8 bg-text-main-light dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                     Learn More
                  </Link>
               </div>
            </div>
         </div>
      </section>



    </div>
  );
};

export default Home;
