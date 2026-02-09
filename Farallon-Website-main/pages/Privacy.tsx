import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24">
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Farallon music and digital content."
        canonical="/privacy"
      />
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 border-b border-slate-200 dark:border-white/10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-text-main-light dark:text-white mb-4">Privacy Policy</h1>
          <p className="font-mono text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest">Last Updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3>1. Introduction</h3>
          <p>
            We respect your privacy. This policy explains how we handle information when you visit farallonai.com.
          </p>

          <h3>2. Information We Collect</h3>
          <p>
            <strong>Usage Data:</strong> We may collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
          </p>

          <h3>3. Cookies and Tracking Technologies</h3>
          <p>
            This website does not use invasive tracking cookies for advertising purposes. We use local storage to save your preference for "Dark Mode" or "Light Mode" (theme settings).
          </p>
          <p>
            <strong>Third-Party Embeds:</strong> We embed content from third parties, including YouTube, Spotify, and Google Drive (for audio previews). These third parties may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
          </p>

          <h3>4. Third-Party Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Spotify & Apple Music:</strong> When you click links to streaming services, you are subject to their respective privacy policies.</li>
            <li><strong>YouTube:</strong> Videos embedded on this site are hosted by YouTube.</li>
            <li><strong>Printful:</strong> Our merchandise store links to Printful. If you make a purchase, your data is handled by Printful according to their privacy policy.</li>
          </ul>

          <h3>5. Contact Information</h3>
          <p>
            If you choose to contact us via email (Farallon@farallonai.com), we will use your email address only to respond to your inquiry. We do not sell or share email addresses with third parties.
          </p>

          <h3>6. Children's Privacy</h3>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
          </p>

          <h3>7. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;