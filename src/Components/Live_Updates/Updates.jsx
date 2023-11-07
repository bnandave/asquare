import React from 'react';
import student_img_5 from '../Assets/student-img-5.png';
import update_logo from '../Assets/update-logo.png';
import './Updates.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

function Updates() {
  //
  const [ref, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  const Data = [
    { id: 1, update: 'New Course Offerings for the Upcoming Academic Year' },
    { id: 2, update: 'Join Us for the Annual Science Symposium!' },
    { id: 3, update: 'Results: ASQUARE Students Shine in Recent Olympiads' },
    { id: 4, update: 'Results: ASQUARE Students Shine in Recent Olympiads' },
    { id: 5, update: 'Results: ASQUARE Students Shine in Recent Olympiads' }
  ];
  function update_text(data) {
    return (
      <div key={data.id}>
        <img src={update_logo} alt="icon" />
        <p>{data.update}</p>
      </div>
    );
  }
  return (
    <div className="updates">
      <div className="updates_left">
        <div ref={ref} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h1>
            Live Updates<span></span>
          </h1>
        </div>
        <p className="subtitle updates_subtitle">
          Stay Informed with Real-Time Educational News and Institute Updates
        </p>
        <p className="text">
          Get the latest news, events, and educational updates in real-time,
          keeping you informed about all things ASQUARE Institute
        </p>
      </div>
      <img src={student_img_5} alt="img" className="mid_img" />
      <div className="updates_right">{Data.map(update_text)}</div>
    </div>
  );
}

export default Updates;
