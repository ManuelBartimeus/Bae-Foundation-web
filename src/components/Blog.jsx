import React, { useState } from 'react';
import './AboutScreen.css';
import './Blog.css';
import { FiCalendar, FiUser, FiClock, FiTag, FiSearch, FiArrowRight, FiBookOpen, FiHeart, FiShare2 } from 'react-icons/fi';
import { FaGraduationCap, FaHandsHelping, FaLeaf, FaHeart, FaUsers, FaNewspaper } from 'react-icons/fa';

// Import images
import aboutImg from '../assets/about-us-pic.jpg';
import volunteerImg from '../assets/volunteer.jpg';
import studyGroupImg from '../assets/study-group-african-people_23-2149156390.jpg';
import africanWomanImg from '../assets/african-woman-teaching-children-class.jpg';
import kidsEnjoyingImg from '../assets/african-kids-enjoying-life_23-2151438340.jpg';
import boyRaisingHandImg from '../assets/boy-rising-hand-class_23-2150814449.jpg';
import worldBookDayImg from '../assets/world-book-day-celebration_23-2151245079.jpg';
import kidReadingImg from '../assets/kid-reading.jpg';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogCategories = [
    { id: 'all', name: 'All Posts', icon: <FaNewspaper /> },
    { id: 'impact-stories', name: 'Impact Stories', icon: <FaHeart /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'community', name: 'Community', icon: <FaHandsHelping /> },
    { id: 'sustainability', name: 'Sustainability', icon: <FaLeaf /> },
    { id: 'leadership', name: 'Leadership', icon: <FaUsers /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "From Dropout to Graduate: Maria's Inspiring Journey",
      category: "impact-stories",
      excerpt: "Discover how BAE Foundation's education program transformed Maria's life from a school dropout to a university graduate, now inspiring her entire community.",
      content: "Maria's story is one of resilience, determination, and the transformative power of education...",
      image: africanWomanImg,
      author: "Sarah Johnson",
      date: "2025-10-20",
      readTime: 5,
      tags: ["Education", "Success Stories", "Women Empowerment"],
      featured: true,
      likes: 156,
      shares: 42
    },
    {
      id: 2,
      title: "Building Sustainable Communities: Our Tree Planting Initiative",
      category: "sustainability",
      excerpt: "Learn how our reforestation efforts are not just combating climate change, but creating green jobs and improving livelihoods across rural Africa.",
      content: "Environmental sustainability goes hand in hand with community development...",
      image: aboutImg,
      author: "Emmanuel Kojo",
      date: "2025-10-18",
      readTime: 7,
      tags: ["Environment", "Climate Action", "Green Jobs"],
      featured: true,
      likes: 203,
      shares: 67
    },
    {
      id: 3,
      title: "Digital Literacy: Bridging the Technology Gap",
      category: "education",
      excerpt: "How our digital literacy programs are preparing young Africans for the digital economy and creating new opportunities in remote communities.",
      content: "In today's interconnected world, digital skills are no longer a luxury...",
      image: studyGroupImg,
      author: "Abena Osei",
      date: "2025-10-15",
      readTime: 6,
      tags: ["Technology", "Digital Skills", "Youth Development"],
      featured: false,
      likes: 98,
      shares: 23
    },
    {
      id: 4,
      title: "Community Health: Mobile Clinics Reaching Remote Villages",
      category: "community",
      excerpt: "Explore how our mobile health clinics are bringing essential medical services to underserved communities, saving lives one village at a time.",
      content: "Access to healthcare is a fundamental human right...",
      image: volunteerImg,
      author: "Dr. Michael Asante",
      date: "2025-10-12",
      readTime: 8,
      tags: ["Healthcare", "Rural Development", "Community Service"],
      featured: false,
      likes: 134,
      shares: 38
    },
    {
      id: 5,
      title: "Youth Leadership Summit 2025: Shaping Tomorrow's Leaders",
      category: "leadership",
      excerpt: "Highlights from our annual Youth Leadership Summit where 500+ young changemakers gathered to learn, network, and plan for Africa's future.",
      content: "Leadership development is at the heart of sustainable change...",
      image: boyRaisingHandImg,
      author: "Fatou Sanyang",
      date: "2025-10-10",
      readTime: 4,
      tags: ["Leadership", "Youth", "Networking"],
      featured: false,
      likes: 187,
      shares: 55
    },
    {
      id: 6,
      title: "Women Entrepreneurs: Breaking Barriers in The Gambia",
      category: "impact-stories",
      excerpt: "Meet the incredible women who are transforming their communities through entrepreneurship, supported by our microfinance and training programs.",
      content: "Empowering women economically has a multiplier effect on families and communities...",
      image: kidsEnjoyingImg,
      author: "Grace Mensah",
      date: "2025-10-08",
      readTime: 6,
      tags: ["Women Empowerment", "Entrepreneurship", "Microfinance"],
      featured: true,
      likes: 221,
      shares: 73
    },
    {
      id: 7,
      title: "Reading for Life: Celebrating World Book Day Across Africa",
      category: "education",
      excerpt: "Join us as we celebrate literacy and the joy of reading with thousands of children across Ghana and The Gambia during our World Book Day festivities.",
      content: "Reading opens doors to endless possibilities...",
      image: worldBookDayImg,
      author: "Kwame Asiedu",
      date: "2025-10-05",
      readTime: 5,
      tags: ["Literacy", "Reading", "Children"],
      featured: false,
      likes: 112,
      shares: 29
    },
    {
      id: 8,
      title: "Innovation in Education: Technology Solutions for Remote Learning",
      category: "education",
      excerpt: "Discover how we're leveraging technology to bring quality education to even the most remote areas, ensuring no child is left behind.",
      content: "The digital revolution has created unprecedented opportunities...",
      image: kidReadingImg,
      author: "Modou Jallow",
      date: "2025-10-03",
      readTime: 7,
      tags: ["EdTech", "Innovation", "Remote Learning"],
      featured: false,
      likes: 89,
      shares: 19
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryIcon = (categoryId) => {
    const category = blogCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : <FaNewspaper />;
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="blog-header">
        <h1>Our Blog</h1>
        <p>
          Stay connected with the latest stories, insights, and updates from the field. 
          Discover the impact we're creating together and get inspired by the 
          transformative journeys of the communities we serve.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="blog-controls">
        <div className="controls-container">
          <div className="search-section">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="category-tabs">
            {blogCategories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'all' && (
        <section className="featured-posts">
          <h2>Featured Stories</h2>
          <div className="featured-grid">
            {featuredPosts.slice(0, 3).map(post => (
              <article key={post.id} className="featured-post">
                <div className="featured-image">
                  <img src={post.image} alt={post.title} />
                  <div className="featured-overlay">
                    <span className="featured-badge">Featured</span>
                  </div>
                </div>
                <div className="featured-content">
                  <div className="post-meta">
                    <span className="post-category">
                      {getCategoryIcon(post.category)}
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="post-date">
                      <FiCalendar /> {formatDate(post.date)}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="author-info">
                      <FiUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="read-time">
                      <FiClock />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <button className="read-more">
                    Read Full Story <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Main Blog Grid */}
      <section className="blog-grid">
        <div className="blog-main">
          <div className="posts-container">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-post">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  {post.featured && <span className="post-badge">Featured</span>}
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-category">
                      {getCategoryIcon(post.category)}
                      {blogCategories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="post-date">
                      <FiCalendar /> {formatDate(post.date)}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        <FiTag /> {tag}
                      </span>
                    ))}
                  </div>
                  <div className="post-footer">
                    <div className="post-stats">
                      <div className="author-info">
                        <FiUser />
                        <span>{post.author}</span>
                      </div>
                      <div className="read-time">
                        <FiClock />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    <div className="post-actions">
                      <button className="action-btn">
                        <FiHeart /> {post.likes}
                      </button>
                      <button className="action-btn">
                        <FiShare2 /> {post.shares}
                      </button>
                    </div>
                  </div>
                  <button className="read-more">
                    Read More <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <FiBookOpen className="no-posts-icon" />
              <h3>No articles found</h3>
              <p>Try adjusting your search or browse different categories.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <div className="recent-posts">
              {recentPosts.map(post => (
                <div key={post.id} className="recent-post">
                  <img src={post.image} alt={post.title} />
                  <div className="recent-content">
                    <h4>{post.title}</h4>
                    <span className="recent-date">{formatDate(post.date)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Popular Tags</h3>
            <div className="popular-tags">
              {['Education', 'Community', 'Health', 'Leadership', 'Technology', 'Environment', 'Youth', 'Women Empowerment'].map((tag, index) => (
                <span key={index} className="popular-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-section newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest impact stories and updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>
      </section>

      {/* Call to Action */}
      <section className="blog-cta">
        <div className="cta-content">
          <h2>Share Your Story</h2>
          <p>
            Have an inspiring story or experience with BAE Foundation? 
            We'd love to hear from you and share your journey with our community.
          </p>
          <div className="cta-buttons">
            <button className="submit-story">Submit Your Story</button>
            <button className="newsletter">Subscribe to Newsletter</button>
            <button className="social">Follow Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}