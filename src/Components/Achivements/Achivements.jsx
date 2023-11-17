import React from 'react';
import './Achivements.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';


function Achievements() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });
  return (
    <div className="achivements">
      <div
        ref={viewRef}
        className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
      >
        <span className="block_aaa"></span>
        <h1>
          Our Achivements<span></span>
        </h1>
      </div>
      <p className="subtitle">Celebrating Milestones and Success Stories</p>
      <p className='paragraph'>
        At Asquare Classes, our achievements are a reflection of our unwavering
        commitment to academic excellence. Over the years, we have proudly
        celebrated numerous milestones, including consistently producing
        top-performing students in competitive exams like JEE Main, JEE
        Advanced, NEET, and board exams. Our students have secured seats in
        prestigious institutions and pursued successful careers in engineering
        and medicine. Additionally, our institute has been recognized with
        [mention any notable awards or recognitions], further solidifying our
        position as a leader in the education sector. These achievements serve
        as a source of inspiration, driving us to continuously innovate and
        provide the best possible learning experience for our students
      </p>
      <div></div>
    </div>
  );
}

export default Achievements;
