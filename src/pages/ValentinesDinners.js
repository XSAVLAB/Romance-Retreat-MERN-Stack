import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import valentinesDinnerImg from '../components/images/Services-optimized/Valentines_Dinner.webp';
import romanticDinnerImg from '../components/images/Services-optimized/Romantic_Dinner.webp';
import dinnerDateImg from '../components/images/Services-optimized/Dinner_Date.webp';
import customizedMomentsImg from '../components/images/Services-optimized/Customized_Moments.webp';

const ValentinesDinners = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/booking?service=Valentine\'s Dinners');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId) => {
    const serviceRoutes = {
      'romanticDinners': '/services/romantic-dinners',
      'weddingProposals': '/services/wedding-proposals',
      'yachtDinner': '/services/yacht-dinner',
      'coupleMassage': '/services/couple-massage',
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
      id: 'customizedMoments',
      title: "Customised Romance Moments",
      description: "Tell us your dream, and we'll craft a bespoke experience that's uniquely yours.",
      image: customizedMomentsImg,
      price: getPrice('customizedMoments')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${valentinesDinnerImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Valentine's Dinners</h1>
            <p style={{fontStyle: 'normal'}}>Seasonal specials, curated menus, love-filled décor</p>
            <div className="service-hero-price" onClick={handleBookNow} style={{cursor: 'pointer'}}>
              Starting From: ₹{getPrice('valentinesDinners')}
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
            <h2>Celebrate Love in the Most Romantic Way</h2>
            <p className="service-description" style={{ fontStyle: 'normal' }}>
              Make this Valentine's Day unforgettable with our specially curated romantic dinner experiences. 
              From intimate beachside tables to elegant rooftop settings, we create the perfect atmosphere 
              for celebrating your love. Our seasonal Valentine's packages include special menus, 
              romantic decorations, and magical moments designed just for couples in love.
            </p>

            <div className="service-features">
              <h3>Customize Your Experience With:</h3>
              <ul>
                <li>💕 Heart-themed romantic decorations</li>
                <li>🌹 Fresh red roses and romantic flower arrangements</li>
                <li>🕯️ Premium candlelit table setup</li>
                <li>🍽️ Special Valentine's Day menu with aphrodisiac delicacies</li>
                <li>🥂 Champagne toast and valentine's cocktails</li>
                <li>🎵 Live romantic music or acoustic performances</li>
                <li>💌 Personalized love notes and surprise elements</li>
                <li>📸 Couple's photography session (paid service, arranged separately)</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Valentine's Venues:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Beachfront Romance</h4>
                  <p>Private beach setup with heart-shaped rose petal arrangements</p>
                </div>
                <div className="location-item">
                  <h4>Rooftop Under Stars</h4>
                  <p>Elevated dining with city lights and romantic ambiance</p>
                </div>
                <div className="location-item">
                  <h4>Garden Paradise</h4>
                  <p>Enchanted garden with fairy lights and valentine's decorations</p>
                </div>
                <div className="location-item">
                  <h4>Private Villa</h4>
                  <p>Exclusive villa terrace with personalized romantic touches</p>
                </div>
              </div>
            </div>

            <div className="valentine-menu">
              <h3>Special Valentine's Menu:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Romantic Appetizers</h4>
                  <p>Oysters, chocolate-covered strawberries, and artisanal cheese</p>
                </div>
                <div className="location-item">
                  <h4>Love-Inspired Mains</h4>
                  <p>Lobster thermidor, filet mignon, and aphrodisiac delicacies</p>
                </div>
                <div className="location-item">
                  <h4>Sweet Endings</h4>
                  <p>Decadent chocolate desserts and champagne-infused treats</p>
                </div>
                <div className="location-item">
                  <h4>Romantic Beverages</h4>
                  <p>Love potion cocktails, premium wines, and champagne selection</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Valentine's Experience:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Arrival</h4>
                  <p>Welcome with rose petals, champagne, and valentine's surprises</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Romantic Setup</h4>
                  <p>Escort to your beautifully decorated table with personal touches</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Culinary Journey</h4>
                  <p>Multi-course valentine's menu with wine pairings</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Memorable Moments</h4>
                  <p>Special surprises, live music, and romantic entertainment</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Celebrate Love?</h3>
              <p>Book your Valentine's dinner and create magical memories that celebrate your unique love story.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Valentine's Dinner
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
              <img src={service.image} alt={service.title} loading="lazy" width={400} height={300} />
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

export default ValentinesDinners;