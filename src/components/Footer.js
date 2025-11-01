import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './images/RR Logo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src={logo} alt="Romance Retreat" className="footer-logo-img" />
            </div>
            <p className="company-description">
              Creating unforgettable romantic experiences in the heart of Goa. 
              Where every moment is crafted into a memory, and every experience celebrates your love story.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/romanceretreat" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/romanceretreat" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/romanceretreat" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/919876543210" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section services-links">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#romantic-dinners">Romantic Dinners</a></li>
              <li><a href="#wedding-proposals">Wedding Proposals</a></li>
              <li><a href="#valentines-dinners">Valentine's Dinners</a></li>
              <li><a href="#anniversary-celebrations">Anniversary Celebrations</a></li>
              <li><a href="#yacht-dinners">Yacht Dinners</a></li>
              <li><a href="#couple-spa">Couple Massage & Spa</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>Goa, India</p>
                <p>Paradise Beach Resort Area</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>+91 98765 43210</p>
                <p>+91 87654 32109</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>info@romanceretreat.com</p>
                <p>bookings@romanceretreat.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <p>Mon - Sun: 9:00 AM - 11:00 PM</p>
                <p>24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for romantic tips, special offers, and exclusive updates.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Romance Retreat. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
            <div className="designed-by">
              <p>Crafted with ❤️ for unforgettable moments</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;