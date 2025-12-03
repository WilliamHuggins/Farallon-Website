import React from 'react';
import { Track } from '../types';

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <div 
      className={`
        group flex items-center justify-between p-4 border-b border-gray-800 
        transition-all duration-300 hover:bg-white/5
      `}
    >
      <div className="flex items-center gap-6">
        <span className="font-mono text-sm text-gray-600 group-hover:text-cyan-400 transition-colors">
          {String(track.id).padStart(2, '0')}
        </span>
        
        <div className="flex flex-col">
          <span className="font-bold tracking-wider text-sm md:text-base uppercase text-slate-400 group-hover:text-cyan-100 transition-colors">
            {track.title}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-xs md:text-sm text-gray-700 group-hover:text-orange-500/70 transition-colors">
          {track.duration}
        </span>
      </div>
    </div>
  );
};

export default TrackItem;