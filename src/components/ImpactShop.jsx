import React, { useState } from 'react';
import './AboutScreen.css';
import './ImpactShop.css';
import { FiShoppingCart, FiHeart, FiStar, FiFilter, FiSearch, FiPackage, FiTruck, FiShield, FiGift } from 'react-icons/fi';
import { FaGraduationCap, FaHandsHelping, FaLeaf, FaHeart, FaShoppingBag } from 'react-icons/fa';

// Import Legacy Store logo
import legacyStoreLogo from '../assets/Legacy Store logo png.png';

// Import some images for products (using existing assets)
import aboutImg from '../assets/about-us-pic.jpg';
import volunteerImg from '../assets/volunteer.jpg';
import kidsImg from '../assets/african-kids-enjoying-life_23-2151438340.jpg';
import studyImg from '../assets/study-group-african-people_23-2149156390.jpg';
import teacherImg from '../assets/african-woman-teaching-children-class.jpg';
import bookImg from '../assets/world-book-day-celebration_23-2151245079.jpg';

export default function ImpactShop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const productCategories = [
    { id: 'all', name: 'All Products', icon: <FaShoppingBag /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'health', name: 'Health & Wellness', icon: <FaHeart /> },
    { id: 'community', name: 'Community Support', icon: <FaHandsHelping /> },
    { id: 'environment', name: 'Environment', icon: <FaLeaf /> }
  ];

  const products = [
    {
      id: 1,
      name: "School Supply Kit",
      category: "education",
      price: 25,
      originalPrice: 35,
      description: "Complete school supplies for one child including notebooks, pencils, pens, rulers, and a backpack.",
      image: bookImg,
      impact: "Supports 1 child's education for 3 months",
      rating: 4.9,
      reviews: 156,
      inStock: true,
      featured: true,
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Clean Water Fund",
      category: "health",
      price: 50,
      description: "Provide clean drinking water access for a family of 5 for one month through our water purification program.",
      image: kidsImg,
      impact: "Provides clean water for 1 family for 30 days",
      rating: 5.0,
      reviews: 203,
      inStock: true,
      featured: true,
      badge: "High Impact"
    },
    {
      id: 3,
      name: "Women Empowerment Package",
      category: "community",
      price: 75,
      originalPrice: 90,
      description: "Support a woman entrepreneur with microloan funds, business training, and mentorship for 6 months.",
      image: teacherImg,
      impact: "Empowers 1 woman entrepreneur for 6 months",
      rating: 4.8,
      reviews: 89,
      inStock: true,
      featured: true,
      badge: "Limited Time"
    },
    {
      id: 4,
      name: "Tree Planting Initiative",
      category: "environment",
      price: 15,
      description: "Plant 10 trees in degraded areas to combat climate change and restore natural ecosystems.",
      image: aboutImg,
      impact: "Plants 10 trees and restores 0.1 hectare",
      rating: 4.7,
      reviews: 312,
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "Digital Literacy Course",
      category: "education",
      price: 40,
      description: "Sponsor one person's enrollment in our 3-month digital literacy and computer skills program.",
      image: studyImg,
      impact: "Provides digital skills training for 1 person",
      rating: 4.9,
      reviews: 127,
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "Health Checkup Sponsorship",
      category: "health",
      price: 30,
      description: "Sponsor a comprehensive health checkup including basic tests and consultations for one person.",
      image: volunteerImg,
      impact: "Provides health screening for 1 person",
      rating: 4.6,
      reviews: 94,
      inStock: true,
      featured: false
    },
    {
      id: 7,
      name: "Youth Leadership Training",
      category: "education",
      price: 60,
      originalPrice: 80,
      description: "Fund a young leader's participation in our comprehensive leadership development program.",
      image: studyImg,
      impact: "Develops 1 youth leader for the future",
      rating: 5.0,
      reviews: 76,
      inStock: true,
      featured: true,
      badge: "New Launch"
    },
    {
      id: 8,
      name: "Community Garden Kit",
      category: "environment",
      price: 35,
      description: "Provide seeds, tools, and training to establish a sustainable community garden feeding 20 families.",
      image: kidsImg,
      impact: "Feeds 20 families with fresh vegetables",
      rating: 4.8,
      reviews: 145,
      inStock: false,
      featured: false
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
          return b.featured - a.featured;
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
            
            <div className="sort-dropdown">
              <FiFilter className="filter-icon" />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          <div className="cart-summary">
            <FiShoppingCart />
            <span>{getCartCount()} items</span>
            <span className="cart-total">${getCartTotal()}</span>
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
              {product.badge && (
                <div className="product-badge">{product.badge}</div>
              )}
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
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
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>
                
                <button 
                  className={`add-to-cart ${!product.inStock ? 'disabled' : ''}`}
                  onClick={() => product.inStock && addToCart(product)}
                  disabled={!product.inStock}
                >
                  <FiShoppingCart />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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

      {/* Impact Stats */}
      <section className="shop-impact-stats">
        <h2>Your Collective Impact</h2>
        <div className="impact-stats-grid">
          <div className="impact-stat">
            <span className="stat-number">5,240</span>
            <span className="stat-label">Children Educated</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number">1,890</span>
            <span className="stat-label">Families Fed</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number">3,100</span>
            <span className="stat-label">Trees Planted</span>
          </div>
          <div className="impact-stat">
            <span className="stat-number">850</span>
            <span className="stat-label">Women Empowered</span>
          </div>
        </div>
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
