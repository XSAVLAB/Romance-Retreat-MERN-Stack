import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import homeImage from './images/Home.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePricing } from '../contexts/PricingContext';
import { useAdmin } from '../contexts/AdminContext';
import { useContactInfo } from '../hooks/useContactInfo';

// Import service images for preview
import customizedMomentsImgWebp from './images/Services-optimized/Customized_Moments.webp';
import customizedMomentsImgJpg from './images/Services/Customized_Moments.jpg';
import coupleMassageImgWebp from './images/Services-optimized/Couple_Massage.webp';
import coupleMassageImgJpg from './images/Services/Couple_Massage.jpg';
import weddingProposalImgWebp from './images/Services-optimized/Wedding_Proposal.webp';
import weddingProposalImgJpg from './images/Services/Wedding_Proposal.jpg';

// Import other service images for services preview section
import romanticDinnerImgWebp from './images/Services-optimized/Romantic_Dinner.webp';
import romanticDinnerImgJpg from './images/Services/Romantic_Dinner.jpg';
import yachtDinnerImgWebp from './images/Services-optimized/Yatch_Dinner.webp';
import yachtDinnerImgJpg from './images/Services/Yatch_Dinner.jpg';

// Home Component
const Home = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();
  const { adminData } = useAdmin();
  const contactInfo = useContactInfo();

  const handleLearnMoreClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const handleExploreRetreatsClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const handleViewPortfolioClick = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  const handleViewAllServicesClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const handleSeeMoreReviewsClick = () => {
    navigate('/reviews');
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      <Navbar />
      {/* Hero Section */}
      <div className="hero-background" id="home" style={{backgroundImage: `url(${homeImage})`}}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{adminData.bannerTexts.heroTitle}</h1>
            <p className="hero-subtitle">
              {adminData.bannerTexts.heroSubtitle}
            </p>
            <button className="cta-button" onClick={handleExploreRetreatsClick}>Explore Retreats</button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <header className="about-header">
            <h1>About Us</h1>
            <p className="about-intro">
              Welcome to Romance Retreat — where every moment is crafted into a memory, and every experience is designed to celebrate your love story. Nestled in the heart of Goa, we specialise in creating intimate, unforgettable moments for couples, whether you're planning a surprise proposal, celebrating a milestone, or simply seeking to reconnect.
            </p>
            <button onClick={handleLearnMoreClick} className="learn-more-btn">Learn More About Us</button>
          </header>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          <header className="portfolio-header">
            <h1>Our Portfolio</h1>
            <p className="portfolio-intro">
              Discover the magic we've created for couples across Goa. Each celebration is unique, just like your love story.
            </p>
          </header>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
          <picture>
            <source srcSet={customizedMomentsImgWebp} type="image/webp" />
            <img src={customizedMomentsImgJpg}
        alt="Customized Romance Moments"
        loading="lazy"
        width={400}
        height={300}
        srcSet={`${customizedMomentsImgJpg} 400w, ${customizedMomentsImgJpg} 800w`}
        sizes="(max-width: 600px) 100vw, 400px" />
          </picture>
                <div className="portfolio-overlay">
                  <h3>Customized Romance Moments</h3>
                  <p>Personalized Experience • Tailored to Your Love Story</p>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                  {/* ...existing code... */}
          <picture>
            <source srcSet={coupleMassageImgWebp} type="image/webp" />
            <img src={coupleMassageImgJpg}
        alt="Couple Massage & Spa"
        loading="lazy"
        width={400}
        height={300}
        srcSet={`${coupleMassageImgJpg} 400w, ${coupleMassageImgJpg} 800w`}
        sizes="(max-width: 600px) 100vw, 400px" />
          </picture>
                <div className="portfolio-overlay">
                  <h3>Couple Massage & Spa</h3>
                  <p>Relaxation & Wellness • Luxury Spa Experience</p>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                  {/* ...existing code... */}
          <picture>
            <source srcSet={weddingProposalImgWebp} type="image/webp" />
            <img src={weddingProposalImgJpg}
        alt="Wedding Proposal Setup"
        loading="lazy"
        width={400}
        height={300}
        srcSet={`${weddingProposalImgJpg} 400w, ${weddingProposalImgJpg} 800w`}
        sizes="(max-width: 600px) 100vw, 400px" />
          </picture>
                <div className="portfolio-overlay">
                  <h3>Wedding Proposal Setup</h3>
                  <p>Dream Proposal • Picture Perfect Moment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-cta">
            <button onClick={handleViewPortfolioClick} className="view-portfolio-btn">
              View Complete Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview" id="services">
        <div className="services-container">
          <header className="services-preview-header">
            <h1>Our Romantic Services</h1>
            <p className="services-intro">
              Discover our carefully curated collection of romantic experiences designed to create unforgettable moments for you and your loved one.
            </p>
          </header>
          
          <div className="services-preview-grid">
            <div className="service-preview-card">
              <div className="service-preview-image">
                  {/* ...existing code... */}
          <picture>
            <source srcSet={romanticDinnerImgWebp} type="image/webp" />
            <img src={romanticDinnerImgJpg}
        alt="Romantic Dinners"
        loading="lazy"
        width={400}
        height={300}
        srcSet={`${romanticDinnerImgJpg} 400w, ${romanticDinnerImgJpg} 800w`}
        sizes="(max-width: 600px) 100vw, 400px" />
          </picture>
              </div>
              <div className="service-preview-content">
                <div className="service-preview-text-content">
                  <h3>Romantic Dinners</h3>
                  <p>Candle-lit moments, beachfront tables, rooftop ambience. Experience intimate dining like never before.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('romanticDinners')}
                </div>
              </div>
            </div>

            <div className="service-preview-card">
              <div className="service-preview-image">
                  {/* ...existing code... */}
          <picture>
            <source srcSet={weddingProposalImgWebp} type="image/webp" />
            <img src={weddingProposalImgJpg}
        alt="Wedding Proposals"
        loading="lazy"
        width={400}
        height={300}
        srcSet={`${weddingProposalImgJpg} 400w, ${weddingProposalImgJpg} 800w`}
        sizes="(max-width: 600px) 100vw, 400px" />
          </picture>
              </div>
              <div className="service-preview-content">
                <div className="service-preview-text-content">
                  <h3>Wedding Proposals</h3>
                  <p>Thoughtfully designed settings, surprise moments, professional coordination. Make your proposal perfect.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('weddingProposals')}
                </div>
              </div>
            </div>

            <div className="service-preview-card">
              <div className="service-preview-image">
                  {/* ...existing code... */}
          <picture>
            <source srcSet={yachtDinnerImgWebp} type="image/webp" />
            <img src={yachtDinnerImgJpg}
        alt="Yacht Dinners"
        loading="lazy"
        width={400}
        height={300}
        srcSet={`${yachtDinnerImgJpg} 400w, ${yachtDinnerImgJpg} 800w`}
        sizes="(max-width: 600px) 100vw, 400px" />
          </picture>
              </div>
              <div className="service-preview-content">
                <div className="service-preview-text-content">
                  <h3>Yacht Dinners</h3>
                  <p>Sail into romance with exclusive yacht dining experiences. Luxury meets intimacy on the open waters.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('yachtDinner')}
                </div>
              </div>
            </div>
          </div>

          <div className="services-cta">
            <button onClick={handleViewAllServicesClick} className="view-all-services-btn">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Preview Section */}
      <section className="reviews-preview" id="reviews">
        <div className="reviews-container">
          <header className="reviews-preview-header">
            <h1>What Our Couples Say</h1>
            <p className="reviews-intro">
              Don't just take our word for it - hear from the couples who've experienced the magic of Romance Retreat.
            </p>
          </header>
          
          <div className="reviews-preview-grid">
            <div className="review-preview-card">
              <div className="review-stars">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="review-text">
                "Absolutely magical experience! The romantic dinner setup on the beach was beyond our expectations. Every detail was perfect, from the candlelit table to the sunset timing."
              </p>
              <div className="review-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span className="review-time">2 weeks ago</span>
                </div>
              </div>
            </div>

            <div className="review-preview-card">
              <div className="review-stars">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="review-text">
                "The proposal setup was absolutely stunning! The team helped me plan the perfect surprise. The yacht dinner with sunset backdrop was like a fairy tale. Emma said yes!"
              </p>
              <div className="review-author">
                <div className="author-info">
                  <h4>Michael & Emma</h4>
                  <span className="review-time">1 month ago</span>
                </div>
              </div>
            </div>

            <div className="review-preview-card">
              <div className="review-stars">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="review-text">
                "The couple's spa experience was pure bliss! The ambiance, the treatments, everything was top-notch. My husband and I felt so relaxed and reconnected."
              </p>
              <div className="review-author">
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <span className="review-time">3 weeks ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-cta">
            <button onClick={handleSeeMoreReviewsClick} className="see-more-reviews-btn">
              See More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
        className="floating-whatsapp" 
        aria-label="WhatsApp" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src={`${process.env.PUBLIC_URL}/whatsapp_logo.svg`} alt="WhatsApp" className="floating-whatsapp-icon" />
      </a>

      <Footer />
    </div>
  );
};

export default Home;