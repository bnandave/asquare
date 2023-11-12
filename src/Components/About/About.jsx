import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import '../style.css';
import about_1 from '../Assets/about-1.jpg';
import about_2 from '../Assets/about-2.jpg';
import point_icon_2 from '../Assets/point-icon-2.png';
import { useInView } from 'react-intersection-observer';

function About() {
  //
  const [ref, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  //
  const targetDivRef = useRef(null);
  let [is_about_us_p1_animate, setAnimate] = useState(true);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1 // Trigger when 100% of the target div is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetDivRef.current) {
      observer.observe(targetDivRef.current);
    }

    return () => {
      if (targetDivRef.current) {
        observer.unobserve(targetDivRef.current);
      }
    };
  }, []);

  return (
    <div className="about_us flex-centre-bet">
      <div className="about_us_p1">
        <img src={about_1} className="about_us_img_1"></img>
        <div
          className="about_us_p1_details"
          style={
            is_about_us_p1_animate
              ? { animation: `slide_in 1.5s ease-in` }
              : null
          }
          ref={targetDivRef}
        >
          <div>
            <img src={point_icon_2} className="pointer_icon"></img>
            <p className="text about_text">Postgraduate Degree in Physics</p>
          </div>
          <div>
            <img src={point_icon_2} className="pointer_icon"></img>
            <p className="text about_text">Bachelor of Education (B.Ed.)</p>
          </div>
        </div>
      </div>
      <div className="about_us_p2">
        <div
          ref={ref}
          className={`section ${inView ? 'title_aaa about_us_title' : ''}`}
        >
          <span className="block_aaa"></span>
          <h1>
            About Us<span></span>
          </h1>
        </div>
        <p className="subtitle about_subtitle">Discover Our Inspiring Educational Journey</p>
        <div>
          <div>
            <img src={point_icon_2} className="pointer_icon"></img>
            <p className="text about_text">Commitment to Academic Excellence</p>
          </div>
          <div>
            <img src={point_icon_2} className="pointer_icon"></img>
            <p className="text about_text">Inspiring Lifelong Learning Journeys</p>
          </div>
          <div>
            <img src={point_icon_2} className="pointer_icon"></img>
            <p className="text about_text">Commitment to Academic Excellence</p>
          </div>
        </div>
        <button className="button know_more_btn">Know More</button>
      </div>
      <div className="about_us_p3">
        <img src={about_2}></img>
      </div>
    </div>
  );
}

export default About;
