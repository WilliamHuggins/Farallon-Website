import React, { useEffect } from 'react';
import Gallery from '../components/Gallery';
import { translations } from '../translations';
import { Language } from '../types';

interface VisualArchivesProps {
  currentLang: Language;
}

const VisualArchives: React.FC<VisualArchivesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Gallery content={t.gallery} />
      </div>
    </div>
  );
};

export default VisualArchives;