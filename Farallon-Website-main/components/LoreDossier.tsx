
import React, { useState, useEffect } from 'react';
import { Database, Radio, MapPin, Cpu, HardDrive, Wind, Thermometer, Droplets, Activity } from 'lucide-react';
import { translations } from '../translations';
import VoiceLog from './VoiceLog';

interface LoreDossierProps {
  content: typeof translations['en']['about']['dossier'];
}

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(<strong key={`${match.index}-b`} className="text-white font-semibold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*') && token.endsWith('*')) {
      nodes.push(<em key={`${match.index}-i`} className="text-slate-200 italic">{token.slice(1, -1)}</em>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderExpandedCopy = (copy: string) => {
  const lines = copy.split('\n');
  const blocks: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.trim() === '') {
      blocks.push(<div key={`sp-${i}`} className="h-2" />);
      continue;
    }

    if (line.trim() === '---') {
      blocks.push(<hr key={`hr-${i}`} className="my-6 border-slate-700/60" />);
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(<h4 key={`h4-${i}`} className="text-lg md:text-xl text-cyan-300 font-semibold mt-6">{renderInlineMarkdown(line.replace('### ', ''))}</h4>);
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push(<h3 key={`h3-${i}`} className="text-xl md:text-2xl text-white font-semibold mt-10">{renderInlineMarkdown(line.replace('## ', ''))}</h3>);
      continue;
    }

    if (line.startsWith('# ')) {
      blocks.push(<h2 key={`h2-${i}`} className="text-2xl md:text-3xl text-white font-bold mt-2">{renderInlineMarkdown(line.replace('# ', ''))}</h2>);
      continue;
    }

    if (line.startsWith('- ')) {
      const items: React.ReactNode[] = [];
      let j = i;

      while (j < lines.length && lines[j].startsWith('- ')) {
        items.push(<li key={`ul-${j}`}>{renderInlineMarkdown(lines[j].replace('- ', ''))}</li>);
        j += 1;
      }

      blocks.push(<ul key={`ul-block-${i}`} className="list-disc pl-6 space-y-1 text-sm md:text-base text-slate-400 leading-7">{items}</ul>);
      i = j - 1;
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: React.ReactNode[] = [];
      let j = i;

      while (j < lines.length && /^\d+\.\s/.test(lines[j])) {
        items.push(<li key={`ol-${j}`}>{renderInlineMarkdown(lines[j].replace(/^\d+\.\s/, ''))}</li>);
        j += 1;
      }

      blocks.push(<ol key={`ol-block-${i}`} className="list-decimal pl-6 space-y-1 text-sm md:text-base text-slate-400 leading-7">{items}</ol>);
      i = j - 1;
      continue;
    }

    blocks.push(<p key={`p-${i}`} className="text-sm md:text-base text-slate-400 leading-7">{renderInlineMarkdown(line)}</p>);
  }

  return blocks;
};

interface WeatherData {
  temperature: number;
  windSpeed: number;
  humidity: number;
  isSynthetic?: boolean;
}

const LoreDossier: React.FC<LoreDossierProps> = ({ content }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Use the preview link for iframe embedding
  const AUDIO_URL = "https://drive.google.com/file/d/1FDhaw7uJlfbYLDnhq-zC4gjhImW8K0V6/preview";

  useEffect(() => {
    // Coordinates for Southeast Farallon Island: 37.6989° N, 123.0034° W
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=37.6989&longitude=-123.0034&current=temperature_2m,relative_humidity_2m,wind_speed_10m&wind_speed_unit=kn',
          { method: 'GET', mode: 'cors' }
        );
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        setWeather({
          temperature: data.current.temperature_2m,
          windSpeed: data.current.wind_speed_10m,
          humidity: data.current.relative_humidity_2m,
          isSynthetic: false
        });
      } catch (error) {
        console.warn("Telemetry Live Uplink Failed. Initiating Synthetic Reconstruction.", error);
        
        // Fallback: Generate realistic "cyber-noir" synthetic data for the Farallones
        // Farallon Islands typical weather: 10-15°C, windy (15-25kn), high humidity (70-90%)
        const now = new Date();
        const hour = now.getHours();
        
        // Temperature fluctuates slightly based on hour (colder at night)
        const baseTemp = 12;
        const tempVariation = Math.sin((hour - 6) * (Math.PI / 12)) * 2;
        
        setWeather({
          temperature: parseFloat((baseTemp + tempVariation).toFixed(1)),
          windSpeed: parseFloat((18 + Math.random() * 10).toFixed(1)),
          humidity: Math.floor(75 + Math.random() * 15),
          isSynthetic: true
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh every 15 minutes
    const interval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Live Telemetry Section (Weather Only) */}
          <div className="mt-4 border-t border-cyan-900/30 pt-6">
            <div className="flex items-center justify-between mb-4">
               <h4 className="font-mono text-[10px] text-cyan-500 tracking-[0.2em] uppercase flex items-center gap-2">
                 <Activity size={10} className={weather?.isSynthetic ? "text-orange-500/50" : "animate-pulse"} />
                 {weather?.isSynthetic ? "RECONSTRUCTED TELEMETRY" : "LIVE TELEMETRY"} // SECTOR 27
               </h4>
               <span className="text-[10px] text-gray-600 font-mono">FARALLON_ISL</span>
            </div>

            {/* Weather Data Grid - Expanded to fill space */}
            <div className="grid grid-cols-3 gap-2">
              {loading ? (
                <div className="col-span-3 font-mono text-xs text-cyan-500/50 animate-pulse">ESTABLISHING UPLINK...</div>
              ) : weather ? (
                <>
                  <div className="bg-black/40 p-2 border border-white/5 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-1 text-slate-500 mb-1">
                      <Wind size={10} />
                      <span className="text-[8px] uppercase">Wind</span>
                    </div>
                    <div className="text-white font-bold text-xs">{weather.windSpeed} kn</div>
                  </div>
                  <div className="bg-black/40 p-2 border border-white/5 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-1 text-slate-500 mb-1">
                      <Thermometer size={10} />
                      <span className="text-[8px] uppercase">Temp</span>
                    </div>
                    <div className="text-white font-bold text-xs">{weather.temperature}°C</div>
                  </div>
                  <div className="bg-black/40 p-2 border border-white/5 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-1 text-slate-500 mb-1">
                      <Droplets size={10} />
                      <span className="text-[8px] uppercase">Hum</span>
                    </div>
                    <div className="text-cyan-400 font-bold text-xs">{weather.humidity}%</div>
                  </div>
                </>
              ) : (
                <div className="col-span-3 font-mono text-xs text-red-500/50 uppercase tracking-tighter">Telemetery Link Failed</div>
              )}
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

           {/* Voice Log Integration */}
           <VoiceLog src={AUDIO_URL} label={content.voiceLogLabel || "AUDIO FRAGMENT // SELF_INTRO"} />

           <div className="prose prose-invert max-w-none">
              <p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed mb-8 border-l-2 border-cyan-500 pl-6">
                {content.quote}
              </p>

              {content.expandedCopy ? (
                <div className="space-y-1">
                  {renderExpandedCopy(content.expandedCopy)}
                </div>
              ) : (
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
              )}
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
