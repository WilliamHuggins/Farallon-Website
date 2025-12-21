import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Videos from './pages/Videos';
import Discography from './pages/Discography';
import AboutProject from './pages/AboutProject';
import VisualArchives from './pages/VisualArchives';
import Store from './pages/Store';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/credits" element={<AboutProject />} />
          {/* Keep old route for backward compatibility if needed, but credits is the logical name */}
          <Route path="/about-project" element={<AboutProject />} /> 
          <Route path="/visual-archives" element={<VisualArchives />} />
          <Route path="/store" element={<Store />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;