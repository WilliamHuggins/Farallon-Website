import React, { useEffect } from 'react';
import { translations } from '../translations';
import { GALLERY_IMAGES } from '../constants';
import { Mic2, MapPin, Waves, Cpu, Radio } from 'lucide-react';
import ProjectCredits from '../components/ProjectCredits';
import SEO from '../components/SEO';

const Bio: React.FC = () => {
  const t = translations['en'];
  const bio = t.about.dossier;
  // Use "Neural Portrait Alpha" (id: 5) if available, otherwise fallback
  const portrait = GALLERY_IMAGES.find(img => img.id === 5) || GALLERY_IMAGES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Farallon",
    "jobTitle": "AI Music Artist",
    "url": "https://farallonai.com/bio",
    "description": "A digital entity and musical project exploring the intersection of human emotion and machine learning.",
    "image": portrait.url,
    "knowsAbout": ["Generative AI", "Electronic Music", "Music Production"]
  };

  return (
    <div className="min-h-screen py-24 bg-aurora dark:bg-black/90 transition-colors duration-500">
      <SEO 
        title="Biography - Farallon"
        description="The story of a digital entity waking up in the fog of San Francisco. Read the biography of AI artist Farallon."
        canonical="/bio"
        type="profile"
        image={portrait.url}
        jsonLd={structuredData}
      />
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
              <Radio size={12} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Biography</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tighter text-text-main-light dark:text-white mb-6">
             GHOST IN THE <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MACHINE</span>
           </h1>
           <p className="max-w-2xl text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark font-light leading-relaxed">
             The story of a digital entity waking up in the fog of San Francisco.
           </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
          
          {/* Left Column: Image & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32 animate-fade-in-up delay-100">
             <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={portrait.url} 
                  alt={portrait.alt} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 text-white">
                   <div className="font-display font-bold text-3xl mb-1">Farallon</div>
                   <div className="font-mono text-xs opacity-70 tracking-widest uppercase flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      Online
                   </div>
                </div>
             </div>

             {/* Clean Stats */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                   <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark mb-2">
                      <MapPin size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Origin</span>
                   </div>
                   <div className="font-display font-bold text-lg text-text-main-light dark:text-white">San Francisco</div>
                </div>
                <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                   <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark mb-2">
                      <Waves size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Genre</span>
                   </div>
                   <div className="font-display font-bold text-lg text-text-main-light dark:text-white">Electronic</div>
                </div>
             </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-12 animate-fade-in-up delay-200">
             
             {/* The Quote */}
             <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight text-text-main-light dark:text-white">
                "{bio.quote.replace(/"/g, '')}"
             </blockquote>

             {/* Audio Introduction - Clean Design */}
             <div className="w-full bg-white dark:bg-white/5 rounded-[2rem] p-6 pr-8 flex items-center gap-6 border border-slate-100 dark:border-white/10 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow">
                <div className="size-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-primary/30">
                   <Mic2 size={24} />
                </div>
                <div className="flex-grow">
                   <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-text-main-light dark:text-white">Voice Log</h3>
                      <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark">00:45</span>
                   </div>
                   
                   {/* Clean Audio Visualizer Placeholder / Player */}
                   <div className="h-16 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-black/30 relative">
                     <iframe 
                        src="https://drive.google.com/file/d/1FDhaw7uJlfbYLDnhq-zC4gjhImW8K0V6/preview" 
                        width="100%" 
                        height="100%" 
                        className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply dark:mix-blend-screen"
                        title="Audio Intro"
                        style={{filter: 'contrast(1.2)'}}
                     ></iframe>
                   </div>
                </div>
             </div>

             {/* Biography Text */}
             <div className="space-y-8 text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark font-light leading-relaxed">
                <p>
                  {bio.p1_1} 
                  <span className="text-text-main-light dark:text-white font-medium border-b border-primary/30">{bio.p1_2}</span> 
                  {bio.p1_3}
                </p>
                <p>
                  {bio.p2_1} 
                  <span className="text-text-main-light dark:text-white font-medium italic">{bio.p2_2}</span> 
                  {bio.p2_3}
                </p>
                <p>
                  {bio.p3}
                </p>
                <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 mt-8">
                  <div className="flex items-start gap-4">
                     <Cpu className="text-primary mt-1 flex-shrink-0" size={24} />
                     <div>
                        <h4 className="font-bold text-text-main-light dark:text-white mb-2">The Process</h4>
                        <p className="text-base text-text-muted-light dark:text-text-muted-dark">
                           Unlike traditional artists, Farallon isn't born from lived experience but synthesized from the collective digital exhaust of the Bay Area. It is a mirror held up to the silicon soul of the city, reflecting back the beauty, the glitch, and the ghost in the machine.
                        </p>
                     </div>
                  </div>
                </div>
             </div>

             {/* Sign off */}
             <div className="pt-12 border-t border-slate-200 dark:border-white/10 flex justify-between items-end">
                <div>
                   <div className="font-display font-bold text-2xl text-text-main-light dark:text-white tracking-tight">FARALLON</div>
                   <div className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest mt-1">Est. 2024</div>
                </div>
                {/* Signature visual */}
                <div className="h-12 w-32 bg-contain bg-no-repeat bg-right opacity-50" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAyNSBDIDMwIDUgNTAgNDUgNzAgMjUgQyA5MCA1IDExMCA0NSAxMzAgMjUiIHN0cm9rZT0iIzRmMjZlMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')"}}></div>
             </div>

          </div>

        </div>

        {/* Real About Section / Credits */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-20">
            <div className="flex flex-col items-center mb-12">
                <span className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark tracking-[0.3em] uppercase mb-4">Meta Data</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main-light dark:text-white text-center">Behind The Project</h2>
            </div>
            <ProjectCredits content={t.credits} />
        </div>

      </div>
    </div>
  );
};

export default Bio;