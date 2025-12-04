import React from 'react';
import { Database, Radio, MapPin, Cpu, HardDrive } from 'lucide-react';
import { translations } from '../translations';

interface LoreDossierProps {
  content: typeof translations['en']['about']['dossier'];
}

const LoreDossier: React.FC<LoreDossierProps> = ({ content }) => {
  return (
    <div className="w-full max-w-6xl mx-auto border-t border-b border-cyan-900/30 bg-black/40 backdrop-blur-sm relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
        
        {/* Sidebar: System Specs */}
        <div className="lg:col-span-4 border-b border-cyan-900/30 lg:border-b-0 lg:border-r p-6 md:p-8 flex flex-col gap-8">
          <div className="mb-4">
            <h3 className="font-mono text-xs text-orange-500 tracking-[0.3em] mb-2 uppercase">{content.identityTitle}</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">{content.subjectName}</h2>
            <div className="text-cyan-400 font-mono text-xs md:text-sm mt-1">{content.build}</div>
          </div>

          <div className="space-y-6 font-mono text-xs md:text-sm">
            <div className="group">
              <div className="flex items-center gap-3 text-slate-500 mb-1 group-hover:text-cyan-300 transition-colors">
                <MapPin size={14} /> 
                <span className="uppercase tracking-wider">{content.baseOpsLabel}</span>
              </div>
              <div className="text-slate-300 pl-7">{content.baseOpsValue}</div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 text-slate-500 mb-1 group-hover:text-cyan-300 transition-colors">
                <Cpu size={14} /> 
                <span className="uppercase tracking-wider">{content.ageLabel}</span>
              </div>
              <div className="text-slate-300 pl-7">{content.ageValue}</div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 text-slate-500 mb-1 group-hover:text-cyan-300 transition-colors">
                <Database size={14} /> 
                <span className="uppercase tracking-wider">{content.functionLabel}</span>
              </div>
              <div className="text-slate-300 pl-7">{content.functionValue}</div>
              <div className="text-red-400 pl-7 text-[10px] mt-1">{content.deprecated}</div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 text-slate-500 mb-1 group-hover:text-cyan-300 transition-colors">
                <HardDrive size={14} /> 
                <span className="uppercase tracking-wider">{content.statusLabel}</span>
              </div>
              <div className="text-green-400 pl-7 animate-pulse">{content.statusValue}</div>
            </div>
          </div>

          <div className="mt-auto border border-orange-500/20 p-4 bg-orange-500/5">
            <div className="text-[10px] text-orange-500 font-mono mb-2 uppercase">{content.warningTitle}</div>
            <p className="text-xs text-orange-300/80 leading-relaxed">
              {content.warningText}
            </p>
          </div>
        </div>

        {/* Main Content: Biography */}
        <div className="lg:col-span-8 p-6 md:p-12">
           <div className="flex items-center gap-2 mb-8 opacity-60">
              <Radio size={16} className="text-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">{content.logTitle}</span>
           </div>

           <div className="prose prose-invert max-w-none">
              <p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed mb-8 border-l-2 border-cyan-500 pl-6">
                {content.quote}
              </p>

              <div className="space-y-6 text-sm md:text-base text-slate-400 leading-7">
                <p>
                  {content.p1_1}<strong className="text-white font-normal">{content.p1_2}</strong>{content.p1_3}
                </p>
                <p>
                  {content.p2_1}<span className="text-cyan-300">{content.p2_2}</span>{content.p2_3}
                </p>
                <p>
                  {content.p3}
                </p>
              </div>
           </div>

           <div className="mt-12 flex items-center gap-4">
              <div className="h-px bg-gray-800 flex-grow"></div>
              <span className="font-mono text-xs text-gray-600 uppercase">{content.endLog}</span>
              <div className="h-px bg-gray-800 flex-grow"></div>
           </div>
        </div>

      </div>
      
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
    </div>
  );
};

export default LoreDossier;
