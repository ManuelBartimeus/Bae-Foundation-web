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

export default function Footer() {
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

          <button className="get-involved-btn">Get Involved</button>
        </div>

        {/* Center Section - Recent Projects */}
        <div className="footer-projects">
          <h3 className="footer-title">RECENT INITIATIVES</h3>
          <ul className="project-links">
            <li>
              <a href="#">BAE Foundation Scholar</a>
            </li>
            <li>
              <a href="#">Nakaaba Policy and Action Initiative</a>
            </li>
            <li>
              <a href="#">SMARNOVA Initiative</a>
            </li>
            <li>
              <a href="#">Gospel Merges with Science</a>
            </li>
            <li>
              <a href="#">BAE Foundation Legacy Spots</a>
            </li>
            <li>
              <a href="#">BAE Foundation Fem-Virtutis</a>
            </li>
            <li>
              <a href="#">Spark It Up Initiative</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-right">
          <h3 className="footer-title">CONTACT US</h3>

          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+233 57 001 0755 (Ghana)</span>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+2203535544 (The Gambia)</span>
            </div>

            <div className="contact-item">
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
          <p>Copyright © 2025 BAE Foundation. | All Rights Reserved.</p>
          <p>
            Powered by <span className="powered-by">Elite Creatives</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
