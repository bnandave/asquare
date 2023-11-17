import React from 'react';
import Arrow from '../Assets/point-icon.png';
import Data from './Data';
import './FAQ.css';
import { useInView } from 'react-intersection-observer';

function FAQ() {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true // Trigger only once
  });

  function questions(data, index) {
    return (
      <div key={index}>
        <li>{data.question}</li>
        <img src={Arrow} alt="icon" className="icon_img" />
        <p className="answer">{data.answer}</p>
      </div>
    );
  }
  return (
    <div className="faq">
      <div className="faq_left">
          <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h1>
            Frequently Asked Questions<span></span>
          </h1>
        </div>
        <p className="subtitle">
          Answers to Common Inquiries for a Smooth Experience with Us
        </p>
        <button className="button">Contact Us</button>
      </div>
      <div className="faq_right">{Data.map(questions)}</div>
    </div>
  );
}

export default FAQ;
