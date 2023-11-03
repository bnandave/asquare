import React, { useState } from 'react';
import './Courses.css';
import '../style.css';
import student_img_1 from '../Assets/student-img-1.png';
import triangle_1 from '../Assets/triangle_1.png';
import triangle_2 from '../Assets/triangle_2.png';
import triangle_3 from '../Assets/triangle_3.png';

function Courses_Card(props) {
    // 
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  //
  return (
    <div
      className="card"
      //   onMouseEnter={() => console.log('Hovered over MyComponent')}
    >
      <img
        src={student_img_1}
        alt="img"
        className="card_img"
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
      <div className="card_content">
        <div className="card_top">
          <div className="card_top_containers">
            <p>Admission Open</p>
            <img src={triangle_1} alt="icon" />
          </div>
          <div className="card_top_containers">
            <p>Class 11th Student</p>
            <img src={triangle_2} alt="icon" />
          </div>
          <div className="card_top_containers">
            <p>Target Year is 2025</p>
            <img src={triangle_3} alt="icon" />
          </div>
        </div>
        <div className="card_bottom">
          <p>- Two Year Programme -</p>
          <p>Your Path to Academic Excellence and Future Achievement</p>
          <button className="course_card_btn">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Courses_Card;
