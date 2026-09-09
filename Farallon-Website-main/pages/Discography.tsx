

import React, { useEffect, useState } from 'react';
import { translations } from '../translations';
import { ALBUM_COVER_URL, OFFLINE_SESSION_COVER_URL, GHOSTWRITER_COVER_URL, LATEST_SINGLE_COVER_URL, SPANISH_ALBUM_COVER_URL, LIQUIDATION_COVER_URL, MINISTRY_OF_PLENTY_COVER_URL, MINISTRY_OF_PLENTY_TRACK_LIST, HEAVIER_WATER_COVER_URL, HEAVIER_WATER_SPOTIFY_EMBED_URL, LATENCY_COVER_URL, LATENCY_SPOTIFY_URL, LATENCY_TRACKS } from '../constants';
import { Calendar, Mic2, Music, Zap, Disc, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import TrackItem from '../components/TrackItem';


const Discography: React.FC = () => {
  const t = translations['en'];
  const [showTracksLatency, setShowTracksLatency] = useState(false);
  const [showTracksMinistry, setShowTracksMinistry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": "Latency",
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Farallon"
    },
    "datePublished": "2026-09-08",
    "image": LATENCY_COVER_URL,
    "numTracks": 16,
    "recordLabel": "Farallon AI Project",
    "url": LATENCY_SPOTIFY_URL,
    "track": LATENCY_TRACKS.map(([title, remix], index) => ({
      "@type": "MusicRecording",
      "position": index + 1,
      "name": remix ? `${title} (${remix})` : title
    }))
  };

  return (
    <div className="min-h-screen py-24 bg-aurora dark:bg-black/80 transition-colors">
      <SEO 
        title="Discography - Farallon"
        description="Explore Farallon’s discography, led by the new album Latency: sixteen tracks of new songs, returning material, and substantially reimagined remixes."
        canonical="/discography"
        type="music.album"
        image={LATENCY_COVER_URL}
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
             Latency leads the catalog, with sixteen tracks of new songs, returning material, and reimagined remixes.
          </p>
        </div>

        <div className="space-y-32">

          {/* LATENCY — FEATURED ALBUM */}
          <section className="relative group" aria-labelledby="latency-discography-title">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-300/20 via-slate-400/10 to-blue-950/30 rounded-[3.5rem] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-1000" aria-hidden="true"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-amber-200/30 bg-[#070a0d] p-6 md:p-12 text-[#f1ede4] shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-cover bg-center blur-2xl scale-110" style={{ backgroundImage: `url("${LATENCY_COVER_URL}")` }} aria-hidden="true"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#070a0d] via-[#070a0d]/95 to-[#0c1720]/80" aria-hidden="true"></div>
              <div className="relative z-10 flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
                <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0">
                  <img src={LATENCY_COVER_URL} alt="Latency by Farallon album cover" width="800" height="800" className="w-full shadow-[0_30px_80px_rgba(0,0,0,.65)]" />
                  <button
                    type="button"
                    onClick={() => setShowTracksLatency((shown) => !shown)}
                    aria-expanded={showTracksLatency}
                    aria-controls="latency-discography-tracks"
                    className="w-full min-h-12 mt-5 border border-amber-200/30 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-100 hover:bg-amber-200/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-100"
                  >
                    {showTracksLatency ? 'Hide track list' : 'View all 16 tracks'}
                    {showTracksLatency ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-5 text-amber-200">
                    <Disc size={15} />
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase">New album · Out now</span>
                  </div>
                  <h2 id="latency-discography-title" className="font-[Cormorant_Garamond] text-6xl md:text-8xl font-medium leading-none tracking-tighter">Latency</h2>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs uppercase tracking-[0.16em] text-amber-100/75">
                    <span>September 8, 2026</span><span>16 tracks</span><span>Farallon AI Project</span>
                  </div>
                  <p className="mt-7 text-base md:text-lg leading-relaxed text-slate-300">New songs, returning material, and substantially reimagined remixes—sixteen tracks of desire, defiance, and late-night escape.</p>
                  <div className="w-full mt-7 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    <iframe data-testid="embed-iframe" title="Listen to Latency by Farallon on Spotify" style={{ borderRadius: '12px', border: 0 }} src="https://open.spotify.com/embed/album/1Mnw1kxb01Ez3J4PAhSUu1?utm_source=generator&si=4d98700adc2b4911" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  <a href={LATENCY_SPOTIFY_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 mt-5 items-center gap-2 border-b border-amber-200 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    Open album on Spotify <Music size={16} />
                  </a>
                </div>
              </div>

              {showTracksLatency && (
                <ol id="latency-discography-tracks" className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 border-t border-white/15">
                  {LATENCY_TRACKS.map(([title, remix], index) => (
                    <li key={`${title}-${index}`} className="grid grid-cols-[2.5rem_1fr] gap-2 py-4 md:px-4 border-b border-white/15 text-left">
                      <span className="text-xs text-amber-200/60">{String(index + 1).padStart(2, '0')}</span>
                      <span><span className="block font-[Cormorant_Garamond] text-xl leading-none">{title}</span>{remix && <span className="block mt-1.5 text-[10px] uppercase tracking-[0.13em] text-amber-200/75">{remix}</span>}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </section>

          {/* ITEM 0: HEAVIER WATER */}
          <section className="relative group">
             <div className="absolute -inset-6 bg-gradient-to-tr from-sky-400/25 via-cyan-500/10 to-blue-950/25 rounded-[3.5rem] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="relative heavier-water-card glass-card bg-white/95 dark:bg-slate-950/80 rounded-[3rem] p-8 md:p-12 border border-sky-300/40 dark:border-sky-300/20 overflow-hidden shadow-2xl">
                <div className="rain-layer rain-layer-slow opacity-30" aria-hidden="true"></div>
                <div className="wave-layer opacity-40" aria-hidden="true"></div>
                <div className="absolute top-0 right-0 p-4 z-10">
                   <div className="flex items-center gap-2 px-4 py-2 bg-sky-500/10 rounded-full border border-sky-500/30">
                      <Disc size={14} className="text-sky-500" />
                      <span className="font-mono text-[10px] font-bold text-sky-600 dark:text-sky-300 tracking-widest uppercase">Studio Album</span>
                   </div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                   <div className="w-full lg:w-5/12 max-w-md">
                      <img src={HEAVIER_WATER_COVER_URL} alt="Heavier Water Album Cover" className="w-full rounded-[2rem] shadow-2xl border border-sky-200/50 dark:border-white/10 transition-all duration-700 hover:scale-[1.02]" />
                   </div>
                   <div className="flex-1 space-y-8 w-full">
                      <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">Heavier Water</h2>
                        <div className="flex items-center gap-3 text-sky-500 dark:text-sky-300 font-mono text-sm tracking-widest uppercase">
                          <Calendar size={16} />
                          <span>Released 2026</span>
                        </div>
                      </div>
                      <p className="text-text-muted-light dark:text-sky-100/80 leading-relaxed text-lg">
                        A professionally expanded re-release of <em>Heavy Water</em>, pairing upgraded versions of the debut-era tracks with new songs that deepen Farallon&apos;s storm-lit sound.
                      </p>
                      <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 mt-6">
                        <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src={HEAVIER_WATER_SPOTIFY_EMBED_URL} width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Heavier Water Album Spotify Embed"></iframe>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* ITEM 0: REVENGE/MERCY */}
          <section className="relative group">
             <div className="relative glass-card bg-white dark:bg-black/50 rounded-[3rem] p-8 md:p-12 border border-fuchsia-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/30">
                      <Zap size={14} className="text-fuchsia-500" />
                      <span className="font-mono text-[10px] font-bold text-fuchsia-500 tracking-widest uppercase">Studio Album</span>
                   </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">
                      Revenge/Mercy
                    </h2>
                    <div className="flex items-center gap-3 text-fuchsia-400 font-mono text-sm tracking-widest uppercase">
                      <Calendar size={16} />
                      <span>Released 2026</span>
                    </div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                    A studio album inspired by <em>The Count of Monte Cristo</em>.
                  </p>
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                    <iframe
                      data-testid="embed-iframe"
                      style={{borderRadius: '12px'}}
                      src="https://open.spotify.com/embed/album/5PT5QdEIp9nRUzFnkqTw03?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title="Revenge/Mercy Album Spotify Embed"
                    ></iframe>
                  </div>
                </div>
             </div>
          </section>

          {/* ITEM 1: LIVE (SORT OF) */}
          <section className="relative group">
             <div className="relative glass-card bg-white dark:bg-black/50 rounded-[3rem] p-8 md:p-12 border border-amber-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30">
                      <Mic2 size={14} className="text-amber-500" />
                      <span className="font-mono text-[10px] font-bold text-amber-500 tracking-widest uppercase">Live Album</span>
                   </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-5xl md:text-7xl font-bold font-display text-text-main-light dark:text-white mb-2 tracking-tighter">
                      Live (Sort of)
                    </h2>
                    <div className="flex items-center gap-3 text-amber-400 font-mono text-sm tracking-widest uppercase">
                      <Calendar size={16} />
                      <span>Released 2026</span>
                    </div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                    Live versions of Farallon&apos;s best tracks so far.
                  </p>
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10">
                    <iframe
                      data-testid="embed-iframe"
                      style={{borderRadius: '12px'}}
                      src="https://open.spotify.com/embed/album/4upnaUQyOJRpfw7rA0nkRA?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title="Live (Sort of) Album Spotify Embed"
                    ></iframe>
                  </div>
                </div>
             </div>
          </section>

          {/* ITEM 2: MINISTRY OF PLENTY (NEW ALBUM) */}
          <section className="relative group">
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
                        
                        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 mt-6">
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
                          <span>Released 2026</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                          {t.ghostwriter.description}
                        </p>
                        
                        <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 mt-6">
                             <iframe 
                                style={{borderRadius: '12px'}} 
                                src="https://open.spotify.com/embed/album/3bY2z5jfysH90LVzeVCCrT?utm_source=generator" 
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
                           href="https://open.spotify.com/album/3bY2z5jfysH90LVzeVCCrT" 
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
