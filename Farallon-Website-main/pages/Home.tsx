
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Database, ArrowRight, Disc, Image, ShoppingBag, Instagram, Youtube, Mail } from 'lucide-react';
import ListenSection from '../components/ListenSection';
import { HEAVIER_WATER_COVER_URL, HEAVIER_WATER_SPOTIFY_EMBED_URL } from '../constants';
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
        title="Heavier Water Out Now - Farallon"
        description="Official site of Farallon. Listen to Heavier Water, the upgraded re-release of Heavy Water with refreshed tracks and new songs."
        canonical="/"
        jsonLd={structuredData}
      />
      
      {/* 1. HEAVIER WATER ALBUM HERO */}
      <section 
        className="heavier-water-scene relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.94), rgba(8, 47, 73, 0.58), rgba(2, 6, 23, 0.78)), url(${HEAVIER_WATER_COVER_URL})` }}
      >
        <div className="rain-layer rain-layer-fast" aria-hidden="true"></div>
        <div className="rain-layer rain-layer-slow" aria-hidden="true"></div>
        <div className="wave-layer" aria-hidden="true"></div>
        
        {/* Social Media Bar - Top Center */}
        <div className="absolute top-0 left-0 right-0 z-40 flex justify-center items-center pt-8 pb-24 bg-gradient-to-b from-black/80 via-slate-950/40 to-transparent pointer-events-none">
          <div className="pointer-events-auto flex gap-8">
            <a href="https://www.tiktok.com/@farallonai" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-sky-300 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"><TikTokIcon size={24} /></a>
            <a href="https://x.com/farallonai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-sky-300 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"><XIcon size={22} /></a>
            <a href="https://www.instagram.com/farallonai/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-sky-300 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"><Instagram size={24} /></a>
            <a href="https://www.youtube.com/@FarallonAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-sky-300 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"><Youtube size={26} /></a>
            <div className="w-px h-6 bg-white/40 drop-shadow-md"></div>
            <a href="mailto:Farallon@farallonai.com" aria-label="Email" className="text-white hover:text-sky-300 transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"><Mail size={24} /></a>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl w-full px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-sky-300/40 bg-sky-950/40 text-sky-100 font-mono text-xs font-bold uppercase tracking-[0.28em] shadow-[0_0_30px_rgba(56,189,248,0.25)]">New Album Out Now</span>
            <h2 className="mt-8 text-4xl sm:text-6xl md:text-8xl font-bold font-retro tracking-[0.2em] text-sky-100 uppercase drop-shadow-[0_0_24px_rgba(56,189,248,0.55)]">FARALLON</h2>
            <h1 className="mt-4 text-5xl sm:text-7xl md:text-9xl font-black leading-none font-retro uppercase text-white drop-shadow-[0_0_35px_rgba(14,165,233,0.7)]">Heavier Water</h1>
            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-sky-50/90 leading-relaxed">The storm has returned: an upgraded re-release of <em>Heavy Water</em> with reworked originals and new songs that expand Farallon&apos;s rain-soaked cyber-noir world.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/discography" className="h-14 px-8 bg-sky-300 text-slate-950 rounded-full font-black hover:scale-105 hover:bg-white transition-all shadow-[0_0_35px_rgba(125,211,252,0.55)] flex items-center justify-center gap-2"><Play size={18} fill="currentColor" /> Listen to Heavier Water</Link>
              <Link to="/bio" className="h-14 px-8 bg-black/45 text-white border border-sky-200/40 rounded-full font-bold hover:bg-sky-950/70 transition-all backdrop-blur-md flex items-center justify-center gap-2"><Database size={18} /> Artist Bio</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-sky-400/20 blur-3xl"></div>
            <img src={HEAVIER_WATER_COVER_URL} alt="Heavier Water album cover" className="relative w-full rounded-[2rem] border border-sky-200/30 shadow-[0_30px_90px_rgba(8,47,73,0.85)]" />
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

      {/* 4. FEATURED RELEASES */}
      <section className="relative py-20 overflow-hidden bg-sky-50 dark:bg-slate-950 border-y border-sky-100 dark:border-sky-400/10 transition-colors">
         <div className="wave-layer opacity-40 dark:opacity-70" aria-hidden="true"></div>
         <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <Disc className="text-sky-500" size={18} />
                  <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-300 uppercase tracking-[0.3em]">Featured Release // 2026</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-bold font-display text-text-main-light dark:text-white mb-4">Heavier Water</h2>
               <p className="text-text-muted-light dark:text-sky-100/80 text-lg max-w-3xl mx-auto">An expanded Heavy Water era: upgraded old tracks, new songs, and the full Spotify album embed.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center rounded-[2rem] p-6 bg-white/90 dark:bg-black/45 border border-sky-200 dark:border-sky-300/20 shadow-2xl backdrop-blur">
              <img src={HEAVIER_WATER_COVER_URL} alt="Heavier Water album cover" className="w-full rounded-[1.5rem] border border-sky-200 dark:border-white/10 shadow-xl" />
              <div>
                <h3 className="text-3xl font-bold font-display text-text-main-light dark:text-white mb-3">Listen now on Spotify</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6">Farallon&apos;s latest release leads the catalog while keeping the rest of her discography one click away.</p>
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                  <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src={HEAVIER_WATER_SPOTIFY_EMBED_URL} width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Heavier Water Album Spotify Embed"></iframe>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10"><Link to="/discography" className="h-12 px-8 bg-text-main-light dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg">Explore All Releases</Link></div>
         </div>
      </section>

      {/* 5. FARALLON BEST OF PLAYLIST */}
      <section className="py-20 bg-slate-50 dark:bg-black/60 border-b border-slate-100 dark:border-white/5 transition-colors">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
               <span className="font-mono text-xs font-bold text-cyan-500 uppercase tracking-[0.3em]">YouTube // Curated Selection</span>
               <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main-light dark:text-white mt-4 mb-4">
                  FARALLON BEST OF
               </h2>
               <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg max-w-3xl mx-auto">
                  A hand-picked YouTube selection featuring standout Farallon tracks and visuals.
               </p>
            </div>

            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-black aspect-video">
               <iframe
                  src="https://www.youtube.com/embed/videoseries?si=EwQ7lZY0tU4y8xp2&list=PLF7Iw4TEcvkun-2hdCBZOhHwJNB9OUlxn"
                  title="Farallon Best Of YouTube Playlist"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
               ></iframe>
            </div>
         </div>
      </section>



    </div>
  );
};

export default Home;
