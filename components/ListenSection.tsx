

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Platform {
  name: string;
  url: string;
  colorClass: string;
  iconPath: React.ReactNode;
}

const platforms: Platform[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr?si=AuWDDnkoSrWF-pepXg9f1Q',
    colorClass: 'group-hover:text-[#1DB954] group-hover:border-[#1DB954]',
    iconPath: (
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.439-1.38 9.9-1.02 13.559 1.2.42.24.6.841.36 1.261h-.18zm.12-3.36C15.54 8.46 9.06 8.22 5.28 9.36c-.6.18-1.26-.12-1.44-.72-.18-.6.12-1.26.72-1.44 4.38-1.32 11.64-.96 16.021 1.62.6.36.84 1.02.48 1.62-.36.6-1.02.84-1.62.48h-.36z" />
    )
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/farallon/1858060937',
    colorClass: 'group-hover:text-[#FA243C] group-hover:border-[#FA243C]',
    iconPath: (
      <path d="M13.073 2.506c.86-1.056 1.442-2.527 1.284-4.006-1.242.05-2.775.836-3.666 1.879-.798.924-1.493 2.399-1.307 3.793 1.378.109 2.784-.555 3.689-1.666zM17.062 19.648c-.97 1.425-2.004 2.946-3.586 2.996-1.581.033-2.115-.945-3.926-.945-1.829 0-2.413.921-3.927.979-1.564.05-2.735-1.589-3.738-3.045-2.059-2.995-3.621-8.502-1.516-12.158 1.045-1.823 2.915-2.975 4.942-3.005 1.549-.025 3.012 1.021 3.958 1.021.946 0 2.723-1.265 4.587-1.068.78.032 2.973.313 4.38 2.375-.113.07-2.618 1.531-2.583 4.55.035 3.625 3.172 4.836 3.206 4.846-.026.111-.502 1.728-1.795 3.454z" />
    )
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_mL3M7q2ONM-NihZvl4vu7AElGdX3ALNO0&si=fM_CAev6AbjzXqcT',
    colorClass: 'group-hover:text-[#FF0000] group-hover:border-[#FF0000]',
    iconPath: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    )
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/artists/B07QMVM288/farallon?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_p7noXNSK1GUiUQk3nXUuZM6yM',
    colorClass: 'group-hover:text-[#00A8E1] group-hover:border-[#00A8E1]',
    iconPath: (
      <path d="M15.424 13.916c-.342-2.825-2.613-3.69-2.613-3.69-2.15-.644-2.282 1.075-2.282 1.075-.13 1.246.963 1.856 2.213 1.856 1.248 0 2.27-.473 2.682.76zM16.92 6.81c-1.002-.412-2.02-.538-3.01-.462-2.43.202-3.948 1.5-4.04 3.655-.094 2.19 1.802 3.84 4.142 3.84 1.323 0 2.268-.348 2.826-.66v.05c0 .59-.395.776-.795.776-.412 0-.853-.13-1.24-.31-.19-.09-.434-.055-.54.142l-.564 1.04c-.113.21-.06.467.14.61 1.53 1.06 4.67 1.09 5.86-1.57.44-1.002.39-4.215.39-4.52 0-.212-.19-.34-.378-.37l-2.796-.218zm-2.07 8.87c-3.13-.536-5.87-1.46-6.49-1.92-.35-.257-.023-.747.388-.705 2.56.26 5.56.27 8.35-.91.244-.105.513.045.564.305.132.68-1.54 2.87-2.812 3.23z" />
    )
  }
];

interface ListenSectionProps {
  className?: string;
  title: string;
}

const ListenSection: React.FC<ListenSectionProps> = ({ className = "", title }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="flex items-center gap-3 mb-6 justify-center opacity-80">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <h4 className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase">{title}</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative flex items-center justify-between p-4 md:p-6
              bg-black/40 border border-gray-800 backdrop-blur-sm
              transition-all duration-300 hover:bg-black/60
              ${platform.colorClass}
            `}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700 group-hover:border-current transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-700 group-hover:border-current transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-700 group-hover:border-current transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 group-hover:border-current transition-colors"></div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 fill-current opacity-80 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  {platform.iconPath}
                </svg>
              </div>
              <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                {platform.name}
              </span>
            </div>

            <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListenSection;
