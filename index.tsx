import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

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

// Signal that the app has booted to hide static SEO content via CSS
// This prevents layout thrashing compared to inline style manipulation
requestAnimationFrame(() => {
  document.documentElement.classList.add('app-booted');
  // Optional: Set the global flag if needed by other scripts
  (window as any).__APP_BOOTED__ = true;
});