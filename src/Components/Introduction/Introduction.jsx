import React from 'react';
import Home_Promo from '../Assets/Home-Promo.png';
import './Introduction.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

function Introduction() {
  // 
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  
  return (
    <div className="introduction">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
        <span className="block_aaa"></span>
        <h1>
          Introduction<span></span>
        </h1>
      </div>
      <p className="subtitle">
        Unlock Your Potential with ASQUARE Institute's Inspirational Journey
      </p>
      <img src={Home_Promo} alt="img" />
    </div>
  );
}

export default Introduction;
