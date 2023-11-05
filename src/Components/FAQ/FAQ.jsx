import React from 'react';
import Arrow from '../Assets/point-icon.png';
import Data from './Data';
import './FAQ.css';

function FAQ() {
  function questions(data, index) {
    console.log(data.question);
    return (
      <div key={index}>
        <li>{data.question}</li>
        <img src={Arrow} alt="icon" />
        <p className="answer">{data.answer}</p>
      </div>
    );
  }
  return (
    <div className="faq">
      <div className="faq_left">
        <p className="title">Frequently Asked Questions</p>
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
