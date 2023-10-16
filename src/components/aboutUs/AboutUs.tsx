import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        BC Bertenex Oy is a small software development company located in Finland. We specialize in crafting innovative software solutions that meet the evolving needs of businesses and individuals.
      </p>
      <p className="about-text">
        Established in 2022, we are driven by a passion for technology and a commitment to excellence. Our team of dedicated professionals strives to deliver quality, reliability, and outstanding service in every project we undertake.
      </p>
    </div>
  );
};

export default AboutUs;