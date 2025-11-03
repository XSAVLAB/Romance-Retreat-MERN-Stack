import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import yachtDinnerImg from '../components/images/Services/Yatch_Dinner.jpg';
import romanticDinnerImg from '../components/images/Services/Romantic_Dinner.jpg';
import dinnerDateImg from '../components/images/Services/Dinner_Date.png';
import anniversaryCelebrationsImg from '../components/images/Services/Anniversary_Celebrations.jpg';

const YachtDinner = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId) => {
    const serviceRoutes = {
      'romanticDinners': '/services/romantic-dinners',
      'weddingProposals': '/services/wedding-proposals',
      'coupleMassage': '/services/couple-massage',
      'valentinesDinners': '/services/valentines-dinners',
      'anniversaryCelebrations': '/services/anniversary-celebrations',
      'birthdayCelebrations': '/services/birthday-celebrations',
      'dinnerDate': '/services/dinner-date-experiences',
      'customizedMoments': '/services/customized-moments'
    };
    navigate(serviceRoutes[serviceId]);
    window.scrollTo(0, 0);
  };

  const relatedServices = [
    {
      id: 'romanticDinners',
      title: "Romantic Dinners",
      description: "Candle-lit moments, beachfront tables, rooftop ambience. Experience intimate dining like never before.",
      image: romanticDinnerImg,
      price: getPrice('romanticDinners')
    },
    {
      id: 'dinnerDate',
      title: "Dinner Date Experiences",
      description: "Just the two of you, in unique locations — on the beach, in a garden, or on a private yacht.",
      image: dinnerDateImg,
      price: getPrice('dinnerDate')
    },
    {
      id: 'anniversaryCelebrations',
      title: "Anniversary Celebrations",
      description: "Celebrate your love milestones with themed decorations, romantic ambiance, and custom anniversary experiences.",
      image: anniversaryCelebrationsImg,
      price: getPrice('anniversaryCelebrations')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${yachtDinnerImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Yacht Dinner</h1>
            <p>Cruise along the coastline, dine under the stars</p>
            <div className="service-hero-price">
              Starting From: ₹{getPrice('yachtDinner')}
              <br />
              <span style={{fontSize: '1.1rem', fontWeight: '600'}}>Book Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="service-container">
          <div className="service-info">
            <h2>Luxury Meets Intimacy on the Open Waters</h2>
            <p className="service-description">
              Escape to the serene beauty of the ocean with our exclusive yacht dinner experiences. 
              Sail into romance as you enjoy gourmet cuisine while watching the sun melt into the sea, 
              followed by an intimate dinner under a canopy of stars. This is luxury dining redefined 
              with the gentle sway of the ocean and breathtaking panoramic views.
            </p>

            <div className="service-features">
              <h3>What's Included:</h3>
              <ul>
                <li>🛥️ Private luxury yacht charter (4-6 hours)</li>
                <li>👨‍✈️ Professional captain and crew service</li>
                <li>🍽️ Multi-course gourmet dinner prepared by chef</li>
                <li>🥂 Premium wine and champagne selection</li>
                <li>🌅 Sunset cruise with panoramic ocean views</li>
                <li>✨ Romantic deck decoration with lights</li>
                <li>🎵 Premium sound system for ambient music</li>
                <li>📸 Professional photography session (optional)</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Cruise Options:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Sunset Romance</h4>
                  <p>4-hour cruise with dinner during golden hour and starlit evening</p>
                </div>
                <div className="location-item">
                  <h4>Coastal Explorer</h4>
                  <p>6-hour journey exploring hidden coves and secluded beaches</p>
                </div>
                <div className="location-item">
                  <h4>Moonlight Magic</h4>
                  <p>Evening cruise under the stars with intimate candlelit dining</p>
                </div>
                <div className="location-item">
                  <h4>Island Hopping</h4>
                  <p>Full-day adventure visiting multiple islands with onboard dining</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Yacht Experience:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Welcome Aboard</h4>
                  <p>Champagne welcome and safety briefing as you board your private yacht</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Sunset Cruise</h4>
                  <p>Relax on deck with drinks as we sail into the golden sunset</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Gourmet Dining</h4>
                  <p>Enjoy multi-course dinner prepared fresh onboard by our chef</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Starlit Romance</h4>
                  <p>Dance under the stars or simply enjoy intimate conversation</p>
                </div>
              </div>
            </div>

            <div className="yacht-amenities">
              <h3>Yacht Amenities:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Luxury Interiors</h4>
                  <p>Elegant cabin with comfortable seating and panoramic windows</p>
                </div>
                <div className="location-item">
                  <h4>Open Deck</h4>
                  <p>Spacious deck area perfect for dining and stargazing</p>
                </div>
                <div className="location-item">
                  <h4>Full Kitchen</h4>
                  <p>Professional galley for fresh meal preparation onboard</p>
                </div>
                <div className="location-item">
                  <h4>Premium Features</h4>
                  <p>Wi-Fi, sound system, safety equipment, and luxury amenities</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Sail into Romance?</h3>
              <p>Book your exclusive yacht dinner experience and create memories that will last a lifetime.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Yacht Dinner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="service-container">
          <h2>You Might Also Love</h2>
          <div className="related-services-grid">
            {relatedServices.map((service) => (
              <div key={service.id} className="related-service-card" onClick={() => handleServiceClick(service.id)} style={{cursor: 'pointer'}}>
                <div className="related-service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="related-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="related-service-price">
                    Starting From: ₹{service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YachtDinner;