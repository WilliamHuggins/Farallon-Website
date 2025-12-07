
import React from 'react';
import { User, Code, Music, PenTool, ShieldAlert, Cpu } from 'lucide-react';
import { translations } from '../translations';

interface ProjectCreditsProps {
  content: typeof translations['en']['credits'];
}

const ProjectCredits: React.FC<ProjectCreditsProps> = ({ content }) => {
  const tools = [
    "Suno",
    "Eleven Labs",
    "Nano Banana Pro",
    "Veo 3.1",
    "Google AI Studio",
    "Gemini 3 Pro"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto border border-cyan-900/30 bg-black/80 backdrop-blur-md relative p-6 md:p-10 my-16">
       
       {/* Section Header */}
       <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
          <div>
            <h3 className="font-mono text-sm text-orange-500 tracking-[0.3em] uppercase mb-1">{content.subtitle}</h3>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">{content.title}</h2>
          </div>
          <Cpu size={24} className="text-cyan-500/50" />
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Creator Column */}
          <div className="space-y-6">
             <div className="group">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                   <User size={16} />
                   <span className="font-mono text-xs tracking-widest uppercase">{content.creatorRole}</span>
                </div>
                <div className="text-white text-lg font-light pl-6 border-l border-cyan-500/20">
                   {content.creatorName}
                   <div className="text-xs text-gray-500 font-mono mt-1 uppercase">{content.location}</div>
                </div>
             </div>

             <div className="group">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                   <PenTool size={16} />
                   <span className="font-mono text-xs tracking-widest uppercase">{content.lyrics}</span>
                </div>
                <div className="text-slate-300 pl-6 border-l border-cyan-500/20">
                   {content.creatorName}
                </div>
             </div>

             <div className="group">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                   <Music size={16} />
                   <span className="font-mono text-xs tracking-widest uppercase">{content.distribution}</span>
                </div>
                <div className="text-slate-300 pl-6 border-l border-cyan-500/20">
                   DistroKid
                </div>
             </div>
          </div>

          {/* Tools Column */}
          <div>
             <div className="flex items-center gap-2 text-cyan-400 mb-4">
                <Code size={16} />
                <span className="font-mono text-xs tracking-widest uppercase">{content.toolsTitle}</span>
             </div>
             
             <div className="grid grid-cols-1 gap-2">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/5 border border-white/5 px-3 py-2 text-sm font-mono text-slate-300 hover:bg-white/10 hover:text-cyan-300 transition-colors">
                     <span>{tool}</span>
                     <span className="text-[10px] text-gray-600">v.SYS</span>
                  </div>
                ))}
             </div>
          </div>

       </div>

       {/* Legal Disclaimer */}
       <div className="mt-12 pt-6 border-t border-red-900/30">
          <div className="flex items-start gap-3">
             <ShieldAlert size={20} className="text-red-500/70 mt-1 flex-shrink-0" />
             <div className="space-y-2">
                <h4 className="font-mono text-xs text-red-500/70 uppercase tracking-widest">{content.legalTitle}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-mono text-justify">
                   {content.legalText}
                </p>
                <p className="text-[10px] text-gray-600 font-mono pt-2">
                   {content.copyright}
                </p>
             </div>
          </div>
       </div>

       {/* Corner Accents */}
       <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500"></div>
       <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500"></div>
       <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500"></div>
       <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500"></div>

    </div>
  );
};

export default ProjectCredits;
