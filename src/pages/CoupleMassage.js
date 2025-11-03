import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import coupleMassageImg from '../components/images/Services/Couple_Massage.jpg';
import customizedMomentsImg from '../components/images/Services/Customized_Moments.jpg';
import anniversaryCelebrationsImg from '../components/images/Services/Anniversary_Celebrations.jpg';
import birthdayCelebrationsImg from '../components/images/Services/Birthday_Celebrations.jpg';

const CoupleMassage = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/booking?service=Couple Massage & Spa');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId) => {
    const serviceRoutes = {
      'romanticDinners': '/services/romantic-dinners',
      'weddingProposals': '/services/wedding-proposals',
      'yachtDinner': '/services/yacht-dinner',
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
      id: 'customizedMoments',
      title: "Customised Romance Moments",
      description: "Tell us your dream, and we'll craft a bespoke experience that's uniquely yours.",
      image: customizedMomentsImg,
      price: getPrice('customizedMoments')
    },
    {
      id: 'anniversaryCelebrations',
      title: "Anniversary Celebrations",
      description: "Celebrate your love milestones with themed decorations, romantic ambiance, and custom anniversary experiences.",
      image: anniversaryCelebrationsImg,
      price: getPrice('anniversaryCelebrations')
    },
    {
      id: 'birthdayCelebrations',
      title: "Birthday Celebrations",
      description: "Make your partner's birthday unforgettable with personalised packages, surprise setups, and beautiful keepsakes.",
      image: birthdayCelebrationsImg,
      price: getPrice('birthdayCelebrations')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${coupleMassageImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Couple Massage & Spa Rituals</h1>
            <p>Reconnect, relax, rejuvenate — side by side</p>
            <div className="service-hero-price" onClick={handleBookNow} style={{cursor: 'pointer'}}>
              Starting From: ₹{getPrice('coupleMassage')}
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
            <h2>Reconnect in Serene Harmony</h2>
            <p className="service-description">
              Escape the stresses of daily life and reconnect with your partner in our luxurious 
              couple's spa sanctuary. Experience side-by-side relaxation with therapeutic massages, 
              rejuvenating treatments, and peaceful moments together. Our spa rituals are designed 
              to enhance your bond while providing complete physical and mental rejuvenation.
            </p>

            <div className="service-features">
              <h3>Customize Your Experience With:</h3>
              <ul>
                <li>💆‍♀️ 90-minute couple's massage session</li>
                <li>🛁 Private spa suite with relaxation area</li>
                <li>🌸 Aromatherapy with essential oils</li>
                <li>🥒 Refreshing face masks and treatments</li>
                <li>🍵 Herbal teas and healthy refreshments</li>
                <li>🎵 Ambient music and peaceful atmosphere</li>
                <li>🌿 Access to steam room and relaxation facilities</li>
                <li>🧴 Premium organic spa products</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Spa Experiences:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Traditional Balinese</h4>
                  <p>Authentic techniques using warm oils and gentle pressure</p>
                </div>
                <div className="location-item">
                  <h4>Deep Tissue Therapy</h4>
                  <p>Intensive massage for muscle tension and stress relief</p>
                </div>
                <div className="location-item">
                  <h4>Hot Stone Ritual</h4>
                  <p>Heated volcanic stones for deep relaxation and healing</p>
                </div>
                <div className="location-item">
                  <h4>Aromatherapy Bliss</h4>
                  <p>Customized essential oil blends for emotional wellness</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Spa Journey:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Welcome Ritual</h4>
                  <p>Herbal tea and consultation to customize your experience</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Preparation</h4>
                  <p>Change into comfortable robes and begin relaxation</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Spa Treatment</h4>
                  <p>Side-by-side massage and treatments by skilled therapists</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Aftercare</h4>
                  <p>Relaxation time together with refreshments and peace</p>
                </div>
              </div>
            </div>

            <div className="spa-benefits">
              <h3>Health & Wellness Benefits:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Stress Relief</h4>
                  <p>Reduce cortisol levels and promote mental calmness</p>
                </div>
                <div className="location-item">
                  <h4>Improved Circulation</h4>
                  <p>Enhanced blood flow and lymphatic drainage</p>
                </div>
                <div className="location-item">
                  <h4>Muscle Relaxation</h4>
                  <p>Release tension and improve flexibility together</p>
                </div>
                <div className="location-item">
                  <h4>Emotional Connection</h4>
                  <p>Strengthen your bond through shared relaxation</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Relax Together?</h3>
              <p>Book your couple's spa experience and rediscover harmony in each other's company.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Spa Session
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

export default CoupleMassage;