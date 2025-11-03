import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import './Portfolio.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Import portfolio images (using existing service images)
import romanticDinnerImg from './images/Services/Romantic_Dinner.jpg';
import weddingProposalImg from './images/Services/Wedding_Proposal.jpg';
import anniversaryCelebrationsImg from './images/Services/Anniversary_Celebrations.jpg';
import valentinesDinnerImg from './images/Services/Valentines_Dinner.jpg';
import yachtDinnerImg from './images/Services/Yatch_Dinner.jpg';
import coupleMassageImg from './images/Services/Couple_Massage.jpg';
import birthdayImg from './images/Services/Birthday_Celebrations.jpg';
import customizedMomentsImg from './images/Services/Customized_Moments.jpg';
import dinnerDateImg from './images/Services/Dinner_Date.png';

const Portfolio = () => {
  const { adminData } = useAdmin();
  const navigate = useNavigate();
  
  // Debug: Check what admin data we're getting (remove in production)
  // console.log('Portfolio component - adminData:', adminData);
  // console.log('Portfolio component - portfolioImages:', adminData.portfolioImages);

  const handleBookingClick = () => {
    navigate('/booking');
  };
  
  const portfolioItems = [
    {
      id: 1,
      title: "Beachfront Candlelight Dinner",
      category: "Romantic Dinners",
      location: "Anjuna Beach, Goa",
      description: "A magical evening under the stars with personalized table setting and live acoustic music",
      image: romanticDinnerImg,
      date: "October 2024"
    },
    {
      id: 2,
      title: "Sunset Proposal Setup",
      category: "Wedding Proposals",
      location: "Palolem Beach, Goa",
      description: "Picture-perfect proposal moment with rose petals, fairy lights, and photographer",
      image: weddingProposalImg,
      date: "September 2024"
    },
    {
      id: 3,
      title: "Golden Anniversary Celebration",
      category: "Anniversary Celebrations",
      location: "Private Villa, Old Goa",
      description: "50 years of love celebrated with family, golden decorations, and memory lane setup",
      image: anniversaryCelebrationsImg,
      date: "August 2024"
    },
    {
      id: 4,
      title: "Valentine's Rooftop Romance",
      category: "Valentine's Dinners",
      location: "Rooftop Restaurant, Panaji",
      description: "Elevated dining experience with city lights, red roses, and champagne toast",
      image: valentinesDinnerImg,
      date: "February 2024"
    },
    {
      id: 5,
      title: "Luxury Yacht Celebration",
      category: "Yacht Dinners",
      location: "Mandovi River, Goa",
      description: "Private yacht dinner cruise with live music, gourmet cuisine, and stunning views",
      image: yachtDinnerImg,
      date: "July 2024"
    },
    {
      id: 6,
      title: "Couples Spa Retreat",
      category: "Spa & Wellness",
      location: "Luxury Resort, South Goa",
      description: "Relaxing spa day with couples massage, aromatherapy, and private pool access",
      image: coupleMassageImg,
      date: "June 2024"
    },
    {
      id: 7,
      title: "Birthday Celebration",
      category: "Special Occasions",
      location: "Heritage Hotel, Goa",
      description: "Surprise birthday celebration with decorations, cake, and personalized touches",
      image: birthdayImg,
      date: "May 2024"
    },
    {
      id: 8,
      title: "Customized Romantic Moment",
      category: "Unique Experiences",
      location: "Private Location, Goa",
      description: "Personalized romantic setup tailored to couple's preferences and love story",
      image: customizedMomentsImg,
      date: "April 2024"
    },
    {
      id: 9,
      title: "Intimate Dinner Date",
      category: "Dinner Experiences",
      location: "Secluded Restaurant, Goa",
      description: "Private dinner date with ambient lighting, gourmet cuisine, and romantic atmosphere",
      image: dinnerDateImg,
      date: "March 2024"
    }
  ];

  const categories = ["All", "Romantic Dinners", "Wedding Proposals", "Anniversary Celebrations", "Valentine's Dinners", "Yacht Dinners", "Spa & Wellness", "Special Occasions", "Unique Experiences", "Dinner Experiences", "Custom Gallery"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Combine static portfolio items with admin-uploaded images
  // Sort admin images by timestamp (most recent first) and handle both old and new formats
  const adminUploadedItems = adminData.portfolioImages
    .map((item, originalIndex) => {
      // Handle both old format (string URLs) and new format (objects with timestamps)
      if (typeof item === 'string') {
        return {
          url: item,
          timestamp: 0, // Old images get timestamp 0
          id: `legacy-${originalIndex}`,
          originalIndex
        };
      }
      return { ...item, originalIndex };
    })
    .sort((a, b) => b.timestamp - a.timestamp) // Sort by timestamp, most recent first
    .map((item, index) => ({
      id: item.id || `admin-${index}`,
      title: `Portfolio Image ${index + 1}`,
      category: "Custom Gallery",
      location: "Goa",
      description: "Beautiful moments captured by Romance Retreat",
      image: item.url,
      date: item.timestamp > 0 ? new Date(item.timestamp).toLocaleDateString() : "Recent",
      uploadOrder: adminData.portfolioImages.length - index,
      timestamp: item.timestamp
    }));

  // Put recently uploaded images first, then static portfolio items
  const allPortfolioItems = [...adminUploadedItems, ...portfolioItems];

  const filteredItems = selectedCategory === "All" 
    ? allPortfolioItems 
    : allPortfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio">
      <Navbar />
      
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1>Our Portfolio</h1>
          <p>Discover the magic we've created for couples across Goa. Each celebration tells a unique love story.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filters">
        <div className="container">
          <h2>Filter by Category</h2>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-gallery">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div key={item.id} className={`portfolio-card card-${(index % 9) + 1}`}>
                <div className="portfolio-image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    onError={(e) => {
                      // Fallback for broken images
                      e.target.src = '/images/placeholder.jpg';
                      e.target.alt = 'Image not available';
                    }}
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-details">
                      <span className="portfolio-category">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p className="portfolio-location">📍 {item.location}</p>
                      <p className="portfolio-description">{item.description}</p>
                      <span className="portfolio-date">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Own Story?</h2>
            <p>Let us design a magical experience that's uniquely yours</p>
            <button className="cta-button" onClick={handleBookingClick}>
              Book Your Romantic Experience
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;