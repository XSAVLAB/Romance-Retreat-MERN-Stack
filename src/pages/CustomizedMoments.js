import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePricing } from '../contexts/PricingContext';
import './ServicePages.css';

// Import images
import customizedMomentsImg from '../components/images/Services-optimized/Customized_Moments.webp';
import weddingProposalImg from '../components/images/Services-optimized/Wedding_Proposal.webp';
import anniversaryCelebrationImg from '../components/images/Services-optimized/Anniversary_Celebrations.webp';
import birthdayCelebrationImg from '../components/images/Services-optimized/Birthday_Celebrations.webp';

const CustomizedMoments = () => {
  const navigate = useNavigate();
  const { getPrice } = usePricing();

  const handleBookNow = () => {
    navigate('/booking?service=Customized Moments');
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
      'dinnerDate': '/services/dinner-date-experiences'
    };
    navigate(serviceRoutes[serviceId]);
    window.scrollTo(0, 0);
  };

  const relatedServices = [
    {
      id: 'weddingProposals',
      title: "Wedding Proposals",
      description: "Dream proposals in breathtaking locations. From beachside to rooftop, make your 'Yes' moment perfect.",
      image: weddingProposalImg,
      price: getPrice('weddingProposals')
    },
    {
      id: 'anniversaryCelebrations',
      title: "Anniversary Celebrations",
      description: "Milestone moments, memory recreations, milestone romance celebrating your love journey.",
      image: anniversaryCelebrationImg,
      price: getPrice('anniversaryCelebrations')
    },
    {
      id: 'birthdayCelebrations',
      title: "Birthday Celebrations",
      description: "Romantic birthday surprises, partner-focused celebrations for their special day.",
      image: birthdayCelebrationImg,
      price: getPrice('birthdayCelebrations')
    }
  ];

  return (
    <div className="service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero" style={{backgroundImage: `url(${customizedMomentsImg})`}}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <h1>Customised Romance Moments</h1>
            <p style={{fontStyle: 'normal'}}>Tell us your dream, and we'll craft a bespoke experience that's uniquely yours</p>
            <div className="service-hero-price" onClick={handleBookNow} style={{cursor: 'pointer'}}>
              Starting From: ₹{getPrice('customizedMoments')}
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
            <h2>Your Love Story, Our Expertise</h2>
            <p className="service-description" style={{ fontStyle: 'normal' }}>
              Every love story is unique, and your romantic moments should be too. Our customized romance experiences 
              are designed entirely around your vision, preferences, and dreams. Whether you have a specific fantasy 
              in mind or need help brainstorming the perfect romantic gesture, we work closely with you to create 
              bespoke experiences that capture the essence of your love and create unforgettable memories tailored just for you.
            </p>

            <div className="service-features">
              <h3>Customize Your Experience With:</h3>
              <ul>
                <li>💭 One-on-one consultation to understand your vision</li>
                <li>🎨 Complete creative design based on your preferences</li>
                <li>📋 Detailed planning and coordination of all elements</li>
                <li>🌟 Unique touches that reflect your relationship story</li>
                <li>📸 Professional photography to capture your special moments (paid service, arranged separately)</li>
                <li>🎁 Personalized gifts and keepsakes designed for you</li>
                <li>🕰️ Flexible timing and duration based on your needs</li>
                <li>💫 Surprise elements and magical moments throughout</li>
              </ul>
            </div>

            <div className="customization-categories">
              <h3>Customization Categories:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Dream Recreations</h4>
                  <p>Bring your romantic fantasies and dreams to life</p>
                </div>
                <div className="location-item">
                  <h4>Memory Lane Experiences</h4>
                  <p>Recreate special moments from your relationship journey</p>
                </div>
                <div className="location-item">
                  <h4>Hobby-Based Romance</h4>
                  <p>Incorporate shared interests and hobbies into romantic experiences</p>
                </div>
                <div className="location-item">
                  <h4>Seasonal Celebrations</h4>
                  <p>Custom experiences for holidays, seasons, or special occasions</p>
                </div>
              </div>
            </div>

            <div className="popular-customizations">
              <h3>Popular Custom Requests:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Movie Scene Recreation</h4>
                  <p>Recreate romantic scenes from your favorite movies</p>
                </div>
                <div className="location-item">
                  <h4>Travel Memory Trips</h4>
                  <p>Create local experiences inspired by your travels together</p>
                </div>
                <div className="location-item">
                  <h4>Surprise Proposal Preparation</h4>
                  <p>Elaborate custom proposal setups with personal touches</p>
                </div>
                <div className="location-item">
                  <h4>Milestone Celebrations</h4>
                  <p>Custom experiences for relationship milestones and achievements</p>
                </div>
              </div>
            </div>

            <div className="creative-elements">
              <h3>Creative Elements We Offer:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Themed Decorations</h4>
                  <p>Custom décor based on your favorite colors, themes, or styles</p>
                </div>
                <div className="location-item">
                  <h4>Personalized Entertainment</h4>
                  <p>Music, performances, or activities tailored to your interests</p>
                </div>
                <div className="location-item">
                  <h4>Custom Dining Experiences</h4>
                  <p>Menus featuring your favorite foods or meaningful dishes</p>
                </div>
                <div className="location-item">
                  <h4>Interactive Experiences</h4>
                  <p>Activities that engage both of you in meaningful ways</p>
                </div>
              </div>
            </div>

            <div className="location-flexibility">
              <h3>Location Flexibility:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>Your Special Place</h4>
                  <p>Transform locations that hold special meaning for you</p>
                </div>
                <div className="location-item">
                  <h4>Dream Destinations</h4>
                  <p>Create experiences in locations you've always wanted to visit</p>
                </div>
                <div className="location-item">
                  <h4>Private Venues</h4>
                  <p>Exclusive locations customized just for your experience</p>
                </div>
                <div className="location-item">
                  <h4>Multi-Location Experiences</h4>
                  <p>Journey through multiple locations for extended experiences</p>
                </div>
              </div>
            </div>

            <div className="service-process">
              <h3>Your Customization Journey:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h4>Dream Consultation</h4>
                  <p>Share your vision, preferences, and romantic dreams with our team</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h4>Creative Design</h4>
                  <p>We craft a detailed plan bringing your vision to life</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h4>Personalization</h4>
                  <p>Fine-tune every detail to perfectly match your relationship</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h4>Magic Execution</h4>
                  <p>Experience your custom romantic moment crafted just for you</p>
                </div>
              </div>
            </div>

            <div className="testimonial-section">
              <h3>What Makes Us Different:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <h4>No Limits Creativity</h4>
                  <p>We believe every romantic dream can become reality</p>
                </div>
                <div className="location-item">
                  <h4>Personal Touch</h4>
                  <p>Every element reflects your unique love story</p>
                </div>
                <div className="location-item">
                  <h4>Attention to Detail</h4>
                  <p>We perfect every small detail that makes big impacts</p>
                </div>
                <div className="location-item">
                  <h4>Surprise Factor</h4>
                  <p>Unexpected magical moments throughout your experience</p>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <h3>Ready to Create Your Dream Experience?</h3>
              <p>Share your vision with us and let's craft a completely customized romantic experience that's uniquely yours.</p>
              <button onClick={handleBookNow} className="book-now-btn">
                Start Your Custom Experience
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

export default CustomizedMoments;