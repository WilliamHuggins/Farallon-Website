
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import AboutProject from './pages/AboutProject';
import VisualArchives from './pages/VisualArchives';
import Store from './pages/Store';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/visual-archives" element={<VisualArchives />} />
          <Route path="/store" element={<Store />} />
          {/* Fallback route to prevent blank screens on 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
