import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ExternalLink, Pause, Play, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { LATENCY_COVER_URL, LATENCY_SPOTIFY_URL, LATENCY_TRACKS } from '../constants';

const Home: React.FC = () => {
  const [atmospherePaused, setAtmospherePaused] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.latency-reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const albumData = {
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    name: 'Latency',
    image: LATENCY_COVER_URL,
    datePublished: '2026-09-08',
    numTracks: 16,
    albumProductionType: 'StudioAlbum',
    byArtist: { '@type': 'MusicGroup', name: 'Farallon' },
    recordLabel: { '@type': 'Organization', name: 'Farallon AI Project' },
    url: LATENCY_SPOTIFY_URL,
    track: LATENCY_TRACKS.map(([name, remix], index) => ({
      '@type': 'MusicRecording',
      position: index + 1,
      name: remix ? `${name} (${remix})` : name,
    })),
  };

  return (
    <div className={`latency-page ${atmospherePaused ? 'atmosphere-paused' : ''}`}>
      <SEO
        title="Farallon — Latency | Official Album"
        description="Listen to Latency by Farallon. Sixteen tracks bringing new songs, returning favorites, and reimagined remixes into the night."
        canonical="/"
        image={LATENCY_COVER_URL}
        type="music.album"
        jsonLd={albumData}
      />

      <section className="latency-hero" aria-labelledby="latency-title">
        <div className="latency-hero__backdrop" style={{ backgroundImage: `url("${LATENCY_COVER_URL}")` }} aria-hidden="true" />
        <div className="latency-fog latency-fog--one" aria-hidden="true" />
        <div className="latency-fog latency-fog--two" aria-hidden="true" />
        <button
          className="latency-motion-toggle"
          type="button"
          onClick={() => setAtmospherePaused((paused) => !paused)}
          aria-pressed={atmospherePaused}
        >
          {atmospherePaused ? <Play size={14} /> : <Pause size={14} />}
          {atmospherePaused ? 'Play atmosphere' : 'Pause atmosphere'}
        </button>

        <div className="latency-hero__grid">
          <div className="latency-hero__copy">
            <p className="latency-eyebrow latency-enter latency-enter--1">New album <span>·</span> Out now</p>
            <h1 id="latency-title" className="latency-title latency-enter latency-enter--2">LATENCY</h1>
            <p className="latency-campaign latency-enter latency-enter--3">The night moves faster than the feeling.</p>
            <p className="latency-support latency-enter latency-enter--4">New songs. Reimagined favorites. Sixteen tracks of desire, defiance, and late-night escape.</p>
            <div className="latency-actions latency-enter latency-enter--5">
              <a href={LATENCY_SPOTIFY_URL} target="_blank" rel="noreferrer" className="latency-button latency-button--primary">
                <Play size={17} fill="currentColor" /> Listen on Spotify
              </a>
              <a href="#listen" className="latency-button latency-button--ghost">
                Explore the album <ArrowDown size={17} />
              </a>
            </div>
            <dl className="latency-meta latency-enter latency-enter--5">
              <div><dt>Released</dt><dd>September 8, 2026</dd></div>
              <div><dt>Tracks</dt><dd>16</dd></div>
              <div><dt>Label</dt><dd>Farallon AI Project</dd></div>
            </dl>
          </div>

          <figure className="latency-cover-wrap latency-enter latency-enter--3">
            <div className="latency-cover-glow" aria-hidden="true" />
            <img
              src={LATENCY_COVER_URL}
              alt="Latency by Farallon album cover, showing Farallon walking beside the Bay Bridge at night as the crowd blurs around her"
              className="latency-cover"
              width="800"
              height="800"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <main>
        <section id="listen" className="latency-listen latency-reveal" aria-labelledby="listen-heading">
          <div className="latency-section-kicker"><span>01</span> Listen now</div>
          <div className="latency-listen__grid">
            <div className="latency-listen__intro">
              <p className="latency-status"><span /> Album · 2026</p>
              <h2 id="listen-heading">Sixteen tracks.<br /><em>One long night.</em></h2>
              <p>New songs meet returning material—substantially rebuilt, refracted, and recast for after dark.</p>
              <a href={LATENCY_SPOTIFY_URL} target="_blank" rel="noreferrer" className="latency-text-link">
                Open album on Spotify <ExternalLink size={15} />
              </a>
            </div>
            <div className="latency-player">
              <iframe
                data-testid="embed-iframe"
                title="Listen to Latency by Farallon on Spotify"
                src="https://open.spotify.com/embed/album/1Mnw1kxb01Ez3J4PAhSUu1?utm_source=generator&si=4d98700adc2b4911"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="latency-statement latency-reveal" aria-labelledby="statement-heading">
          <Sparkles size={18} aria-hidden="true" />
          <h2 id="statement-heading">Latency is the space between what happens and when we feel it.</h2>
          <p>Across sixteen tracks, Farallon brings new songs together with familiar material rebuilt for a different kind of night. <strong>Southbound Static</strong> opens the record in its original form and returns as the <strong>Missed Exit Remix</strong>.</p>
        </section>

        <section className="latency-tracks latency-reveal" aria-labelledby="tracks-heading">
          <div className="latency-tracks__header">
            <div>
              <div className="latency-section-kicker"><span>02</span> The record</div>
              <h2 id="tracks-heading">Track list</h2>
            </div>
            <p>LATENCY<br /><span>Farallon · 2026</span></p>
          </div>
          <ol className="latency-track-list">
            {LATENCY_TRACKS.map(([title, remix], index) => (
              <li key={`${title}-${index}`}>
                <span className="latency-track-number">{String(index + 1).padStart(2, '0')}</span>
                <div><span className="latency-track-title">{title}</span>{remix && <span className="latency-track-remix">{remix}</span>}</div>
              </li>
            ))}
          </ol>
        </section>

        <section className="latency-explore latency-reveal" aria-labelledby="explore-heading">
          <p className="latency-eyebrow">Beyond the record</p>
          <h2 id="explore-heading">Follow the signal.</h2>
          <p>Move through Farallon’s catalog, or step into the story of a voice shaped by San Francisco, human memory, and machine imagination.</p>
          <div>
            <Link to="/discography" className="latency-button latency-button--primary">Explore the discography <ArrowRight size={17} /></Link>
            <Link to="/bio" className="latency-button latency-button--ghost">Read the biography <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
