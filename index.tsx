import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Cleanup static SEO content to prevent interaction issues
// We use a small timeout to ensure React has painted at least the background
setTimeout(() => {
  const seoContent = document.getElementById('seo-content');
  if (seoContent) {
    seoContent.style.display = 'none';
  }
}, 100);