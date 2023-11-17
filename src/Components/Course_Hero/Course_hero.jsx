import React from 'react';
import './Course_hero.css';
import '../style.css';
import Course_hero_data from './Course_hero_data';
import Course_counter from './Course_counter';
import hero_img from '../Assets/teacher-img-2.png';
import icon_1 from '../Assets/icon-1.png';
import icon_2 from '../Assets/icon-2.png';
import icon_3 from '../Assets/icon-3.png';
import icon_4 from '../Assets/icon-4.png';
import icon_5 from '../Assets/icon-5.png';
import icon_6 from '../Assets/icon-6.png';
import icon_7 from '../Assets/icon-7.png';

function Course_hero() {
  return (
    <div className="course_hero_container">
      <div className="c_h_container_left">
        <h1>2-year NEET Course (2023-25)</h1>
        <div className="c_h_counter">
          {Course_hero_data.map(Course_counter)}
        </div>
        <div className="c_h_points">
          <div className="c_h_points_left">
            <div>
              <img src={icon_1} alt="icon" className="point_icons" />
              <p>Regular Assignment</p>
            </div>
            <div>
              <img src={icon_2} alt="icon" className="point_icons" />
              <p>Comprehensive Curriculum</p>
            </div>
            <div>
              <img src={icon_3} alt="icon" className="point_icons" />
              <p>Interactive Class</p>
            </div>
            <div>
              <img src={icon_4} alt="icon" className="point_icons" />
              <p>Dedicated Faculty</p>
            </div>
          </div>
          <div className="c_h_points_right">
            <p>Subjects Covered</p>
            <div>
              <img src={icon_5} alt="icon" className="point_icons" />
              <p>Physics</p>
            </div>
            <div>
              <img src={icon_6} alt="icon" className="point_icons" />
              <p>Chemistry</p>
            </div>
            <div>
              <img src={icon_7} alt="icon" className="point_icons" />
              <p>Mathematics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="c_h_container_right">
        <img src={hero_img} alt="img" />
        <p>₹ 49,999 /-</p>
        <button className="button">Pay Now</button>
      </div>
    </div>
  );
}

export default Course_hero;
