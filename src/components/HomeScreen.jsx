import React from 'react';
import { FaPlay, FaArrowRight, FaDonate } from 'react-icons/fa';
import './HomeScreen.css';
import heroImage from '../assets/hero.jpg';
import logo from '../assets/logo.png';
import initiative1 from '../assets/initiatives/initiative-1.png';
import initiative2 from '../assets/initiatives/initiative-2.png';
import initiative3 from '../assets/initiatives/initiative-3.png';
import initiative4 from '../assets/initiatives/initiative-4.png';
import initiative5 from '../assets/initiatives/initiative-5.png';
import initiative6 from '../assets/initiatives/initiative-6.png';
import volunteer from '../assets/volunteer.jpg';

export default function HomeScreen() {
  return (
    <main className="es-root" aria-label="Kindora fundraising hero">
      {/* Header */}
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
          <button className="es-nav-item">Home</button>
          <button className="es-nav-item">About</button>
          <button className="es-nav-item">Projects</button>
          <button className="es-nav-item">Portfolio</button>
          <button className="es-nav-item">Team</button>
          <button className="es-nav-item">Contact</button>
          <button className="es-donate" aria-label="Donate Now">
            Donate Now
          </button>
        </nav>
      </header>

      {/* Hero container - two column layout */}
      <section className="es-hero" aria-labelledby="hero-heading">
        {/* Left column */}
        <aside className="es-left" aria-label="Intro column">
          <div className="es-donor-row" aria-hidden="false">
            <img
              src={volunteer}
              alt="donor avatars preview"
              className="es-donor-avatars"
            />
            <span className="es-donor-label">100+ Active national volunteers</span>
          </div>

          <h1 id="hero-heading" className="es-title">
            Bringing joy<br />
            to the<br />
            least
          </h1>

          <p className="es-description">
            Together, we can make a real impact in communities around the world. Help us bring hope and support.
          </p>

          <div className="es-cta">
            <button className="es-btn-primary" aria-label="Donate Now">
              <span>Donate Now</span>
              <FaArrowRight className="es-btn-icon" aria-hidden="true" />
            </button>

            <button className="es-btn-ghost" aria-label="Learn More">
              Learn More
            </button>
          </div>
        </aside>

        {/* Right column - hero image panel */}
        <section className="es-right" aria-label="Hero image and CTA">
          <div className="es-right-panel" role="img" aria-label="Volunteers holding donation signs">
            <img
              src={heroImage}
              alt="Children smiling"
              className="es-hero-image"
            />

            {/* Quote bubble */}
            <div
              className="es-quote"
              role="group"
              aria-label="Testimonial quote"
              tabIndex="0"
            >
              <img
                src={heroImage}
                alt="testimonial avatar"
                className="es-quote-avatar"
              />
              <span className="es-quote-text">
                "Because of this organization, I was given hope and a second chance."
              </span>
            </div>

            {/* Bottom-left pill */}
            <div className="es-pill" aria-hidden="true">
              Real lives changed by your support
            </div>

            {/* Team card at bottom-right */}
            <article
              className="es-team-card"
              aria-label="Dedicated team information"
              tabIndex="0"
            >
              <h4 className="es-team-title">Dedicated team</h4>
              <p className="es-team-desc">
                Providing essential resources and aid to those who are in need in emergency.
              </p>

              <div className="es-team-meta" aria-hidden="true">
                <div className="es-team-avatars">
                  <img src={heroImage} alt="team avatar 1" />
                  <img src={heroImage} alt="team avatar 2" />
                  <img src={heroImage} alt="team avatar 3" />
                </div>
                <div className="es-team-number">50k</div>
              </div>
            </article>
          </div>
        </section>
      </section>

      {/* Initiatives Section */}
      <section className="es-partners" aria-label="Our Initiatives">
        <h3 className="es-partners-title">Explore our impact trail</h3>
        <div className="es-initiative-carousel">
          <div className="es-initiative-track">
            {/* First set of images */}
            <div className="es-initiative-item">
              <img src={initiative1} alt="Initiative 1" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative2} alt="Initiative 2" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative3} alt="Initiative 3" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative4} alt="Initiative 4" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative5} alt="Initiative 5" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative6} alt="Initiative 6" className="es-initiative-image" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="es-initiative-item">
              <img src={initiative1} alt="Initiative 1" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative2} alt="Initiative 2" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative3} alt="Initiative 3" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative4} alt="Initiative 4" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative5} alt="Initiative 5" className="es-initiative-image" />
            </div>
            <div className="es-initiative-item">
              <img src={initiative6} alt="Initiative 6" className="es-initiative-image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
