
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import AboutProject from './pages/AboutProject';
import VisualArchives from './pages/VisualArchives';
import Store from './pages/Store';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  return (
    <Router>
      <MainLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>
        <Routes>
          <Route path="/" element={<Home currentLang={currentLang} />} />
          <Route path="/about-project" element={<AboutProject currentLang={currentLang} />} />
          <Route path="/visual-archives" element={<VisualArchives currentLang={currentLang} />} />
          <Route path="/store" element={<Store currentLang={currentLang} />} />
          {/* Fallback route to prevent blank screens on 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
