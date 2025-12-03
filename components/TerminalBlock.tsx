import React from 'react';

const TerminalBlock: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-20 p-6 border border-cyan-500/30 bg-black/80 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.1)] relative overflow-hidden">
      {/* Decorative Header */}
      <div className="flex items-center justify-between mb-4 border-b border-cyan-500/20 pb-2">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
         </div>
         <span className="font-mono text-xs text-cyan-500/50">SYS.ROOT.ADMIN</span>
      </div>

      <div className="font-mono space-y-4 text-sm md:text-base">
        <p className="text-cyan-400">
          <span className="text-gray-500 mr-2">{'>'}</span>
          System Status: <span className="text-green-400 animate-pulse">ONLINE</span>
        </p>
        <p className="text-cyan-400">
          <span className="text-gray-500 mr-2">{'>'}</span>
          Generative Soul. Synthetic Bone.
        </p>
        <p className="text-slate-300 leading-relaxed pl-6 border-l border-cyan-500/20">
          This project explores the intersection of human emotion and machine learning. 
          Farallon is not a person. It is a mirror.
        </p>
        <div className="mt-6 flex items-center gap-2 text-orange-500 text-xs">
             <span className="animate-spin">✣</span> 
             PROCESSING DATA STREAM...
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
    </div>
  );
};

export default TerminalBlock;