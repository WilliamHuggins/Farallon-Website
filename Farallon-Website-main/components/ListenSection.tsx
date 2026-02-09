
import React from 'react';

const platforms = [
  { 
    name: 'SPOTIFY', 
    url: 'https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.439-1.38 9.9-1.02 13.559 1.2.42.24.6.841.36 1.261h-.18zm.12-3.36C15.54 8.46 9.06 8.22 5.28 9.36c-.6.18-1.26-.12-1.44-.72-.18-.6.12-1.26.72-1.44 4.38-1.32 11.64-.96 16.021 1.62.6.36.84 1.02.48 1.62-.36.6-1.02.84-1.62.48h-.36z" />
      </svg>
    )
  },
  { 
    name: 'APPLE MUSIC', 
    url: 'https://music.apple.com/us/artist/farallon/1858060937', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.127 3.675-.552 9.12 1.519 12.12 1.014 1.454 2.207 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.428-2.376-2.015-.157-3.96 1.053-4.96 1.053L12.152 6.896zM15.59 3.872c.81-1.091 1.39-2.582 1.234-4.045-1.169.052-2.571.78-3.363 1.753-.74.908-1.35 2.377-1.18 3.903 1.309.104 2.502-.61 3.309-1.61z" />
      </svg>
    )
  },
  { 
    name: 'YOUTUBE MUSIC', 
    url: 'https://music.youtube.com/channel/UCcmcBlwZK6AJy1XH3pvHFFA', 
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  { 
    name: 'AMAZON', 
    url: 'https://music.amazon.com/artists/B07QMVM288/farallon', 
    image: 'https://i.postimg.cc/0j1YMHKM/AM-App-Tile-White-Charcoal-Square.png'
  }
];

const ListenSection: React.FC = () => {
  return (
    <div className="w-full bg-[#f4f4ff] dark:bg-[#0a0a14] py-24 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#06b6d4]"></div>
            <h2 className="font-mono text-xs md:text-sm tracking-[0.5em] text-[#8e5cf7] uppercase font-bold">
              LISTEN TO MUSIC
            </h2>
          </div>
          <div className="text-center">
            <p className="text-[#64748b] dark:text-[#94a3b8] text-lg font-medium">Available on all major streaming services.</p>
            <p className="text-[#1e293b] dark:text-white text-2xl font-bold mt-1 tracking-tight">Subscribe and listen today.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center py-16 px-6 bg-white dark:bg-white/5 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(142,92,247,0.15)] hover:-translate-y-2 transition-all duration-500 border border-white/40 dark:border-white/5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 fill-[#1e293b] dark:fill-white mb-6 group-hover:scale-110 transition-transform">
                {platform.image ? (
                   <img src={platform.image} alt={platform.name} className="w-full h-full object-contain rounded-xl shadow-sm" />
                ) : (
                   platform.icon
                )}
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#64748b] dark:text-[#94a3b8] group-hover:text-[#8e5cf7] font-bold">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListenSection;
