import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Headphones, Clapperboard, Mail } from 'lucide-react';
import { translations } from '../translations';
import ProjectCredits from '../components/ProjectCredits';
import SEO from '../components/SEO';
import { bioPageCopy } from './bioCopy';

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const token = match[0];

    if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(<strong key={`${match.index}-b`} className="text-white font-semibold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*') && token.endsWith('*')) {
      nodes.push(<em key={`${match.index}-i`} className="italic text-slate-300">{token.slice(1, -1)}</em>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

const renderExpandedCopy = (copy: string) => {
  const lines = copy.split('\n');
  const blocks: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (!line.trim()) {
      blocks.push(<div key={`sp-${i}`} className="h-2" />);
      continue;
    }

    if (line.trim() === '---') {
      blocks.push(<hr key={`hr-${i}`} className="my-6 border-white/10" />);
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
      blocks.push(<ul key={`ul-${i}`} className="list-disc pl-6 space-y-1 text-slate-400 text-sm md:text-base leading-7">{items}</ul>);
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
      blocks.push(<ol key={`ol-${i}`} className="list-decimal pl-6 space-y-1 text-slate-400 text-sm md:text-base leading-7">{items}</ol>);
      i = j - 1;
      continue;
    }

    blocks.push(<p key={`p-${i}`} className="text-slate-400 text-sm md:text-base leading-7">{renderInlineMarkdown(line)}</p>);
  }

  return blocks;
};

const Bio: React.FC = () => {
  const t = translations.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24 bg-aurora dark:bg-black/90 transition-colors duration-500">
      <SEO
        title="Biography - Farallon"
        description="The story of a digital entity waking up in the fog of San Francisco. Read the biography of AI artist Farallon."
        canonical="/bio"
        type="profile"
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

          <div className="mb-2 flex flex-wrap justify-center gap-3">
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
        </div>

        <div className="w-full max-w-6xl mx-auto border-t border-b border-cyan-900/30 bg-black/40 backdrop-blur-sm p-6 md:p-10">
          <div className="space-y-1">{renderExpandedCopy(bioPageCopy)}</div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-20 mt-20">
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
