
import React, { useEffect } from 'react';
import ProjectCredits from '../components/ProjectCredits';
import { translations } from '../translations';

const AboutProject: React.FC = () => {
  const t = translations['en'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center mb-12">
           <h1 className="text-3xl md:text-5xl font-bold uppercase text-white tracking-widest mb-4 text-center">
             {t.credits.title}
           </h1>
           <div className="w-16 h-1 bg-cyan-500"></div>
        </div>
        
        <ProjectCredits content={t.credits} />
      </div>
    </div>
  );
};

export default AboutProject;
