import React from 'react';
import bgImage from '../assets/belt2.avif';

const HeroSection = () => {
  return (
    <section
      style={{
        margin: 0,
        padding: 0,
        lineHeight: 0,
      }}
    >
      <img
        src={bgImage}
        alt="Hero"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </section>
  );
};

export default HeroSection;
