
import React from 'react';
import { Play } from 'lucide-react';
import { Track } from '../types';

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <div className="group flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="font-mono text-xs text-text-light group-hover:text-primary transition-colors w-6">
          {String(track.id).padStart(2, '0')}
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-sm md:text-base text-text-main group-hover:text-primary transition-colors tracking-wide uppercase">
            {track.title}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-text-light">{track.duration}</span>
        <button className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-text-light group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all">
          <Play size={14} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;
