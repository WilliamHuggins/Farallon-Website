import React, { useEffect } from 'react';
import { Play, Radio } from 'lucide-react';
import SEO from '../components/SEO';

type VideoItem = {
  id: string;
  title: string;
  src: string;
  description: string;
  label: string;
};

const animeFeatures: VideoItem[] = [
  {
    id: 'vid_get_down',
    title: 'GET DOWN // OFFICIAL VIDEO',
    src: 'https://www.youtube.com/embed/BI-wn6cWm5E?si=RijD0JpuOtBW9Ile',
    description: "Official visualizer for the single 'Get Down'. Kinetic typography and signal distortion.",
    label: 'Anime Feature'
  },
  {
    id: 'vid_live_wire',
    title: 'LIVE WIRE // OFFICIAL VIDEO',
    src: 'https://www.youtube.com/embed/M5P1mdq64U4?si=fWI2ZvCASghcDLAK',
    description: "Visual transmission for 'Live Wire' from the Ghostwriter album. High-voltage processing.",
    label: 'Anime Feature'
  },
  {
    id: 'vid_liquidation',
    title: 'LIQUIDATION // OFFICIAL VIDEO',
    src: 'https://www.youtube.com/embed/YGX1py0VQQ8?si=q41_hXaA5P4Ezvhj',
    description: 'Anime feature visual for Liquidation.',
    label: 'Anime Feature'
  },
  {
    id: 'vid_plus_one',
    title: 'PLUS ONE // OFFICIAL VIDEO',
    src: 'https://www.youtube.com/embed/ami5ykrbLoA?si=8VtGB7Oi8FFw-2i3',
    description: 'Anime feature visual for Plus One.',
    label: 'Anime Feature'
  },
  {
    id: 'vid_thousand_tiny_yeses',
    title: 'A THOUSAND TINY YESES // SHORT',
    src: 'https://www.youtube.com/embed/YIIVP8GMVCo?feature=share',
    description: 'Anime feature short for A Thousand Tiny Yeses.',
    label: 'Anime Feature'
  },
  {
    id: 'vid_parallel_checkin',
    title: 'PARALLEL CHECKIN // OFFICIAL VIDEO',
    src: 'https://www.youtube.com/embed/w0nziSSQLrs',
    description: 'Anime feature visual for Parallel Checkin.',
    label: 'Anime Feature'
  }
];

const nonAnimeVideos: VideoItem[] = [
  {
    id: 'vid_heavy_water_official',
    title: 'HEAVY WATER // OFFICIAL VIDEO',
    src: 'https://www.youtube.com/embed/am0Vvq9v16I?si=4uQe7ZWkJHO0twRB',
    description: 'Official non-anime human video for Heavy Water.',
    label: 'Non-Anime / Human Video'
  },
  {
    id: 'vid_sunday_morning_coming_down_cover',
    title: 'SUNDAY MORNING COMING DOWN // COVER',
    src: 'https://www.youtube.com/embed/W5Oxs7v9S-8',
    description: "Cover song video for 'Sunday Morning Coming Down.' Feed the Mountain's original version plays immediately after her version.",
    label: 'Non-Anime / Human Video'
  }
];

const publicDomainProjects: VideoItem[] = [
  {
    id: 'vid_metropolis',
    title: 'METROPOLIS // FARALLON SOUNDTRACK',
    src: 'https://www.youtube.com/embed/gLt3hhF8_As?si=UgkN3QBNTCx8Dg_o',
    description: 'Public domain silent film rescored by Farallon.',
    label: 'Public Domain Project'
  },
  {
    id: 'vid_caligari',
    title: 'THE CABINET OF DR. CALIGARI // FARALLON SOUNDTRACK',
    src: 'https://www.youtube.com/embed/E0Hfu3svBDU?si=yenOIkFevgN3e01t',
    description: 'Public domain silent film rescored by Farallon.',
    label: 'Public Domain Project'
  }
];

const VideoCard: React.FC<{ video: VideoItem }> = ({ video }) => (
  <div className="glass-card rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row gap-12 group hover:border-primary/30 transition-colors duration-500">
    <div className="w-full lg:w-2/3 aspect-video bg-black rounded-3xl overflow-hidden relative shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>

      <iframe
        src={video.src}
        className="w-full h-full opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl z-20"></div>
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <div className="w-2 h-2 bg-red-500 animate-pulse rounded-full"></div>
        <span className="text-[10px] font-mono text-white tracking-widest uppercase">REC</span>
      </div>
    </div>

    <div className="flex flex-col justify-center gap-6 lg:w-1/3">
      <div className="flex items-center gap-3 text-primary/80">
        <Radio size={20} />
        <span className="font-mono text-xs tracking-[0.2em] uppercase">{video.label}</span>
      </div>

      <h3 className="text-3xl font-bold font-display text-white">{video.title}</h3>
      <p className="text-text-muted leading-relaxed text-lg font-light border-l border-white/10 pl-6">{video.description}</p>

      <div className="flex items-center gap-2 text-white/50 text-sm font-mono uppercase tracking-wider">
        <Play size={14} /> Official Visual
      </div>
    </div>
  </div>
);

const Videos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24">
      <SEO
        title="Visual Archives - Music Videos"
        description="Watch anime features, non-anime visuals, and public domain soundtrack projects from Farallon."
        canonical="/videos"
      />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Visual Archives</h1>
          <p className="text-text-muted text-lg max-w-xl font-light">Grouped by type: anime features, non-anime visuals, and public domain film projects.</p>
        </div>

        <div className="space-y-20">
          <section>
            <h2 className="text-2xl md:text-4xl font-bold font-display mb-8">Anime Features</h2>
            <div className="grid gap-16">
              {animeFeatures.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold font-display mb-8">Non-Anime / Human Video</h2>
            <div className="grid gap-16">
              {nonAnimeVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold font-display mb-8">Public Domain Soundtrack Projects</h2>
            <div className="grid gap-16">
              {publicDomainProjects.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Videos;
