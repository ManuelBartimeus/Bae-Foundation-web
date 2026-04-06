import React, { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import FoundersMessage from './components/FoundersMessage';
import OurStory from './components/OurStory';
import Team from './components/Team';
import Projects from './components/Projects';
import Events from './components/Events';
import Portfolio from './components/Portfolio';
import ImpactShop from './components/ImpactShop';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './components/HomeScreen.css';

// Maps legacy page-key strings to URL paths
const PAGE_ROUTES = {
  'home': '/',
  'about': '/about',
  'founders-message': '/founders-message',
  'our-story': '/our-story',
  'team': '/team',
  'projects': '/projects',
  'events': '/events',
  'portfolio': '/portfolio',
  'impact-shop': '/impact-shop',
  'blog': '/blog',
  'contact': '/contact',
  'donate': '/donate',
};

// Disable browser's native scroll restoration so it never overrides our scroll resets
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Scrolls to top whenever the route changes, before the browser paints
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function App() {
  const navigate = useNavigate();

  // Backward-compatible navigation helper used by all child components
  const handleNavigation = (page, projectId = null) => {
    const path = PAGE_ROUTES[page] || '/';
    const state = {};
    if (projectId !== null) state.selectedProjectId = projectId;
    if (page === 'contact') state.scrollToForm = true;
    navigate(path, { state: Object.keys(state).length ? state : undefined });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header onNavigate={handleNavigation} />
      <Routes>
        <Route path="/" element={<HomeScreen onNavigate={handleNavigation} />} />
        <Route path="/about" element={<AboutScreen onNavigate={handleNavigation} />} />
        <Route path="/founders-message" element={<FoundersMessage onNavigate={handleNavigation} />} />
        <Route path="/our-story" element={<OurStory onNavigate={handleNavigation} />} />
        <Route path="/team" element={<Team onNavigate={handleNavigation} />} />
        <Route path="/projects" element={<Projects onNavigate={handleNavigation} />} />
        <Route path="/events" element={<Events onNavigate={handleNavigation} />} />
        <Route path="/portfolio" element={<Portfolio onNavigate={handleNavigation} />} />
        <Route path="/impact-shop" element={<ImpactShop onNavigate={handleNavigation} />} />
        <Route path="/blog" element={<Blog onNavigate={handleNavigation} />} />
        <Route path="/contact" element={<Contact onNavigate={handleNavigation} />} />
        <Route path="/donate" element={<Donate onNavigate={handleNavigation} />} />
        <Route path="*" element={<HomeScreen onNavigate={handleNavigation} />} />
      </Routes>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
