import React from 'react';
import "./Contact_Us.css"
import "../style.css"
import c_u_hero_img from '../Assets/contact-us-illustrator.png';
import { useInView } from 'react-intersection-observer';

function Contact_Us() {
  //
  const [ref, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  return (
    <div className="contact_us">
      <div className="c_u_left">
        <div ref={ref} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h1>
            Contact Us<span></span>
          </h1>
        </div>
        <p className="subtitle c_u_subtitle">Reach Out to ASQUARE Institute</p>
        <p className="text c_u_text">
          We welcome your questions, inquiries, and feedback. Feel free to reach
          out to our dedicated team for assistance, information, or any
          assistance you may need
        </p>
        <button className="button">Enquiry Form</button>
      </div>
      <div className="c_u_right">
        <img src={c_u_hero_img} alt="img" />
      </div>
    </div>
  );
}

export default Contact_Us;
