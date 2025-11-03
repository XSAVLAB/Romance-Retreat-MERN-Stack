import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import './Navbar.css';
import logo from './images/RR Logo2.png';

const Navbar = () => {
  const { adminData } = useAdmin();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight; // Height of hero section
      
      if (scrollTop > heroHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy functionality - only on home page
      if (isHomePage) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Get all sections
        const aboutElement = document.querySelector('#about');
        const portfolioElement = document.querySelector('#portfolio');
        const servicesElement = document.querySelector('#services');
        const reviewsElement = document.querySelector('#reviews');
        const footerElement = document.querySelector('footer');

        let currentSection = 'home';

        // Check each section based on scroll position (from bottom to top for priority)
        if (footerElement && scrollTop + windowHeight >= documentHeight - 150) {
          currentSection = 'contact';
        } else if (reviewsElement && scrollTop >= reviewsElement.offsetTop - 300) {
          currentSection = 'reviews';
        } else if (servicesElement && scrollTop >= servicesElement.offsetTop - 200) {
          currentSection = 'services';
        } else if (portfolioElement && scrollTop >= portfolioElement.offsetTop - 200) {
          currentSection = 'portfolio';
        } else if (aboutElement && scrollTop >= aboutElement.offsetTop - 200) {
          currentSection = 'about';
        }
        
        setActiveSection(currentSection);
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Call once to set initial state
    } else {
      // For non-home pages, remove any scroll listener and keep scrolled state true
      window.removeEventListener('scroll', handleScroll);
      setIsScrolled(true); // Keep scrolled true so CSS can work properly with non-home-page class
      setActiveSection(''); // No active section on other pages
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Moving Offers Banner */}
      <div className="offers-banner">
        <div className="banner-content">
          {adminData.topBannerTexts && adminData.topBannerTexts
            .filter(text => text.trim()) // Only show non-empty messages
            .map((text, index, filteredArray) => (
              <span key={index} className="banner-message-group">
                <span className="offer-text">{text}</span>
                {index < filteredArray.length - 1 && (
                  <span className="banner-separator">
                    {index % 4 === 0 && '🌹'}
                    {index % 4 === 1 && '💕'}
                    {index % 4 === 2 && '💍'}
                    {index % 4 === 3 && '✨'}
                  </span>
                )}
              </span>
            ))}
        </div>
      </div>
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${!isHomePage ? 'non-home-page' : ''}`}
        data-debug={`isHomePage: ${isHomePage}, isScrolled: ${isScrolled}, path: ${location.pathname}`}
      >
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Romance Retreat" className="logo-image" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${isHomePage && activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${isHomePage && activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/portfolio" 
              className={`navbar-link ${isHomePage && activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/services" 
              className={`navbar-link ${isHomePage && activeSection === 'services' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/reviews" 
              className={`navbar-link ${isHomePage && activeSection === 'reviews' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Reviews
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${isHomePage && activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/booking" 
              className="navbar-book-btn"
              onClick={closeMenu}
            >
              💕 Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;