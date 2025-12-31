import React, { useState } from 'react';
import './AboutScreen.css';
import './ImpactShop.css';
import { FiShoppingCart, FiHeart, FiStar, FiFilter, FiSearch, FiPackage, FiTruck, FiShield, FiGift } from 'react-icons/fi';
import { FaGraduationCap, FaHandsHelping, FaLeaf, FaHeart, FaShoppingBag } from 'react-icons/fa';

// Import Legacy Store logo
import legacyStoreLogo from '../assets/Legacy Store logo png.png';

// Import merchandise images
import hopeLivesHereTshirt from '../assets/merch/hope_lives_here_tshirt.jpg';
import serveWithPurposeCap from '../assets/merch/serve_with_purpose_cap.jpg';
import changeMakerWristband from '../assets/merch/change_maker_wristband.jpg';
import purposePlannerNotebook from '../assets/merch/purpose_planner_notepad.jpg';
import writeForChangePenSet from '../assets/merch/write_for_change_pen_set.jpg';
import learnAndRiseFlashCards from '../assets/merch/learn_and_rise_flash_card.jpg';
import sustainLifeWaterBottle from '../assets/merch/sustain_life_water_bottle.jpg';
import carryHopeToteBag from '../assets/merch/carry_hope_tote bag.jpg';
import keyToChangeKeyHolder from '../assets/merch/keys_to_change_keyholder.jpg';
import hopeEveryMorningMug from '../assets/merch/hope_every_morning_mug.jpg';
import messageOfHopePoster from '../assets/merch/message_of_hope_poster.jpg';
import dailyLightDevotional from '../assets/merch/daily_light_devotional.jpg';

