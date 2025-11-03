import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import dinnerDateImg from '../components/images/Services/Dinner_Date.png';
import romanticDinnerImg from '../components/images/Services/Romantic_Dinner.jpg';
import yachtDinnerImg from '../components/images/Services/Yatch_Dinner.jpg';
import valentinesDinnerImg from '../components/images/Services/Valentines_Dinner.jpg';

const DinnerDateExperiences = () => {
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
      'yachtDinner': '/services/yacht-dinner',
      'coupleMassage': '/services/couple-massage',
      'valentinesDinners': '/services/valentines-dinners',
      'anniversaryCelebrations': '/services/anniversary-celebrations',
      'birthdayCelebrations': '/services/birthday-celebrations',
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
      id: 'yachtDinner',
      title: "Yacht Dinner",
      description: "Sail into romance with exclusive yacht dining experiences surrounded by endless ocean views.",
      image: yachtDinnerImg,
      price: getPrice('yachtDinner')
    },
    {
      id: 'valentinesDinners',
      title: "Valentine's Dinners",
      description: "Seasonal specials, curated menus, love-filled décor for the most romantic day of the year.",
      image: valentinesDinnerImg,
      price: getPrice('valentinesDinners')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${dinnerDateImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Dinner Date Experiences</h1>
            <p>Just the two of you, in unique locations — on the beach, in a garden, or on a private yacht</p>
            <div className="service-hero-price">
              Starting From: ₹{getPrice('dinnerDate')}
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
            <h2>Intimate Dinner Dates in Extraordinary Settings</h2>
            <p className="service-description">
              Escape the ordinary and immerse yourselves in intimate dinner date experiences designed just for two. 
              Whether you're celebrating a special occasion or simply want to reconnect, our dinner date experiences 
              offer the perfect blend of privacy, romance, and culinary excellence. From secluded beach dinners 
              to elegant garden settings, each location is carefully chosen to create the ideal atmosphere for love to flourish.
            </p>

            <div className="service-features">
              <h3>Dinner Date Experience Includes:</h3>
              <ul>
                <li>🍽️ Private table setup for complete intimacy</li>
                <li>🕯️ Romantic candlelit ambiance and mood lighting</li>
                <li>🌹 Fresh flower arrangements and table decorations</li>
                <li>🥂 Welcome cocktails and wine pairings</li>
                <li>👨‍🍳 Personal chef or premium catering service</li>
                <li>🎵 Soft background music or live acoustic performances</li>
                <li>📸 Optional couple's photography session</li>
                <li>🌟 Surprise romantic elements throughout the evening</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Unique Dinner Date Locations:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Beachfront Private Dining</h4>
                  <p>Secluded beach setup with ocean waves as your soundtrack</p>
                </div>
                <div className="location-item">
                  <h4>Secret Garden Dinner</h4>
                  <p>Enchanted garden space with fairy lights and natural beauty</p>
                </div>
                <div className="location-item">
                  <h4>Rooftop Terrace</h4>
                  <p>Elevated dining with panoramic city or countryside views</p>
                </div>
                <div className="location-item">
                  <h4>Private Villa Terrace</h4>
                  <p>Exclusive villa setting with personalized service</p>
                </div>
              </div>
            </div>

            <div className="dinner-styles">
              <h3>Dinner Date Styles:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Casual Romantic</h4>
                  <p>Relaxed atmosphere with comfort food and easy conversation</p>
                </div>
                <div className="location-item">
                  <h4>Fine Dining Experience</h4>
                  <p>Gourmet multi-course meals with wine pairings</p>
                </div>
                <div className="location-item">
                  <h4>Cultural Cuisine Journey</h4>
                  <p>Explore different cuisines together in themed settings</p>
                </div>
                <div className="location-item">
                  <h4>Interactive Cooking Date</h4>
                  <p>Cook together with a private chef guiding the experience</p>
                </div>
              </div>
            </div>

            <div className="timing-options">
              <h3>Perfect Timing Options:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Sunset Dinner</h4>
                  <p>Time your meal with the golden hour for magical lighting</p>
                </div>
                <div className="location-item">
                  <h4>Starlight Dining</h4>
                  <p>Late evening dinners under a canopy of stars</p>
                </div>
                <div className="location-item">
                  <h4>Sunrise Breakfast Date</h4>
                  <p>Early morning intimate meal watching the sunrise</p>
                </div>
                <div className="location-item">
                  <h4>Moonlight Dinner</h4>
                  <p>Romantic dinner dates illuminated by moonlight</p>
                </div>
              </div>
            </div>

            <div className="special-additions">
              <h3>Special Romantic Additions:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Love Letter Reading</h4>
                  <p>Exchange heartfelt letters during dessert course</p>
                </div>
                <div className="location-item">
                  <h4>Memory Lane Menu</h4>
                  <p>Dishes that represent special moments in your relationship</p>
                </div>
                <div className="location-item">
                  <h4>Surprise Proposal Setup</h4>
                  <p>Perfect intimate setting for popping the question</p>
                </div>
                <div className="location-item">
                  <h4>Anniversary Celebration</h4>
                  <p>Commemorate special relationship milestones</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Dinner Date Experience:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Location Selection</h4>
                  <p>Choose your perfect intimate dining location and style</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Menu Curation</h4>
                  <p>Personalized menu based on your preferences and dietary needs</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Romantic Setup</h4>
                  <p>Private table preparation with all romantic details</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Intimate Evening</h4>
                  <p>Enjoy your private dinner date with dedicated service</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready for Your Perfect Dinner Date?</h3>
              <p>Book your intimate dinner date experience and create magical moments in extraordinary settings.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Dinner Date Experience
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

export default DinnerDateExperiences;