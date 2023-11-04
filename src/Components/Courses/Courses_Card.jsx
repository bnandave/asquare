import React, { useState } from 'react';
import './Courses.css';
import '../style.css';
import triangle_1 from '../Assets/triangle_1.png';
import triangle_2 from '../Assets/triangle_2.png';
import triangle_3 from '../Assets/triangle_3.png';

function Courses_Card(props) {
  return (
    <div className="card">
      <img src={props.student_img} alt="img" className="card_img" />
      <div className="card_content">
        <div className="card_top">
          <div className="card_top_containers">
            <p>{props.status}</p>
            <img src={triangle_1} alt="icon" />
          </div>
          <div className="card_top_containers">
            <p>{props.class}</p>
            <img src={triangle_2} alt="icon" />
          </div>
          <div className="card_top_containers">
            <p>{props.target_year}</p>
            <img src={triangle_3} alt="icon" />
          </div>
        </div>
        <div className="card_bottom">
          <p>{props.heading}</p>
          <p>{props.sub_heading}</p>
          <button className="course_card_btn">Know More</button>
        </div>
      </div>
      <p className='heading_no_hover'>{props.heading}</p>
    </div>
  );
}

export default Courses_Card;