export default function ImpactShop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const productCategories = [
    { id: 'all', name: 'All Products', icon: <FaShoppingBag /> },
    { id: 'apparel', name: 'Apparel & Wearables', icon: <FaGraduationCap /> },
    { id: 'stationery', name: 'Stationery & Learning', icon: <FaHeart /> },
    { id: 'lifestyle', name: 'Lifestyle & Accessories', icon: <FaHandsHelping /> },
    { id: 'faith', name: 'Faith & Inspiration', icon: <FaLeaf /> }
  ];

  const products = [
    {
      id: 1,
      name: "Hope Lives Here T-Shirt",
      category: "apparel",
      price: 120,
      description: "A comfortable cotton T-shirt branded with the foundation's message of hope and service. Designed for everyday wear and outreach events.",
      image: hopeLivesHereTshirt,
      impact: "One purchase supports basic relief materials for a vulnerable family during outreach programs.",
      rating: 4.7,
      reviews: 89,
      purchaseLink: "https://selar.com/v1wds47o16"
    },
    {
      id: 2,
      name: "Serve With Purpose Cap",
      category: "apparel",
      price: 80,
      description: "A durable, adjustable cap featuring the foundation's logo, suitable for outdoor outreach activities.",
      image: serveWithPurposeCap,
      impact: "Funds transportation for volunteers to rural outreach locations.",
      rating: 4.5,
      reviews: 72,
      purchaseLink: "https://selar.com/8467mapx1b"
    },
    {
      id: 3,
      name: "Change Maker Wristband",
      category: "apparel",
      price: 30,
      description: "Silicone wristband printed with a short inspirational message representing the foundation's mission.",
      image: changeMakerWristband,
      impact: "Supports the printing of educational materials for community sensitization programs.",
      rating: 4.6,
      reviews: 134,
      purchaseLink: "https://selar.com/641w11u666"
    },
    {
      id: 4,
      name: "Purpose Planner Notebook",
      category: "stationery",
      price: 60,
      description: "A high-quality notebook with motivational quotes and the foundation's branding.",
      image: purposePlannerNotebook,
      impact: "Helps provide school supplies for underprivileged children.",
      rating: 4.8,
      reviews: 156,
      purchaseLink: "https://selar.com/815r957716"
    },
    {
      id: 5,
      name: "Write for Change Pen Set",
      category: "stationery",
      price: 25,
      description: "A set of branded pens ideal for daily use at school, work, or outreach events.",
      image: writeForChangePenSet,
      impact: "Contributes to literacy and reading programs in underserved communities.",
      rating: 4.4,
      reviews: 98,
      purchaseLink: "https://selar.com/27x7885l37"
    },
    {
      id: 6,
      name: "Learn & Rise Flash Cards",
      category: "stationery",
      price: 50,
      description: "Simple educational flash cards designed for early childhood learning during community outreaches.",
      image: learnAndRiseFlashCards,
      impact: "Supports early childhood education initiatives in rural areas.",
      rating: 4.7,
      reviews: 112,
      purchaseLink: "https://selar.com/81m484959j"
    },
    {
      id: 7,
      name: "Sustain Life Water Bottle",
      category: "lifestyle",
      price: 100,
      description: "A reusable, eco-friendly water bottle with the foundation's logo.",
      image: sustainLifeWaterBottle,
      impact: "Promotes environmental responsibility while funding clean-water awareness programs.",
      rating: 4.9,
      reviews: 203,
      purchaseLink: "https://selar.com/66d9dy8p17"
    },
    {
      id: 8,
      name: "Carry Hope Tote Bag",
      category: "lifestyle",
      price: 70,
      description: "A strong canvas tote bag suitable for shopping, school, or outreach use.",
      image: carryHopeToteBag,
      impact: "Supports women empowerment initiatives through skills training programs.",
      rating: 4.6,
      reviews: 145,
      purchaseLink: "https://selar.com/727007am79"
    },
    {
      id: 9,
      name: "Key to Change Key Holder",
      category: "lifestyle",
      price: 20,
      description: "A simple branded key holder that keeps your keys organized while spreading awareness.",
      image: keyToChangeKeyHolder,
      impact: "Helps cover administrative costs for outreach coordination.",
      rating: 4.3,
      reviews: 67,
      purchaseLink: "https://selar.com/ukf68i1278"
    },
    {
      id: 10,
      name: "Hope Every Morning Mug",
      category: "faith",
      price: 65,
      description: "A ceramic mug printed with an encouraging message aligned with the foundation's values.",
      image: hopeEveryMorningMug,
      impact: "Supports counseling and emotional-support outreach programs.",
      rating: 4.8,
      reviews: 178,
      purchaseLink: "https://selar.com/10611l6896"
    },
    {
      id: 11,
      name: "Message of Hope Poster",
      category: "faith",
      price: 45,
      description: "A beautifully designed poster carrying a strong message of resilience and compassion.",
      image: messageOfHopePoster,
      impact: "Funds community awareness campaigns and advocacy efforts.",
      rating: 4.5,
      reviews: 92,
      purchaseLink: "https://selar.com/tf55l17561"
    },
    {
      id: 12,
      name: "Daily Light Devotional",
      category: "faith",
      price: 40,
      description: "A short devotional booklet encouraging reflection, compassion, and service.",
      image: dailyLightDevotional,
      impact: "Supports spiritual and moral development sessions during outreach programs.",
      rating: 4.9,
      reviews: 215,
      purchaseLink: "https://selar.com/y6ak7u71q6"
    }
  ];

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
        default:
          return 0;
      }
    });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="impact-shop-header">
        <img src={legacyStoreLogo} alt="Legacy Store" className="legacy-store-logo" />
        <p>
          Shop with purpose. Every purchase directly funds our life-changing initiatives 
          across Africa. Choose your impact and see exactly how your contribution 
          transforms lives in real-time.
        </p>
        <div className="shop-features">
          <div className="feature">
            <FiShield />
            <span>100% Transparent</span>
          </div>
          <div className="feature">
            <FiTruck />
            <span>Direct Impact</span>
          </div>
          <div className="feature">
            <FiGift />
            <span>Tax Deductible</span>
          </div>
        </div>
      </section>

      {/* Shop Controls */}
      <section className="shop-controls">
        <div className="controls-container">
          <div className="search-filter-section">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for impact products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        
        </div>
        
        <div className="category-filters">
          {productCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        <div className="products-container">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="product-info">
                <div className="product-category">
                  {productCategories.find(cat => cat.id === product.category)?.icon}
                  {productCategories.find(cat => cat.id === product.category)?.name}
                </div>
                
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-impact">
                  <FiHeart className="impact-icon" />
                  <span>{product.impact}</span>
                </div>
                
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={i < Math.floor(product.rating) ? 'filled' : ''} 
                      />
                    ))}
                    <span className="rating-number">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="product-price">
                  <span className="current-price">GHS {product.price}</span>
                </div>
                
                <button 
                  className="add-to-cart"
                  onClick={() => window.open(product.purchaseLink, '_blank')}
                >
                  <FiShoppingCart />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <FiPackage className="no-products-icon" />
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How Impact Shopping Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Impact</h3>
            <p>Browse our curated selection of impactful products that directly fund our programs.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Make Your Purchase</h3>
            <p>100% of your purchase goes directly to funding the specific initiative you selected.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Track Your Impact</h3>
            <p>Receive updates and photos showing exactly how your contribution is making a difference.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Share & Inspire</h3>
            <p>Share your impact story to inspire others and multiply the positive change.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="shop-cta">
        <div className="cta-content">
          <h2>Ready to Make an Impact?</h2>
          <p>
            Join thousands of changemakers who shop with purpose. Every purchase 
            creates measurable, lasting change in communities across Africa.
          </p>
          <div className="cta-buttons">
            <button className="browse">Browse All Products</button>
            <button className="gift">Give as Gift</button>
            <button className="subscribe">Monthly Impact</button>
          </div>
        </div>
      </section>
    </main>
  );
}
