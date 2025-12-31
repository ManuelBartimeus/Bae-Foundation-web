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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import aboutImg from "../assets/about-us-pic.jpg";
import heroImg from "../assets/hero.jpg";
import impactImg from "../assets/MA-41.jpg";

// 2016 Images
import img2016_1 from "../assets/2016/bae2016 (1).jpg";
import img2016_2 from "../assets/2016/bae2016 (2).jpg";
import img2016_3 from "../assets/2016/bae2016 (3).jpg";

// 2017 Images
import img2017_1 from "../assets/2017/@_baefoundation Gents putting swag into proper prospective...Joy To the least .Launch and gospel.jpg";
import img2017_2 from "../assets/2017/Our Launch and Gospel concert ...Sunday 2nd April 2017Rainbow Christian center community8.jpg";
import img2017_3 from "../assets/2017/Team Love ❤...@_baefoundation.jpg";

// 2018 Images
import img2018_1 from "../assets/2018/IMG_5196.JPG";
import img2018_2 from "../assets/2018/IMG_5198.JPG";
import img2018_3 from "../assets/2018/IMG_5204.JPG";

// 2021 Images
import img2021_1 from "../assets/2021/HHo-116.jpg";
import img2021_2 from "../assets/2021/HHo-62.jpg";
import img2021_3 from "../assets/2021/HHo-78.jpg";

// 2024 Images
import img2024_1 from "../assets/2024/E Policy Day1-18.jpg";
import img2024_2 from "../assets/2024/E Policy Day2-26.jpg";
import img2024_3 from "../assets/2024/FP-18.jpg";

export default function OurStory() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState(0);

  // Carousel images organized by timeline year
  const timelineCarouselImages = {
    0: [ // 2016 - The Spark
      { src: img2016_1, title: "The Beginning", subtitle: "Teens in Christ" },
      { src: img2016_2, title: "Faith & Vision", subtitle: "Building Dreams" },
      { src: img2016_3, title: "Early Days", subtitle: "Foundation Roots" }
    ],
    1: [ // 2017 - Official Launch
      { src: img2017_1, title: "Launch Day", subtitle: "April 2nd, 2017" },
      { src: img2017_2, title: "Rainbow Center", subtitle: "Tema, Ghana" },
      { src: img2017_3, title: "Team Love", subtitle: "Building Together" }
    ],
    2: [ // 2018-2020 - Growth & Impact
      { src: img2018_1, title: "Education Support", subtitle: "Expanding Reach" },
      { src: img2018_2, title: "School Partnerships", subtitle: "Building Networks" },
      { src: img2018_3, title: "Community Growth", subtitle: "Across Ghana" }
    ],
    3: [ // 2021-2023 - Recognition & Expansion
      { src: img2021_1, title: "Women Empowerment", subtitle: "Fem-Virtutis Launch" },
      { src: img2021_2, title: "Health Programs", subtitle: "Community Wellness" },
      { src: img2021_3, title: "Recognition", subtitle: "Growing Impact" }
    ],
    4: [ // 2024 - International Reach
      { src: img2024_1, title: "Policy Development", subtitle: "Gambia Chapter" },
      { src: img2024_2, title: "Legacy Program", subtitle: "Cross-Border Impact" },
      { src: img2024_3, title: "Global Vision", subtitle: "Expanding Horizons" }
    ]
  };

  const handleCarouselNext = () => {
    const currentImages = timelineCarouselImages[activeTimeline];
    setActiveCarousel((prev) => (prev + 1) % currentImages.length);
  };

  const handleCarouselPrev = () => {
    const currentImages = timelineCarouselImages[activeTimeline];
    setActiveCarousel((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  // Reset carousel when timeline changes
  const handleTimelineChange = (index) => {
    setActiveTimeline(index);
    setActiveCarousel(0);
  };

  const timelineEvents = [
    {
      year: "2016",
      title: "The Spark",
      description:
        "Born from Teens in Christ (T-I-C) in September 2016, BAE Foundation emerged from a passionate youth community determined to live with purpose and inspire ethical leadership. What began as a small group of young believers with a shared vision to serve others has become the seed for a multinational NGO dedicated to transforming lives across Africa.",
      icon: <FiHeart />,
    },
    {
      year: "2017",
      title: "Official Launch",
      description:
        "On April 2nd, 2017, BAE Foundation was officially launched at Rainbow Christian Center in Tema, Ghana, marking the beginning of our formal journey. Programs in youth leadership development, education support, and community development commenced. This foundational year established our commitment to holistic development anchored in faith, excellence, and service before self.",
      icon: <FiUsers />,
    },
    {
      year: "2018-2020",
      title: "Growth & Impact",
      description:
        "A transformative period of expansion across Ghana as we established strategic partnerships with schools and communities. The Gospel Merges with Science Project launched in 2020, providing rural students with STEM education integrated with moral formation. We grew from a local initiative into a recognized force for educational equity and community empowerment, building networks that continue to strengthen our impact today.",
      icon: <FiTrendingUp />,
    },
    {
      year: "2021-2023",
      title: "Recognition & Expansion",
      description:
        "BAE Foundation gained significant recognition for impactful, evidence-based work. Major initiatives launched including the Naakaba Policy Think Tank, the BAE Scholar Program providing scholarships to brilliant but financially challenged students, and the flagship Fem-Virtutis Initiative empowering women and girls to break gender barriers. Health programs and the SMARNOVA student innovation competition further diversified our impact.",
      icon: <FiAward />,
    },
    {
      year: "2024",
      title: "International Reach",
      description:
        "A historic milestone as BAE Foundation's first international chapter was inaugurated in The Gambia through our Legacy & Expansion Program. The Legacy SPOTS decentralized model empowers local teams to design community-focused solutions across borders. This year marks our transition from a national to a truly multinational organization, extending our vision of transformative leadership and sustainable impact beyond Ghana's borders.",
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
                onClick={() => handleTimelineChange(index)}
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

              {/* Circular Carousel */}
              <div className="circular-carousel-container">
                <button className="carousel-arrow left" onClick={handleCarouselPrev} aria-label="Previous image">
                  <FaChevronLeft />
                </button>

                <div className="circular-carousel">
                  {timelineCarouselImages[activeTimeline].map((image, index) => {
                    const currentImages = timelineCarouselImages[activeTimeline];
                    const offset = (index - activeCarousel + currentImages.length) % currentImages.length;
                    const isCenter = offset === 0;
                    const isLeft = offset === currentImages.length - 1;
                    const isRight = offset === 1;
                    
                    let position = '';
                    if (isCenter) position = 'center';
                    else if (isLeft) position = 'left';
                    else if (isRight) position = 'right';
                    else position = 'hidden';

                    return (
                      <div
                        key={index}
                        className={`carousel-item ${position}`}
                        onClick={() => setActiveCarousel(index)}
                      >
                        <img src={image.src} alt={image.title} />
                      </div>
                    );
                  })}
                </div>

                <button className="carousel-arrow right" onClick={handleCarouselNext} aria-label="Next image">
                  <FaChevronRight />
                </button>

                <div className="carousel-dots">
                  {timelineCarouselImages[activeTimeline].map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === activeCarousel ? 'active' : ''}`}
                      onClick={() => setActiveCarousel(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
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
