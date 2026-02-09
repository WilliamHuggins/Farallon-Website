

import React, { useEffect, useState } from 'react';
import { translations } from '../translations';
import { ALBUM_COVER_URL, OFFLINE_SESSION_COVER_URL, GHOSTWRITER_COVER_URL, LATEST_SINGLE_COVER_URL, SPANISH_ALBUM_COVER_URL, LIQUIDATION_COVER_URL, MINISTRY_OF_PLENTY_COVER_URL, MINISTRY_OF_PLENTY_TRACK_LIST } from '../constants';
import { Calendar, Mic2, AlertCircle, Music, Zap, Globe, Disc, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import TrackItem from '../components/TrackItem';

const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/farallon/1858060937' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCcmcBlwZK6AJy1XH3pvHFFA' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/artists/B07QMVM288/farallon' },
];

const Discography: React.FC = () => {
  const t = translations['en'];
  const [showTracksMinistry, setShowTracksMinistry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": "Ministry of Plenty",
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Farallon"
    },
    "datePublished": "2025-02-14",
    "image": MINISTRY_OF_PLENTY_COVER_URL,
    "numTracks": 21,
    "track": []
  };

  return (
    <div className="min-h-screen py-24 bg-aurora dark:bg-black/80 transition-colors">
      <SEO 
        title="Discography - Farallon"
        description="Catalog of Farallon releases including Ministry of Plenty, Ghostwriter, Liquidation, and Heavy Water."
        canonical="/discography"
        type="music.album"
        image={MINISTRY_OF_PLENTY_COVER_URL}
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

          {/* ITEM 0: MINISTRY OF PLENTY (NEW ALBUM) */}
          <section className="relative group">
             {/* Background Glow */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400/10 to-indigo-500/10 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
             
             <div className="relative glass-card bg-white dark:bg-black/50 rounded-[3rem] p-8 md:p-12 border border-teal-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/30">
                      <Disc size={14} className="text-teal-500" />
                      <span className="font-mono text-[10px] font-bold text-teal-500 tracking-widest uppercase">New Album</span>
                   </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                   <div className="w-full lg:w-5/12 max-w-md">
                      <img 
                        src={MINISTRY_OF_PLENTY_COVER_URL} 
                        alt="Ministry of Plenty Album Cover" 
                        className="w-full rounded-[2rem] shadow-2xl border border-white/10 transition-all duration-700 hover:scale-[1.02]"
                      />
                      
                      <button 
                        onClick={() => setShowTracksMinistry(!showTracksMinistry)}
                        className="w-full mt-6 py-3 border border-teal-500/30 rounded-xl flex items-center justify-center gap-2 text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 hover:bg-teal-500/5 transition-colors"
                      >
                         {showTracksMinistry ? 'Hide Tracklist' : 'View Tracklist'}
                         {showTracksMinistry ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                   </div>
                   
                   <div className="flex-1 space-y-8 w-full">
                      <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">
                          {t.ministryOfPlenty.title}
                        </h2>
                        <div className="flex items-center gap-3 text-teal-400 font-mono text-sm tracking-widest uppercase">
                          <Calendar size={16} />
                          <span>{t.ministryOfPlenty.date}</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                          {t.ministryOfPlenty.description}
                        </p>
                        
                        {/* Since it's new, maybe no embed yet, or use generic placeholder until embed is ready. Assuming user wants to promote it "out now", providing generic action buttons. */}
                        <div className="flex flex-wrap gap-4 pt-4">
                           <a 
                             href="https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr" 
                             target="_blank" 
                             rel="noreferrer"
                             className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-teal-500/25 flex items-center gap-2 w-fit"
                           >
                              <Music size={18} />
                              Stream on Spotify
                           </a>
                           <a 
                             href="https://music.apple.com/us/artist/farallon/1858060937" 
                             target="_blank" 
                             rel="noreferrer"
                             className="px-8 py-4 bg-white dark:bg-white/10 text-black dark:text-white border border-slate-200 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/20 rounded-full font-bold transition-all flex items-center gap-2 w-fit"
                           >
                              <Music size={18} />
                              Apple Music
                           </a>
                        </div>
                      </div>

                      {/* Tracklist Expandable */}
                      {showTracksMinistry && (
                         <div className="animate-fade-in-down mt-8 pt-8 border-t border-dashed border-slate-200 dark:border-white/10">
                            {MINISTRY_OF_PLENTY_TRACK_LIST.map((track) => (
                               <TrackItem key={track.id} track={track} />
                            ))}
                         </div>
                      )}
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 1: GHOSTWRITER (NOW RELEASED) */}
          <section className="relative group">
             {/* Background Glow */}
             <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
             
             <div className="relative glass-card bg-white dark:bg-black/50 rounded-[3rem] p-8 md:p-12 border border-red-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/30">
                      <Zap size={14} className="text-red-500" />
                      <span className="font-mono text-[10px] font-bold text-red-500 tracking-widest uppercase">Studio Album</span>
                   </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                   <div className="w-full lg:w-5/12 max-w-md">
                      <img 
                        src={GHOSTWRITER_COVER_URL} 
                        alt="Ghostwriter Album Cover" 
                        className="w-full rounded-[2rem] shadow-2xl border border-white/10 transition-all duration-700 hover:scale-[1.02]"
                      />
                   </div>
                   
                   <div className="flex-1 space-y-8 w-full">
                      <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">
                          {t.ghostwriter.title}
                        </h2>
                        <div className="flex items-center gap-3 text-red-400 font-mono text-sm tracking-widest uppercase">
                          <Calendar size={16} />
                          <span>Released 2025</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                          {t.ghostwriter.description}
                        </p>
                        
                        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 mt-6">
                             <iframe 
                                style={{borderRadius: '12px'}} 
                                src="https://open.spotify.com/embed/album/135UCYCrjdkg56Khz9NiAt?utm_source=generator" 
                                width="100%" 
                                height="352" 
                                frameBorder="0" 
                                allowFullScreen 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy"
                             ></iframe>
                        </div>
                      </div>

                      <div className="pt-4">
                         <a 
                           href="https://open.spotify.com/album/135UCYCrjdkg56Khz9NiAt" 
                           target="_blank" 
                           rel="noreferrer"
                           className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-red-500/25 flex items-center gap-2 w-fit"
                         >
                            <Music size={18} />
                            Stream Now
                         </a>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 2: LIQUIDATION (POP-UP) */}
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
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 3: MIDNIGHT MERIDIAN (SINGLE) */}
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


          {/* ITEM 4: HEAVY WATER (ALBUM) */}
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

          {/* ITEM 5: EDICIÓN EN ESPAÑOL */}
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

          {/* ITEM 6: OFFLINE SESSION (LIVE) */}
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
