
import React from 'react';
import { AudioLines, FileAudio } from 'lucide-react';

interface VoiceLogProps {
  src: string;
  label: string;
}

const VoiceLog: React.FC<VoiceLogProps> = ({ src, label }) => {
  return (
    <div className="border border-cyan-500/30 bg-black/60 p-4 mb-8 backdrop-blur-md relative group overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/10 pb-2">
         <div className="flex items-center gap-2 text-cyan-500">
           <FileAudio size={14} />
           <span className="font-mono text-[10px] tracking-widest uppercase">{label}</span>
         </div>
         <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-75"></div>
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-150"></div>
         </div>
      </div>

      {/* Embedded Player - Styled with filters to look "Thematic" */}
      <div className="relative w-full h-[120px] overflow-hidden rounded bg-black border border-cyan-900/50">
        <iframe 
          src={src}
          className="w-full h-full absolute inset-0" 
          title="Voice Log"
          style={{
             filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2) sepia(0.5)', 
             opacity: 0.8
          }}
          loading="lazy"
        ></iframe>
        
        {/* Overlay to further tint and unify the look */}
        <div className="absolute inset-0 bg-cyan-900/20 pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="flex items-center justify-between mt-3 font-mono text-[10px] text-cyan-600/70">
         <span>SOURCE: SECURE_DRIVE // ENCRYPTED</span>
         <div className="flex items-center gap-2">
           <span>VISUALIZER: STANDBY</span>
           <AudioLines size={14} className="opacity-50" />
         </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-500"></div>
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-500"></div>
    </div>
  );
};

export default VoiceLog;
