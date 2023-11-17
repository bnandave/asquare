import React from 'react';
import './About_Us.css';
import '../style.css';
import about_us_illustrator from '../Assets/about-us-illustrator.gif';
import { useInView } from 'react-intersection-observer';

function About_Us() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="a_u_conatiner">
      <div className="a_u_conatiner_left">
        <div
          ref={viewRef}
          className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h1>
            About Us<span></span>
          </h1>
        </div>
        <p className="subtitle">Our Journey, Mission, and Values</p>
        <p className="text">
          Discover our institute's inspiring journey, unwavering mission, and
          the core values that drive our commitment to excellence in education.
        </p>
        <button className="button">Faculty</button>
      </div>
      <div className="a_u_conatiner_right">
        <img src={about_us_illustrator} alt="img" />
      </div>
    </div>
  );
}

export default About_Us;
