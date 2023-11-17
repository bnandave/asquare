import React, { useState } from 'react';
import './Courses.css';
import '../style.css';
import { Course_Data, subjects_name } from './Courses_Data';
import triangle_1 from '../Assets/triangle_1.png';
import triangle_2 from '../Assets/triangle_2.png';
import triangle_3 from '../Assets/triangle_3.png';
import { useInView } from 'react-intersection-observer';

function Courses() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  let [index, setIndex] = useState(0);

  function card(details_data) {
    return (
      <div className="card" key={details_data.id}>
        <img src={details_data.student_img} alt="img" className="card_img" />
        <div className="card_content">
          <div className="card_top">
            <div className="card_top_containers">
              <p>{details_data.status}</p>
              <img src={triangle_1} alt="icon" />
            </div>
            <div className="card_top_containers">
              <p>{details_data.class}</p>
              <img src={triangle_2} alt="icon" />
            </div>
            <div className="card_top_containers">
              <p>{details_data.target_year}</p>
              <img src={triangle_3} alt="icon" />
            </div>
          </div>
          <div className="card_bottom">
            <p>{details_data.heading}</p>
            <p>{details_data.sub_heading}</p>
            <button className="course_card_btn">Know More</button>
          </div>
        </div>
        <p className="heading_no_hover">{details_data.heading}</p>
      </div>
    );
  }

  return (
    <div className="courses">
      <div className="courses_upper">
          <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
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
            {subjects_name.map((subject_data) => (
              <li
                key={subject_data.id}
                btn_index={subject_data.id}
                onClick={() => setIndex(subject_data.id - 1)}
                className={
                  index == subject_data.id - 1
                    ? 'subject_selected sub_btn'
                    : 'subject_not_selected sub_btn'
                }
              >
                {subject_data.subject}
              </li>
            ))}
          </div>
          <div className="card_container">{Course_Data[index].map(card)}</div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
