import React, { useState } from 'react';
import { useCountUp, useCountUpFromString } from '../hooks/useCountUp';
import './AboutScreen.css';
import './Projects.css';
import { FiCalendar, FiMapPin, FiUsers, FiTarget, FiExternalLink, FiFilter } from 'react-icons/fi';
import { FaSearch, FaHeart, FaGraduationCap, FaHandsHelping, FaLeaf, FaGlobe, FaAward } from 'react-icons/fa';
import initiative1 from '../assets/initiatives/initiative-1.png';
import initiative2 from '../assets/initiatives/initiative-2.png';
import initiative3 from '../assets/initiatives/initiative-3.png';
import initiative4 from '../assets/initiatives/initiative-4.png';
import initiative5 from '../assets/initiatives/initiative-5.png';
import initiative6 from '../assets/initiatives/initiative-6.png';
import initiative7 from '../assets/initiatives/initiative-7.png';
import initiative8 from '../assets/initiatives/initiative-8.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Count-up animations for project stats
  const projectsCount = useCountUp(7, 2000); // Will be dynamic based on projects.length
  const livesImpacted = useCountUpFromString('12,000+', 2000);
  const focusAreas = useCountUp(4, 2000);
  const countries = useCountUp(2, 2000);

  const projectCategories = [
    { id: 'all', name: 'All Initiatives', icon: <FaGlobe /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'community', name: 'Community Development', icon: <FaHandsHelping /> },
    { id: 'leadership', name: 'Leadership & Ethics', icon: <FaAward /> },
    { id: 'women', name: 'Women Empowerment', icon: <FaHeart /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Fem-Virtutis (Female Power) Initiative",
      category: "women",
      description: "A women-focused initiative that empowers young girls and women to break gender bias and develop leadership and personal excellence.",
      image: initiative4,
      location: "Ghana, Gambia",
      startDate: "2019",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Empower women and girls to reach their full potential through education and leadership", "Promote female participation in global policy and advocacy"],
      achievements: ["Strengthened education and leadership capacity of female participants", "Built supportive community networks for women's empowerment"],
      tags: ["Women Empowerment", "Leadership", "Education"],
      detailedInfo: {
        overview: "Fem-Virtutis is the Foundation's flagship women-focused initiative designed to equip girls and women with confidence, leadership skills, and the capacity to break gender barriers. It nurtures strong, value-driven females capable of influencing communities and global spaces.",
        whatItDoes: [
          "Builds confidence, excellence, and leadership in young women",
          "Challenges gender bias in communities",
          "Provides educational, moral and skill-building support",
          "Helps young women understand and defend their rights",
          "Connects women to supportive networks and mentorship opportunities",
          "Promotes Kingdom-values-based leadership and integrity"
        ],
        whyItMatters: "Gender inequality continues to limit opportunities for women in education, leadership, and economic growth. Fem-Virtutis helps dismantle these barriers by equipping women with the tools to excel and lead.",
        impactHighlights: [
          "Strengthened personal and leadership capacity of young female participants",
          "Built community support systems that encourage female empowerment",
          "Inspired young women to pursue education, civic participation, and leadership roles"
        ]
      }
    },
    {
      id: 2,
      title: "Gospel Merges with Science Project",
      category: "education",
      description: "A STEM–spirituality blended program offering rural students STEM skills alongside Gospel-based moral formation.",
      image: initiative6,
      location: "Ghana",
      startDate: "2020",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Promote STEM education for rural high school students", "Build morally grounded innovators with strong ethical foundation"],
      achievements: ["Delivered hands-on STEM and computer-skills training to underserved rural students", "Provided spiritual and ethical guidance integrated into STEM learning"],
      tags: ["Education", "STEM", "Ethics"],
      detailedInfo: {
        overview: "This project blends science education with Christian moral formation, giving rural high-school students access to hands-on STEM skills while grounding them in values from the Gospel of Jesus Christ.",
        whatItDoes: [
          "Provides practical STEM training (science, ICT, experiments, labs)",
          "Integrates Gospel teachings for character and ethical development",
          "Supplies learning tools, materials, and equipment for hands-on learning",
          "Engages local communities and schools to sustain STEM access",
          "Helps rural learners compete academically with urban students"
        ],
        whyItMatters: "Rural students often lack STEM exposure, putting them at a disadvantage academically and professionally. This initiative bridges the gap by giving them both competency and moral direction.",
        impactHighlights: [
          "Empowered rural youth with real scientific and computer skills",
          "Strengthened moral and ethical awareness among participating students",
          "Encouraged more rural students to consider STEM pathways and higher education"
        ]
      }
    },
    {
      id: 3,
      title: "Before Anyone Else Foundation Scholar Program",
      category: "education",
      description: "A scholarship and mentorship program supporting talented students to excel academically and become future leaders.",
      image: initiative1,
      location: "Ghana, Gambia",
      startDate: "2021",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Provide financial and academic support to talented students", "Develop leadership capacity through training and mentorship"],
      achievements: ["Awarded scholarships covering tuition, materials, and learning support", "Built a growing network of empowered young leaders engaged in community service"],
      tags: ["Education", "Leadership", "Scholarship"],
      detailedInfo: {
        overview: "A comprehensive scholarship and mentorship program supporting brilliant but financially challenged students, shaping them into academically excellent, value-driven leaders.",
        whatItDoes: [
          "Provides full or partial scholarships (tuition, books, supplies)",
          "Offers mentorship from experienced leaders and professionals",
          "Gives students access to academic support tools and tutoring",
          "Provides leadership workshops and youth development sessions",
          "Engages students in community service to build social responsibility"
        ],
        whyItMatters: "Many gifted young Africans face financial or structural barriers that prevent them from reaching their full potential. This program ensures that no talent goes wasted due to economic limitations.",
        impactHighlights: [
          "Supported students who now excel academically and socially",
          "Created a growing network of young scholars committed to community transformation",
          "Helped scholars discover purpose, confidence, and leadership identity"
        ]
      }
    },
    {
      id: 4,
      title: "Naakaba Initiative (Policy & Action Think Tank)",
      category: "leadership",
      description: "A global-policy think tank conducting research and offering evidence-based recommendations for sustainable development.",
      image: initiative2,
      location: "Ghana, Gambia",
      startDate: "2020",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Evaluate and strengthen global policies using evidence-based research", "Produce actionable strategies that address emerging global issues"],
      achievements: ["Conducted analyses and provided recommendations for global policy gaps", "Built collaborations with policymakers, institutions, and stakeholders"],
      tags: ["Leadership", "Policy", "Research"],
      detailedInfo: {
        overview: "Naakaba is a research-driven policy think tank dedicated to reviewing global policies and providing actionable recommendations that support sustainable development, justice, and good governance.",
        whatItDoes: [
          "Analyzes existing global, regional, and national policies",
          "Conducts research on emerging global issues (youth, climate, inequality, governance)",
          "Produces evidence-based recommendations for better policymaking",
          "Trains policymakers, NGOs, and leaders in policy understanding and implementation",
          "Advocates for effective, ethical, and people-centered policies",
          "Collaborates with institutions, governments, and academics"
        ],
        whyItMatters: "Global challenges (inequality, conflict, climate change) require informed, actionable policies. Naakaba bridges the gap between policy ideas and real, practical solutions.",
        impactHighlights: [
          "Produced insightful analyses that address gaps in current global policies",
          "Fostered partnerships that strengthen policy advocacy and implementation",
          "Built capacity for young leaders interested in governance and development"
        ]
      }
    },
    {
      id: 5,
      title: "SparkitUP Project",
      category: "community",
      description: "A charity-focused initiative supporting orphanages, prisoners, the homeless, and community welfare programs.",
      image: initiative7,
      location: "Ghana",
      startDate: "2022",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Provide hope and support to marginalized groups through charitable outreach", "Strengthen compassion and social responsibility within communities"],
      achievements: ["Delivered emotional, educational, and material support to orphanages and prisons", "Implemented street outreach programs (food, clothing, health services) for vulnerable persons"],
      tags: ["Community", "Charity", "Welfare"],
      detailedInfo: {
        overview: "SparkitUP embodies compassion and social support. It reaches out to orphans, prisoners, homeless individuals, and vulnerable groups through practical acts of love, charity, and emotional encouragement.",
        whatItDoes: [
          "Organizes orphanage visits providing supplies, emotional care, and mentorship",
          "Conducts prison outreach promoting rehabilitation, hope, and reintegration support",
          "Runs \"Love on the Streets\" to support homeless individuals with food, clothing, and basic healthcare",
          "Hosts BaeLentine — a compassion-themed community bonding event",
          "Runs the Salt & Light Program focused on spiritual growth and personal development"
        ],
        whyItMatters: "Many people feel forgotten by society. SparkitUP restores dignity and gives hope to those facing extreme vulnerability.",
        impactHighlights: [
          "Provided necessities and emotional support to orphans and street individuals",
          "Improved rehabilitation pathways for inmates through positive engagement",
          "Fostered a culture of kindness among volunteers and communities"
        ]
      }
    },
    {
      id: 6,
      title: "SmarNova Pitch Competition & Conference",
      category: "education",
      description: "An innovation and entrepreneurship platform enabling high school students to solve real-world problems.",
      image: initiative5,
      location: "Ghana",
      startDate: "2021",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Build innovation, creativity, and problem-solving skills in students", "Promote leadership, teamwork, and ethical innovation"],
      achievements: ["Equipped students with mentorship, workshops, and pitch environments", "Inspired youth innovators who design practical, community-focused solutions"],
      tags: ["Education", "Innovation", "Entrepreneurship"],
      detailedInfo: {
        overview: "SmarNova is an innovation and entrepreneurship platform for high-school students, enabling them to develop solutions to real community problems while learning practical leadership skills.",
        whatItDoes: [
          "Hosts creativity and innovation workshops",
          "Provides entrepreneurship and pitch training",
          "Connects students with mentors and industry professionals",
          "Offers pitch competitions for student-built solutions",
          "Builds critical thinking, teamwork, and leadership skills",
          "Encourages students to create sustainable, community-focused projects"
        ],
        whyItMatters: "Young people often lack structured opportunities to innovate. SmarNova prepares them for real-world problem solving and future leadership.",
        impactHighlights: [
          "Inspired confident, solution-driven young innovators",
          "Strengthened school-to-industry linkages through mentorship",
          "Empowered students to turn ideas into practical community solutions"
        ]
      }
    },
    {
      id: 7,
      title: "Legacy SPOTS (Decentralized Community Hubs)",
      category: "community",
      description: "A decentralized regional development model empowering local teams to design and implement community-focused solutions.",
      image: initiative8,
      location: "Ghana & Gambia",
      startDate: "2022",
      status: "Ongoing",
      beneficiaries: "N/A",
      goals: ["Strengthen local leadership and decentralize community development", "Influence community-centered policies through regional empowerment"],
      achievements: ["Established grassroots structures for locally-led development", "Built sustainable systems that adapt to region-specific community needs"],
      tags: ["Community", "Leadership", "Development"],
      detailedInfo: {
        overview: "Legacy SPOTS decentralizes development by empowering regional teams to lead local projects, influence grassroots policy, and build context-specific solutions across Ghana and beyond.",
        whatItDoes: [
          "Establishes local hubs that design and run community projects",
          "Trains regional leaders in project management, advocacy, and leadership",
          "Promotes grassroot-level policy influence and civic participation",
          "Ensures development models are tailored to local needs",
          "Supports expansion of community impact across national and cross-border regions"
        ],
        whyItMatters: "Centralized development often misses the real needs of communities. Legacy SPOTS shifts power to local leaders who understand their community's unique challenges and opportunities.",
        impactHighlights: [
          "Enabled sustainable community transformation through local leadership",
          "Strengthened regional capacity for advocacy, service, and development",
          "Created scalable, community-rooted structures for long-term impact"
        ]
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing': return '#1520a6';
      case 'Completed': return '#28a745';
      case 'Planning': return '#ffc107';
      default: return '#6c757d';
    }
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="projects-header">
        <h1>Our Initiatives</h1>
        <p>
          Discover the transformative initiatives that are creating lasting impact 
          across Africa. From education and healthcare to environmental sustainability, 
          our projects are building stronger, more resilient communities.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="projects-filter">
        <div className="filter-container">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {projectCategories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="projects-container">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">
                    {projectCategories.find(cat => cat.id === project.category)?.icon}
                    {projectCategories.find(cat => cat.id === project.category)?.name}
                  </span>
                  <span className="project-year">
                    <FiCalendar /> {project.startDate}
                  </span>
                </div>
                
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="detail-item">
                    <FiMapPin className="detail-icon" />
                    <span>{project.location}</span>
                  </div>
                </div>
                
                <div className="project-goals">
                  <h4><FiTarget /> Key Goals</h4>
                  <ul>
                    {project.goals.slice(0, 2).map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-achievements">
                  <h4>Key Achievements</h4>
                  <div className="achievement-list">
                    {project.achievements.slice(0, 2).map((achievement, index) => (
                      <span key={index} className="achievement-tag">{achievement}</span>
                    ))}
                  </div>
                </div>
                
                <button className="project-link" onClick={() => setSelectedProject(project)}>
                  Learn More <FiExternalLink />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <h3>No initiatives found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

      {/* Impact Summary */}
      <section className="projects-impact">
        <h2>Our Collective Impact</h2>
        <div className="impact-stats">
          <div className="impact-stat">
            <span className="stat-number" ref={projectsCount.ref}>{projectsCount.count}</span>
            <span className="stat-label">Active Initiatives</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number" ref={livesImpacted.ref}>{livesImpacted.count}</span>
            <span className="stat-label">Lives Impacted</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number" ref={focusAreas.ref}>{focusAreas.count}</span>
            <span className="stat-label">Focus Areas</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number" ref={countries.ref}>{countries.count}</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="cta-content">
          <h2>Want to Support Our Initiatives?</h2>
          <p>
            Your contribution can help us expand these life-changing initiatives 
            and reach even more communities in need.
          </p>
          <div className="cta-buttons">
            <button className="donate">Donate Now</button>
            <button className="volunteer">Volunteer</button>
            <button className="partner">Partner With Us</button>
          </div>
        </div>
      </section>

      {/* Initiative Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-title-section">
                <h2>{selectedProject.title}</h2>
                <span className="modal-category">
                  {projectCategories.find(cat => cat.id === selectedProject.category)?.icon}
                  {projectCategories.find(cat => cat.id === selectedProject.category)?.name}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="modal-section-content">
                  <h3>Overview</h3>
                  <p>{selectedProject.detailedInfo.overview}</p>
                </div>
              </div>

              <div className="modal-section">
                <div className="modal-section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="modal-section-content">
                  <h3>What the Initiative Does</h3>
                  <ul>
                    {selectedProject.detailedInfo.whatItDoes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-section">
                <div className="modal-section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div className="modal-section-content">
                  <h3>Why It Matters</h3>
                  <p>{selectedProject.detailedInfo.whyItMatters}</p>
                </div>
              </div>

              <div className="modal-section">
                <div className="modal-section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="modal-section-content">
                  <h3>Impact Highlights</h3>
                  <ul>
                    {selectedProject.detailedInfo.impactHighlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
