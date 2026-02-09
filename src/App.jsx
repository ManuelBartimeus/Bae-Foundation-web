import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import FoundersMessage from './components/FoundersMessage';
import OurStory from './components/OurStory';
import Team from './components/Team';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import ImpactShop from './components/ImpactShop';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './components/HomeScreen.css'; // Import header styles

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleNavigation = (page, projectId = null) => {
    setCurrentPage(page);
    if (projectId !== null) {
      setSelectedProjectId(projectId);
    }
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // If navigating to contact form, scroll to form after a short delay
    if (page === 'contact') {
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeScreen onNavigate={handleNavigation} />;
      case 'about':
        return <AboutScreen onNavigate={handleNavigation} />;
      case 'founders-message':
        return <FoundersMessage onNavigate={handleNavigation} />;
      case 'our-story':
        return <OurStory onNavigate={handleNavigation} />;
      case 'team':
        return <Team onNavigate={handleNavigation} />;
      case 'projects':
        return <Projects onNavigate={handleNavigation} selectedProjectId={selectedProjectId} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigation} />;
      case 'impact-shop':
        return <ImpactShop onNavigate={handleNavigation} />;
      case 'blog':
        return <Blog onNavigate={handleNavigation} />;
      case 'contact':
        return <Contact onNavigate={handleNavigation} />;
      case 'donate':
        return <Donate onNavigate={handleNavigation} />;
      default:
        return <HomeScreen onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
