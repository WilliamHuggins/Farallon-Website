import React from 'react';
import { Track } from '../types';

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <div 
      className={`
        group flex items-center justify-between py-2 px-3 border-b border-gray-800/50 
        transition-all duration-300 hover:bg-white/5
      `}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <span className="font-mono text-xs text-gray-600 group-hover:text-cyan-400 transition-colors w-5 text-right">
          {String(track.id).padStart(2, '0')}
        </span>
        
        <span className="font-bold tracking-wider text-xs md:text-sm uppercase text-slate-400 group-hover:text-cyan-100 transition-colors">
          {track.title}
        </span>
      </div>

      <div className="flex items-center">
        <span className="font-mono text-[10px] md:text-xs text-gray-700 group-hover:text-orange-500/70 transition-colors">
          {track.duration}
        </span>
      </div>
    </div>
  );
};

export default TrackItem;