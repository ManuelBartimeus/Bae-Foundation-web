import React from "react";
import { useCountUp, useCountUpFromString } from "../hooks/useCountUp";
import "./AboutScreen.css";
import "./FoundersMessage.css";
import founderImg from "../assets/founder_img.png";
import { FiUser, FiStar, FiHome, FiCalendar, FiUsers, FiGlobe } from "react-icons/fi"; // Added new icons
import { FaQuoteLeft, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export default function FoundersMessage() {
  // Count-up animations for founder stats
  const founderYears = useCountUp(9, 2000);
  const livesImpacted = useCountUpFromString('12K+', 2000);
  const countries = useCountUp(2, 2000);

  return (
    <main className="rebuild-page">
      {/* Hero Quote Section */}
      <section className="founder-hero">
        <div className="quote-container">
          <FaQuoteLeft className="quote-icon" />
          <h1 className="hero-quote">
            "Every meaningful change begins with a heart that cares."
          </h1>
          <div className="quote-attribution">
            <span>Mr. Derrick Puplampu</span>
            <span>Founder & Executive Director</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="rebuild-header">
        <h2 className="section-title">A Message from Our Founder</h2>

        <div className="rebuild-content">
          <div className="content-left">
            <div className="message-card">
              <h3>The Heart Behind Our Mission</h3>
              <p className="intro">
                Every meaningful change begins with a heart that cares, a heart
                that dares to see beyond itself and act for others.
              </p>
              
              <p className="intro">
                <strong>The Before Anyone Else Foundation</strong> was born from
                that belief, that humanity's truest strength lies in service,
                compassion, and the courage to make a difference where it matters
                most.
              </p>
            </div>

            <div className="message-card">
              <h3>Our Vision for Change</h3>
              <p className="intro">
                Our vision is simple yet profound: to build a culture where people
                lead with integrity, think with innovation, and serve with
                humanity.
              </p>
            </div>

            <div className="message-card">
              <h3>Excellence with Conscience</h3>
              <p className="intro highlight">
                <strong>
                  The world is in constant motion, yet our purpose remains still:
                  to serve before self, to inspire before indifference, and to act
                  before anyone else.
                </strong>
              </p>
            </div>
          </div>

          <div className="content-right">
            <div className="founder-profile">
              <img src={founderImg} alt="Mr. Derrick Puplampu" className="rebuild-img" />
              
              <div className="founder-chips">
                <div className="chip">
                  <FiUser className="chip-icon" />
                  <span>Mr. Derrick Puplampu</span>
                </div>
                <div className="chip">
                  <FiStar className="chip-icon" />
                  <span>Founder & Executive Director</span>
                </div>
              </div>
              
              <div className="social-media-icons">
                <a href="#" className="founder-social-icon whatsapp"><FaWhatsapp /></a>
                <a href="#" className="founder-social-icon threads"><SiThreads /></a>
                <a href="#" className="founder-social-icon instagram"><FaInstagram /></a>
                <a href="#" className="founder-social-icon linkedin"><FaLinkedin /></a>
              </div>
              
              {/* Updated Stats Grid */}
              <div className="founder-stats">
                <div className="stat-item">
                  <FiCalendar className="stat-icon" />
                  <span className="stat-number" ref={founderYears.ref}>{founderYears.count}</span>
                  <span className="stat-label">Years of Leadership</span>
                </div>
                <div className="stat-item">
                  <FiUsers className="stat-icon" />
                  <span className="stat-number" ref={livesImpacted.ref}>{livesImpacted.count}</span>
                  <span className="stat-label">Lives Impacted</span>
                </div>
                <div className="stat-item">
                  <FiGlobe className="stat-icon" />
                  <span className="stat-number" ref={countries.ref}>{countries.count}</span>
                  <span className="stat-label">Countries Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="founder-cta">
        <div className="cta-content">
          <h3>Join Our Movement</h3>
          <p>Together, we can create the change we wish to see in the world.</p>
          <div className="cta-buttons">
            <button className="donate">Support Our Cause</button>
            <button className="founder-volunteer">Become a Volunteer</button>
          </div>
        </div>
      </section>
    </main>
  );
}