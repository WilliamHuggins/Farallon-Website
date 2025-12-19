
import React from 'react';

const platforms = [
  { name: 'SPOTIFY', url: 'https://open.spotify.com', iconPath: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.439-1.38 9.9-1.02 13.559 1.2.42.24.6.841.36 1.261h-.18zm.12-3.36C15.54 8.46 9.06 8.22 5.28 9.36c-.6.18-1.26-.12-1.44-.72-.18-.6.12-1.26.72-1.44 4.38-1.32 11.64-.96 16.021 1.62.6.36.84 1.02.48 1.62-.36.6-1.02.84-1.62.48h-.36z" /> },
  { name: 'APPLE MUSIC', url: 'https://music.apple.com', iconPath: <path d="M13.073 2.506c.86-1.056 1.442-2.527 1.284-4.006-1.242.05-2.775.836-3.666 1.879-.798.924-1.493 2.399-1.307 3.793 1.378.109 2.784-.555 3.689-1.666zM17.062 19.648c-.97 1.425-2.004 2.946-3.586 2.996-1.581.033-2.115-.945-3.926-.945-1.829 0-2.413.921-3.927.979-1.564.05-2.735-1.589-3.738-3.045-2.059-2.995-3.621-8.502-1.516-12.158 1.045-1.823 2.915-2.975 4.942-3.005 1.549-.025 3.012 1.021 3.958 1.021.946 0 2.723-1.265 4.587-1.068.78.032 2.973.313 4.38 2.375-.113.07-2.618 1.531-2.583 4.55.035 3.625 3.172 4.836 3.206 4.846-.026.111-.502 1.728-1.795 3.454z" /> },
  { name: 'YOUTUBE MUSIC', url: 'https://music.youtube.com', iconPath: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
  { name: 'AMAZON', url: 'https://music.amazon.com', iconPath: <path d="M15.424 13.916c-.342-2.825-2.613-3.69-2.613-3.69-2.15-.644-2.282 1.075-2.282 1.075-.13 1.246.963 1.856 2.213 1.856 1.248 0 2.27-.473 2.682.76zM16.92 6.81c-1.002-.412-2.02-.538-3.01-.462-2.43.202-3.948 1.5-4.04 3.655-.094 2.19 1.802 3.84 4.142 3.84 1.323 0 2.268-.348 2.826-.66v.05c0 .59-.395.776-.795.776-.412 0-.853-.13-1.24-.31-.19-.09-.434-.055-.54.142l-.564 1.04c-.113.21-.06.467.14.61 1.53 1.06 4.67 1.09 5.86-1.57.44-1.002.39-4.215.39-4.52 0-.212-.19-.34-.378-.37l-2.796-.218zm-2.07 8.87c-3.13-.536-5.87-1.46-6.49-1.92-.35-.257-.023-.747.388-.705 2.56.26 5.56.27 8.35-.91.244-.105.513.045.564.305.132.68-1.54 2.87-2.812 3.23z" /> }
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
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  {platform.iconPath}
                </svg>
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
