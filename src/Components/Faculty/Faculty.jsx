import React, { useState } from 'react';
import './Faculty.css';
import '../style.css';
import point_icon_3 from '../Assets/point-icon-3.png';
import Faculty_Data from './Faculty_Data';

function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState('Rajesh Kumar'); // Set the default selected faculty

  // Find the faculty object based on the selected name
  const faculty = Faculty_Data.find((item) => item.name === selectedFaculty);

  return (
    <div className="faculty_section">
      <div className="faculty_section_left">
        <div className="title_aaa">
          <span className="block_aaa"></span>
          <h1>
            Faculty<span></span>
          </h1>
        </div>
        <p className="subtitle">Faculty, Academic Guides & Mentors</p>
        <p className="text">
          Meet Our Diverse Team of Accomplished Educators Committed to Nurturing
          Academic Excellence and Fostering Student Success.
        </p>
        {Faculty_Data.map((facultyMember) => (
          <li
            key={facultyMember.id}
            onClick={() => setSelectedFaculty(facultyMember.name)}
            className={
              facultyMember.name === selectedFaculty
                ? 'selected'
                : 'not_selected'
            }
          >
            {facultyMember.name}
          </li>
        ))}
      </div>
      <div className="faculty_section_right">
        <img src={faculty.img} alt="img" className="teacher_img" />
        <div className="qualification_container">
          {faculty.points.map((point, index) => (
            <div key={index}>
              <img src={point_icon_3} alt="logo" />
              <p>{point}</p>
            </div>
          ))}
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
