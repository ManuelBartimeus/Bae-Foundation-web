import React, { useState } from "react";
import "./AboutScreen.css";
import "./OurStory.css";
import {
  FiCalendar,
  FiHeart,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiGlobe,
} from "react-icons/fi";
import {
  FaEye,
  FaHandshake,
  FaStar,
  FaLightbulb,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import aboutImg from "../assets/about-us-pic.jpg";
import heroImg from "../assets/hero.jpg";
import impactImg from "../assets/MA-41.jpg";

export default function OurStory() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineEvents = [
    {
      year: "2016",
      title: "The Spark",
      description:
        "Conceived from Teens in Christ (T-I-C), a passionate youth community determined to live with meaning and inspire ethical leadership.",
      icon: <FiHeart />,
    },
    {
      year: "2017",
      title: "Official Launch",
      description:
        "Launched on April 2nd at Rainbow Christian Center, Tema, Ghana. Programs in youth leadership, education, and community development commence.",
      icon: <FiUsers />,
    },
    {
      year: "2018-2020",
      title: "Growth & Impact",
      description:
        "Expanded programs across Ghana, establishing partnerships with schools and communities. Launched education support initiatives.",
      icon: <FiTrendingUp />,
    },
    {
      year: "2021-2023",
      title: "Recognition & Expansion",
      description:
        "Gained recognition for impactful work. Launched major initiatives including health programs and women empowerment projects.",
      icon: <FiAward />,
    },
    {
      year: "2024",
      title: "International Reach",
      description:
        "First international chapter inaugurated in The Gambia as part of our Legacy & Expansion Program.",
      icon: <FiGlobe />,
    },
  ];

  const coreValues = [
    {
      title: "Integrity & Compassion",
      description: "Serving before self and standing for what is right.",
      color: "#1520a6",
      icon: <FaHandshake />,
    },
    {
      title: "Excellence with Conscience",
      description: "High standards anchored in empathy and ethics.",
      color: "#fad6a5",
      icon: <FaStar />,
    },
    {
      title: "Innovation & Stewardship",
      description: "Creative, responsible use of resources for lasting change.",
      color: "#16a34a",
      icon: <FaLightbulb />,
    },
    {
      title: "Inclusivity & Dignity",
      description: "Every life has worth; every voice deserves a future.",
      color: "#9333ea",
      icon: <FaHandHoldingHeart />,
    },
  ];

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="story-header">
        <h1>Our Story</h1>
        <p>
          A journey of transformation — from a small youth community with a
          shared dream to an international force for positive change across
          Africa and beyond. Our story is built on faith, resilience, and the unwavering belief
          that lasting change begins with ordinary individuals who dare to
          take action.
        </p>
      </section>

      {/* Foundation Overview */}
      <section className="story-overview">
        <div className="overview-grid">
          <div className="overview-text">
            <h2>Who We Are Today</h2>
            <p>
              <strong>Before Anyone Else (B.A.E) Foundation</strong> is a
              registered multinational, impact-oriented NGO dedicated to
              holistic development and service. We stand as the{" "}
              <strong>
                Centre for Excellence, Ethical-Transformational Leadership,
                Innovation, and Sustainable Impact
              </strong>
              .
            </p>
            <p>
              These four pillars define our identity and fuel our work across
              Africa and beyond, touching thousands of lives through our
              comprehensive programs and initiatives.
            </p>

            <div className="overview-stats">
              <div className="stat-card">
                <span className="stat-number">9</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">12K+</span>
                <span className="stat-label">Lives Impacted</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">7</span>
                <span className="stat-label">Major Initiatives</span>
              </div>
            </div>
          </div>
          <div className="overview-image">
            <img src={impactImg} alt="Our impact" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="story-timeline">
        <h2>Our Journey Through Time</h2>
        <div className="timeline-container">
          <div className="timeline-navigation">
            {timelineEvents.map((event, index) => (
              <button
                key={index}
                className={`timeline-nav-btn ${
                  index === activeTimeline ? "active" : ""
                }`}
                onClick={() => setActiveTimeline(index)}
              >
                <div className="timeline-icon">{event.icon}</div>
                <span>{event.year}</span>
              </button>
            ))}
          </div>

          <div className="timeline-content">
            <div className="timeline-card">
              <div className="timeline-year">
                {timelineEvents[activeTimeline].year}
              </div>
              <h3>{timelineEvents[activeTimeline].title}</h3>
              <p>{timelineEvents[activeTimeline].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mv-grid">
          <div className="mv-card mission-card">
            <div className="mv-icon-wrapper">
              <LuTarget className="mv-icon" />
            </div>
            <h3>Our Mission</h3>
            <p>
              To serve as agents of change—championing compassion, justice, and
              ethical leadership—by integrating actionable practices that
              address socio-economic needs and environmental challenges,
              nurturing hope, dignity, and quality of life.
            </p>
          </div>
          <div className="mv-card vision-card">
            <div className="mv-icon-wrapper">
              <FaEye className="mv-icon" />
            </div>
            <h3>Our Vision</h3>
            <p>
              A world lived out through{" "}
              <strong>
                acts of kindness, service, and transformative leadership
              </strong>
              , where every person, regardless of background, has the
              opportunity to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="value-card"
              style={{ borderTopColor: value.color }}
            >
              <div className="value-icon" style={{ color: value.color }}>
                {value.icon}
              </div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="sdg-alignment">
        <div className="sdg-content">
          <h2>Aligned to the Global Goals</h2>
          <p>
            The Foundation aligns with the{" "}
            <strong>United Nations Sustainable Development Goals (SDGs)</strong>
            , advancing integrated solutions that address root causes of
            poverty, inequality, and environmental degradation.
          </p>

          <div className="sdg-focus-areas">
            <div className="focus-area">
              <FiUsers className="focus-icon" />
              <h4>Youth Empowerment & Leadership Development</h4>
            </div>
            <div className="focus-area">
              <FiHeart className="focus-icon" />
              <h4>Education Equity & Community Health</h4>
            </div>
            <div className="focus-area">
              <FiTrendingUp className="focus-icon" />
              <h4>Gender-Focused Advocacy</h4>
            </div>
            <div className="focus-area">
              <FiGlobe className="focus-icon" />
              <h4>Innovation Training & Climate Education</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="story-cta">
        <div className="cta-content">
          <h2>Be Part of Our Continuing Story</h2>
          <p>
            Every chapter of our story has been written with the support of
            people who believe in our mission. Help us write the next chapter.
          </p>
          <div className="cta-buttons">
            <button className="donate">Join Our Mission</button>
            <button className="volunteer">Volunteer With Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
