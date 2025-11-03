import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import anniversaryCelebrationImg from '../components/images/Services/Anniversary_Celebrations.jpg';
import romanticDinnerImg from '../components/images/Services/Romantic_Dinner.jpg';
import customizedMomentsImg from '../components/images/Services/Customized_Moments.jpg';
import valentinesDinnerImg from '../components/images/Services/Valentines_Dinner.jpg';

const AnniversaryCelebrations = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/booking?service=Anniversary Celebrations');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId) => {
    const serviceRoutes = {
      'romanticDinners': '/services/romantic-dinners',
      'weddingProposals': '/services/wedding-proposals',
      'yachtDinner': '/services/yacht-dinner',
      'coupleMassage': '/services/couple-massage',
      'valentinesDinners': '/services/valentines-dinners',
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
      id: 'valentinesDinners',
      title: "Valentine's Dinners",
      description: "Seasonal specials, curated menus, love-filled décor for the most romantic day of the year.",
      image: valentinesDinnerImg,
      price: getPrice('valentinesDinners')
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
      <section className="service-hero" style={{backgroundImage: `url(${anniversaryCelebrationImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Anniversary Celebrations</h1>
            <p>Milestone moments, memory recreations, milestone romance</p>
            <div className="service-hero-price" onClick={handleBookNow} style={{cursor: 'pointer'}}>
              Starting From: ₹{getPrice('anniversaryCelebrations')}
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
            <h2>Celebrate Your Love Story's Milestones</h2>
            <p className="service-description">
              Every anniversary marks another chapter in your beautiful love story. Whether it's your first year 
              together or your golden anniversary, we create celebrations that honor your journey and rekindle 
              the magic of your love. From recreating your first date to crafting new memories, our anniversary 
              experiences are designed to celebrate the unique bond you share and the years of love you've built together.
            </p>

            <div className="service-features">
              <h3>Customize Your Experience With:</h3>
              <ul>
                <li>🎂 Personalized anniversary cake and celebration setup</li>
                <li>📸 Professional photography to capture milestone moments (paid service, arranged separately)</li>
                <li>🌹 Anniversary-themed floral arrangements and decorations</li>
                <li>🍾 Anniversary champagne toast and special cocktails</li>
                <li>🎵 Music from your wedding or special songs playlist</li>
                <li>💌 Memory recreation elements from your relationship journey</li>
                <li>🕯️ Romantic lighting and ambiance design</li>
                <li>🎁 Personalized anniversary gifts and keepsakes</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Anniversary Celebration Venues:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Memory Lane Setup</h4>
                  <p>Recreation of your first date location or special place</p>
                </div>
                <div className="location-item">
                  <h4>Milestone Dinner</h4>
                  <p>Elegant dinner setup celebrating your years together</p>
                </div>
                <div className="location-item">
                  <h4>Garden Celebration</h4>
                  <p>Beautiful garden party with anniversary-themed decorations</p>
                </div>
                <div className="location-item">
                  <h4>Beachfront Anniversary</h4>
                  <p>Seaside celebration with sunset views and romantic ambiance</p>
                </div>
              </div>
            </div>

            <div className="anniversary-packages">
              <h3>Anniversary Milestone Packages:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>First Anniversary</h4>
                  <p>Paper-themed celebration with memory book creation</p>
                </div>
                <div className="location-item">
                  <h4>Silver Anniversary (25th)</h4>
                  <p>Elegant silver-themed celebration with family inclusion</p>
                </div>
                <div className="location-item">
                  <h4>Golden Anniversary (50th)</h4>
                  <p>Grand golden celebration honoring five decades of love</p>
                </div>
                <div className="location-item">
                  <h4>Custom Milestone</h4>
                  <p>Personalized celebration for any anniversary year</p>
                </div>
              </div>
            </div>

            <div className="memory-recreation">
              <h3>Memory Recreation Options:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>First Date Recreation</h4>
                  <p>Recreate the magic of your very first date together</p>
                </div>
                <div className="location-item">
                  <h4>Proposal Recreation</h4>
                  <p>Relive the moment you got engaged with special touches</p>
                </div>
                <div className="location-item">
                  <h4>Wedding Memory</h4>
                  <p>Mini-celebration featuring elements from your wedding day</p>
                </div>
                <div className="location-item">
                  <h4>Special Trip Memory</h4>
                  <p>Recreate the ambiance of a memorable trip you took together</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Anniversary Experience:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Memory Consultation</h4>
                  <p>Share your love story and special memories with our team</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Custom Design</h4>
                  <p>Personalized setup based on your anniversary milestone</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Celebration Time</h4>
                  <p>Enjoy your special anniversary celebration with thoughtful details</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Memory Creation</h4>
                  <p>Capture new memories while honoring your journey together</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Celebrate Your Love Story?</h3>
              <p>Book your anniversary celebration and honor the beautiful journey you've shared together.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Anniversary Celebration
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

export default AnniversaryCelebrations;