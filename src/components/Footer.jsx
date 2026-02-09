import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaMedium,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer({ onNavigate }) {
  const handleGetInvolved = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  // Map initiatives to their project IDs in the Projects component
  const initiativeMap = {
    'B.A.E. Foundation Scholar': 3,
    'Nakaaba Policy and Action Initiative': 4,
    'SMARNOVA Initiative': 6,
    'Gospel Merges with Science': 2,
    'B.A.E. Foundation Legacy Spots': 7,
    'B.A.E. Foundation Fem-Virtutis': 1,
    'Spark It Up Initiative': 5,
  };

  const handleInitiativeClick = (initiativeName) => {
    const projectId = initiativeMap[initiativeName];
    if (onNavigate && projectId) {
      onNavigate('projects', projectId);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Organization Info */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="BAE Foundation Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-name">BEFORE ANYONE ELSE</span>
              <span className="logo-name">FOUNDATION</span>
            </div>
          </div>

          <p className="org-description">
            The <em>Before Anyone Else (B.A.E) Foundation</em> is a registered
            multinational and impact-oriented non-governmental organisation with
            a deep commitment to holistic development, driven by a higher
            calling to serve, uplift, and transform
          </p>

          <button className="get-involved-btn" onClick={handleGetInvolved}>Get Involved</button>
        </div>

        {/* Center Section - Recent Projects */}
        <div className="footer-projects">
          <h3 className="footer-title">RECENT INITIATIVES</h3>
          <ul className="project-links">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('B.A.E. Foundation Scholar'); }}>B.A.E. Foundation Scholar</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('Nakaaba Policy and Action Initiative'); }}>Nakaaba Policy and Action Initiative</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('SMARNOVA Initiative'); }}>SMARNOVA Initiative</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('Gospel Merges with Science'); }}>Gospel Merges with Science</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('B.A.E. Foundation Legacy Spots'); }}>B.A.E. Foundation Legacy Spots</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('B.A.E. Foundation Fem-Virtutis'); }}>B.A.E. Foundation Fem-Virtutis</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleInitiativeClick('Spark It Up Initiative'); }}>Spark It Up Initiative</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-right">
          <h3 className="footer-title">CONTACT US</h3>

          <div className="contact-info">
            <div className="footer-contact-item">
              <FaPhone className="contact-icon" />
              <span>+233 57 001 0755 (Ghana)</span>
            </div>

            <div className="footer-contact-item">
              <FaPhone className="contact-icon" />
              <span>+220 35 355 44 (The Gambia)</span>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope className="contact-icon" />
              <span>baefoundation3@gmail.com</span>
            </div>
          </div>

          <div className="social-media">
            <a
              href="https://www.instagram.com/_baefoundationgh/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/_baefoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://web.facebook.com/Christisbae/?viewas=100000686899395"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/before-anyone-else-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@baefoundationghana4529"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaYoutube />
            </a>
            <a
              href="https://medium.com/@baefoundation3"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>Copyright © 2025 Before Anyone Else (B.A.E.) Foundation. | All Rights Reserved.</p>
          <p>
            Powered by <span className="powered-by">Elite Creatives</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
