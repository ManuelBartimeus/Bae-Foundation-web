import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo_monochrome.png';

export default function Header({ onNavigate }) {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  const isAboutPage = ['/about', '/founders-message', '/our-story', '/team'].includes(pathname);

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsAboutDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  };

  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileAboutOpen(false);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) closeMobileMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="es-header" role="banner">
        <div className="es-header-left">
          <div className="es-logo" aria-label="BAE Foundation logo" onClick={() => handleNavigation('home')} style={{cursor:'pointer'}}>
            <img src={logo} alt="BAE Foundation logo" className="es-logo-image" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="es-header-nav es-desktop-nav" aria-label="Main navigation">
          <button className={`es-nav-item ${pathname === '/' ? 'active' : ''}`} onClick={() => handleNavigation('home')}>Home</button>
          <div className="es-nav-dropdown" ref={dropdownRef}>
            <button
              className={`es-nav-item es-nav-dropdown-trigger ${isAboutPage ? 'active' : ''}`}
              onClick={toggleAboutDropdown}
              aria-expanded={isAboutDropdownOpen}
              aria-haspopup="true"
            >
              About Us
              <FaChevronDown className={`es-dropdown-arrow ${isAboutDropdownOpen ? 'rotated' : ''}`} />
            </button>
            {isAboutDropdownOpen && (
              <div className="es-dropdown-menu">
                <button className="es-dropdown-item" onClick={() => handleNavigation('founders-message')}>Founder's Message</button>
                <button className="es-dropdown-item" onClick={() => handleNavigation('our-story')}>Our Story</button>
                <button className="es-dropdown-item" onClick={() => handleNavigation('team')}>Team</button>
              </div>
            )}
          </div>
          <button className={`es-nav-item ${pathname === '/projects' ? 'active' : ''}`} onClick={() => handleNavigation('projects')}>Initiatives</button>
          <button className={`es-nav-item ${pathname === '/portfolio' ? 'active' : ''}`} onClick={() => handleNavigation('portfolio')}>Portfolio</button>
          <button className={`es-nav-item ${pathname === '/impact-shop' ? 'active' : ''}`} onClick={() => handleNavigation('impact-shop')}>Legacy Store</button>
          <button className={`es-nav-item ${pathname === '/blog' ? 'active' : ''}`} onClick={() => handleNavigation('blog')}>Blog</button>
          <button className={`es-nav-item ${pathname === '/contact' ? 'active' : ''}`} onClick={() => handleNavigation('contact')}>Contact</button>
          <button className="es-donate" onClick={() => handleNavigation('donate')} aria-label="Donate Now">Donate Now</button>
        </nav>

        {/* Mobile right side: donate icon + hamburger */}
        <div className="es-mobile-controls">
          <button className="es-donate es-mobile-donate" onClick={() => handleNavigation('donate')} aria-label="Donate Now">Donate</button>
          <button
            className="es-hamburger"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="es-mobile-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          onClick={closeMobileMenu}
        >
          <nav className="es-mobile-nav" onClick={(e) => e.stopPropagation()}>
            {/* Close button inside panel */}
            <button
              className="es-mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <button className="es-mobile-nav-item" onClick={() => handleNavigation('home')}>Home</button>

            {/* About Us accordion */}
            <div className="es-mobile-accordion">
              <button
                className="es-mobile-nav-item es-mobile-accordion-trigger"
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              >
                About Us
                <FaChevronDown className={`es-dropdown-arrow ${isMobileAboutOpen ? 'rotated' : ''}`} />
              </button>
              {isMobileAboutOpen && (
                <div className="es-mobile-submenu">
                  <button className="es-mobile-sub-item" onClick={() => handleNavigation('founders-message')}>Founder's Message</button>
                  <button className="es-mobile-sub-item" onClick={() => handleNavigation('our-story')}>Our Story</button>
                  <button className="es-mobile-sub-item" onClick={() => handleNavigation('team')}>Team</button>
                </div>
              )}
            </div>

            <button className="es-mobile-nav-item" onClick={() => handleNavigation('projects')}>Initiatives</button>
            <button className="es-mobile-nav-item" onClick={() => handleNavigation('portfolio')}>Portfolio</button>
            <button className="es-mobile-nav-item" onClick={() => handleNavigation('impact-shop')}>Legacy Store</button>
            <button className="es-mobile-nav-item" onClick={() => handleNavigation('blog')}>Blog</button>
            <button className="es-mobile-nav-item" onClick={() => handleNavigation('contact')}>Contact</button>
            <button className="es-mobile-donate-full" onClick={() => handleNavigation('donate')}>Donate Now</button>
          </nav>
        </div>
      )}
    </>
  );
}
