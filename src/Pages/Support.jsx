import React from 'react';
import './Support.css';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (document.referrer !== '') {
      window.history.back();
    } else {
      navigate('/products');
    }
  };

  return (
    <section className="support-section">
      <div className="support-container">
        <h2 className="section-title">Need Help? We're Here for You!</h2>
        <p className="support-description">
          Our support team is ready to assist you with any questions, concerns, or issues. Reach out to us anytime!
        </p>

        <div className="support-options">
          {/* Email Support */}
          <div className="support-option">
            <i className="fas fa-headset"></i>
            <h3>Customer Service</h3>
            <p>Contact our customer support team for product queries, order tracking, or returns.</p>
            <a href="mailto:support@msfort.com" className="support-btn">Email Us</a>
          </div>

          {/* WhatsApp Chat */}
          <div className="support-option">
            <i className="fas fa-comments"></i>
            <h3>Live Chat (WhatsApp)</h3>
            <p>Need quick help? Start a WhatsApp chat with one of our agents now.</p>
            <a 
              href="https://wa.me/918149829233?text=Hello%20I%20need%20support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="support-btn"
            >
              Chat Now
            </a>
          </div>

          {/* Call Support */}
          <div className="support-option">
            <i className="fas fa-phone-alt"></i>
            <h3>Call Us</h3>
            <p>Prefer speaking to someone? Give us a call and we’ll be happy to assist you.</p>
            <a href="tel:+918149829233" className="support-btn">Call Now</a>

          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={goBack} className="nav-btn">← Back</button>
        <button onClick={() => navigate('/contact')} className="nav-btn">Next →</button>
      </div>
    </section>
  );
};

export default Support;
