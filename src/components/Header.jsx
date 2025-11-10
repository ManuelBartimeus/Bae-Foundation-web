import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo_monochrome.png';

export default function Header({ currentPage, onNavigate }) {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsAboutDropdownOpen(false); // Close dropdown when navigating
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="es-header" role="banner">
      <div className="es-header-left">
        <div className="es-logo" aria-label="BAE Foundation logo">
          <img 
            src={logo} 
            alt="BAE Foundation logo" 
            className="es-logo-image"
          />
        </div>
      </div>

      <nav className="es-header-nav" aria-label="Main navigation">
        <button 
          className={`es-nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavigation('home')}
        >
          Home
        </button>
        <div className="es-nav-dropdown" ref={dropdownRef}>
          <button 
            className={`es-nav-item es-nav-dropdown-trigger ${currentPage === 'about' ? 'active' : ''}`}
            onClick={toggleAboutDropdown}
            aria-expanded={isAboutDropdownOpen}
            aria-haspopup="true"
          >
            About Us
            <FaChevronDown 
              className={`es-dropdown-arrow ${isAboutDropdownOpen ? 'rotated' : ''}`}
            />
          </button>
          
          {isAboutDropdownOpen && (
            <div className="es-dropdown-menu">
              <button 
                className="es-dropdown-item"
                onClick={() => handleNavigation('founders-message')}
              >
                Founder's Message
              </button>
              <button 
                className="es-dropdown-item"
                onClick={() => handleNavigation('our-story')}
              >
                Our Story
              </button>
              <button 
                className="es-dropdown-item"
                onClick={() => handleNavigation('team')}
              >
                Team
              </button>
            </div>
          )}
        </div>
        <button 
          className={`es-nav-item ${currentPage === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavigation('projects')}
        >
          Projects
        </button>
        <button 
          className={`es-nav-item ${currentPage === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleNavigation('portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={`es-nav-item ${currentPage === 'impact-shop' ? 'active' : ''}`}
          onClick={() => handleNavigation('impact-shop')}
        >
          Impact Shop
        </button>
        <button 
          className={`es-nav-item ${currentPage === 'blog' ? 'active' : ''}`}
          onClick={() => handleNavigation('blog')}
        >
          Blog
        </button>
        <button 
          className={`es-nav-item ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavigation('contact')}
        >
          Contact
        </button>
        <button 
          className="es-donate" 
          onClick={() => handleNavigation('donate')}
          aria-label="Donate Now"
        >
          Donate Now
        </button>
      </nav>
    </header>
  );
}