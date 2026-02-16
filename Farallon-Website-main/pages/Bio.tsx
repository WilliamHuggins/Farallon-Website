import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Headphones, Clapperboard, Mail, ChevronDown, ChevronUp, BookOpenText } from 'lucide-react';
import { translations } from '../translations';
import ProjectCredits from '../components/ProjectCredits';
import SEO from '../components/SEO';
import { bioPageCopy } from './bioCopy';
import { GALLERY_IMAGES } from '../constants';

interface MajorSection {
  title: string;
  lines: string[];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const parseMajorSections = (copy: string): MajorSection[] => {
  const lines = copy.split('\n');
  const sections: MajorSection[] = [];
  let current: MajorSection | null = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current) sections.push(current);
      current = { title: line.replace('## ', '').trim(), lines: [] };
      continue;
    }

    if (!current) continue;
    current.lines.push(line);
  }

  if (current) sections.push(current);
  return sections;
};

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
        <strong key={`${match.index}-b`} className="font-semibold text-slate-950 dark:text-slate-100">
          {token.slice(2, -2)}
        </strong>,
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      nodes.push(
        <em key={`${match.index}-i`} className="italic text-slate-700 dark:text-slate-300">
          {token.slice(1, -1)}
        </em>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
};

const renderSectionLines = (lines: string[], sectionKey: string) => {
  const blocks: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (!line.trim()) {
      blocks.push(<div key={`${sectionKey}-sp-${i}`} className="h-2" />);
      continue;
    }

    if (line.trim() === '---') {
      blocks.push(
        <div key={`${sectionKey}-hr-${i}`} className="py-3">
          <div className="h-px bg-slate-200 dark:bg-slate-700" />
        </div>,
      );
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(
        <h3 key={`${sectionKey}-h3-${i}`} className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-7 mb-3">
          {renderInlineMarkdown(line.replace('### ', ''))}
        </h3>,
      );
      continue;
    }

    if (line.startsWith('- ')) {
      const items: React.ReactNode[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith('- ')) {
        items.push(<li key={`${sectionKey}-ul-${j}`}>{renderInlineMarkdown(lines[j].replace('- ', ''))}</li>);
        j += 1;
      }

      blocks.push(
        <ul key={`${sectionKey}-ulblock-${i}`} className="list-disc pl-6 grid gap-2 text-slate-700 dark:text-slate-300 text-base leading-7 marker:text-cyan-500">
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
        items.push(<li key={`${sectionKey}-ol-${j}`}>{renderInlineMarkdown(lines[j].replace(/^\d+\.\s/, ''))}</li>);
        j += 1;
      }

      blocks.push(
        <ol key={`${sectionKey}-olblock-${i}`} className="list-decimal pl-6 grid gap-2 text-slate-700 dark:text-slate-300 text-base leading-7 marker:font-semibold marker:text-cyan-600">
          {items}
        </ol>,
      );
      i = j - 1;
      continue;
    }

    if (line.startsWith('*"') && line.endsWith('"*')) {
      blocks.push(
        <blockquote
          key={`${sectionKey}-quote-${i}`}
          className="my-4 rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-4 text-lg leading-8 text-slate-800 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-slate-100"
        >
          {renderInlineMarkdown(line)}
        </blockquote>,
      );
      continue;
    }

    if (line.startsWith('# ')) {
      continue;
    }

    blocks.push(
      <p key={`${sectionKey}-p-${i}`} className="text-base md:text-lg leading-8 text-slate-700 dark:text-slate-300">
        {renderInlineMarkdown(line)}
      </p>,
    );
  }

  return blocks;
};

const Bio: React.FC = () => {
  const t = translations.en;
  const portrait = GALLERY_IMAGES.find((img) => img.id === 5) || GALLERY_IMAGES[0];

  const sections = useMemo(() => parseMajorSections(bioPageCopy), []);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const initial: Record<string, boolean> = {};
    sections.forEach((section, index) => {
      initial[section.title] = index < 3;
    });
    setExpanded(initial);
  }, [sections]);

  return (
    <div className="min-h-screen py-20 bg-slate-100 dark:bg-slate-950 transition-colors duration-500">
      <SEO
        title="Biography - Farallon"
        description="The story of a digital entity waking up in the fog of San Francisco. Read the biography of AI artist Farallon."
        canonical="/bio"
        type="profile"
        image={portrait.url}
      />

      <div className="max-w-7xl mx-auto px-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm dark:border-slate-800 dark:bg-slate-900 mb-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-cyan-700 mb-5 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-300">
                <Radio size={12} />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Biography</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold font-display tracking-tight text-slate-950 dark:text-white mb-4 leading-[0.95]">
                GHOST IN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">MACHINE</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-7 max-w-3xl">
                Crafted as an editorial narrative: clear hierarchy, readable contrast, and expandable chapters.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/artist/2klqZ4U3Rpi099apjZabkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-50 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-cyan-700 hover:bg-cyan-100 transition-colors dark:border-cyan-400/40 dark:bg-cyan-500/10 dark:text-cyan-200"
                >
                  <Headphones size={14} /> Listen to Farallon
                </a>
                <Link
                  to="/visual-archives"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-200 transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                >
                  <Clapperboard size={14} /> Watch the Visual Archives
                </Link>
                <a
                  href="mailto:Farallon@farallonai.com"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-orange-700 hover:bg-orange-100 transition-colors dark:border-orange-400/40 dark:bg-orange-500/10 dark:text-orange-200"
                >
                  <Mail size={14} /> Contact
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <img src={portrait.url} alt={portrait.alt} className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 mb-6">
          <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
            <BookOpenText size={15} />
            <h2 className="font-mono text-xs uppercase tracking-[0.25em]">Chapter Navigation</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.title}
                href={`#${slugify(section.title)}`}
                onClick={() => setExpanded((prev) => ({ ...prev, [section.title]: true }))}
                className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {section.title}
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          {sections.map((section, index) => {
            const isOpen = !!expanded[section.title];
            return (
              <article key={section.title} id={slugify(section.title)} className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => ({ ...prev, [section.title]: !prev[section.title] }))}
                  className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300 mb-2">
                      Chapter {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">{section.title}</h2>
                  </div>
                  <span className="rounded-full border border-slate-300 dark:border-slate-700 size-9 flex items-center justify-center text-slate-700 dark:text-slate-200">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {isOpen ? <div className="px-6 md:px-8 pb-8 pt-1 space-y-3">{renderSectionLines(section.lines, section.title)}</div> : null}
              </article>
            );
          })}
        </div>

        <div className="border-t border-slate-300 dark:border-slate-800 pt-20 mt-20">
          <div className="flex flex-col items-center mb-12">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase mb-4">Meta Data</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-950 dark:text-white text-center">Behind The Project</h2>
          </div>
          <ProjectCredits content={t.credits} />
        </div>
      </div>
    </div>
  );
};

export default Bio;
