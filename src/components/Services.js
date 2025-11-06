import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePricing } from '../contexts/PricingContext';

// Import service images
import romanticDinnerImgWebp from './images/Services-optimized/Romantic_Dinner.webp';
import romanticDinnerImgJpg from './images/Services/Romantic_Dinner.jpg';
import weddingProposalImgWebp from './images/Services-optimized/Wedding_Proposal.webp';
import weddingProposalImgJpg from './images/Services/Wedding_Proposal.jpg';
import valentinesDinnerImgWebp from './images/Services-optimized/Valentines_Dinner.webp';
import valentinesDinnerImgJpg from './images/Services/Valentines_Dinner.jpg';
import birthdayCelebrationsImgWebp from './images/Services-optimized/Birthday_Celebrations.webp';
import birthdayCelebrationsImgJpg from './images/Services/Birthday_Celebrations.jpg';
import anniversaryCelebrationsImgWebp from './images/Services-optimized/Anniversary_Celebrations.webp';
import anniversaryCelebrationsImgJpg from './images/Services/Anniversary_Celebrations.jpg';
import dinnerDateImgWebp from './images/Services-optimized/Dinner_Date.webp';
import dinnerDateImgPng from './images/Services/Dinner_Date.png';
import yachtDinnerImgWebp from './images/Services-optimized/Yatch_Dinner.webp';
import yachtDinnerImgJpg from './images/Services/Yatch_Dinner.jpg';
import coupleMassageImgWebp from './images/Services-optimized/Couple_Massage.webp';
import coupleMassageImgJpg from './images/Services/Couple_Massage.jpg';
import customizedMomentsImgWebp from './images/Services-optimized/Customized_Moments.webp';
import customizedMomentsImgJpg from './images/Services/Customized_Moments.jpg';

const Services = () => {
  const { getPrice } = usePricing();
  const navigate = useNavigate();

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    window.scrollTo(0, 0);
  };
  return (
    <div className="services">
      <Navbar />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Discover our curated collection of romantic experiences designed to create magical moments and lasting memories for couples in love.</p>
        </div>
      </section>
      
      <div className="services-container">
        <section className="services-intro">
          <p className="services-description">
            At Romance Retreat, we offer a suite of bespoke experiences tailored to you and your partner. 
            Each service is crafted with love and attention to detail to create unforgettable moments.
          </p>
        </section>

        <section className="services-content">
          <div className="services-grid">
            <div className="service-card" onClick={() => handleServiceClick('/services/romantic-dinners')}>
              <div className="service-image">
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
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Romantic Dinners</h3>
                  <p>Candle-lit moments, beachfront tables, rooftop ambience. Experience intimate dining like never before.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('romanticDinners')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/wedding-proposals')}>
              <div className="service-image">
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
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Wedding Proposals</h3>
                  <p>Thoughtfully designed settings, surprise moments, professional coordination. Make your proposal perfect.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('weddingProposals')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/valentines-dinners')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={valentinesDinnerImgWebp} type="image/webp" />
                  <img src={valentinesDinnerImgJpg}
           alt="Valentine's Dinners"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${valentinesDinnerImgJpg} 400w, ${valentinesDinnerImgJpg} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Valentine's Dinners</h3>
                  <p>Seasonal specials, curated menus, love-filled décor. Celebrate love in the most romantic way.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('valentinesDinners')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/birthday-celebrations')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={birthdayCelebrationsImgWebp} type="image/webp" />
                  <img src={birthdayCelebrationsImgJpg}
           alt="Birthday Celebrations"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${birthdayCelebrationsImgJpg} 400w, ${birthdayCelebrationsImgJpg} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Birthday Celebrations</h3>
                  <p>Make your partner's birthday unforgettable with personalised packages, surprise setups, and beautiful keepsakes.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('birthdayCelebrations')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/anniversary-celebrations')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={anniversaryCelebrationsImgWebp} type="image/webp" />
                  <img src={anniversaryCelebrationsImgJpg}
           alt="Anniversary Celebrations"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${anniversaryCelebrationsImgJpg} 400w, ${anniversaryCelebrationsImgJpg} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Anniversary Celebrations</h3>
                  <p>Celebrate your love milestones with themed decorations, romantic ambiance, and custom anniversary experiences.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('anniversaryCelebrations')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/dinner-date-experiences')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={dinnerDateImgWebp} type="image/webp" />
                  <img src={dinnerDateImgPng}
           alt="Dinner Date Experiences"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${dinnerDateImgPng} 400w, ${dinnerDateImgPng} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Dinner Date Experiences</h3>
                  <p>Just the two of you, in unique locations — on the beach, in a garden, or on a private yacht.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('dinnerDate')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/yacht-dinner')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={yachtDinnerImgWebp} type="image/webp" />
                  <img src={yachtDinnerImgJpg}
           alt="Yacht Dinner"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${yachtDinnerImgJpg} 400w, ${yachtDinnerImgJpg} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Yacht Dinner</h3>
                  <p>Cruise along the coastline, sip your drink as the sun melts into the sea, dine under the stars.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('yachtDinner')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/couple-massage')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={coupleMassageImgWebp} type="image/webp" />
                  <img src={coupleMassageImgJpg}
           alt="Couple Massage & Spa Rituals"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${coupleMassageImgJpg} 400w, ${coupleMassageImgJpg} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Couple Massage & Spa Rituals</h3>
                  <p>Reconnect, relax, rejuvenate — side by side, in a serene space designed for two.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('coupleMassage')}
                </div>
              </div>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('/services/customized-moments')}>
              <div className="service-image">
                {/* ...existing code... */}
                <picture>
                  <source srcSet={customizedMomentsImgWebp} type="image/webp" />
                  <img src={customizedMomentsImgJpg}
           alt="Customised Romance Moments"
           loading="lazy"
           width={400}
           height={300}
           srcSet={`${customizedMomentsImgJpg} 400w, ${customizedMomentsImgJpg} 800w`}
           sizes="(max-width: 600px) 100vw, 400px" />
                </picture>
              </div>
              <div className="service-content">
                <div className="service-text-content">
                  <h3>Customised Romance Moments</h3>
                  <p>Tell us your dream, and we'll craft a bespoke experience that's uniquely yours.</p>
                </div>
                <div className="service-price">
                  Starting From: ₹{getPrice('customizedMoments')}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Create Your Perfect Moment?</h2>
          <p>
            Whatever your occasion — big or small — let us take care of the details so you can focus on each other.
          </p>
          <button className="contact-cta" onClick={() => handleServiceClick('/booking')}>Book Your Experience</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;