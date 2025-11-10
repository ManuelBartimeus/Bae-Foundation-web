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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Count-up animations for project stats
  const projectsCount = useCountUp(7, 2000); // Will be dynamic based on projects.length
  const livesImpacted = useCountUpFromString('12,000+', 2000);
  const focusAreas = useCountUp(4, 2000);
  const countries = useCountUp(2, 2000);

  const projectCategories = [
    { id: 'all', name: 'All Projects', icon: <FaGlobe /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'health', name: 'Health & Wellness', icon: <FaHeart /> },
    { id: 'community', name: 'Community Development', icon: <FaHandsHelping /> },
    { id: 'environment', name: 'Environment', icon: <FaLeaf /> },
    { id: 'leadership', name: 'Leadership & Ethics', icon: <FaAward /> },
    { id: 'women', name: 'Women Empowerment', icon: <FaHeart /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Education for All Initiative",
      category: "education",
      description: "Providing quality education and school supplies to underprivileged children across rural communities.",
      image: initiative1,
      location: "Rural Ghana & The Gambia",
      startDate: "2019",
      status: "Ongoing",
      beneficiaries: "2,500+",
      goals: ["Increase literacy rates", "Reduce school dropout", "Provide learning materials"],
      achievements: ["Built 5 classroom blocks", "Distributed 1,000+ textbooks", "Trained 50 teachers"],
      tags: ["Education", "Children", "Rural Development"]
    },
    {
      id: 2,
      title: "Clean Water Access Project",
      category: "health",
      description: "Installing water pumps and purification systems in communities lacking access to clean drinking water.",
      image: initiative2,
      location: "Northern Ghana",
      startDate: "2020",
      status: "Completed",
      beneficiaries: "1,800+",
      goals: ["Provide clean water access", "Reduce waterborne diseases", "Improve health outcomes"],
      achievements: ["Installed 12 water pumps", "Built 3 purification centers", "Trained 30 maintenance staff"],
      tags: ["Health", "Water", "Infrastructure"]
    },
    {
      id: 3,
      title: "Youth Leadership Academy",
      category: "education",
      description: "Empowering young leaders through skills training, mentorship, and leadership development programs.",
      image: initiative3,
      location: "Tema, Ghana",
      startDate: "2021",
      status: "Ongoing",
      beneficiaries: "800+",
      goals: ["Develop leadership skills", "Create employment opportunities", "Foster innovation"],
      achievements: ["Graduated 200 leaders", "Created 50+ jobs", "Launched 15 startups"],
      tags: ["Youth", "Leadership", "Skills Development"]
    },
    {
      id: 4,
      title: "Women Empowerment Program",
      category: "community",
      description: "Supporting women entrepreneurs through microfinance, skills training, and business development.",
      image: initiative4,
      location: "Banjul, The Gambia",
      startDate: "2020",
      status: "Ongoing",
      beneficiaries: "600+",
      goals: ["Economic empowerment", "Gender equality", "Financial independence"],
      achievements: ["Provided 400 microloans", "Trained 300 women", "Started 100 businesses"],
      tags: ["Women", "Entrepreneurship", "Microfinance"]
    },
    {
      id: 5,
      title: "Tree Planting Campaign",
      category: "environment",
      description: "Large-scale reforestation efforts to combat climate change and restore degraded landscapes.",
      image: initiative5,
      location: "Multiple Locations",
      startDate: "2022",
      status: "Ongoing",
      beneficiaries: "5,000+",
      goals: ["Combat deforestation", "Improve air quality", "Create green jobs"],
      achievements: ["Planted 10,000+ trees", "Restored 50 hectares", "Engaged 200 volunteers"],
      tags: ["Environment", "Climate Action", "Sustainability"]
    },
    {
      id: 6,
      title: "Healthcare Mobile Clinics",
      category: "health",
      description: "Bringing essential healthcare services to remote communities through mobile medical units.",
      image: initiative6,
      location: "Rural Communities",
      startDate: "2021",
      status: "Ongoing",
      beneficiaries: "3,200+",
      goals: ["Improve healthcare access", "Preventive care", "Maternal health"],
      achievements: ["Conducted 500+ checkups", "Vaccinated 800 children", "Trained 25 health workers"],
      tags: ["Healthcare", "Mobile Services", "Rural Health"]
    },
    {
      id: 7,
      title: "Digital Literacy Program",
      category: "education",
      description: "Teaching computer skills and digital literacy to bridge the technology gap in underserved communities.",
      image: initiative7,
      location: "Urban & Rural Areas",
      startDate: "2022",
      status: "Ongoing",
      beneficiaries: "1,200+",
      goals: ["Bridge digital divide", "Tech skills training", "Online opportunities"],
      achievements: ["Set up 8 computer labs", "Trained 400 students", "Created online courses"],
      tags: ["Technology", "Digital Skills", "Innovation"]
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
        <h1>Our Projects</h1>
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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            <span className="filter-label">
              <FiFilter /> Filter by Category:
            </span>
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
                <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                  {project.status}
                </div>
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
                  <div className="detail-item">
                    <FiUsers className="detail-icon" />
                    <span>{project.beneficiaries} Beneficiaries</span>
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
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <button className="project-link">
                  Learn More <FiExternalLink />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <h3>No projects found</h3>
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
          <h2>Want to Support Our Projects?</h2>
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
    </main>
  );
}
