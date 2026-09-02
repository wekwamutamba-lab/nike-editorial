import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import bgWhite from '../assets/hero1.png';
import bgBlack from '../assets/hero2.png';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      
      <div className="hero-slide-layer base-layer">
        <div 
          className="hero-image-center" 
          style={{ backgroundImage: `url(${bgBlack})` }} 
        />
        <section className="hero-content theme-black">
          <div className="hero-text-overlay">
            <span className="hero-subtitle">// 2026 EDITORIAL</span>
            <h1 className="hero-title">
              <span className="part-1">JUST D</span>
              <span className="part-2">O IT.</span>
            </h1>
          </div>

          <div className="hero-footer">
            <Link to="/collection" className="cta-link">
              EXPLORE CATALOG →
            </Link>
          </div>
        </section>
      </div>

      
      <div className={`hero-slide-layer overlay-layer ${activeSlide === 0 ? 'visible' : 'hidden'}`}>
        <div 
          className="hero-image-center" 
          style={{ backgroundImage: `url(${bgWhite})` }} 
        />
        <section className="hero-content theme-white">
          <div className="hero-text-overlay">
            <span className="hero-subtitle">// 2026 EDITORIAL</span>
            <h1 className="hero-title">
              <span className="part-1">JUST D</span>
              <span className="part-2">O IT.</span>
            </h1>
          </div>

          <div className="hero-footer">
            <Link to="/collection" className="cta-link">
              EXPLORE CATALOG →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}