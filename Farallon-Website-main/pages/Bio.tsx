import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Headphones, Clapperboard, Mail } from 'lucide-react';
import { translations } from '../translations';
import LoreDossier from '../components/LoreDossier';
import ProjectCredits from '../components/ProjectCredits';
import SEO from '../components/SEO';

const Bio: React.FC = () => {
  const t = translations['en'];
  const bio = t.about.dossier;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Farallon',
    jobTitle: 'AI Music Artist',
    url: 'https://farallonai.com/bio',
    description:
      'A digital entity and musical project exploring the intersection of human emotion and machine learning.',
    knowsAbout: ['Generative AI', 'Electronic Music', 'Music Production'],
  };

  return (
    <div className="min-h-screen py-24 bg-aurora dark:bg-black/90 transition-colors duration-500">
      <SEO
        title="Biography - Farallon"
        description="The story of a digital entity waking up in the fog of San Francisco. Read the biography of AI artist Farallon."
        canonical="/bio"
        type="profile"
        jsonLd={structuredData}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <Radio size={12} />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Biography</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold font-display tracking-tighter text-text-main-light dark:text-white mb-6">
            GHOST IN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MACHINE</span>
          </h1>

          <p className="max-w-3xl text-lg text-text-muted-light dark:text-text-muted-dark font-light leading-relaxed">
            Full origin story, discography lore, process notes, and archives.
          </p>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          <a
            href="https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            <Headphones size={14} /> Listen to Farallon
          </a>
          <Link
            to="/visual-archives"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
          >
            <Clapperboard size={14} /> Watch the Visual Archives
          </Link>
          <a
            href="mailto:Farallon@farallonai.com"
            className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-orange-300 hover:bg-orange-500/20 transition-colors"
          >
            <Mail size={14} /> Contact
          </a>
        </div>

        <div className="mb-24">
          <LoreDossier content={bio} />
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-20">
          <div className="flex flex-col items-center mb-12">
            <span className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark tracking-[0.3em] uppercase mb-4">
              Meta Data
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-main-light dark:text-white text-center">
              Behind The Project
            </h2>
          </div>
          <ProjectCredits content={t.credits} />
        </div>
      </div>
    </div>
  );
};

export default Bio;
