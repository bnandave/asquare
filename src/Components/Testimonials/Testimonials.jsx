import React from 'react';

import './Testimonials.css';
import '../style.css';
import teacher_img_1 from '../Assets/student-img-1.png';
import hollow_star_icon from '../Assets/hollow-star-icon.png';
import gold_star_icon from '../Assets/gold-star-icon.png';
import arrow_logo_2 from '../Assets/arrow-logo-2.png';
import Data from './Data';

function Testimonials() {
  return (
    <div className="testi">
      <p className="title">Testimonials</p>
      <p className="subtitle">Student Success Stories</p>
      <div className="testi_container">
        <div className="testi_container_left">
          <img src={teacher_img_1} alt="img" />
          <img src={arrow_logo_2} alt="img" />
          <img src={arrow_logo_2} alt="img" />
        </div>
        <div className="testi_container_right">
          <div>
            <img src={gold_star_icon} alt="start" />
            <img src={gold_star_icon} alt="start" />
            <img src={gold_star_icon} alt="start" />
            <img src={gold_star_icon} alt="start" />
            <img src={hollow_star_icon} alt="start" />
          </div>
          <p>
            Thanks to Asquare Classes, I conquered my exams with confidence and
            achieved my goals. Their unwavering support changed my life!
          </p>
          <p>Meera Gupta</p>
          <p>COEP Pune</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
