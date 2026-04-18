import React, { useState } from 'react';
import './AboutScreen.css';
import './ImpactShop.css';
import { FiShoppingCart, FiHeart, FiStar, FiFilter, FiSearch, FiPackage, FiTruck, FiShield, FiGift } from 'react-icons/fi';
import { FaGraduationCap, FaHandsHelping, FaLeaf, FaHeart, FaShoppingBag } from 'react-icons/fa';

// Import Legacy Store logo
import legacyStoreLogo from '../assets/Legacy Store logo png.png';

// Import merchandise images
import itempen1 from '../assets/merch/pen.png';
import itemshirt1 from '../assets/merch/shirt 1.png';
import itemshirt2 from '../assets/merch/shirt 2.png';
import itemshirt3 from '../assets/merch/shirt 3.png';
import itemshirt4 from '../assets/merch/shirt 4.png';
import itemflask1 from '../assets/merch/Thermal Flask.png';
import itemtote1 from '../assets/merch/tote 1.png';
import itemtote2 from '../assets/merch/tote 2.png';

export default function ImpactShop({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const productCategories = [
    { id: 'all', name: 'All Products', icon: <FaShoppingBag /> },
    { id: 'apparel', name: 'Apparel & Wearables', icon: <FaGraduationCap /> },
    { id: 'stationery', name: 'Stationery & Learning', icon: <FaHeart /> },
    { id: 'lifestyle', name: 'Lifestyle', icon: <FaHandsHelping /> },
    { id: 'accessories', name: 'Accessories', icon: <FaLeaf /> }
  ];

  const products = [
    {
      id: 1,
      name: "Anniversary 'Impact' Tee (White)",
      category: "apparel",
      price: 120,
      description: "A clean, white premium cotton tee featuring the 10th Anniversary logo on the chest and a bold vertical 'Places, People, Impact, Project, Service' graphic.",
      image: itemshirt1,
      rating: 4.8,
      reviews: 12,
      purchaseLink: "https://selar.com/y6ak7u71q6"
    },
    {
      id: 2,
      name: "Legacy Adinkra Tote",
      category: "accessories",
      price: 100,
      description: "Durable canvas tote bag featuring the 10th Anniversary seal and a decorative Adinkra symbol border representing wisdom and continuity.",
      image: itemtote1,
      rating: 4.9,
      reviews: 25,
      purchaseLink: "https://selar.com/tf55l17561"
    },
    {
      id: 3,
      name: "10 Years of Smiles Tote",
      category: "accessories",
      price: 100,
      description: "An evocative canvas bag featuring a collage of the children and communities impacted over the last decade of service.",
      image: itemtote2,
      rating: 5.0,
      reviews: 18,
      purchaseLink: "https://selar.com/10611l6896"
    },
    {
      id: 4,
      name: "Commemorative Thermal Flask",
      category: "lifestyle",
      price: 100,
      description: "Insulated stainless steel flask with a white finish, featuring the anniversary logo and traditional Adinkra patterns.",
      image: itemflask1,
      rating: 4.7,
      reviews: 30,
      purchaseLink: "https://selar.com/ukf68i1278"
    },
    {
      id: 5,
      name: "Anniversary 'Impact' Tee (Royal Blue)",
      category: "apparel",
      price: 120,
      description: "Premium royal blue tee with high-contrast white typography highlighting the foundation's core pillars of service.",
      image: itemshirt2,
      rating: 4.9,
      reviews: 15,
      purchaseLink: "https://selar.com/727007am79"
    },
    {
      id: 6,
      name: "Adinkra Heritage Tee (Royal Blue)",
      category: "apparel",
      price: 120,
      description: "A vibrant blue tee featuring a unique Adinkra collar print and a large 10th-anniversary celebratory graphic.",
      image: itemshirt3,
      rating: 4.8,
      reviews: 22,
      purchaseLink: "https://selar.com/66d9dy8p17"
    },
    {
      id: 7,
      name: "Adinkra Heritage Tee (White)",
      category: "apparel",
      price: 120,
      description: "Classic white tee with a blue Adinkra symbol collar design and the anniversary photo-collage logo.",
      image: itemshirt4,
      rating: 4.6,
      reviews: 19,
      purchaseLink: "https://selar.com/81m484959j"
    },
    {
      id: 8,
      name: "BAE Signature Stylus Pen",
      category: "stationery",
      price: 30,
      description: "A sleek blue multi-function pen featuring anniversary branding and a soft-touch stylus tip for digital devices.",
      image: itempen1,
      rating: 4.5,
      reviews: 40,
      purchaseLink: "https://selar.com/27x7885l37"
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
            <button className="browse" onClick={() => window.open('https://selar.com/m/baelegacystore', '_blank')}>Browse All Products</button>
            <button className="gift" onClick={() => onNavigate && onNavigate('donate')}>Give as Gift</button>
            <button className="subscribe" onClick={() => onNavigate && onNavigate('donate')}>Monthly Impact</button>
          </div>
        </div>
      </section>
    </main>
  );
}
