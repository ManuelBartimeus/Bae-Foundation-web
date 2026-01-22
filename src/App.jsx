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

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeScreen />;
      case 'about':
        return <AboutScreen />;
      case 'founders-message':
        return <FoundersMessage />;
      case 'our-story':
        return <OurStory />;
      case 'team':
        return <Team />;
      case 'projects':
        return <Projects />;
      case 'portfolio':
        return <Portfolio />;
      case 'impact-shop':
        return <ImpactShop />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'donate':
        return <Donate />;
      default:
        return <HomeScreen />;
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
