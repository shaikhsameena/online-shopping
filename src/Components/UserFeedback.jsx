import React, { useEffect, useState } from 'react';
import './UserFeedback.css';

import A from '../assets/A.jpeg';
import B from '../assets/bbb.PNG';
import C from '../assets/C.png';


const AMAZON_LARGE  = 'https://www.amazon.in/MSFORT-Adjustable-Cushioning-Corrector-Recovery/dp/B0FHW1F9JM/ref=sr_1_5?dib=eyJ2IjoiMSJ9.LPyB9tdkzy7Hyp2-lzjHYJREEetRoDrYHCmvLRX-Wb5dV3wQ4Fj-eguEXTTBNkQBiIs8SrowKr3DriDJh9xZTD-_vxBfpo63HRpcfv8D4mIeeyqG7Kp9Vw5gvxsEnZXy37tsDQSIDRXWpIxOC4roya-f_g2lafNdy1O18GyOPME-zgaDbBw4eh8V1KRmVWA6y2nciPRF-_PDTj-KK5WY2PwYeKfoH24IncwIgv_IaEw.ba9enLjlwMWjhW6A2XOeQHzxRzvZ2QC6IeM2ApTkQgs&dib_tag=se&keywords=Msfort&qid=1756031840&sr=8-5';
const AMAZON_SMALL1 = 'https://www.amazon.in/dp/B0FJ1Y5JT2?ref=cm_sw_r_cso_wa_apin_dp_ERAN5SYB0C1H5QHF7CHF&ref_=cm_sw_r_cso_wa_apin_dp_ERAN5SYB0C1H5QHF7CHF&social_share=cm_sw_r_cso_wa_apin_dp_ERAN5SYB0C1H5QHF7CHF';
const AMAZON_SMALL2 = 'https://www.amazon.in/MSFORT-Adjustable-Sacroiliac-Breathable-Compression/dp/B0FJ1NLF6X/ref=sr_1_6?crid=1QSXUZRDVCSV1&dib=eyJ2IjoiMSJ9.LPyB9tdkzy7Hyp2-lzjHYJREEetRoDrYHCmvLRX-Wb5dV3wQ4Fj-eguEXTTBNkQBiIs8SrowKr3DriDJh9xZTD-_vxBfpo63HRpcfv8D4mIeeyqG7Kp9Vw5gvxsEnZXy37tsDQSIDRXWpIxOC4roya-f_g2lafNdy1O18GyOPME-zgaDbBw4eh8V1KRmVWA6y2nciPRF-_PDTj-KK5WY2PwYeKfoH24IncwIgv_IaEw.UsaHP9kp9AsTouQe6A6EzQQbTgUno3f7osennSVSnf0&dib_tag=se&keywords=msfort&qid=1756033541&sprefix=%2Caps%2C691&sr=8-6';


const RotatingText = ({ items = [], interval = 3000, className = '' }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!items.length) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [items, interval]);
  return <span className={className}>{items[idx] ?? ''}</span>;
};

const UserFeedback = () => {
  const largeTitles = ['On Sale', 'Limited Time Offer', 'Today’s Hot Picks'];
  const largeSubs   = ["Fashion that's as unique as you are - shop now", 'Flat 30% off • Free delivery', 'New styles dropping daily'];

  const small1Titles = ['New Collection', 'Fresh Arrivals', 'Just In'];
  const small1Subs   = ['Elevate your style game', 'Handpicked for you', 'Trendsetting fits'];

  const small2Titles = ['Best Deal', 'Steal of the Day', 'Budget Friendly'];
  const small2Subs   = ['Upgrade your closet', 'Don’t miss the price drop', 'Smart choices, smart prices'];

  return (
    <div className="promo-wrapper">
      
      <a
        href={AMAZON_LARGE}
        target="_blank"
        rel="noopener noreferrer"
        className="promo-large-card promo-card"
        aria-label="Open Amazon product (large promo)"
      >
        <img src={A} alt="Promo 1" />
        <div className="promo-content">
          <h3><RotatingText items={largeTitles} interval={3000} /></h3>
          <p><RotatingText items={largeSubs} interval={4000} /></p>
        </div>
      </a>

      <div className="promo-small-cards">
        
        <a
          href={AMAZON_SMALL1}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-small-card promo-card"
          aria-label="Open Amazon product (small promo 1)"
        >
          <img src={B} alt="Promo 2" />
          <div className="promo-content">
            <h3><RotatingText items={small1Titles} interval={2800} /></h3>
            <p><RotatingText items={small1Subs} interval={3800} /></p>
          </div>
        </a>

        
        <a
          href={AMAZON_SMALL2}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-small-card promo-card"
          aria-label="Open Amazon product (small promo 2)"
        >
          <img src={C} alt="Promo 3" />
          <div className="promo-content">
            <h3><RotatingText items={small2Titles} interval={3200} /></h3>
            <p><RotatingText items={small2Subs} interval={4200} /></p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserFeedback;
