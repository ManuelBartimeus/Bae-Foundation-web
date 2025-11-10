import React, { useState } from 'react';
import './AboutScreen.css';
import './Donate.css';
import { FiHeart, FiDollarSign, FiCreditCard, FiShield, FiUsers, FiTarget, FiGift, FiRepeat, FiCheck, FiStar } from 'react-icons/fi';
import { FaPaypal, FaCcVisa, FaCcMastercard, FaMobileAlt, FaUniversity } from 'react-icons/fa';

// Import images
import aboutImg from '../assets/about-us-pic.jpg';
import studyGroupImg from '../assets/study-group-african-people_23-2149156390.jpg';
import kidsEnjoyingImg from '../assets/african-kids-enjoying-life_23-2151438340.jpg';
import africanWomanImg from '../assets/african-woman-teaching-children-class.jpg';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');
  const [selectedCause, setSelectedCause] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];
  
  const causes = [
    {
      id: 'general',
      name: 'Where Most Needed',
      description: 'Support our most urgent programs and initiatives',
      icon: <FiTarget />,
      image: aboutImg,
      impact: 'Flexible funding for maximum impact across all programs'
    },
    {
      id: 'education',
      name: 'Education Programs',
      description: 'Fund schools, supplies, and teacher training',
      icon: <FiUsers />,
      image: studyGroupImg,
      impact: '$25 provides school supplies for 1 child for 3 months'
    },
    {
      id: 'health',
      name: 'Healthcare Access',
      description: 'Mobile clinics and health services',
      icon: <FiHeart />,
      image: kidsEnjoyingImg,
      impact: '$50 sponsors health checkups for 5 people'
    },
    {
      id: 'women',
      name: 'Women Empowerment',
      description: 'Microfinance and business training for women',
      icon: <FiStar />,
      image: africanWomanImg,
      impact: '$100 provides microloan and training for 1 woman'
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <FiCreditCard />, available: true },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal />, available: true },
    { id: 'bank', name: 'Bank Transfer', icon: <FaUniversity />, available: true },
    { id: 'mobile', name: 'Mobile Money', icon: <FaMobileAlt />, available: true }
  ];

  const impactCalculations = {
    25: { children: 1, meals: 50, books: 5 },
    50: { children: 2, meals: 100, books: 10 },
    100: { children: 4, meals: 200, books: 20 },
    250: { children: 10, meals: 500, books: 50 },
    500: { children: 20, meals: 1000, books: 100 },
    1000: { children: 40, meals: 2000, books: 200 }
  };

  const getImpact = (amount) => {
    const closest = presetAmounts.reduce((prev, curr) => 
      Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
    );
    return impactCalculations[closest] || impactCalculations[50];
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Thank you for your generous donation! You will receive a confirmation email shortly.');
    }, 3000);
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="donate-header">
        <h1>Make a Difference Today</h1>
        <p>
          Your generosity transforms lives across Africa. Every donation, no matter the size, 
          creates lasting impact in education, healthcare, and community development. 
          Join thousands of supporters making change possible.
        </p>
        <div className="trust-indicators">
          <div className="trust-item">
            <FiShield />
            <span>Secure Donations</span>
          </div>
          <div className="trust-item">
            <FiCheck />
            <span>Tax Deductible</span>
          </div>
          <div className="trust-item">
            <FiTarget />
            <span>100% Transparent</span>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="donation-section">
        <div className="donation-container">
          <div className="donation-form-side">
            <form onSubmit={handleDonationSubmit} className="donation-form">
              <div className="form-header">
                <h2>Choose Your Impact</h2>
                <p>Select how you'd like to support our mission</p>
              </div>

              {/* Donation Type */}
              <div className="donation-type">
                <div className="type-buttons">
                  <button
                    type="button"
                    className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    <FiGift />
                    One-Time Donation
                  </button>
                  <button
                    type="button"
                    className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    <FiRepeat />
                    Monthly Giving
                  </button>
                </div>
              </div>

              {/* Cause Selection */}
              <div className="cause-selection">
                <h3>Select a Cause</h3>
                <div className="causes-grid">
                  {causes.map(cause => (
                    <div
                      key={cause.id}
                      className={`cause-card ${selectedCause === cause.id ? 'selected' : ''}`}
                      onClick={() => setSelectedCause(cause.id)}
                    >
                      <div className="cause-icon">{cause.icon}</div>
                      <div className="cause-info">
                        <h4>{cause.name}</h4>
                        <p>{cause.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="amount-selection">
                <h3>Donation Amount</h3>
                <div className="amount-presets">
                  {presetAmounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      className={`amount-btn ${donationAmount === amount ? 'active' : ''}`}
                      onClick={() => setDonationAmount(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <label htmlFor="customAmount">Custom Amount</label>
                  <div className="amount-input">
                    <FiDollarSign className="currency-icon" />
                    <input
                      type="number"
                      id="customAmount"
                      min="1"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="payment-options">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      type="button"
                      className={`payment-btn ${paymentMethod === method.id ? 'active' : ''} ${!method.available ? 'disabled' : ''}`}
                      onClick={() => method.available && setPaymentMethod(method.id)}
                      disabled={!method.available}
                    >
                      {method.icon}
                      <span>{method.name}</span>
                    </button>
                  ))}
                </div>
                <div className="payment-security">
                  <FiShield className="security-icon" />
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </div>

              {/* Donate Button */}
              <button type="submit" className="donate-btn" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <div className="loading-spinner"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FiHeart />
                    Donate ${donationAmount} {donationType === 'monthly' ? '/month' : 'now'}
                  </>
                )}
              </button>

              <p className="donation-note">
                By donating, you agree to our terms and conditions. 
                You will receive a tax-deductible receipt via email.
              </p>
            </form>
          </div>

          <div className="impact-side">
            <div className="impact-preview">
              <h3>Your Impact</h3>
              <div className="selected-cause-preview">
                <img src={causes.find(c => c.id === selectedCause)?.image} alt="Impact" />
                <div className="cause-details">
                  <h4>{causes.find(c => c.id === selectedCause)?.name}</h4>
                  <p>{causes.find(c => c.id === selectedCause)?.impact}</p>
                </div>
              </div>
              
              <div className="impact-metrics">
                <div className="metric">
                  <span className="metric-number">{getImpact(donationAmount).children}</span>
                  <span className="metric-label">Children Supported</span>
                </div>
                <div className="metric">
                  <span className="metric-number">{getImpact(donationAmount).meals}</span>
                  <span className="metric-label">Meals Provided</span>
                </div>
                <div className="metric">
                  <span className="metric-number">{getImpact(donationAmount).books}</span>
                  <span className="metric-label">Books Distributed</span>
                </div>
              </div>

              {donationType === 'monthly' && (
                <div className="monthly-impact">
                  <h4>Annual Impact</h4>
                  <p>Your monthly gift of ${donationAmount} will provide:</p>
                  <ul>
                    <li>{getImpact(donationAmount * 12).children} children with year-round support</li>
                    <li>{getImpact(donationAmount * 12).meals} nutritious meals annually</li>
                    <li>{getImpact(donationAmount * 12).books} educational resources</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="donation-benefits">
              <h4>Why Donate to BAE Foundation?</h4>
              <ul>
                <li>
                  <FiTarget />
                  <span>Direct Impact: 90% of donations go directly to programs</span>
                </li>
                <li>
                  <FiUsers />
                  <span>Transparent Reporting: Regular updates on your impact</span>
                </li>
                <li>
                  <FiShield />
                  <span>Tax Deductible: Official receipts for all donations</span>
                </li>
                <li>
                  <FiHeart />
                  <span>Trusted Partner: 9 years of community impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="other-ways">
        <div className="ways-container">
          <h2>Other Ways to Support</h2>
          <div className="ways-grid">
            <div className="way-card">
              <FiGift className="way-icon" />
              <h3>Corporate Partnerships</h3>
              <p>Partner with us for employee giving programs, CSR initiatives, and matching gift opportunities.</p>
              <button className="way-btn">Learn More</button>
            </div>
            
            <div className="way-card">
              <FiUsers className="way-icon" />
              <h3>Volunteer Your Time</h3>
              <p>Join our volunteer programs and contribute your skills to make a direct impact in communities.</p>
              <button className="way-btn">Get Involved</button>
            </div>
            
            <div className="way-card">
              <FiStar className="way-icon" />
              <h3>Legacy Giving</h3>
              <p>Create a lasting legacy by including BAE Foundation in your will or estate planning.</p>
              <button className="way-btn">Plan Your Legacy</button>
            </div>
            
            <div className="way-card">
              <FiTarget className="way-icon" />
              <h3>Fundraise for Us</h3>
              <p>Start your own fundraising campaign for birthdays, events, or special occasions.</p>
              <button className="way-btn">Start Fundraising</button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="donor-stories">
        <div className="stories-container">
          <h2>Stories from Our Donors</h2>
          <div className="stories-grid">
            <div className="story-card">
              <p>"Supporting BAE Foundation's education programs has been incredibly rewarding. Seeing the updates and photos of children using the supplies I funded brings me so much joy."</p>
              <div className="story-author">
                <strong>Sarah Johnson</strong>
                <span>Monthly Donor since 2023</span>
              </div>
            </div>
            
            <div className="story-card">
              <p>"The transparency and regular communication from BAE Foundation gives me confidence that my donations are making a real difference in African communities."</p>
              <div className="story-author">
                <strong>Michael Chen</strong>
                <span>Corporate Partner</span>
              </div>
            </div>
            
            <div className="story-card">
              <p>"I started with a small donation and have watched the foundation grow. Their impact on women's empowerment aligns perfectly with my values."</p>
              <div className="story-author">
                <strong>Emma Williams</strong>
                <span>Legacy Donor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}