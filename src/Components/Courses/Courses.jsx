import React from 'react';
// import './Courses.css';
import '../style.css';
import Courses_Card from './Courses_Card';
import Courses_Data from './Courses_Data';

function Courses() {
  return (
    <div className="courses">
      <div className="courses_upper">
        <p className="title">Courses</p>
        <p className="subtitle">
          Unlocking Opportunities with Comprehensive Course Offerings
        </p>
        <div className='flex-centre-bet'>
          <li>JEE Mains</li>
          <li>JEE Advance</li>
          <li>NEET</li>
          <li>MHT CET</li>
        </div>
      </div>
      {Courses_Card()}
      {/* <div className="courses_cards">{Courses_Data.map(Courses_Card)}
      </div> */}
    </div>
  );
}

export default Courses;
