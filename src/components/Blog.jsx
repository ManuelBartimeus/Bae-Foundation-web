import React, { useState } from 'react';
import './AboutScreen.css';
import './Blog.css';
import { FiCalendar, FiUser, FiClock, FiTag, FiSearch, FiArrowRight, FiBookOpen, FiHeart, FiShare2, FiX } from 'react-icons/fi';
import { FaGraduationCap, FaHandsHelping, FaLeaf, FaHeart, FaUsers, FaNewspaper } from 'react-icons/fa';

// Import blog cover images
import article1Img from '../assets/blogcover/article1.jpg';
import article2Img from '../assets/blogcover/article2.jpg';
import article3Img from '../assets/blogcover/article3.jpg';

// Modal Component
function BlogModal({ post, isOpen, onClose }) {
  if (!isOpen || !post) return null;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FiX />
        </button>
        <img src={post.image} alt={post.title} className="modal-image" />
        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-category">{post.category}</span>
            <span className="modal-date"><FiCalendar /> {formatDate(post.date)}</span>
          </div>
          <h2>{post.title}</h2>
          <div className="modal-author-info">
            <span><FiUser /> {post.author}</span>
            <span><FiClock /> {post.readTime} min read</span>
          </div>
          <div className="modal-content-body">
            {post.fullContent}
          </div>
          <div className="modal-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="modal-tag">
                <FiTag /> {tag}
              </span>
            ))}
          </div>
          <div className="modal-actions">
            <button className="modal-action-btn">
              <FiHeart /> {post.likes}
            </button>
            <button className="modal-action-btn">
              <FiShare2 /> {post.shares}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "Raising Ethical Transformational Leaders: Why Values-Based Leadership Is Africa's Missing Infrastructure",
      category: "leadership",
      excerpt: "Ethical leadership is the invisible infrastructure that sustains societies. Explore why values-based leadership is Africa's greatest need for lasting development.",
      content: "Ethical leadership is the cornerstone of sustainable development...,",
      fullContent: (
        <div>
          <p>Africa's development conversation often focuses on visible infrastructure such as roads, bridges, hospitals, schools, and digital connectivity. These are necessary and urgent. Yet beneath every functioning system lies an invisible foundation that determines whether physical investments endure or decay. That foundation is leadership rooted in ethics, values, and responsibility to people.</p>

          <p>Across the continent, Africa is home to over 1.4 billion people, with more than 60 percent of the population under the age of 25. By 2050, Africa will host the world's largest workforce. This demographic shift presents an unprecedented opportunity for growth, innovation, and transformation. It also raises a critical question: what kind of leaders will guide this generation?</p>

          <p>The answer will shape Africa's future far more than any single policy or project.</p>

          <h3>The Leadership Gap Africa Cannot Ignore</h3>
          <p>Africa does not suffer from a shortage of talent, ambition, or ideas. What remains scarce is leadership that consistently prioritizes integrity, accountability, and service over power, status, and personal enrichment.</p>

          <p>Across multiple countries, weak governance and unethical leadership have contributed to misallocation of public resources, erosion of trust in public institutions, persistent inequality despite economic growth, and youth disillusionment with civic and political systems.</p>

          <p>According to Transparency International, corruption costs African economies an estimated 25 percent of GDP annually in some countries. These losses directly affect education systems, healthcare delivery, infrastructure maintenance, and job creation. When leadership lacks ethical grounding, development becomes fragile and easily reversible.</p>

          <p>Ethical leadership is not an abstract ideal. It directly influences whether policies translate into real outcomes for people.</p>

          <h3>Why Values-Based Leadership Is Infrastructure</h3>
          <p>Infrastructure sustains societies over time. Ethical leadership functions in the same way. Values-based leadership provides consistency in decision-making even under pressure, builds trust between leaders and citizens and institutions and communities, ensures accountability that deters abuse of power, and creates stability that attracts investment and innovation.</p>

          <p>Without these elements, even the most ambitious development plans struggle to deliver lasting impact. Countries with stronger governance systems and ethical leadership frameworks consistently outperform peers in human development indicators. Where leadership is anchored in values, institutions are stronger, public services are more reliable, and social cohesion improves.</p>

          <h3>Transformational Leadership and the African Context</h3>
          <p>Transformational leaders do not rely on authority alone. They inspire, mobilize, and empower others toward a shared vision. In Africa's context, this leadership approach is especially critical due to diverse cultures, complex social histories, and rapidly changing economies.</p>

          <p>Transformational leadership in Africa must focus on elevating community voices in decision-making, encouraging innovation that responds to local realities, building systems rather than personal legacies, and preparing successors rather than consolidating control.</p>

          <p>Research consistently shows that organizations and institutions led by transformational leaders experience higher levels of trust, commitment, and long-term performance. When this leadership style is grounded in ethical values, its impact is amplified.</p>

          <h3>The Human Cost of Unethical Leadership</h3>
          <p>Unethical leadership is not just a governance issue. It is a human one. Its consequences are felt when schools lack basic resources despite allocated budgets, hospitals operate without essential equipment, youth lose faith in merit and fairness, and communities normalize survival over integrity.</p>

          <p>These realities shape mindsets. When young people repeatedly witness leaders benefiting from unethical behaviour without consequences, values erode. Over time, corruption becomes normalized, and ethical leadership is seen as unrealistic rather than essential. This cycle threatens Africa's long-term social and economic stability.</p>

          <h3>Raising Ethical Transformational Leaders Early</h3>
          <p>Ethical leadership is not formed at the point of power. It is cultivated over time through exposure, mentorship, and lived values. Key pillars for raising ethical transformational leaders include values-based education that integrates ethics, civic responsibility, and leadership from an early age, mentorship and role models who demonstrate integrity in action, youth leadership platforms that prioritize service and accountability, faith and moral grounding that reinforce purpose beyond self-interest, and practical leadership opportunities where young people learn to make responsible decisions with real consequences.</p>

          <p>Leadership development must move beyond technical skills alone. Competence without character creates risk at scale.</p>

          <h3>The Role of Institutions and Civil Society</h3>
          <p>Ethical leadership cannot be sustained by individuals alone. It requires supportive systems. Institutions must enforce transparency and accountability consistently, reward ethical behaviour and sanction misconduct, create safe spaces for whistleblowing and reform, and promote leadership succession and inclusivity.</p>

          <p>Civil society organizations play a vital role in filling gaps left by formal systems. Through advocacy, education, community engagement, and youth development, they help shape leadership values at the grassroots level. When institutions and communities align around shared ethical standards, leadership culture begins to shift.</p>

          <h3>A Future Built on Character and Courage</h3>
          <p>Africa's greatest infrastructure challenge is not physical. It is moral and institutional. The leaders who will drive sustainable development over the next decades must combine vision with values, innovation with integrity, and authority with accountability. Ethical transformational leadership restores dignity to governance and humanity to development.</p>

          <p>Raising such leaders is not optional. It is foundational. When leadership is anchored in values, policies endure, institutions strengthen, and people thrive. That is the infrastructure Africa needs most, and the legacy worth building for generations to come.</p>
        </div>
      ),
      image: article2Img,
      author: "Mr. Derrick Puplampu",
      date: "2025-11-20",
      readTime: 5,
      tags: ["Leadership", "Ethics", "Values-Based Leadership", "Governance", "Africa"],
      featured: true,
      likes: 245,
      shares: 89
    },
    {
      id: 2,
      title: "Youth-Led Roundtable: Climate Reality, Responsibility, and Action in Africa",
      category: "sustainability",
      excerpt: "Africa's youth aren't waiting to be rescued—they're ready to lead on climate action. Discover why their voices and solutions are essential for Africa's future.",
      content: "The climate crisis is no longer a distant forecast for Africa...",
      fullContent: (
        <div>
          <p>The climate crisis is no longer a distant forecast for Africa. It is a lived experience. From floods displacing communities to prolonged droughts threatening food systems, climate change has moved from scientific reports into everyday life. What makes this reality particularly urgent is that Africa's youngest generation is bearing the greatest weight of a crisis it did not create.</p>

          <p>Under the Nakaaba Policy and Action Initiative of the Before Anyone Else Foundation, a youth-led roundtable was convened to examine climate change not as an abstract global issue, but as a personal, economic, and moral challenge. The discussion was grounded in lived realities, local evidence, and a shared sense of responsibility for action.</p>

          <p>What emerged was clear: Africa's youth are not waiting to be rescued. They are asking to be heard, equipped, and trusted.</p>

          <h3>Climate Change Through Youth Lenses</h3>
          <p>For many young people across Africa, climate change shows up early in life and often without warning. Participants shared experiences of flooded neighbourhoods disrupting schooling and livelihoods, rising food prices linked to unstable agricultural cycles, water scarcity affecting health and daily productivity, and heat stress impacting learning, labour, and mental well-being.</p>

          <p>According to the World Bank, climate change could push up to 86 million Africans into extreme poverty by 2030 if adaptation measures are not strengthened. Young people are disproportionately exposed because they make up the majority of informal workers, smallholder farmers, and urban residents in climate-vulnerable areas.</p>

          <p>The roundtable emphasized that climate change is not only an environmental issue. It is a youth issue, an economic issue, and a justice issue.</p>

          <h3>The Policy Gap Young People Experience Daily</h3>
          <p>One recurring theme was the disconnect between climate policies and community realities. Youth participants noted that climate policies often exist on paper but fail in implementation, young people are rarely involved in policy design despite being the most affected, climate education is insufficiently integrated into formal learning systems, and local innovation struggles to access funding and policy support.</p>

          <p>Africa contributes less than 4 percent of global greenhouse gas emissions, yet it faces some of the most severe climate impacts. This imbalance raises critical questions of global equity, but it also challenges African governments and institutions to ensure that local climate policies translate into tangible protection and opportunity for communities.</p>

          <h3>From Awareness to Action</h3>
          <p>The discussion moved beyond diagnosis toward action-oriented thinking. Youth identified practical climate responses already happening at community levels: climate-smart agriculture initiatives led by young farmers, waste recycling and upcycling projects in urban communities, tree planting and ecosystem restoration efforts, and renewable energy awareness campaigns in schools and neighbourhoods.</p>

          <p>However, participants stressed that these efforts often remain small due to limited access to funding, mentorship, and supportive policy environments. Youth-led climate solutions need systems that enable scale, continuity, and accountability.</p>

          <h3>The Role of Youth in Climate Leadership</h3>
          <p>The roundtable rejected the idea of youth as passive beneficiaries of climate interventions. Instead, youth were positioned as active stakeholders and leaders. Key insights included that climate leadership must start early and be values-driven, young people need decision-making power not symbolic inclusion, local knowledge is essential for effective climate adaptation, and ethical leadership strengthens climate action credibility.</p>

          <p>Research from the African Development Bank shows that youth-led climate enterprises have higher community acceptance and sustainability when properly supported. When young people lead solutions within their own contexts, trust and impact increase.</p>

          <h3>Nakaaba's Policy and Action Lens</h3>
          <p>The Nakaaba Policy and Action Initiative approaches climate change as both a policy challenge and a moral responsibility. From the roundtable, several priorities emerged: embedding youth voices into climate policy formulation, linking climate education with practical community action, supporting youth innovation through structured incubation, and strengthening accountability mechanisms for climate commitments.</p>

          <p>Climate action cannot succeed without ethical leadership that prioritizes people over politics and long-term resilience over short-term gains.</p>

          <h3>A Call to Shared Responsibility</h3>
          <p>The climate crisis demands collective action across generations, sectors, and borders. Youth are ready to lead, but leadership must be met with trust, resources, and policy alignment. The roundtable concluded with a shared conviction: climate action without youth is incomplete, policy without community input is ineffective, and development without environmental responsibility is unsustainable.</p>

          <p>Africa's climate future will be shaped by the choices made today. Investing in youth-led climate leadership is not an act of charity. It is an act of foresight. Through platforms like the Nakaaba Policy and Action Initiative, the conversation shifts from fear to responsibility, from awareness to action, and from silence to shared solutions. That shift may well define Africa's resilience in a changing climate.</p>
        </div>
      ),
      image: article3Img,
      author: "Mr. Derrick Puplampu",
      date: "2025-11-10",
      readTime: 4,
      tags: ["Climate Action", "Youth Leadership", "Policy", "Sustainability", "Africa"],
      featured: true,
      likes: 312,
      shares: 126
    },
    {
      id: 3,
      title: "The Impact of the Gospel and Science in Developing 21st Century Innovators for Sustainable Development",
      category: "impact-stories",
      excerpt: "When faith and science converge, innovation becomes ethical, purposeful, and transformative. Learn how values shape the next generation of innovators.",
      content: "Innovation without values risks harm, and faith without engagement with knowledge limits impact...",
      fullContent: (
        <div>
          <p>The global disruption caused by the COVID-19 pandemic did more than halt movement and shut down institutions. It forced humanity into reflection. Questions about purpose, innovation, sustainability, and responsibility surfaced with renewed urgency. During this period, the Gospel Merges with Science virtual conference convened thought leaders, innovators, scientists, and faith practitioners to explore one essential question: how do faith and science together shape innovators capable of sustaining the future?</p>

          <p>Organized under the thought leadership framework of the Before Anyone Else Foundation, the conference revealed a powerful truth. Innovation without values risks harm, and faith without engagement with knowledge limits impact. When the Gospel and science intersect, they form a foundation for innovation that is ethical, purposeful, and sustainable.</p>

          <h3>Innovation, Sustainability, and Eternal Perspective</h3>
          <p>The United Nations Sustainable Development Goals offer a global blueprint for addressing poverty, inequality, climate change, health, and education by 2030. Yet for faith-based innovators, the question extends beyond timelines and targets. The conference posed a reflective challenge: how should believers pursue sustainability while remaining conscious of the return of Jesus Christ?</p>

          <p>This perspective does not diminish responsibility toward the present world. Scripture repeatedly emphasizes stewardship, justice, and care for creation. Scientific advancement becomes a tool for obedience rather than dominance. Innovators grounded in the Gospel approach sustainability with humility, responsibility, and long-term accountability that goes beyond economic metrics.</p>

          <p>Faith reframes innovation as stewardship of God-given intellect for the benefit of humanity, not personal glory.</p>

          <h3>The Gap Between Today's Problems and Tomorrow's Innovators</h3>
          <p>Africa faces complex challenges that demand innovation rooted in context. These include climate vulnerability affecting over 400 million people, youth unemployment exceeding 30 percent in several countries, limited access to quality education and innovation infrastructure, and persistent inequality in digital access.</p>

          <p>According to UNESCO, Africa accounts for less than 1 percent of global research output despite hosting the world's youngest population. This gap highlights the need for pragmatic approaches to innovation development. The conference emphasized problem-centered innovation rather than trend-driven creativity. Science provides the tools for analysis, experimentation, and solution-building. The Gospel shapes the character, discipline, and ethical clarity required to apply those tools responsibly.</p>

          <p>Innovators must be trained to think critically, act compassionately, and solve real problems within their communities.</p>

          <h3>The Gospel and the Rise of Women Innovators</h3>
          <p>One of the strongest discussions centered on women in innovation. Across Africa, women make up nearly 50 percent of the population, yet remain underrepresented in STEM fields and innovation leadership. World Bank data shows that women account for less than 30 percent of researchers globally.</p>

          <p>The Gospel challenges cultural limitations by affirming dignity, purpose, and calling irrespective of gender. Faith-based empowerment has historically opened doors for women to lead in education, healthcare, entrepreneurship, and advocacy.</p>

          <p>When combined with scientific training and innovation exposure, the Gospel strengthens confidence, resilience, and vision in women innovators. It addresses internal barriers such as self-doubt and external barriers such as societal bias. The result is a generation of women building solutions in technology, sustainability, health, and education with both excellence and conviction.</p>

          <h3>Understanding the Mind of God for 21st Century Innovators</h3>
          <p>Innovation is often portrayed as spontaneous creativity. Scripture presents a different view. The mind of God reflects order, intentionality, and wisdom. Creation itself follows patterns, systems, and laws that science continues to uncover. Innovators who understand this alignment recognize that discovery and invention are acts of participation in divine order.</p>

          <p>This mindset shapes innovators who value process as much as outcome, respect ethical boundaries in experimentation, pursue excellence with humility, and innovate for service, not exploitation. Science reveals how things work. The Gospel clarifies why they matter.</p>

          <h3>Shaping Creativity for Influence and Longevity</h3>
          <p>Innovation gains influence through visibility, adoption, and relevance. Stardom in innovation should not be confused with popularity alone. True impact emerges when creativity meets consistency and purpose. The conference highlighted the need to nurture innovators who can communicate ideas clearly, sustain innovation beyond early excitement, build systems rather than isolated products, and inspire others to create and collaborate.</p>

          <p>Values-driven innovators develop reputations anchored in trust. Over time, this trust amplifies influence and attracts partnerships, investment, and community support.</p>

          <h3>Media, Messaging, and Moral Responsibility</h3>
          <p>Media plays a decisive role in shaping innovation culture. Digital platforms influence aspirations, behaviours, and perceptions of success. Today, over 70 percent of Africa's internet users are under the age of 35. Media exposure can accelerate innovation or distort purpose. The Gospel provides discernment, while science equips innovators to leverage media strategically.</p>

          <p>Responsible media engagement ensures that innovation messaging educates rather than misleads, promotes solutions rather than hype, upholds truth and accountability, and encourages constructive participation. Innovators must understand media as both a tool and a responsibility.</p>

          <h3>From Concept to Digital Reality</h3>
          <p>Ideas alone do not change societies. Execution does. The conference addressed the importance of conceptualizing and digitalizing innovative ideas through structured processes: problem definition, research and validation, prototyping and testing, and digital deployment and scaling.</p>

          <p>Science supports these processes through data, technology, and systems thinking. The Gospel sustains patience, resilience, and ethical decision-making during uncertainty and failure. This integration strengthens innovators who can build solutions that last.</p>

          <h3>Innovation and the Psychology of Purpose</h3>
          <p>Innovation psychology shapes motivation, resilience, and adaptability. Studies show that purpose-driven individuals demonstrate higher persistence and problem-solving capacity. The Gospel provides a framework for meaning, identity, and hope. Science explains cognitive processes, creativity, and behavioural patterns. Together, they form a holistic understanding of the innovator's mind.</p>

          <p>Innovators grounded in both faith and knowledge are better equipped to navigate failure, pressure, and complexity without losing direction.</p>

          <h3>Toward Purpose-Driven Sustainable Innovation</h3>
          <p>The Gospel Merges with Science conference revealed that sustainable development demands more than technical expertise. It requires innovators shaped by values, guided by knowledge, and committed to service. Africa's future depends on innovators who can bridge faith and science, purpose and practice, belief and action. When the Gospel informs character and science strengthens capacity, innovation becomes a force for transformation that serves both humanity and eternity.</p>

          <p>This integration is not optional for the 21st century. It is essential.</p>
        </div>
      ),
      image: article1Img,
      author: "Mr. Derrick Puplampu",
      date: "2025-10-20",
      readTime: 7,
      tags: ["Innovation", "Science", "Faith", "Sustainable Development", "Women Empowerment", "Technology"],
      featured: true,
      likes: 156,
      shares: 42
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

  const handleNewsletterSubscribe = (e) => {
    e.preventDefault();
    // Open pre-filled mailto link for newsletter subscription
    window.location.href = 'mailto:baefoundation3@gmail.com?subject=Newsletter%20Subscription&body=Hi%2C%20I%20would%20like%20to%20subscribe%20to%20the%20BAE%20Foundation%20newsletter.%20Please%20add%20me%20to%20your%20mailing%20list.';
  };

  const handleSubmitStory = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handleFollowUs = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
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
                  <p className="featured-excerpt">{post.excerpt}</p>
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
                  <button className="read-more" onClick={() => {
                    setSelectedPost(post);
                    setIsModalOpen(true);
                  }}>
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
                  <button className="read-more" onClick={() => {
                    setSelectedPost(post);
                    setIsModalOpen(true);
                  }}>
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
            <form className="newsletter-form" onSubmit={handleNewsletterSubscribe}>
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
            <button className="submit-story" onClick={handleSubmitStory}>Submit Your Story</button>
            <button className="newsletter" onClick={handleNewsletterSubscribe}>Subscribe to Newsletter</button>
            <button className="blog-social" onClick={handleFollowUs}>Follow Us</button>
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}