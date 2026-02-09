import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24">
      <SEO 
        title="Terms of Service"
        description="Terms of Service for Farallon music and digital content."
        canonical="/terms"
      />
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 border-b border-slate-200 dark:border-white/10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-text-main-light dark:text-white mb-4">Terms of Service</h1>
          <p className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest">Last Updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website (farallonai.com), you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h3>2. Intellectual Property</h3>
          <p>
            All content published and made available on this site is the property of Farallon and the project's creators. This includes, but is not limited to images, text, logos, documents, downloadable files, and audio files.
          </p>
          <p>
            The music and visual art presented here are works exploring the intersection of human creativity and generative AI. While specific tools are used in their creation (see Credits), the final composition, curation, and presentation are protected intellectual property.
          </p>

          <h3>3. Use of Music and Content</h3>
          <p>
            You are free to listen to the music via the streaming links provided. Unauthorized reproduction, distribution, or commercial use of the audio tracks or visual assets without express written permission is prohibited.
          </p>

          <h3>4. Third-Party Links and Services</h3>
          <p>
            This site contains links to third-party websites (such as Spotify, Apple Music, YouTube, and Printful) that are not owned or controlled by Farallon.
          </p>
          <p>
            We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Farallon shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such web sites or services.
          </p>

          <h3>5. Merchandise</h3>
          <p>
            Merchandise sales are fulfilled by third-party providers (e.g., Printful). Transactions, shipping, and returns are governed by the terms and policies of the fulfillment platform.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            This site represents an artistic project. The creators are not liable for any damages that may occur to you as a result of your misuse of our website.
          </p>

          <h3>7. Changes to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
          </p>

          <h3>8. Contact</h3>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:Farallon@farallonai.com">Farallon@farallonai.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;