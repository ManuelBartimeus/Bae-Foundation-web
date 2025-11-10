import React, { useState, useRef, useEffect } from 'react';
import { useCountUp, useCountUpFromString } from '../hooks/useCountUp';
import './AboutScreen.css';
import './Portfolio.css';
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight, FiExternalLink, FiCalendar, FiMapPin, FiUsers, FiAward } from 'react-icons/fi';
import { FaImages, FaVideo, FaNewspaper, FaGraduationCap, FaHeart, FaHandsHelping, FaLeaf } from 'react-icons/fa';

// Import images
import heroImg from '../assets/hero.jpg';
import aboutImg from '../assets/about-us-pic.jpg';
import volunteerImg from '../assets/volunteer.jpg';
import studyGroupImg from '../assets/study-group-african-people_23-2149156390.jpg';
import africanWomanImg from '../assets/african-woman-teaching-children-class.jpg';
import kidsEnjoyingImg from '../assets/african-kids-enjoying-life_23-2151438340.jpg';
import boyRaisingHandImg from '../assets/boy-rising-hand-class_23-2150814449.jpg';
import worldBookDayImg from '../assets/world-book-day-celebration_23-2151245079.jpg';
import kidReadingImg from '../assets/kid-reading.jpg';
import sparkitupImg from '../assets/sparkitup-page.jpg';
import smanorvaImg from '../assets/smanorva-page.jpg';

