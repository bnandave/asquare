import React from 'react';
import './Hero.css';
import '../style.css';
import hero_img from '../Assets/Teacher-student-pana.png';
import Counter from './Counter';
import Count_Data from './Count_Data';
// import btn from '../Btn/Btn';

function Hero() {
  return (
    <div className="hero_container">
      <div className="hero_container_p1">
        <h1>Empowering Futures Through Excellence in Education</h1>
        <p className="hero_container_subtitle">
          Fueling Dreams with Quality Education, Shaping Tomorrow's Leaders, One
          Student at a Time
        </p>
        <button className="hero_button">Courses</button>
        <div className="hero_counter flex-centre-bet">
          {Count_Data.map(Counter)}
        </div>
      </div>
      <div className="hero_container_p2">
        <img src={hero_img} alt="img" />
      </div>
    </div>
  );
}

export default Hero;
