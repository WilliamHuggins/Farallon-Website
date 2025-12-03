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
      <path d="M15.228 12.352c-.173-1.049.52-1.57.545-1.583-.008-.028-1.053-1.196-2.113-1.215-.898-.016-1.564.531-1.97.531-.408 0-1.037-.518-1.706-.504-1.764.027-3.044 1.83-3.87 3.023-1.666 2.408-.604 5.968.96 8.232.766 1.107 1.674 2.35 2.868 2.306 1.15-.043 1.583-.74 2.97-.74 1.388 0 1.777.74 2.986.716 1.233-.024 2.016-1.121 2.772-2.223.87-1.269 1.229-2.498 1.242-2.56-.027-.011-2.422-.929-2.443-3.692-.002-2.301 1.879-3.4 1.967-3.468-.108-.686-1.022-2.316-2.208-2.342zm-1.636-4.634c.895-1.082 1.5-2.587 1.335-4.085-1.291.052-2.853.86-3.778 1.943-.827.954-1.551 2.482-1.354 3.946 1.44.112 2.902-.722 3.797-1.804z" />
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
      <path d="M13.435 15.065c-2.457-1.011-5.787-.714-8.918.423-.46.166-.465.794-.006.968 4.295 1.626 9.471 1.341 12.871-1.12.28-.203.048-.621-.295-.499-1.173.418-2.495.539-3.652.228zm8.682-6.52c-.676-.566-1.391-.986-2.152-1.282l.024-.555c.018-.396-.135-.69-.459-.882-.323-.192-.71-.247-1.157-.165-.183.033-.357.085-.521.154-1.332-1.336-3.096-2.004-5.292-2.004-2.11 0-3.834.582-5.174 1.745-1.34 1.163-2.01 2.682-2.01 4.558 0 1.933.64 3.486 1.921 4.658 1.281 1.172 3.014 1.758 5.198 1.758 1.269 0 2.456-.21 3.56-.632l.21.916c.106.46.435.69 1.05.69.345 0 .685-.105 1.021-.315.335-.21.576-.51.721-.901l1.527-4.043c.271-.715.406-1.46.406-2.235 0-.585-.322-.986-.967-1.203-.021-.138-.417-.207-.905-.308zm-11.859 6.556c-1.345 0-2.42-.361-3.226-1.084-.805-.722-1.208-1.747-1.208-3.072 0-1.229.414-2.254 1.243-3.072.829-.818 1.98-1.227 3.45-1.227 1.575 0 2.921.465 4.037 1.396l-1.046 2.768c-.628.051-1.224.077-1.786.077-.964 0-1.725-.218-2.28-.654-.556-.436-.834-1.033-.834-1.791 0-.623.238-1.096.714-1.417.476-.322 1.082-.482 1.815-.482 1.026 0 1.93.284 2.711.852l-2.032 5.372c-.443.834-1.065 1.251-1.558 1.334z"/>
    )
  }
];

interface ListenSectionProps {
  className?: string;
}

const ListenSection: React.FC<ListenSectionProps> = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="flex items-center gap-3 mb-6 justify-center opacity-80">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <h4 className="font-mono text-sm tracking-[0.2em] text-cyan-400 uppercase">Input Stream: Direct Uplinks</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative flex items-center justify-between p-6
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

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 fill-current opacity-80 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  {platform.iconPath}
                </svg>
              </div>
              <span className="font-mono text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
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