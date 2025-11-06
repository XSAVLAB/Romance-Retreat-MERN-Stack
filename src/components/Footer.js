import React from 'react';
import { Link } from 'react-router-dom';
import { useContactInfo } from '../hooks/useContactInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = useContactInfo();

  const handleSubscribe = () => {
    alert('Feature Coming Soon');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <div className="footer-logo">
                      <img src={`${process.env.PUBLIC_URL}/Red_Logo.png`} alt="Romance Retreat" className="footer-logo-img" loading="lazy" width={120} height={120} />
            </div>
            <p className="company-description">
              Creating unforgettable romantic experiences in the heart of Goa. 
              Where every moment is crafted into a memory, and every experience celebrates your love story.
            </p>
            <div className="social-links">
              <a href={contactInfo.socialMedia.facebook} className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/facebook-logo.svg`} alt="Facebook" className="social-icon-img" loading="lazy" width={32} height={32} />
              </a>
              <a href={contactInfo.socialMedia.instagram} className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/instagram-logo.svg`} alt="Instagram" className="social-icon-img" loading="lazy" width={32} height={32} />
              </a>
              <a href={contactInfo.socialMedia.twitter} className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/x-logo.svg`} alt="X (Twitter)" className="social-icon-img" loading="lazy" width={32} height={32} />
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/whatsapp_logo.svg`} alt="WhatsApp" className="social-icon-img" loading="lazy" width={32} height={32} />
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
              <li><Link to="/services/romantic-dinners">Romantic Dinners</Link></li>
              <li><Link to="/services/wedding-proposals">Wedding Proposals</Link></li>
              <li><Link to="/services/valentines-dinners">Valentine's Dinners</Link></li>
              <li><Link to="/services/anniversary-celebrations">Anniversary Celebrations</Link></li>
              <li><Link to="/services/yacht-dinner">Yacht Dinners</Link></li>
              <li><Link to="/services/couple-massage">Couple Massage & Spa</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                {(() => {
                  // Smart address formatting
                  const address = contactInfo.address;
                  if (address.includes('H.No: 1417, Satyabhama Nivas, Near Naga Cottage, Tembwada')) {
                    // Default address - format in two lines
                    return (
                      <>
                        <p>H.No: 1417, Satyabhama Nivas, Near Naga Cottage</p>
                        <p>Tembwada, Morjim, Pernem, Goa-403512</p>
                      </>
                    );
                  } else {
                    // Custom address - try to split at logical points
                    const parts = address.split(', ');
                    if (parts.length > 3) {
                      const midpoint = Math.ceil(parts.length / 2);
                      const firstLine = parts.slice(0, midpoint).join(', ');
                      const secondLine = parts.slice(midpoint).join(', ');
                      return (
                        <>
                          <p>{firstLine}</p>
                          <p>{secondLine}</p>
                        </>
                      );
                    } else {
                      return <p>{address}</p>;
                    }
                  }
                })()}
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>{contactInfo.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>{contactInfo.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
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
              <button className="newsletter-btn" onClick={handleSubscribe}>Subscribe</button>
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
              <span className="separator">|</span>
              <Link to="/admin" style={{color: '#888', fontSize: '0.8rem'}}>Admin</Link>
            </div>
            <div className="designed-by">
              <p>Crafted with ❤️ by <a href="https://www.xsavlab.com/" target="_blank" rel="noopener noreferrer" style={{color: '#ff6b7a', textDecoration: 'none'}}>XSAVLAB</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;