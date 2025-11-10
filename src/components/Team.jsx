import React, { useState } from 'react';
import './AboutScreen.css';
import './Team.css';
import { FiChevronLeft, FiChevronRight, FiLinkedin, FiTwitter, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import founderImg from '../assets/founder_img.png';
import teamImg from '../assets/team/team-1.png';
import aboutImg from '../assets/about-us-pic.jpg';

export default function Team() {
  const [activeSlide, setActiveSlide] = useState(0);

  const teamSections = [
    {
      title: "Founder",
      members: [
        {
          name: "Mr. Derrick Puplampu",
          role: "Founder & Executive Director",
          bio: "Visionary leader with 9+ years of experience in transformational leadership and community development. Passionate about ethical leadership and sustainable impact.",
          image: founderImg,
          location: "Tema, Ghana",
          socials: {
            linkedin: "#",
            twitter: "#",
            email: "derrick@baefoundation.org"
          },
          achievements: ["9 Years Leadership", "12K+ Lives Impacted", "International Expansion"]
        }
      ]
    },
    {
      title: "Board of Trustees",
      members: [
        {
          name: "Dr. Sarah Johnson",
          role: "Board Chairperson",
          bio: "Distinguished academic and development expert with over 15 years in nonprofit governance and strategic planning.",
          image: teamImg,
          location: "Accra, Ghana",
          socials: {
            linkedin: "#",
            email: "sarah@baefoundation.org"
          },
          achievements: ["15+ Years Experience", "PhD Development Studies", "Strategic Planning Expert"]
        },
        {
          name: "Prof. Michael Asante",
          role: "Board Secretary",
          bio: "Professor of Social Sciences with expertise in community development and policy research.",
          image: aboutImg,
          location: "Kumasi, Ghana",
          socials: {
            linkedin: "#",
            email: "michael@baefoundation.org"
          },
          achievements: ["University Professor", "Policy Research", "Community Development"]
        },
        {
          name: "Mrs. Grace Mensah",
          role: "Board Treasurer",
          bio: "Certified Public Accountant with extensive experience in financial management for nonprofit organizations.",
          image: teamImg,
          location: "Tema, Ghana",
          socials: {
            linkedin: "#",
            email: "grace@baefoundation.org"
          },
          achievements: ["CPA Certified", "Financial Management", "Nonprofit Expert"]
        }
      ]
    },
    {
      title: "Ghanaian Chapter",
      members: [
        {
          name: "Emmanuel Kojo",
          role: "Country Director - Ghana",
          bio: "Dynamic leader overseeing all operations and programs in Ghana. Expert in youth empowerment and community mobilization.",
          image: teamImg,
          location: "Tema, Ghana",
          socials: {
            linkedin: "#",
            twitter: "#",
            email: "emmanuel@baefoundation.org"
          },
          achievements: ["5+ Years Leadership", "Youth Programs", "Community Mobilization"]
        },
        {
          name: "Abena Osei",
          role: "Programs Manager",
          bio: "Passionate about education and women empowerment. Coordinates all educational and gender-focused initiatives.",
          image: aboutImg,
          location: "Accra, Ghana",
          socials: {
            linkedin: "#",
            instagram: "#",
            email: "abena@baefoundation.org"
          },
          achievements: ["Education Expert", "Women Empowerment", "Program Coordination"]
        },
        {
          name: "Kwame Asiedu",
          role: "Field Operations Coordinator",
          bio: "Ensures seamless execution of field activities and maintains strong relationships with partner communities.",
          image: teamImg,
          location: "Cape Coast, Ghana",
          socials: {
            facebook: "#",
            email: "kwame@baefoundation.org"
          },
          achievements: ["Field Operations", "Community Relations", "Project Implementation"]
        }
      ]
    },
    {
      title: "Gambian Chapter",
      members: [
        {
          name: "Fatou Sanyang",
          role: "Country Director - The Gambia",
          bio: "Pioneering leader of BAE Foundation's international expansion. Expert in cross-cultural program adaptation.",
          image: aboutImg,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "#",
            twitter: "#",
            email: "fatou@baefoundation.org"
          },
          achievements: ["International Expansion", "Cultural Adaptation", "Strategic Planning"]
        },
        {
          name: "Modou Jallow",
          role: "Community Outreach Manager",
          bio: "Builds strong connections with local communities and ensures programs meet specific regional needs.",
          image: teamImg,
          location: "Serrekunda, The Gambia",
          socials: {
            facebook: "#",
            email: "modou@baefoundation.org"
          },
          achievements: ["Community Outreach", "Local Partnerships", "Cultural Integration"]
        },
        {
          name: "Awa Ceesay",
          role: "Youth Programs Coordinator",
          bio: "Focuses on youth empowerment and leadership development programs tailored for Gambian communities.",
          image: aboutImg,
          location: "Brikama, The Gambia",
          socials: {
            instagram: "#",
            email: "awa@baefoundation.org"
          },
          achievements: ["Youth Development", "Leadership Programs", "Community Engagement"]
        }
      ]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % teamSections.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + teamSections.length) % teamSections.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      case 'instagram': return <FaInstagram />;
      case 'facebook': return <FaFacebook />;
      case 'email': return <FiMail />;
      default: return null;
    }
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="team-header">
        <h1>Our Team</h1>
        <p>
          Meet the passionate individuals driving change across Africa and beyond. 
          Our diverse team of leaders, experts, and changemakers work tirelessly 
          to create lasting impact in communities.
        </p>
      </section>

      {/* Team Slider */}
      <section className="team-slider">
        <div className="slider-header">
          <h2>{teamSections[activeSlide].title}</h2>
          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="slider-btn next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="slider-content">
          <div className="team-members">
            {teamSections[activeSlide].members.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-location">
                    <FiMapPin className="location-icon" />
                    <span>{member.location}</span>
                  </div>
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-achievements">
                    {member.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">{achievement}</span>
                    ))}
                  </div>
                  
                  <div className="member-socials">
                    {Object.entries(member.socials).map(([platform, link]) => (
                      <a key={platform} href={link} className="social-link">
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="dots-navigation">
          {teamSections.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${teamSections[index].title}`}
            />
          ))}
        </div>
      </section>

      {/* Team Stats */}
      <section className="team-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Volunteers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Departments</span>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-cta">
        <div className="cta-content">
          <h2>Join Our Team</h2>
          <p>
            Are you passionate about making a difference? We're always looking 
            for dedicated individuals to join our mission of transforming lives 
            across Africa and beyond.
          </p>
          <div className="cta-buttons">
            <button className="donate">View Open Positions</button>
            <button className="volunteer">Volunteer With Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
