import React from 'react';
import './UserFeedback.css';


// ✅ Sirf ek hi image import karna hai
import A from '../assets/A.jpeg';
import B from '../assets/B.jpg';
import C from '../assets/C.jpeg';

const UserFeedback = () => {
  return (
    <div className="promo-wrapper">
      {/* Left: Large card */}
      <div className="promo-large-card">
        <img src={A} alt="Promo 1" />
        <div className="promo-content">
          <h3>Promo 1</h3>
          <p>Your custom text here</p>
        </div>
      </div>

      {/* Right: 2 stacked small cards */}
      <div className="promo-small-cards">
        <div className="promo-small-card">
          <img src={B} alt="Promo 2" />
          <div className="promo-content">
            <h3>Promo 2</h3>
            <p>Your custom text here</p>
          </div>
        </div>

        <div className="promo-small-card">
          <img src={C} alt="Promo 3" />
          <div className="promo-content">
            <h3>Promo 3</h3>
            <p>Your custom text here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
