import React, { useState } from 'react';
import './AboutScreen.css';
import './Team.css';
import { FiChevronLeft, FiChevronRight, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import founderImg from '../assets/founder_img.png';
import teamImg from '../assets/team/team-1.png';
import aboutImg from '../assets/about-us-pic.jpg';

// Gambian Chapter Team Images
import aliciaMacauley from '../assets/team/alicia_macauley.jpeg';
import philipKanfrom from '../assets/team/philip_kanfrom.jpg';
import ceceliaWuday from '../assets/team/cecilia_wuday.jpeg';
import georgianEda from '../assets/team/georgian_eda.jpeg';
import abigailBennett from '../assets/team/abigail_bennett.jpeg';
import sarataCeesay from '../assets/team/sarata_ceesay.jpeg';

// Ghanaian Chapter Team Images
import manuelBartimeus from '../assets/team/manuel_bartimeus.png';

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
            linkedin: "https://www.linkedin.com/in/derrick-p-006672114/",
            instagram: "https://www.instagram.com/capt.derrick_pope/",
            email: "mailto:derrick@baefoundation.org"
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
            linkedin: "https://linkedin.com/in/sarah-johnson",
            email: "sarah@baefoundation.org"
          },
          achievements: ["15+ Years Experience", "PhD Development Studies", "Strategic Planning Expert"]
        },
        {
          name: "Prof. Michael Asante",
          role: "Board Secretary",
          bio: "Professor of Social Sciences with expertise in community development and policy research.",
          image: teamImg,
          location: "Kumasi, Ghana",
          socials: {
            linkedin: "https://linkedin.com/in/michael-asante",
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
            linkedin: "https://linkedin.com/in/grace-mensah",
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
          name: "Manuel Bartimeus",
          role: "IT & Digital Systems Manager",
          bio: "Technology innovator driving digital transformation and systems infrastructure for BAE Foundation. Specializes in web development, digital marketing, and IT solutions that amplify the foundation's reach and operational efficiency.",
          image: manuelBartimeus,
          location: "Tema, Ghana",
          socials: {
            linkedin: "https://www.linkedin.com/in/manuel-bartimeus-1a849b256/",
            instagram: "https://www.instagram.com/the.generalhimself/",
            email: "mailto:manuelbartimeus@gmail.com"
          },
          achievements: ["Digital Infrastructure", "Web Development", "IT Strategy"]
        },
        {
          name: "Emmanuel Kojo",
          role: "Country Director - Ghana",
          bio: "Dynamic leader overseeing all operations and programs in Ghana. Expert in youth empowerment and community mobilization.",
          image: teamImg,
          location: "Tema, Ghana",
          socials: {
            linkedin: "https://linkedin.com/in/emmanuel-kojo",
            instagram: "https://instagram.com/emmanuel.kojo",
            email: "emmanuel@baefoundation.org"
          },
          achievements: ["5+ Years Leadership", "Youth Programs", "Community Mobilization"]
        },
        {
          name: "Abena Osei",
          role: "Programs Manager",
          bio: "Passionate about education and women empowerment. Coordinates all educational and gender-focused initiatives.",
          image: teamImg,
          location: "Accra, Ghana",
          socials: {
            linkedin: "https://linkedin.com/in/abena-osei",
            instagram: "https://instagram.com/abena.osei",
            email: "abena@baefoundation.org"
          },
          achievements: ["Education Expert", "Women Empowerment", "Program Coordination"]
        }
      ]
    },
    {
      title: "Gambian Chapter",
      members: [
        {
          name: "Alicia Macauley",
          role: "Country Director - The Gambia",
          bio: "Visionary leader spearheading BAE Foundation's international expansion in The Gambia. Passionate about youth empowerment, education equity, and building sustainable community development programs that transform lives.",
          image: aliciaMacauley,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "http://linkedin.com/in/alice-sally-macauley-91b24128a",
            instagram: "https://www.instagram.com/its_alicia_019",
            email: "alicia@baefoundation.org"
          },
          achievements: ["International Expansion", "Youth Leadership", "Strategic Planning"]
        },
        {
          name: "Philip Kanform",
          role: "Community Engagement Manager",
          bio: "Dedicated community advocate building bridges between BAE Foundation and local Gambian communities. Skilled in stakeholder engagement, grassroots mobilization, and culturally-responsive program design that honors local traditions while driving progress.",
          image: philipKanfrom,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://linkedin.com/in/philip-kanform",
            instagram: "https://instagram.com/philip.kanform",
            email: "philip@baefoundation.org"
          },
          achievements: ["Community Mobilization", "Local Partnerships", "Program Implementation"]
        },
        {
          name: "Cecelia Wuday Sanyang",
          role: "Women's Empowerment Coordinator",
          bio: "Champion for gender equality and women's rights in The Gambia. Leads the Fem-Virtutis initiative, empowering girls and women through education, skills training, and leadership development programs that break barriers and create opportunities.",
          image: ceceliaWuday,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://linkedin.com/in/cecelia-sanyang",
            instagram: "https://instagram.com/cecelia.sanyang",
            email: "cecelia@baefoundation.org"
          },
          achievements: ["Women Empowerment", "Fem-Virtutis Programs", "Gender Advocacy"]
        },
        {
          name: "Georgian Eda Badjie",
          role: "Education Programs Officer",
          bio: "Education specialist dedicated to expanding access to quality learning for underserved youth. Coordinates scholarship programs, mentorship initiatives, and STEM education projects that unlock potential and open pathways to success.",
          image: georgianEda,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://linkedin.com/in/georgian-badjie",
            instagram: "https://instagram.com/georgian.badjie",
            email: "georgian@baefoundation.org"
          },
          achievements: ["Education Access", "Scholarship Programs", "STEM Initiatives"]
        },
        {
          name: "Abigail Bennett Edet",
          role: "Youth Development Coordinator",
          bio: "Dynamic youth advocate focused on leadership development and capacity building for Gambian young people. Designs and implements programs that cultivate confidence, critical thinking, and civic engagement among the next generation of leaders.",
          image: abigailBennett,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://linkedin.com/in/abigail-edet",
            instagram: "https://instagram.com/abigail.edet",
            email: "abigail@baefoundation.org"
          },
          achievements: ["Youth Leadership", "Capacity Building", "Program Development"]
        },
        {
          name: "Sarata Ceesay",
          role: "Communications & Outreach Officer",
          bio: "Creative communications professional amplifying BAE Foundation's impact across The Gambia. Manages social media, community outreach campaigns, and storytelling initiatives that showcase the foundation's work and inspire community participation.",
          image: sarataCeesay,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://linkedin.com/in/sarata-ceesay",
            instagram: "https://instagram.com/sarata.ceesay",
            email: "sarata@baefoundation.org"
          },
          achievements: ["Digital Communications", "Community Outreach", "Brand Storytelling"]
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
      case 'instagram': return <FaInstagram />;
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
                <div className="member-header">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-header-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="member-location">
                      <FiMapPin className="location-icon" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-achievements">
                    {member.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">{achievement}</span>
                    ))}
                  </div>
                  
                  <div className="member-socials">
                    {Object.entries(member.socials).map(([platform, link]) => (
                      <a key={platform} href={link} className="team-social-link">
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
