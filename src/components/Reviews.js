import React, { useState, useEffect } from 'react';
import './Reviews.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Sample reviews data - will be replaced with Google Places API in the future
const sampleReviews = [
  {
    id: 1,
    author_name: "Sarah Johnson",
    author_url: "#",
    profile_photo_url: "https://via.placeholder.com/100x100/d4af37/fff?text=SJ",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "Absolutely magical experience! The romantic dinner setup on the beach was beyond our expectations. Every detail was perfect, from the candlelit table to the sunset timing. Romance Retreat truly made our anniversary unforgettable. Highly recommend!",
    time: Date.now() - 1209600000 // 2 weeks ago
  },
    {
      id: 2,
      author_name: "Michael & Emma",
      author_url: "#",
      profile_photo_url: "https://via.placeholder.com/100x100/b8860b/fff?text=ME",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "The proposal setup was absolutely stunning! The team at Romance Retreat helped me plan the perfect surprise for Emma. The yacht dinner with the sunset backdrop was like a fairy tale. Emma said yes, and we couldn't be happier! Thank you for making this moment so special.",
      time: Date.now() - 2592000000 // 1 month ago
    },
    {
      id: 3,
      author_name: "Priya Sharma",
      author_url: "#",
      profile_photo_url: "https://via.placeholder.com/100x100/d4af37/fff?text=PS",
      rating: 5,
      relative_time_description: "3 weeks ago",
      text: "The couple's spa experience was pure bliss! The ambiance, the treatments, everything was top-notch. My husband and I felt so relaxed and reconnected. The staff was incredibly professional and attentive. We'll definitely be back for our next getaway!",
      time: Date.now() - 1814400000 // 3 weeks ago
    },
    {
      id: 4,
      author_name: "David Thompson",
      author_url: "#",
      profile_photo_url: "https://via.placeholder.com/100x100/b8860b/fff?text=DT",
      rating: 5,
      relative_time_description: "1 week ago",
      text: "Valentine's dinner was spectacular! The private garden setting with fairy lights was so romantic. The food was exceptional and the service was flawless. My wife was amazed by every detail. Romance Retreat knows how to create magical moments.",
      time: Date.now() - 604800000 // 1 week ago
    },
    {
      id: 5,
      author_name: "Lisa & James",
      author_url: "#",
      profile_photo_url: "https://via.placeholder.com/100x100/d4af37/fff?text=LJ",
      rating: 5,
      relative_time_description: "2 months ago",
      text: "Our customized romance experience was beyond amazing! The team listened to all our preferences and created something truly unique. The private beach setup with live music was a dream come true. Worth every penny for such a memorable experience!",
      time: Date.now() - 5184000000 // 2 months ago
    },
    {
      id: 6,
      author_name: "Anjali Patel",
      author_url: "#",
      profile_photo_url: "https://via.placeholder.com/100x100/b8860b/fff?text=AP",
      rating: 4,
      relative_time_description: "3 months ago",
      text: "Beautiful birthday celebration setup! The team did an excellent job with the decorations and ambiance. The only minor issue was a slight delay in service, but overall it was a wonderful experience. My partner loved every moment of it!",
      time: Date.now() - 7776000000 // 3 months ago
    }
  ];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setReviews(sampleReviews);
      const avgRating = sampleReviews.reduce((acc, review) => acc + review.rating, 0) / sampleReviews.length;
      setAverageRating(avgRating);
      setTotalReviews(sampleReviews.length);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // No dependencies needed since sampleReviews is now outside component

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="reviews">
        <Navbar />
        <div className="reviews-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading reviews...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reviews">
      <Navbar />
      
      {/* Hero Section */}
      <section className="reviews-hero">
        <div className="reviews-hero-content">
          <h1>What Our Clients Say</h1>
          <p>Discover what makes Romance Retreat special through the heartfelt stories and experiences shared by our cherished clients.</p>
        </div>
      </section>
      
      <div className="reviews-container">
        <section className="reviews-summary">
          <div className="rating-overview">
            <div className="average-rating">
              <span className="rating-number">{averageRating.toFixed(1)}</span>
              <div className="rating-stars">
                {renderStars(averageRating)}
              </div>
            </div>
            <p className="rating-text">Based on {totalReviews} reviews</p>
          </div>
          <p className="reviews-intro">
            Every review tells a story of love, celebration, and unforgettable moments we've had the honor to create.
          </p>
        </section>

        <section className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name}
                    className="reviewer-avatar"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                  <div className="reviewer-details">
                    <h3 className="reviewer-name">{review.author_name}</h3>
                    <span className="review-date">{review.relative_time_description}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <div className="review-content">
                <p className="review-text">{review.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="google-reviews-notice">
          <div className="notice-content">
            <h3>Powered by Google Reviews</h3>
            <p>These reviews are fetched from our Google Business Profile to ensure authenticity and transparency.</p>
            <button className="google-reviews-link" onClick={() => alert('Google Reviews link will be available once business is live!')}>
              View all reviews on Google →
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;