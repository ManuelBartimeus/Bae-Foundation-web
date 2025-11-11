import React from "react";
import { useCountUp, useCountUpFromString } from "../hooks/useCountUp";
import "./AboutScreen.css";
import "./FoundersMessage.css";
import founderImg from "../assets/founder_img.png";
import { FiUser, FiStar, FiHome } from "react-icons/fi";
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
                most. We exist to remind the world that leadership is not about
                power, but about purpose. It's about showing up, with empathy,
                with excellence, and with an unshakable commitment to what is
                right.
              </p>
            </div>

            <div className="message-card">
              <h3>Our Vision for Change</h3>
              <p className="intro">
                Our vision is simple yet profound: to build a culture where people
                lead with integrity, think with innovation, and serve with
                humanity. We believe that true impact is not measured by how much
                we achieve, but by how deeply we touch lives and awaken potential
                in others.
              </p>
              
              <p className="intro">
                Volunteerism is the heartbeat of our foundation, ordinary people
                doing extraordinary things because they believe that change begins
                with them. It is through these selfless acts that we see hope take
                form, that we see communities transform, and that we reaffirm our
                shared humanity.
              </p>
            </div>

            <div className="message-card">
              <h3>Excellence with Conscience</h3>
              <p className="intro">
                At the core of everything we do is{" "}
                <strong>excellence with conscience</strong> — a commitment to do
                good, and to do it well. We hold ourselves to the highest
                standards, not because it is expected, but because it is who we
                are. Every step we take, every initiative we lead, is guided by
                ethics, empathy, and innovation — the values that define us.
              </p>
              
              <p className="intro highlight">
                <strong>
                  The world is in constant motion, yet our purpose remains still:
                  to serve before self, to inspire before indifference, and to act
                  before anyone else.
                </strong>
              </p>
              
              <p className="intro">
                Let us continue to lead with heart, think with vision, and serve
                with integrity. For when we place humanity at the center of our
                actions, we not only build a better future — we become the very
                change we seek.
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
                <div className="chip">
                  <FiHome className="chip-icon" />
                  <span>Before Anyone Else Foundation</span>
                </div>
              </div>
              
              <div className="social-media-icons">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="founder-social-icon whatsapp">
                  <FaWhatsapp />
                </a>
                <a href="https://www.threads.com/@capt.derrick_pope?xmt=AQF0ADeMZol0PnYuHJ-XF72c9CZuBmD20_AxSsAyoePlm4M" target="_blank" rel="noopener noreferrer" className="founder-social-icon threads">
                  <SiThreads />
                </a>
                <a href="https://instagram.com//capt.derrick_pope/" target="_blank" rel="noopener noreferrer" className="founder-social-icon instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com//in/derrick-p-006672114/" target="_blank" rel="noopener noreferrer" className="founder-social-icon linkedin">
                  <FaLinkedin />
                </a>
              </div>
              
              <div className="founder-stats">
                <div className="stat-item">
                  <span className="stat-number" ref={founderYears.ref}>{founderYears.count}</span>
                  <span className="stat-label">Years of Leadership</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" ref={livesImpacted.ref}>{livesImpacted.count}</span>
                  <span className="stat-label">Lives Impacted</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" ref={countries.ref}>{countries.count}</span>
                  <span className="stat-label">Countries</span>
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
          <p>
            Together, we can create the change we wish to see in the world. 
            Your support enables us to continue serving those who need it most.
          </p>
          <div className="cta-buttons">
            <button className="donate">Support Our Cause</button>
            <button className="founder-volunteer">Become a Volunteer</button>
          </div>
        </div>
      </section>
    </main>
  );
}