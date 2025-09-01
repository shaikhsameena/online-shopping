import React from "react";
import "./ExploreShop.css";

const products = [
  { id: 1, img: "/images/p4.PNG", price: 399, name: "LS Belt", stock: true, amazon: "https://www.amazon.in/MSFORT-Adjustable-Cushioning-Corrector-Recovery/dp/B0FHW1F9JM/ref=sr_1_5?dib=eyJ2IjoiMSJ9.LPyB9tdkzy7Hyp2-lzjHYJREEetRoDrYHCmvLRX-Wb5dV3wQ4Fj-eguEXTTBNkQBiIs8SrowKr3DriDJh9xZTD-_vxBfpo63HRpcfv8D4mIeeyqG7Kp9Vw5gvxsEnZXy37tsDQSIDRXWpIxOC4roya-f_g2lafNdy1O18GyOPME-zgaDbBw4eh8V1KRmVWA6y2nciPRF-_PDTj-KK5WY2PwYeKfoH24IncwIgv_IaEw.ba9enLjlwMWjhW6A2XOeQHzxRzvZ2QC6IeM2ApTkQgs&dib_tag=se&keywords=Msfort&qid=1756031840&sr=8-5" },
  { id: 2, img: "/images/C.PNG", price: 399, name: "Hip Belt ", stock: true, amazon: "https://www.amazon.in/MSFORT-Adjustable-Sacroiliac-Breathable-Compression/dp/B0FJ1NLF6X/ref=sr_1_6?crid=1QSXUZRDVCSV1&dib=eyJ2IjoiMSJ9.LPyB9tdkzy7Hyp2-lzjHYJREEetRoDrYHCmvLRX-Wb5dV3wQ4Fj-eguEXTTBNkQBiIs8SrowKr3DriDJh9xZTD-_vxBfpo63HRpcfv8D4mIeeyqG7Kp9Vw5gvxsEnZXy37tsDQSIDRXWpIxOC4roya-f_g2lafNdy1O18GyOPME-zgaDbBw4eh8V1KRmVWA6y2nciPRF-_PDTj-KK5WY2PwYeKfoH24IncwIgv_IaEw.UsaHP9kp9AsTouQe6A6EzQQbTgUno3f7osennSVSnf0&dib_tag=se&keywords=msfort&qid=1756033541&sprefix=%2Caps%2C691&sr=8-6" },
  { id: 3, img: "/images/R.png", price: 399, name: "Back Brace Belt", stock: true, amazon: "https://www.amazon.in/dp/B0FJ1Y5JT2?ref=cm_sw_r_cso_wa_apin_dp_ERAN5SYB0C1H5QHF7CHF&ref_=cm_sw_r_cso_wa_apin_dp_ERAN5SYB0C1H5QHF7CHF&social_share=cm_sw_r_cso_wa_apin_dp_ERAN5SYB0C1H5QHF7CHF" },
  { id: 4, img: "/images/H1.PNG", price: 199, name: "Hand pain belt", stock: false, amazon: "https://www.amazon.in/dp/B0XXXXX4" },
  { id: 5, img: "/images/H2.PNG", price: 299, name: "Elbow belt", stock: false, amazon: "https://www.amazon.in/dp/B0XXXXX5" },
  { id: 6, img: "/images/H3.PNG", price: 499, name: "knee hot belt", stock: false, amazon: "https://www.amazon.in/dp/B0XXXXX6" },
];

const ExploreShop = () => (
  <section className="pp-wrapper">
    
    <p className="pp-discover">Discover</p>
    <h2 className="pp-title">Popular Products</h2>
    <p className="pp-tagline">
      Uncover a universe of exceptional products and <br /> unbeatable deals. Shop our
      ecommerce.
    </p>

    
    <div className="pp-grid">
      {products.map((p) => (
        <div className={`pp-item ${!p.stock ? "out-of-stock" : ""}`} key={p.id}>
        
          <div className="pp-imgBox">
            <img src={p.img} alt={p.name} />
            {p.stock ? (
              <span className="pp-badge">Best Seller</span>
            ) : (
              <span className="pp-badge out">Out of Stock</span>
            )}
            <i className="fa-regular fa-heart pp-heart" />
          </div>

          
          <div className="pp-info">
            <span className="pp-cat"></span>
            <h4 className="pp-name">{p.name}</h4>

            <div className="pp-rating">
              <i className="fa-solid fa-star" />
              4.9&nbsp;
              <a href="#" className="pp-reviews">42 reviews</a>
            </div>

            <div className="pp-price">₹{p.price}</div>

          
            <a
              href={p.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="pp-buyBtn"
            >
              {p.stock ? "Buy on Amazon" : "Buy on Amazon"}
            </a>
          </div>
        </div>
      ))}
    </div>

    
    <button className="pp-seeMore">See More</button>
  </section>
);

export default ExploreShop;