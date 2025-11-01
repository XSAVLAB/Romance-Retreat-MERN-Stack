import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact">
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to create your perfect romantic experience? Let's make it magical together.</p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Let's Plan Your Dream Experience</h2>
              <p className="contact-description">
                Whether you're planning a surprise proposal, celebrating an anniversary, or simply wanting to create unforgettable memories, our team is here to bring your vision to life.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>Goa, India<br />Serving beautiful locations across North and South Goa</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+91 98765 43210<br />Available 9 AM - 9 PM (IST)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>hello@romanceretreat.com<br />info@romanceretreat.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div className="contact-text">
                    <h3>Response Time</h3>
                    <p>Within 24 hours<br />Emergency planning: Same day response</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Our Journey</h3>
                <div className="social-icons">
                  <a href="https://instagram.com/romanceretreat" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
                  <a href="https://facebook.com/romanceretreat" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
                  <a href="https://wa.me/919876543210" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
                  <a href="https://pinterest.com/romanceretreat" className="social-icon" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">📌</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Tell Us About Your Vision</h2>
                <p>Share your ideas with us and we'll create something extraordinary</p>
              </div>

              {submitMessage && (
                <div className="success-message">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventType">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select event type</option>
                      <option value="romantic-dinner">Romantic Dinner</option>
                      <option value="wedding-proposal">Wedding Proposal</option>
                      <option value="anniversary">Anniversary Celebration</option>
                      <option value="valentines">Valentine's Special</option>
                      <option value="yacht-dinner">Yacht Dinner</option>
                      <option value="spa-wellness">Couple Spa & Wellness</option>
                      <option value="birthday">Birthday Celebration</option>
                      <option value="custom">Custom Experience</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventDate">Preferred Date</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guestCount">Number of Guests</label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                    >
                      <option value="">Select guest count</option>
                      <option value="2">2 (Couple)</option>
                      <option value="4">3-4 guests</option>
                      <option value="6">5-6 guests</option>
                      <option value="10">7-10 guests</option>
                      <option value="15">11-15 guests</option>
                      <option value="20+">20+ guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range (Optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="10000-25000">₹10,000 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                    <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                    <option value="200000+">₹2,00,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Vision *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Describe your dream experience... What's the occasion? Any special requests? Preferred location or theme?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Your Request...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>We recommend booking at least 2-3 weeks in advance for optimal planning. However, we can accommodate last-minute requests based on availability.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide photography services?</h3>
              <p>Yes! We work with professional photographers to capture your special moments. Photography packages can be added to any experience.</p>
            </div>
            <div className="faq-item">
              <h3>What areas in Goa do you serve?</h3>
              <p>We serve all major locations across North and South Goa including beaches, resorts, private villas, and unique venues.</p>
            </div>
            <div className="faq-item">
              <h3>Can you customize packages?</h3>
              <p>Absolutely! Every experience is tailored to your preferences. We love creating unique, personalized moments for each couple.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;