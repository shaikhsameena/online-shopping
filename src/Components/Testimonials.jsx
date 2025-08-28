import React from 'react';
import './Testimonials.css';

/* Import avatars */
import vikramAvatar from '../assets/vikram.jpg';
import priyaAvatar from '../assets/priya.jpg';
import ravindraAvatar from '../assets/ravindra.jpg';

const testimonials = [
  {
    avatar: vikramAvatar,
    text: "This brace eased my back pain within days — firm yet super comfortable. Delivery was quick and customer support even checked in to make sure I was wearing it right.",
    name: "Vikram Mehta",
    location: "Ahmedabad, India",
  },
  {
    avatar: priyaAvatar,
    text: "Great support without restricting movement—perfect for yoga. Loved the breathable material and fast response from the team when I had a sizing doubt.",
    name: "Priya Nair",
    location: "Maharashtra, India",
  },
  {
    avatar: ravindraAvatar,
    text: "Excellent fit and relief from neck pain. Came with clear instructions and thoughtful packaging. MS Fort’s service was prompt and genuinely caring.",
    name: "Ravindra Kulkarni",
    location: "Gujarat, India",
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h2 className="section-heading">What Our Customers Say</h2>
    <div className="testimonial-grid">
      {testimonials.map((review, idx) => (
        <div className="testimonial-card-modern" key={idx}>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review-text">{review.text}</p>
          <div className="reviewer-info">
            <div className="avatar">
              {review.avatar ? (
                <img src={review.avatar} alt={review.name} />
              ) : (
                <i className="fas fa-user-circle"></i>
              )}
            </div>
            <div>
              <p className="reviewer-name">{review.name}</p>
              <p className="reviewer-location">{review.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
