import React from 'react';
import './Courses.css';
import '../style.css';
import Courses_Card_All from './Courses_Card_All';
import Courses_Data from './Courses_Data';
import triangle_1 from '../Assets/triangle_1.png';
import triangle_2 from '../Assets/triangle_2.png';
import triangle_3 from '../Assets/triangle_3.png';

function Courses() {
  return (
    <div className="courses">
      <div className="courses_upper">
        <div class="title_aaa">
          <span class="block_aaa"></span>
          <h1>
            Courses<span></span>
          </h1>
        </div>
        <p className="subtitle">
          Unlocking Opportunities with Comprehensive Course Offerings
        </p>
      </div>
      <div className="courses_cards">
        <div>
          <div className="flex-centre-bet subject_list">
            <li>JEE Mains</li>
            <li>JEE Advance</li>
            <li>NEET</li>
            <li>Foundation</li>
          </div>
          <div className="card_container">
            <div className="card">
              <img
                src="https://i.ibb.co/TTrj2Rx/student-img-2.jpg"
                alt="img"
                className="card_img"
              />
              <div className="card_content">
                <div className="card_top">
                  <div className="card_top_containers">
                    <p>Admission Open</p>
                    <img src={triangle_1} alt="icon" />
                  </div>
                  <div className="card_top_containers">
                    <p>Class 11th Students</p>
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
              <p className="heading_no_hover">- Two Year Programme -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
