import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import birthdayCelebrationImg from '../components/images/Services/Birthday_Celebrations.jpg';
import anniversaryCelebrationImg from '../components/images/Services/Anniversary_Celebrations.jpg';
import customizedMomentsImg from '../components/images/Services/Customized_Moments.jpg';
import romanticDinnerImg from '../components/images/Services/Romantic_Dinner.jpg';

const BirthdayCelebrations = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/booking?service=Birthday Celebrations');
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
      'dinnerDate': '/services/dinner-date-experiences',
      'customizedMoments': '/services/customized-moments'
    };
    navigate(serviceRoutes[serviceId]);
    window.scrollTo(0, 0);
  };

  const relatedServices = [
    {
      id: 'anniversaryCelebrations',
      title: "Anniversary Celebrations",
      description: "Milestone moments, memory recreations, milestone romance celebrating your love journey.",
      image: anniversaryCelebrationImg,
      price: getPrice('anniversaryCelebrations')
    },
    {
      id: 'customizedMoments',
      title: "Customised Romance Moments",
      description: "Tell us your dream, and we'll craft a bespoke experience that's uniquely yours.",
      image: customizedMomentsImg,
      price: getPrice('customizedMoments')
    },
    {
      id: 'romanticDinners',
      title: "Romantic Dinners",
      description: "Candle-lit moments, beachfront tables, rooftop ambience. Experience intimate dining like never before.",
      image: romanticDinnerImg,
      price: getPrice('romanticDinners')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${birthdayCelebrationImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Birthday Celebrations</h1>
            <p>Romantic birthday surprises, partner-focused celebrations</p>
            <div className="service-hero-price" onClick={handleBookNow} style={{cursor: 'pointer'}}>
              Starting From: ₹{getPrice('birthdayCelebrations')}
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
            <h2>Celebrate Your Love's Special Day</h2>
            <p className="service-description">
              Make your partner's birthday unforgettable with our romantic birthday celebration experiences. 
              Whether it's a surprise party, intimate dinner, or a day filled with their favorite activities, 
              we help you create magical moments that show just how much you care. Our romantic birthday 
              celebrations combine the joy of birthdays with the intimacy of romance, creating memories 
              that will be cherished forever.
            </p>

            <div className="service-features">
              <h3>Customize Your Experience With:</h3>
              <ul>
                <li>🎂 Custom romantic birthday cake and sweet treats</li>
                <li>🎈 Elegant birthday decorations with romantic touches</li>
                <li>🌹 Fresh flower arrangements and birthday bouquets</li>
                <li>🎁 Surprise gift presentation and special reveals</li>
                <li>📸 Professional birthday photoshoot for couples</li>
                <li>🎵 Personalized music playlist with favorite songs</li>
                <li>🍾 Birthday champagne toast and celebration drinks</li>
                <li>💌 Love letters and birthday surprise elements</li>
              </ul>
            </div>

            <div className="service-locations">
              <h3>Birthday Celebration Venues:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Surprise Birthday Dinner</h4>
                  <p>Intimate surprise dinner at their favorite type of cuisine</p>
                </div>
                <div className="location-item">
                  <h4>Beach Birthday Party</h4>
                  <p>Seaside celebration with birthday setup and ocean views</p>
                </div>
                <div className="location-item">
                  <h4>Garden Birthday Brunch</h4>
                  <p>Beautiful garden setting for a romantic birthday brunch</p>
                </div>
                <div className="location-item">
                  <h4>Rooftop Birthday Celebration</h4>
                  <p>Elevated birthday party with city views and romantic ambiance</p>
                </div>
              </div>
            </div>

            <div className="birthday-themes">
              <h3>Romantic Birthday Themes:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Surprise Romance</h4>
                  <p>Complete surprise setup with romantic birthday elements</p>
                </div>
                <div className="location-item">
                  <h4>Memory Lane Birthday</h4>
                  <p>Celebrating with memories from your relationship journey</p>
                </div>
                <div className="location-item">
                  <h4>Hobby-Themed Celebration</h4>
                  <p>Birthday party centered around their favorite hobbies</p>
                </div>
                <div className="location-item">
                  <h4>Milestone Birthday</h4>
                  <p>Special celebration for significant birthday milestones</p>
                </div>
              </div>
            </div>

            <div className="surprise-elements">
              <h3>Birthday Surprise Options:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Gift Treasure Hunt</h4>
                  <p>Romantic treasure hunt leading to birthday surprises</p>
                </div>
                <div className="location-item">
                  <h4>Video Messages</h4>
                  <p>Compilation of birthday wishes from friends and family</p>
                </div>
                <div className="location-item">
                  <h4>Memory Scrapbook</h4>
                  <p>Custom photo book with your favorite memories together</p>
                </div>
                <div className="location-item">
                  <h4>Experience Gifts</h4>
                  <p>Plan their dream experience as the ultimate birthday gift</p>
                </div>
              </div>
            </div>

            <div className="birthday-activities">
              <h3>Romantic Birthday Activities:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Couple's Spa Day</h4>
                  <p>Relaxing spa treatments as a birthday celebration</p>
                </div>
                <div className="location-item">
                  <h4>Adventure Birthday</h4>
                  <p>Exciting activities if they love adventure and thrills</p>
                </div>
                <div className="location-item">
                  <h4>Cultural Experience</h4>
                  <p>Art gallery, museum, or cultural venue celebration</p>
                </div>
                <div className="location-item">
                  <h4>Cooking Class Date</h4>
                  <p>Learn to cook their favorite cuisine together</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Birthday Celebration Experience:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Planning Consultation</h4>
                  <p>Discuss their interests, favorite things, and surprise preferences</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Surprise Coordination</h4>
                  <p>Plan and coordinate all surprise elements and logistics</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Birthday Celebration</h4>
                  <p>Execute the perfect romantic birthday surprise experience</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Memory Capture</h4>
                  <p>Document the special day with photos and keepsakes</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Plan the Perfect Birthday Surprise?</h3>
              <p>Book your romantic birthday celebration and make their special day absolutely unforgettable.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Book Your Birthday Celebration
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

export default BirthdayCelebrations;