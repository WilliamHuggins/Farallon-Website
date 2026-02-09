import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  useEffect(() => {
    // Optional: Log 404s to analytics here
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-black">
      <SEO 
        title="404 - Signal Lost"
        description="Page not found."
      />
      <div className="max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold font-mono text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-widest">Signal Lost</h2>
        <p className="text-slate-400 mb-8 font-mono text-sm leading-relaxed">
          The requested data fragment could not be retrieved from the archive. The link may be broken or the sector has been corrupted.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center h-12 px-8 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform"
        >
          Return to Source
        </Link>
      </div>
    </div>
  );
};

export default NotFound;