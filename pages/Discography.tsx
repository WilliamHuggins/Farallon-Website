
import React, { useEffect } from 'react';
import { translations } from '../translations';
import { ALBUM_COVER_URL, OFFLINE_SESSION_COVER_URL, GHOSTWRITER_COVER_URL, LATEST_SINGLE_COVER_URL, SPANISH_ALBUM_COVER_URL, LIQUIDATION_COVER_URL } from '../constants';
import { Calendar, Mic2, AlertCircle, Music, Zap, Globe, Disc } from 'lucide-react';
import SEO from '../components/SEO';

const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/farallon/1858060937' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCcmcBlwZK6AJy1XH3pvHFFA' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/artists/B07QMVM288/farallon' },
];

const Discography: React.FC = () => {
  const t = translations['en'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": "Heavy Water",
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Farallon"
    },
    "datePublished": "2024-12-01",
    "image": ALBUM_COVER_URL,
    "numTracks": 14,
    "track": []
  };

  return (
    <div className="min-h-screen py-24 bg-aurora dark:bg-black/80 transition-colors">
      <SEO 
        title="Discography - Farallon"
        description="Catalog of Farallon releases including Liquidation, Heavy Water, Ghostwriter, and the Offline Sessions."
        canonical="/discography"
        type="music.album"
        image={LIQUIDATION_COVER_URL}
        jsonLd={structuredData}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-text-main-light dark:text-white">
              DISCOGRAPHY
            </h1>
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
          </div>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-xl font-light font-mono">
             Catalog of releases.
          </p>
        </div>

        <div className="space-y-32">
          
          {/* ITEM 0: LIQUIDATION (NEW POP-UP) */}
          <section className="relative group">
             {/* Background Glow */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/10 to-indigo-500/10 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
             
             <div className="relative glass-card bg-white dark:bg-black/50 rounded-[3rem] p-8 md:p-12 border border-indigo-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/30">
                      <Zap size={14} className="text-indigo-500" />
                      <span className="font-mono text-[10px] font-bold text-indigo-500 tracking-widest uppercase">Pop-Up Release</span>
                   </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                   <div className="w-full lg:w-5/12 max-w-md">
                      <img 
                        src={LIQUIDATION_COVER_URL} 
                        alt="Liquidation Album Cover" 
                        className="w-full rounded-[2rem] shadow-2xl border border-white/10 transition-all duration-700 hover:scale-[1.02]"
                      />
                   </div>
                   
                   <div className="flex-1 space-y-8 w-full">
                      <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">
                          {t.liquidation.title}
                        </h2>
                        <div className="flex items-center gap-3 text-indigo-400 font-mono text-sm tracking-widest uppercase">
                          <Calendar size={16} />
                          <span>{t.liquidation.date}</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                          {t.liquidation.description}
                        </p>
                        
                        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 mt-6">
                            <iframe 
                                data-testid="embed-iframe" 
                                style={{borderRadius: '12px'}} 
                                src="https://open.spotify.com/embed/album/6CUuabZdSWOnZCecjBkOcb?utm_source=generator" 
                                width="100%" 
                                height="352" 
                                frameBorder="0" 
                                allowFullScreen 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy"
                                title="Liquidation Album Preview"
                            ></iframe>
                        </div>
                      </div>

                      <div className="pt-4">
                         <a 
                           href="https://open.spotify.com/album/6CUuabZdSWOnZCecjBkOcb" 
                           target="_blank" 
                           rel="noreferrer"
                           className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 w-fit"
                         >
                            <Music size={18} />
                            Stream on Spotify
                         </a>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 1: GHOSTWRITER (UPCOMING) */}
          <section className="relative group">
             {/* Background Glow */}
             <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
             
             <div className="relative glass-card bg-white dark:bg-black/50 rounded-[3rem] p-8 md:p-12 border border-red-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/30">
                      <AlertCircle size={14} className="text-red-500" />
                      <span className="font-mono text-[10px] font-bold text-red-500 tracking-widest uppercase">Upcoming Release</span>
                   </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                   <div className="w-full lg:w-5/12 max-w-md">
                      <img 
                        src={GHOSTWRITER_COVER_URL} 
                        alt="Ghostwriter Album Cover" 
                        className="w-full rounded-[2rem] shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                      />
                   </div>
                   
                   <div className="flex-1 space-y-8 w-full">
                      <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">
                          {t.ghostwriter.title}
                        </h2>
                        <div className="flex items-center gap-3 text-red-400 font-mono text-sm tracking-widest uppercase">
                          <Calendar size={16} />
                          <span>January 9, 2025</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-text-main-light dark:text-white">New Studio Album</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                          {t.ghostwriter.description}
                        </p>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                          {t.ghostwriter.body}
                        </p>
                      </div>

                      <div className="pt-4">
                         <a 
                           href="https://distrokid.com/hyperfollow/farallon1/ghostwriter" 
                           target="_blank" 
                           rel="noreferrer"
                           className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-red-500/25 flex items-center gap-2 w-fit"
                         >
                            <Music size={18} />
                            Pre-Save Now
                         </a>
                         <p className="mt-4 text-xs text-text-muted-light dark:text-text-muted-dark font-mono max-w-sm">
                            Pre-save on Spotify or Apple Music to get the album instantly upon release.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 2: MIDNIGHT MERIDIAN (SINGLE) */}
          <section className="relative">
             <div className="flex flex-col lg:flex-row-reverse gap-12">
                
                {/* Visuals */}
                <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32 h-fit">
                   <div className="relative group">
                     <div className="absolute inset-0 bg-indigo-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <img 
                       src={LATEST_SINGLE_COVER_URL} 
                       alt="Midnight Meridian Cover" 
                       className="relative z-10 w-full rounded-[2.5rem] shadow-xl border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                     />
                   </div>
                   
                   <div className="mt-8 flex justify-center">
                      <a href="https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-bold tracking-widest uppercase text-xs transition-colors">
                        <Zap size={16} />
                        Stream Single
                      </a>
                   </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                   <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="font-mono text-xs font-bold text-indigo-500 tracking-[0.2em] uppercase">{t.latest.label}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main-light dark:text-white mb-4">
                        {t.latest.title}
                      </h2>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                        {t.latest.description}
                      </p>
                   </div>

                   <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                     <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/135UCYCrjdkg56Khz9NiAt?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                   </div>
                </div>
             </div>
          </section>


          {/* ITEM 3: HEAVY WATER (ALBUM) */}
          <section className="relative">
             <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Visuals */}
                <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32 h-fit">
                   <div className="relative group">
                     <div className="absolute inset-0 bg-cyan-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <img 
                       src={ALBUM_COVER_URL} 
                       alt="Heavy Water Album Cover" 
                       className="relative z-10 w-full rounded-[2.5rem] shadow-xl border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                     />
                   </div>
                   
                   <div className="mt-8 flex flex-col gap-3">
                      <span className="text-center font-mono text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mb-2">Listen on</span>
                      <div className="flex flex-wrap justify-center gap-3">
                        {platforms.map((platform) => (
                           <a 
                             key={platform.name}
                             href={platform.url} 
                             target="_blank" 
                             rel="noreferrer" 
                             className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-text-main-light dark:text-white"
                           >
                             {platform.name}
                           </a>
                        ))}
                      </div>
                   </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                   <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="font-mono text-xs font-bold text-cyan-500 tracking-[0.2em] uppercase">Studio Album</span>
                      </div>
                      <h2 className="text-5xl font-bold font-display text-text-main-light dark:text-white mb-4">
                        HEAVY WATER
                      </h2>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                        The debut studio album. A deep dive into the algorithmic ocean, processing the signals of a city that feels like a dream.
                      </p>
                   </div>

                   <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                     <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/5nQY0x78mVxlL2C5ORojKC?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 4: EDICIÓN EN ESPAÑOL */}
          <section className="relative">
             <div className="flex flex-col lg:flex-row-reverse gap-12">
                
                {/* Visuals */}
                <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32 h-fit">
                   <div className="relative group">
                     <div className="absolute inset-0 bg-orange-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <img 
                       src={SPANISH_ALBUM_COVER_URL} 
                       alt="Edición en Español Cover" 
                       className="relative z-10 w-full rounded-[2.5rem] shadow-xl border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                     />
                   </div>
                   
                   <div className="mt-8 flex justify-center">
                      <div className="flex items-center gap-2 text-orange-500 font-bold tracking-widest uppercase text-xs">
                        <Globe size={16} />
                        International Release
                      </div>
                   </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                   <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="font-mono text-xs font-bold text-orange-500 tracking-[0.2em] uppercase">Special Edition</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main-light dark:text-white mb-4">
                        EDICIÓN EN ESPAÑOL
                      </h2>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                        A special collection featuring Spanish language versions of select tracks from Heavy Water and Ghostwriter.
                      </p>
                   </div>

                   <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                     <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/6YOQAaZO0wnaIptMsM7egT?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 5: OFFLINE SESSION (LIVE) */}
          <section className="relative">
             <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Visuals */}
                <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32 h-fit">
                   <div className="relative group">
                     <div className="absolute inset-0 bg-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <img 
                       src={OFFLINE_SESSION_COVER_URL} 
                       alt="Offline Session Cover" 
                       className="relative z-10 w-full rounded-[2.5rem] shadow-xl border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                     />
                   </div>
                   <div className="mt-8 flex justify-center">
                     <span className="flex items-center gap-2 text-purple-500 font-bold tracking-widest uppercase text-xs">
                       <Mic2 size={16} />
                       Live Recording
                     </span>
                   </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                   <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="font-mono text-xs font-bold text-purple-500 tracking-[0.2em] uppercase">Live Session</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main-light dark:text-white mb-4">
                        {t.offline.title}
                      </h2>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                        {t.offline.description}
                      </p>
                   </div>

                   <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                     <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/album/10IbdsoIU8os0ENbd3WGas?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                   </div>
                </div>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Discography;
