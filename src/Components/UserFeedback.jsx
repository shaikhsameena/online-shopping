import React from 'react';
import './UserFeedback.css';



import A from '../assets/A.jpeg';
import B from '../assets/B.jpg';
import C from '../assets/C.png';

const UserFeedback = () => {
  return (
    <div className="promo-wrapper">
      
      <div className="promo-large-card">
        <img src={A} alt="Promo 1" />
        <div className="promo-content">
          <h3>On Sale</h3>
          <p>Fashion that's as unique as you are - shop now</p>
        </div>
      </div>

     
      <div className="promo-small-cards">
        <div className="promo-small-card">
          <img src={B} alt="Promo 2" />
          <div className="promo-content">
            <h3>New Collection</h3>
            <p>Elevate your style game</p>
          </div>
        </div>

        <div className="promo-small-card">
          <img src={C} alt="Promo 3" />
          <div className="promo-content">
            <h3>Best Deal</h3>
            <p>Upgrade your closet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
