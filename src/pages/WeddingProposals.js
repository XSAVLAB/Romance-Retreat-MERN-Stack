import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import weddingProposalImg from '../components/images/Services/Wedding_Proposal.jpg';
import romanticDinnerImg from '../components/images/Services/Romantic_Dinner.jpg';
import anniversaryCelebrationsImg from '../components/images/Services/Anniversary_Celebrations.jpg';
import customizedMomentsImg from '../components/images/Services/Customized_Moments.jpg';

const WeddingProposals = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId) => {
    const serviceRoutes = {
      'romanticDinners': '/services/romantic-dinners',
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
      id: 'romanticDinners',
      title: "Romantic Dinners",
      description: "Candle-lit moments, beachfront tables, rooftop ambience. Experience intimate dining like never before.",
      image: romanticDinnerImg,
      price: getPrice('romanticDinners')
    },
    {
      id: 'anniversaryCelebrations',
      title: "Anniversary Celebrations",
      description: "Celebrate your love milestones with themed decorations, romantic ambiance, and custom anniversary experiences.",
      image: anniversaryCelebrationsImg,
      price: getPrice('anniversaryCelebrations')
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
      <section className="service-hero" style={{backgroundImage: `url(${weddingProposalImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Wedding Proposals</h1>
            <p>Thoughtfully designed settings, surprise moments, professional coordination</p>
            <div className="service-hero-price">
              Starting From: ₹{getPrice('weddingProposals')}
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
            <h2>Make Your Proposal Perfect</h2>
            <p className="service-description">
              Your proposal is one of the most important moments of your life. Let us help you create 
              a magical, unforgettable experience that perfectly captures your love story. From intimate 
              beachside moments to grand gestures, we'll coordinate every detail to ensure your 
              "Will you marry me?" moment is absolutely perfect.
            </p>

            <div className="service-features">
              <h3>What's Included:</h3>
              <ul>
                <li>💍 Custom proposal setup and decoration</li>
                <li>🌹 Rose petal pathways and romantic arrangements</li>
                <li>✨ Fairy lights and ambient lighting design</li>
                <li>📸 Hidden photographer to capture the moment</li>
                <li>🎵 Personalized music and sound system</li>
                <li>🥂 Celebration champagne and refreshments</li>
                <li>🎁 Surprise elements and personalized touches</li>
                <li>🗓️ Complete planning and coordination service</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Proposal Venues:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Sunset Beach</h4>
                  <p>Picture-perfect beach proposal with golden sunset backdrop</p>
                </div>
                <div className="location-item">
                  <h4>Private Yacht</h4>
                  <p>Exclusive yacht proposal surrounded by ocean views</p>
                </div>
                <div className="location-item">
                  <h4>Luxury Resort</h4>
                  <p>Elegant resort setting with professional service and privacy</p>
                </div>
                <div className="location-item">
                  <h4>Scenic Overlook</h4>
                  <p>Elevated location with panoramic views and natural beauty</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Our Proposal Process:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Consultation</h4>
                  <p>We discuss your vision, preferences, and your partner's personality</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Planning</h4>
                  <p>We create a detailed proposal plan with location, timing, and decorations</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Setup</h4>
                  <p>Our team handles all setup while maintaining complete secrecy</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>The Moment</h4>
                  <p>You propose in your perfect setting while we capture every emotion</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Pop the Question?</h3>
              <p>Let us help you create the perfect proposal moment that you'll both treasure forever.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Plan Your Proposal
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

export default WeddingProposals;