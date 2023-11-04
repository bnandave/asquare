import React from 'react';
// import './Courses.css';
import '../style.css';
import Courses_Card_All from './Courses_Card_All';
import Courses_Data from './Courses_Data';

function Courses() {
  return (
    <div className="courses">
      <div className="courses_upper">
        <p className="title">Courses</p>
        <p className="subtitle">
          Unlocking Opportunities with Comprehensive Course Offerings
        </p>
      </div>
      <div className="courses_cards">{Courses_Data.map(Courses_Card_All)}</div>
    </div>
  );
}

export default Courses;
