import React, { useState } from 'react';
import './AboutScreen.css';
import './Contact.css';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiGlobe, FiCalendar } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    country: 'Ghana',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      country: "Ghana",
      address: "Tema Community 25, Greater Accra Region, Ghana",
      phone: "+233 55 032 4380",
      email: "info@baefoundation.org",
      whatsapp: "+233 55 032 4380",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM",
      timezone: "GMT"
    },
    {
      country: "The Gambia",
      address: "Serrekunda, West Coast Region, The Gambia",
      phone: "+220 321 4567",
      email: "gambia@baefoundation.org",
      whatsapp: "+220 321 4567",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM",
      timezone: "GMT"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'volunteer', label: 'Volunteer Programs' },
    { value: 'donation', label: 'Donation & Funding' },
    { value: 'media', label: 'Media & Press' },
    { value: 'program', label: 'Program Information' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        country: 'Ghana',
        inquiryType: 'general'
      });
    }, 2000);
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Whether you have questions about our work, 
          want to get involved, or are interested in partnerships, we're here to help. 
          Reach out to us and let's make a difference together.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <div className="contact-offices">
            {contactInfo.map((office, index) => (
              <div key={index} className="office-card">
                <h3>
                  <FiGlobe className="country-icon" />
                  {office.country} Office
                </h3>
                <div className="office-details">
                  <div className="contact-item">
                    <FiMapPin className="contact-icon" />
                    <div>
                      <span className="cont-label">Address</span>
                      <span className="cont-value">{office.address}</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <FiPhone className="contact-icon" />
                    <div>
                      <span className="cont-label">Phone</span>
                      <span className="cont-value">{office.phone}</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <div>
                      <span className="cont-label">Email</span>
                      <span className="cont-value">{office.email}</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <FaWhatsapp className="contact-icon whatsapp" />
                    <div>
                      <span >WhatsApp</span>
                      <span className="cont-value">{office.whatsapp}</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <FiClock className="contact-icon" />
                    <div>
                      <span className="cont-label">Office Hours</span>
                      <span className="cont-value">{office.hours} ({office.timezone})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          {submitMessage && (
            <div className="success-message">
              <FiSend className="success-icon" />
              {submitMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <FiUser className="form-icon" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <FiMail className="form-icon" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <FiPhone className="form-icon" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="country">
                  <FiGlobe className="form-icon" />
                  Country/Region *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Ghana">Ghana</option>
                  <option value="The Gambia">The Gambia</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Other Africa">Other African Country</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="inquiryType">
                  <FiMessageSquare className="form-icon" />
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                >
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Brief subject of your message"
                />
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="message">
                <FiMessageSquare className="form-icon" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell us more about your inquiry or how we can help you..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Social Media & Quick Actions */}
      <section className="contact-social">
        <div className="social-container">
          <div className="social-section">
            <h3>Follow Us</h3>
            <p>Stay connected with our latest updates and impact stories</p>
            <div className="social-links">
              <a href="https://facebook.com/baefoundation" className="social-link facebook">
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/baefoundation" className="social-link twitter">
                <FaTwitter />
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com/baefoundation" className="social-link instagram">
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com/company/baefoundation" className="social-link linkedin">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button className="action-btn volunteer">
                <FiUser />
                <div>
                  <span className="action-title">Become a Volunteer</span>
                  <span className="action-desc">Join our mission</span>
                </div>
              </button>
              
              <button className="action-btn partner">
                <FiGlobe />
                <div>
                  <span className="action-title">Partner With Us</span>
                  <span className="action-desc">Collaborate for impact</span>
                </div>
              </button>
              
              <button className="action-btn schedule">
                <FiCalendar />
                <div>
                  <span className="action-title">Schedule a Meeting</span>
                  <span className="action-desc">Book a consultation</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I volunteer with BAE Foundation?</h4>
              <p>Visit our volunteer program page or contact us directly. We have various opportunities for both local and remote volunteers.</p>
            </div>
            <div className="faq-item">
              <h4>How do I make a donation?</h4>
              <p>You can donate through our secure online platform, bank transfer, or mobile money. Contact us for specific donation guidelines.</p>
            </div>
            <div className="faq-item">
              <h4>Do you accept international partnerships?</h4>
              <p>Yes! We welcome partnerships with organizations worldwide that share our mission of creating positive impact in African communities.</p>
            </div>
            <div className="faq-item">
              <h4>How can I stay updated on your programs?</h4>
              <p>Subscribe to our newsletter, follow our social media channels, or visit our blog for regular updates on our impact and programs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}