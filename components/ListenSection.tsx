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
      <path d="M15.542 5.356c-1.35.314-2.428.665-3.328 1.082-.82.38-1.36.945-1.36 2.05v6.96c-.66-.376-1.576-.563-2.617-.563-2.69 0-4.872 1.815-4.872 4.053 0 2.238 2.182 4.053 4.872 4.053 2.69 0 4.873-1.815 4.873-4.053V9.673c0-.063.055-.084.095-.094.664-.17 2.071-.462 2.337-.487.35-.034.618-.337.618-.69V5.986c0-.41-.397-.714-.775-.63z" />
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
      <path d="M17.4 12.8c-.8.8-2 .9-2.9.1-.9-.8-.9-2.1-.1-2.9l.1-.1c.8-.8 2.1-.8 2.9 0l.1.1c.7.8.7 2 .1 2.8-.1 0-.1 0-.2 0zm-2.1-5.6c-.6-.7-1.7-.7-2.3 0-.6.6-.6 1.6 0 2.3.6.6 1.6.6 2.3 0 .6-.7.6-1.7 0-2.3zM21 9.4c-1.3-1.6-3.4-2.3-5.5-1.9-2.6.4-4.8 2.5-5.3 5.1-.4 2.1.6 4.3 2.5 5.4 2.5 1.5 5.8 1 8-1 .2-.2.5-.4.7-.6.3-.3.1-.9-.3-1l-3.3-1c-.3-.1-.6.2-.4.4 1 1.2 2.8 1.4 4.2.5.9-.6 1.4-1.7 1.2-2.8-.2-1.3-1.3-2.3-2.6-2.4-1.3-.1-2.5.8-2.8 2.1-.3 1.3.4 2.7 1.6 3.2.3.1.5.3.4.6l-.3 1.1c-.1.3-.5.4-.8.2-2.2-.9-3.4-3.5-2.7-5.8.7-2.3 3.1-3.7 5.4-3.1 1.8.5 3.3 2.1 3.4 4 .1 1.5-.8 2.8-2.2 3.2-.3.1-.7.2-1 .2-.3 0-.5-.2-.5-.5V9.4c0-.3.2-.5.5-.5h.6c.3 0 .5.2.5.5v5.3c0 .3.2.5.5.4 1.2-.5 2-1.7 1.9-3.1 0-1.3-.8-2.3-1.9-2.6z" />
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