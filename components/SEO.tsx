import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'music.song' | 'music.album' | 'music.playlist' | 'profile' | 'video.other';
  jsonLd?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  image = "https://i.postimg.cc/jdfN9Gxb/Album-cover.png", 
  type = 'website',
  jsonLd 
}) => {
  const siteName = "Farallon";
  const twitterHandle = "@farallonai";
  // Canonical host enforcement: non-www
  const baseUrl = "https://farallonai.com";
  
  // Construct absolute URL for canonical if relative path provided
  // Ensures we always point to the canonical host
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`)
    : `${baseUrl}${window.location.pathname}`;

  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;