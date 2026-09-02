import React, { useState, useEffect } from 'react';
import './About.css';

import goldImg from '../assets/gold1.png';
import j1bImg from '../assets/j1b.png';
import red1 from '../assets/red 1.png';
import sb1 from '../assets/sb1.png';


const MORPH_IMAGES = [goldImg, j1bImg, red1, sb1];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MORPH_IMAGES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      {/* Left Column: Clean Editorial Content */}
      <div className="about-left-col">
        <header className="about-header">
          <span className="about-subtitle">// BRAND MANIFESTO</span>
          <h1 className="about-title">
            CRAFTED FOR<br />THE DRIVEN.
          </h1>
        </header>

        <div className="about-body">
          <p className="about-description">
            We operate at the intersection of raw performance and minimal design. 
            Every piece in our editorial series is curated to challenge standard aesthetics delivering 
            stark contrast, unyielding quality, and functional beauty.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2026</span>
              <span className="stat-label">EDITORIAL SERIES</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">HERITAGE DESIGN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Floating Shape-Shifting Stage */}
      <div className="about-right-col">
        <div className="morph-stage floating-node">
          {MORPH_IMAGES.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt="Editorial Morph Asset"
              className={`morph-img ${idx === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}