import React, { useState } from 'react';
import './Collection.css';

// Product Image Pairs
import airforce1 from '../assets/airforce 1.png';
import airforce2 from '../assets/airforce 2.png';
import dunk1 from '../assets/dunk 1.png';
import dunk2 from '../assets/dunk 2.png';
import dunks1 from '../assets/dunks 1.png';
import dunks2 from '../assets/dunks 2.png';
import sb1 from '../assets/sb1.png';
import sb2 from '../assets/sb2.png';
import spike1 from '../assets/spike1.png';
import spike2 from '../assets/spike2.png';
import pink from '../assets/pink.png';
import pink2 from '../assets/pink 2.png';
import red1 from '../assets/red 1.png';
import red2 from '../assets/red2.png';
import j1b from '../assets/j1b.png';
import j2b from '../assets/j2b.png';
import gold1 from '../assets/gold1.png';
import gold2 from '../assets/gold2.png';
import blue1 from '../assets/blue1.png';
import blue2 from '../assets/blue2.png';

const COLLECTION_ITEMS = [
  {
    id: 1,
    name: 'Air Force 1 Minimal',
    category: 'Heritage',
    price: '$130',
    primaryImg: airforce1,
    secondaryImg: airforce2
  },
  {
    id: 2,
    name: 'Nike Dunk Low Classic',
    category: 'Heritage',
    price: '$115',
    primaryImg: dunk1,
    secondaryImg: dunk2
  },
  {
    id: 3,
    name: 'Nike Dunk Pink Edition',
    category: 'Lifestyle',
    price: '$165',
    primaryImg: pink,
    secondaryImg: pink2
  },
  {
    id: 4,
    name: 'Jordan 1 Retro High',
    category: 'Heritage',
    price: '$180',
    primaryImg: red1,
    secondaryImg: red2
  },
  {
    id: 5,
    name: 'Jordan 1 Retro High',
    category: 'Lifestyle',
    price: '$180',
    primaryImg: j1b,
    secondaryImg: j2b
  },
  {
    id: 6,
    name: 'Nike Dunk High Edition',
    category: 'Heritage',
    price: '$140',
    primaryImg: dunks1,
    secondaryImg: dunks2
  },
  {
    id: 7,
    name: 'Nike SB Dunk Low',
    category: 'Lifestyle',
    price: '$125',
    primaryImg: sb1,
    secondaryImg: sb2
  },
  {
    id: 8,
    name: 'Nike Air Spike',
    category: 'Training',
    price: '$150',
    primaryImg: spike1,
    secondaryImg: spike2
  },

  {
    id: 10,
    name: 'Jordan 1 Retro High',
    category: 'Heritage',
    price: '$140',
    primaryImg: gold1,
    secondaryImg: gold2
  },
  {
    id: 11,
    name: 'Jordan 1 Retro High',
    category: 'Training',
    price: '$190',
    primaryImg: blue1,
    secondaryImg: blue2
  },
  
];

export default function Collection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Heritage', 'Lifestyle', 'Training', 'Running'];

  const filteredItems = filter === 'All' 
    ? COLLECTION_ITEMS 
    : COLLECTION_ITEMS.filter(item => item.category === filter);

  return (
    <div className="collection-page">
      <header className="collection-header">
        <h2>CURATED COLLECTION</h2>
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="product-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="product-card">
            {/* Card Image Wrapper for Mouse Hover Swap */}
            <div className="card-image-box">
              <img 
                src={item.primaryImg} 
                alt={`${item.name} primary view`} 
                className="product-img primary-view" 
              />
              <img 
                src={item.secondaryImg} 
                alt={`${item.name} secondary view`} 
                className="product-img secondary-view" 
              />
            </div>

            <div className="card-meta">
              <div>
                <h4>{item.name}</h4>
                <span className="card-cat">{item.category}</span>
              </div>
              <span className="card-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}