import React, { useState, useEffect } from "react";
import img4 from "../assets/z3.PNG";
import img1 from "../assets/m.png";
import img2 from "../assets/z1.PNG";
import img3 from "../assets/z2.PNG";

import "./HeroSection.css";

const HeroSection = () => {
  const images = [img4, img2, img3, img1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length  -1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt="Hero" className="hero-image" />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
