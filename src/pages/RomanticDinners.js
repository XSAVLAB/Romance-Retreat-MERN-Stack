import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import romanticDinnerImg from '../components/images/Services/Romantic_Dinner.jpg';
import valentinesDinnerImg from '../components/images/Services/Valentines_Dinner.jpg';
import dinnerDateImg from '../components/images/Services/Dinner_Date.png';
import yachtDinnerImg from '../components/images/Services/Yatch_Dinner.jpg';

const RomanticDinners = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/booking?service=Romantic Dinners');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId) => {
    const serviceRoutes = {
      'weddingProposals': '/services/wedding-proposals',
      'yachtDinner': '/services/yacht-dinner',
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
      id: 'valentinesDinners',
      title: "Valentine's Dinners",
      description: "Seasonal specials, curated menus, love-filled décor. Celebrate love in the most romantic way.",
      image: valentinesDinnerImg,
      price: getPrice('valentinesDinners')
    },
    {
      id: 'dinnerDate',
      title: "Dinner Date Experiences",
      description: "Just the two of you, in unique locations — on the beach, in a garden, or on a private yacht.",
      image: dinnerDateImg,
      price: getPrice('dinnerDate')
    },
    {
      id: 'yachtDinner',
      title: "Yacht Dinner",
      description: "Cruise along the coastline, sip your drink as the sun melts into the sea, dine under the stars.",
      image: yachtDinnerImg,
      price: getPrice('yachtDinner')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${romanticDinnerImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Romantic Dinners</h1>
            <p>Candle-lit moments, beachfront tables, rooftop ambience</p>
            <div className="service-hero-price" onClick={handleBookNow} style={{cursor: 'pointer'}}>
              Starting From: ₹{getPrice('romanticDinners')}
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
            <h2>Experience Intimate Dining Like Never Before</h2>
            <p className="service-description">
              Transform an ordinary evening into an extraordinary memory with our romantic dinner experiences. 
              Whether you're celebrating an anniversary, planning a proposal, or simply want to reconnect 
              with your loved one, our carefully curated dining experiences create the perfect ambiance for love.
            </p>

            <div className="service-features">
              <h3>Customize Your Experience With:</h3>
              <ul>
                <li>🕯️ Candlelit table setup with premium linens</li>
                <li>🌹 Fresh flower arrangements and rose petals</li>
                <li>🎵 Ambient lighting and romantic music</li>
                <li>🍽️ Gourmet multi-course meals</li>
                <li>🥂 Welcome drinks and champagne toast</li>
                <li>📸 Professional photography (paid service, arranged separately)</li>
                <li>🌊 Beachfront or rooftop venue options</li>
                <li>👨‍🍳 Personal chef and dedicated service staff</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Popular Locations:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Beachfront Dining</h4>
                  <p>Private beach setup with ocean views and sunset backdrop</p>
                </div>
                <div className="location-item">
                  <h4>Rooftop Romance</h4>
                  <p>Elevated dining with panoramic city lights and starlit sky</p>
                </div>
                <div className="location-item">
                  <h4>Garden Paradise</h4>
                  <p>Tropical garden setting with fairy lights and natural beauty</p>
                </div>
                <div className="location-item">
                  <h4>Villa Terrace</h4>
                  <p>Private villa terrace with exclusive ambiance and privacy</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Create Your Perfect Evening?</h3>
              <p>Let us craft an unforgettable romantic dinner experience just for you.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Romantic Dinner
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

export default RomanticDinners;