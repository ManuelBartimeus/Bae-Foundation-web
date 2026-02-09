import React, { useState } from 'react';
import './AboutScreen.css';
import './Team.css';
import { FiChevronLeft, FiChevronRight, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
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
import sarataCeesay from '../assets/team/sarata_ceesay.png';
import amabenyiwah from "../assets/team/ama_benyiwah.jpeg";
import vanessakwao from "../assets/team/vanessa_kwao.jpeg";
import esunamaseye from "../assets/team/esunam_aseye.jpeg";
import reynardnutakor from "../assets/team/reynard_nutakor.jpeg";
import nanayirenkyi from "../assets/team/nana_yirenkyi.jpeg";
import doreendotse from "../assets/team/doreen_dotse.jpg";
import agnesgomez from "../assets/team/agnes_gomez.jpeg";
import sarahking from "../assets/team/sarah_king.png";

// Ghanaian Chapter Team Images
import manuelBartimeus from '../assets/team/manuel_bartimeus.png';

export default function Team({ onNavigate }) {
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
            linkedin: "https://linkedin.com//in/derrick-p-006672114/",
            instagram: "https://www.instagram.com/capt.derrick_pope/",
            email: "mailto:baefoundation3@gmail.com"
          },
          achievements: ["9 Years Leadership", "12K+ Lives Impacted", "International Expansion"]
        }
      ]
    },
    // {
    //   title: "Board of Trustees",
    //   members: [
    //     {
    //       name: "Dr. Sarah Johnson",
    //       role: "Board Chairperson",
    //       bio: "Distinguished academic and development expert with over 15 years in nonprofit governance and strategic planning.",
    //       image: teamImg,
    //       location: "Accra, Ghana",
    //       socials: {
    //         linkedin: "https://linkedin.com/in/sarah-johnson",
    //         email: "sarah@baefoundation.org"
    //       },
    //       achievements: ["15+ Years Experience", "PhD Development Studies", "Strategic Planning Expert"]
    //     },
    //     {
    //       name: "Prof. Michael Asante",
    //       role: "Board Secretary",
    //       bio: "Professor of Social Sciences with expertise in community development and policy research.",
    //       image: teamImg,
    //       location: "Kumasi, Ghana",
    //       socials: {
    //         linkedin: "https://linkedin.com/in/michael-asante",
    //         email: "michael@baefoundation.org"
    //       },
    //       achievements: ["University Professor", "Policy Research", "Community Development"]
    //     },
    //     {
    //       name: "Mrs. Grace Mensah",
    //       role: "Board Treasurer",
    //       bio: "Certified Public Accountant with extensive experience in financial management for nonprofit organizations.",
    //       image: teamImg,
    //       location: "Tema, Ghana",
    //       socials: {
    //         linkedin: "https://linkedin.com/in/grace-mensah",
    //         email: "grace@baefoundation.org"
    //       },
    //       achievements: ["CPA Certified", "Financial Management", "Nonprofit Expert"]
    //     }
    //   ]
    // },
    {
      title: "Ghanaian Chapter",
      members: [
        {
          name: "Ama Benyiwah Quansah",
          role: "Director, Administration and General Services",
          bio: "Oversees administration and general services to support organizational goals.",
          image: amabenyiwah,
          location: "Accra, Ghana",
          socials: {
            linkedin: "https://www.linkedin.com/in/ahmah-bee-quansah-92b867268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            instagram: "https://www.instagram.com/every_thingsome10?igsh=OW1pNTZ2YXd2aXlr&utm_source=qr",
            email: "mailto: ahybee98@gmail.com"
          },
          achievements: ["Project Management", "Youth Programs", "Local Government Service"]
        },
        {
          name: "Unity Reynard Nutakor",
          role: "Director, Operations and Logistics",
          bio: "Directs operations and logistics to ensure smooth project delivery.",
          image: reynardnutakor,
          location: "Accra, Ghana",
          socials: {
            linkedin: "https://www.linkedin.com/in/reynard-nutakor-a60699379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            email: "mailto: reynardnutakor24@gmail.com"
          },
          achievements: ["Technical Expert", "Group Leadership", "Human Relations"]
        },
        {
          name: "Vanessa Kwao",
          role: "Director,  Sponsorship and Partnerships",
          bio: "Directs sponsorship and partnership efforts to support organizational mission.",
          image: vanessakwao,
          location: "Accra, Ghana",
          socials: {
      
            instagram: "https://www.instagram.com/vanessa_kwao?igsh=YzE1ejFsdDlhdDZi&utm_source=qr",
            email: "mailto: vannykwao@gmail.com"
          },
          achievements: ["Founder & CEO", "Real Estate Solutions", "Human Relations"]
        },
        {
          name: "Esunam Aseye Ami Akpaloo",
          role: "Volta Legacy Spot Lead",
          bio: "Leads Volta region initiatives for community development and empowerment.",
          image: esunamaseye,
          location: "Ho, Ghana",
          socials: {
            instagram: "https://www.instagram.com/aseyeesunam/?utm_source=ig_web_button_share_sheet",
            email: "mailto: aseyeesunam@gmail.com"
          },
          achievements: ["Nature Enthusiast", "Sustainable Solutions", "Environmental Activist"]
        },
        {
          name: "Doreen Selassie Dotse ",
          role: "Ashanti Legacy Spot Lead",
          bio: "Leads Ashanti region programs for youth development and empowerment.",
          image: doreendotse,
          location: "Kumasi, Ghana",
          socials: {
            instagram: "https://www.instagram.com/sel.asiii/?utm_source=ig_web_button_share_sheet",
            email: "mailto: doreenselasi67@gmail.com"
          },
          achievements: ["Youth Programs", "Youth Empowerment", "Girl-Child Activist"]
        },
        {
          name: "Nana Ankama Yirenkyi ",
          role: "Ashanti Legacy Spot Deputy Lead",
          bio: "Assists Ashanti region lead in community and youth programs.",
          image: nanayirenkyi,
          location: "Kumasi, Ghana",
          socials: {
            instagram: "https://www.instagram.com/op.nana_/?utm_source=ig_web_button_share_sheet",
            email: "mailto: nayirenkyi05@gmail.com"
          },
          achievements: ["Multimedia Expert", "Community Mobilization", "Youth Development"]
        },
        {
          name: "Manuel Bartimeus",
          role: "IT & Digital Systems Manager",
          bio: "Technology innovator driving digital transformation and systems infrastructure for BAE Foundation.",
          image: manuelBartimeus,
          location: "Tema, Ghana",
          socials: {
            linkedin: "https://www.linkedin.com/in/manuel-bartimeus-1a849b256/",
            instagram: "https://www.instagram.com/the.generalhimself/",
            email: "mailto:manuelbartimeus@gmail.com"
          },
          achievements: ["Digital Solutions Expert", "Creative Consultant", "Business Strategist"]
        }
      ]
    },
    {
      title: "Gambian Chapter",
      members: [
        {
          name: "Agnes Gomez",
          role: "Country Director",
          bio: "Directs country efforts to foster community growth and empowerment.",
          image: agnesgomez,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://www.linkedin.com/in/agnes-gomez-4335142a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            facebook: "https://www.facebook.com/share/1BuifUQxx3/?mibextid=wwXIfr",
            email: "mailto: agnesgomez05@gmail.com"
          },
          achievements: ["Policy Reformer", "Public Speaker", "Youth & Women Advocate"]
        },
        {
          name: "Alice Sally Macauley",
          role: "Programs and Projects Lead",
          bio: "Leads programs and projects for community impact and growth.",
          image: aliciaMacauley,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "http://linkedin.com/in/alice-sally-macauley-91b24128a",
            instagram: "https://www.instagram.com/its_alicia_019",
            email: "mailto: sallymacauleyalice@gmail.com"
          },
          achievements: ["Public Healthcare", "Hairstylist", "Travel Enthusiast"]
        },
        {
          name: "Sarata Ceesay",
          role: "Sponsorship and Partnerships Lead",
          bio: "Manages sponsorship and partnerships to secure resources and support.",
          image: sarataCeesay,
          location: "Banjul, The Gambia",
          socials: {
            facebook: "https://www.facebook.com/share/17wAZEuftY/?mibextid=wwXIfr",
            x: "https://x.com/ceesaysarata?s=11&t=xVnB7_I_z6Lx6MlqVZ70xA",
            email: "mailto: ceesaysarata92@gmail.com"
          },
          achievements: ["Public Speaker", "Youth Parliamentarian", "Political Enthusiast"]
        },
        {
          name: "Sarah Eyatundeh King",
          role: "Volunteer and Outreach Coordinator",
          bio: "Manages volunteer programs and outreach to expand community involvement.",
          image: sarahking,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://www.linkedin.com/in/sarah-king-8732642ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            instagram: "https://www.instagram.com/xx_sarah_05?igsh=NTkzdXd5Z2N3eHFm&utm_source=qr",
            email: "mailto: saraheya555@gmail.com"
          },
          achievements: ["Sales Specialist", "Administrative Expert", "Virtual Entrepreneur"]
        },
        {
          name: "Cecelia Wuday Sanyang",
          role: "Media and Communications Lead",
          bio: "Oversees media and communications for effective messaging and outreach.",
          image: ceceliaWuday,
          location: "Banjul, The Gambia",
          socials: {
            x: "https://x.com/cecciahogero?s=11",
            email: "mailto: ceccisphotography@gmail.com"
          },
          achievements: ["Visual Storyteller", "Photographer", "Girl-Child Advocate"]
        },
        {
          name: "Georgian Eda Badjie",
          role: "Deputy Media and Communications Officer",
          bio: "Assists in media and communications to promote organizational goals.",
          image: georgianEda,
          location: "Banjul, The Gambia",
          socials: {
            linkedin: "https://www.linkedin.com/in/georgian-badjie-958a08393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/gina__eda?igsh=MWRsaTJxMWtnYjdveg==",
            email: "mailto: badjiegeorgian12@gmail.com"
          },
          achievements: ["HR Management", "Project Management", "Policy Making Expert"]
        },
        {
          name: "Philip Kanform",
          role: "Operations and Logistics Officer",
          bio: "Manages operations and logistics to ensure efficient project delivery.",
          image: philipKanfrom,
          location: "Banjul, The Gambia",
          socials: {
            instagram: "https://www.instagram.com/philip_kanform?igsh=M2IwYXo2dTNiN2tm",
            facebook: "https://www.facebook.com/share/184NCjGZZL/",
            email: "mailto: pkanform10@gmail.com "
          },
          achievements: ["Music Minister", "Youth Programs", "Local Partnerships"]
        },
        {
          name: "Abigail Bennett Edet",
          role: "Finance Lead",
          bio: "Handles financial leadership and planning to ensure fiscal health.",
          image: abigailBennett,
          location: "Banjul, The Gambia",
          socials: {
            instagram: "https://instagram.com/abigail.edet"
          },
          achievements: ["Financial Projection", "Capacity Building", "Youth Development"]
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
      case 'facebook' : return <FaFacebook />; 
      case 'x' : return <FaXTwitter />;
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
                      <a key={platform} target="_blank" href={link} className="team-social-link">
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
            <button className="donate" onClick={() => onNavigate && onNavigate('donate')}>Empower Our Team</button>
            <button className="volunteer" onClick={() => onNavigate && onNavigate('contact')}>Volunteer With Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
