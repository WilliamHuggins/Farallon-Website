
import React from 'react';
import { Track } from '../types';

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <div className="group flex items-center justify-between py-2 border-b border-dashed border-slate-200 dark:border-white/5 last:border-0">
      <div className="flex items-center gap-6">
        <span className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark w-6">
          {String(track.id).padStart(2, '0')}
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-sm md:text-base text-text-main-light dark:text-white tracking-wide uppercase">
            {track.title}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark">{track.duration}</span>
      </div>
    </div>
  );
};

export default TrackItem;