// Spark It Up images
import sparkImg1 from '../assets/Spark It up/f33169152.jpg';
import sparkImg2 from '../assets/Spark It up/f33175552.jpg';
import sparkImg3 from '../assets/Spark It up/f33182464.jpg';
import sparkImg4 from '../assets/Spark It up/f33185536.jpg';
import sparkImg5 from '../assets/Spark It up/f33197056.jpg';
import sparkImg6 from '../assets/Spark It up/f33205504.jpg';
import sparkImg7 from '../assets/Spark It up/f33213952.jpg';
import sparkImg8 from '../assets/Spark It up/f33220096.jpg';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef(null);

  // Count-up animations for portfolio stats
  const majorProjects = useCountUp(6, 2000);
  const livesTransformed = useCountUpFromString('8,300+', 2000);
  const communitiesServed = useCountUpFromString('50+', 2000);
  const focusAreas = useCountUp(4, 2000);

  const portfolioCategories = [
    { id: 'all', name: 'All Work', icon: <FaImages /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'community', name: 'Community', icon: <FaHandsHelping /> },
    { id: 'events', name: 'Events', icon: <FaNewspaper /> },
    { id: 'programs', name: 'Programs', icon: <FaHeart /> }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Education Empowerment Initiative",
      category: "education",
      type: "photo",
      description: "Transforming lives through quality education across rural communities in Ghana and The Gambia.",
      mainImage: africanWomanImg,
      gallery: [africanWomanImg, boyRaisingHandImg, kidReadingImg, worldBookDayImg, studyGroupImg],
      stats: {
        beneficiaries: "2,500+",
        duration: "4 Years",
        locations: "15 Communities"
      },
      achievements: ["Built 5 Schools", "Trained 50 Teachers", "Distributed 1,000+ Books"],
      date: "2021 - Present"
    },
    {
      id: 2,
      title: "Spark It Up Leadership Program",
      category: "programs",
      type: "photo",
      description: "Igniting leadership potential in young minds through innovative training and mentorship programs.",
      mainImage: sparkitupImg,
      gallery: [sparkImg1, sparkImg2, sparkImg3, sparkImg4, sparkImg5, sparkImg6, sparkImg7, sparkImg8],
      stats: {
        beneficiaries: "800+",
        duration: "3 Years",
        locations: "2 Countries"
      },
      achievements: ["200 Leaders Graduated", "50 Jobs Created", "15 Startups Launched"],
      date: "2022 - Present"
    },
    {
      id: 3,
      title: "Community Health Outreach",
      category: "community",
      type: "photo",
      description: "Bringing essential healthcare services to underserved communities through mobile clinics.",
      mainImage: volunteerImg,
      gallery: [volunteerImg, aboutImg, kidsEnjoyingImg, heroImg],
      stats: {
        beneficiaries: "3,200+",
        duration: "2 Years",
        locations: "20 Villages"
      },
      achievements: ["500+ Health Checkups", "800 Vaccinations", "25 Health Workers Trained"],
      date: "2023 - Present"
    },
    {
      id: 4,
      title: "Annual Youth Summit",
      category: "events",
      type: "photo",
      description: "Celebrating and empowering young changemakers across Africa through our flagship annual event.",
      mainImage: studyGroupImg,
      gallery: [studyGroupImg, kidsEnjoyingImg, sparkImg1, sparkImg3],
      stats: {
        beneficiaries: "1,000+",
        duration: "3 Days",
        locations: "Tema, Ghana"
      },
      achievements: ["500+ Youth Participants", "50 Speakers", "20 Workshops"],
      date: "December 2024"
    },
    {
      id: 5,
      title: "Women Empowerment Campaign",
      category: "community",
      type: "photo",
      description: "Supporting women entrepreneurs through microfinance and business development programs.",
      mainImage: smanorvaImg,
      gallery: [smanorvaImg, africanWomanImg, volunteerImg, aboutImg],
      stats: {
        beneficiaries: "600+",
        duration: "2 Years",
        locations: "Gambia & Ghana"
      },
      achievements: ["400 Microloans", "300 Women Trained", "100 Businesses Started"],
      date: "2022 - Present"
    },
    {
      id: 6,
      title: "Digital Literacy Workshop",
      category: "education",
      type: "photo",
      description: "Bridging the digital divide by teaching essential computer and internet skills.",
      mainImage: boyRaisingHandImg,
      gallery: [boyRaisingHandImg, studyGroupImg, worldBookDayImg, kidReadingImg],
      stats: {
        beneficiaries: "1,200+",
        duration: "1 Year",
        locations: "8 Centers"
      },
      achievements: ["8 Computer Labs", "400 Students Trained", "Digital Courses Created"],
      date: "2024 - Present"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openGallery = (item, imageIndex = 0) => {
    setActiveGallery(item);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => 
        prev === activeGallery.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? activeGallery.gallery.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (activeGallery) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [activeGallery]);

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>
          Explore our impactful work across Africa and beyond. From educational initiatives 
          to community development projects, witness the transformation we've created together 
          with our partners and beneficiaries.
        </p>
      </section>

      {/* Filter Categories */}
      <section className="portfolio-filter">
        <div className="filter-tabs">
          {portfolioCategories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="portfolio-container">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image" onClick={() => openGallery(item)}>
                <img src={item.mainImage} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <span className="portfolio-type">
                      {item.type === 'photo' ? <FaImages /> : <FaVideo />}
                      {item.gallery.length} Photos
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <button className="view-gallery">
                    <FaImages /> View Gallery
                  </button>
                </div>
              </div>
              
              <div className="portfolio-details">
                <div className="portfolio-meta">
                  <span className="portfolio-date">
                    <FiCalendar /> {item.date}
                  </span>
                  <span className="portfolio-category">
                    {portfolioCategories.find(cat => cat.id === item.category)?.icon}
                    {portfolioCategories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
                
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                
                <div className="portfolio-stats">
                  <div className="stat">
                    <FiUsers className="stat-icon" />
                    <span>{item.stats.beneficiaries}</span>
                    <small>Beneficiaries</small>
                  </div>
                  <div className="stat">
                    <FiCalendar className="stat-icon" />
                    <span>{item.stats.duration}</span>
                    <small>Duration</small>
                  </div>
                  <div className="stat">
                    <FiMapPin className="stat-icon" />
                    <span>{item.stats.locations}</span>
                    <small>Locations</small>
                  </div>
                </div>
                
                <div className="portfolio-achievements">
                  <h4><FiAward /> Key Achievements</h4>
                  <ul>
                    {item.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Modal */}
      {activeGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={closeGallery}>×</button>
            
            <div className="gallery-header">
              <h3>{activeGallery.title}</h3>
              <span>{currentImageIndex + 1} / {activeGallery.gallery.length}</span>
            </div>
            
            <div className="gallery-main">
              <button className="gallery-nav prev" onClick={prevImage}>
                <FiChevronLeft />
              </button>
              
              <div className="gallery-image">
                <img src={activeGallery.gallery[currentImageIndex]} alt={activeGallery.title} />
              </div>
              
              <button className="gallery-nav next" onClick={nextImage}>
                <FiChevronRight />
              </button>
            </div>
            
            <div className="gallery-thumbnails">
              {activeGallery.gallery.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`${activeGallery.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Impact Summary */}
      <section className="portfolio-impact">
        <h2>Portfolio Impact Summary</h2>
        <div className="impact-overview">
          <div className="impact-item">
            <span className="impact-number" ref={majorProjects.ref}>{majorProjects.count}</span>
            <span className="impact-label">Major Projects</span>
          </div>
          <div className="impact-item">
            <span className="impact-number" ref={livesTransformed.ref}>{livesTransformed.count}</span>
            <span className="impact-label">Lives Transformed</span>
          </div>
          <div className="impact-item">
            <span className="impact-number" ref={communitiesServed.ref}>{communitiesServed.count}</span>
            <span className="impact-label">Communities Served</span>
          </div>
          <div className="impact-item">
            <span className="impact-number" ref={focusAreas.ref}>{focusAreas.count}</span>
            <span className="impact-label">Focus Areas</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>Want to Be Part of Our Next Project?</h2>
          <p>
            Join us in creating more inspiring stories and transforming lives 
            across Africa. Your support makes these achievements possible.
          </p>
          <div className="cta-buttons">
            <button className="donate">Fund a Project</button>
            <button className="volunteer">Volunteer</button>
            <button className="contact">Get in Touch</button>
          </div>
        </div>
      </section>
    </main>
  );
}