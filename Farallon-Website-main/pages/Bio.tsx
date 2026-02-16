import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Headphones, Clapperboard, Mail, Sparkles } from 'lucide-react';
import { translations } from '../translations';
import ProjectCredits from '../components/ProjectCredits';
import SEO from '../components/SEO';
import { bioPageCopy } from './bioCopy';
import { GALLERY_IMAGES } from '../constants';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const token = match[0];

    if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(
        <strong key={`${match.index}-b`} className="text-white font-semibold">
          {token.slice(2, -2)}
        </strong>,
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      nodes.push(
        <em key={`${match.index}-i`} className="italic text-slate-300">
          {token.slice(1, -1)}
        </em>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

const renderExpandedCopy = (copy: string) => {
  const lines = copy.split('\n');
  const blocks: React.ReactNode[] = [];
  let majorSectionIndex = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (!line.trim()) {
      blocks.push(<div key={`sp-${i}`} className="h-2" />);
      continue;
    }

    if (line.trim() === '---') {
      blocks.push(
        <div key={`hr-${i}`} className="py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>,
      );
      continue;
    }

    if (line.startsWith('### ')) {
      const headingText = line.replace('### ', '');
      const id = slugify(headingText);
      blocks.push(
        <h3 id={id} key={`h3-${i}`} className="scroll-mt-28 text-2xl md:text-3xl text-cyan-300 font-semibold mt-10 mb-2">
          {renderInlineMarkdown(headingText)}
        </h3>,
      );
      continue;
    }

    if (line.startsWith('## ')) {
      majorSectionIndex += 1;
      const headingText = line.replace('## ', '');
      const id = slugify(headingText);
      blocks.push(
        <div key={`h2-wrap-${i}`} className="mt-14 mb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-300 mb-3">
            <Sparkles size={12} /> Section {majorSectionIndex.toString().padStart(2, '0')}
          </div>
          <h2 id={id} className="scroll-mt-28 text-3xl md:text-4xl text-white font-bold tracking-tight">
            {renderInlineMarkdown(headingText)}
          </h2>
        </div>,
      );
      continue;
    }

    if (line.startsWith('# ')) {
      blocks.push(
        <div key={`h1-${i}`} className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 mb-5">
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-cyan-300">{line.replace('# ', '')}</p>
        </div>,
      );
      continue;
    }

    if (line.startsWith('*"') && line.endsWith('"*')) {
      blocks.push(
        <blockquote key={`q-${i}`} className="my-6 rounded-2xl border-l-2 border-primary bg-primary/10 p-4 text-sm md:text-base text-slate-200 leading-7">
          {renderInlineMarkdown(line)}
        </blockquote>,
      );
      continue;
    }

    if (line.startsWith('- ')) {
      const items: React.ReactNode[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith('- ')) {
        items.push(<li key={`ul-${j}`}>{renderInlineMarkdown(lines[j].replace('- ', ''))}</li>);
        j += 1;
      }
      blocks.push(
        <ul key={`ul-${i}`} className="grid gap-2 pl-6 text-slate-300 text-sm md:text-base leading-7 marker:text-cyan-300">
          {items}
        </ul>,
      );
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
      blocks.push(
        <ol key={`ol-${i}`} className="grid gap-2 pl-6 text-slate-300 text-sm md:text-base leading-7 marker:font-semibold marker:text-cyan-300">
          {items}
        </ol>,
      );
      i = j - 1;
      continue;
    }

    blocks.push(
      <p key={`p-${i}`} className="text-slate-300/95 text-base md:text-lg leading-8 max-w-4xl">
        {renderInlineMarkdown(line)}
      </p>,
    );
  }

  return blocks;
};

const Bio: React.FC = () => {
  const t = translations.en;
  const portrait = GALLERY_IMAGES.find((img) => img.id === 5) || GALLERY_IMAGES[0];

  const navSections = useMemo(
    () =>
      bioPageCopy
        .split('\n')
        .filter((line) => line.startsWith('## '))
        .map((line) => line.replace('## ', '')),
    [],
  );

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
        image={portrait.url}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-cyan-900/30 via-black/40 to-fuchsia-900/20 p-7 md:p-10 mb-10 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.7),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(192,132,252,0.7),transparent_30%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary mb-5 border border-primary/30">
              <Radio size={12} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Biography</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl md:text-7xl font-bold font-display tracking-tighter text-white mb-4 leading-[0.95]">
                  GHOST IN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MACHINE</span>
                </h1>
                <p className="max-w-3xl text-base md:text-xl text-slate-200/90 font-light leading-relaxed mb-7">
                  A cinematic origin story for Farallon — from foghorn memory to digital resistance.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                  >
                    <Headphones size={14} /> Listen to Farallon
                  </a>
                  <Link
                    to="/visual-archives"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-colors"
                  >
                    <Clapperboard size={14} /> Watch the Visual Archives
                  </Link>
                  <a
                    href="mailto:Farallon@farallonai.com"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-orange-200 hover:bg-orange-500/20 transition-colors"
                  >
                    <Mail size={14} /> Contact
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <img src={portrait.url} alt={portrait.alt} className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <aside className="xl:col-span-3 xl:sticky xl:top-24 rounded-2xl border border-white/10 bg-black/30 p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 mb-4">Jump to section</h2>
            <nav className="space-y-2">
              {navSections.map((section) => (
                <a
                  key={section}
                  href={`#${slugify(section)}`}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {section}
                </a>
              ))}
            </nav>
          </aside>

          <main className="xl:col-span-9 rounded-[2rem] border border-cyan-900/30 bg-black/40 backdrop-blur-sm p-6 md:p-10">
            <div className="space-y-1">{renderExpandedCopy(bioPageCopy)}</div>
          </main>
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
