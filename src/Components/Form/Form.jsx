import React, { forwardRef } from 'react';
import './Form.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

const Form = forwardRef((props, ref) => {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true 
  });

  return (
    <div className="form" ref={ref}>
      <div className="container">
        <div ref={viewRef} className={`section ${inView ? 'title_aaa' : ''}`}>
          <span className="block_aaa"></span>
          <h1>
            Enquiry Form<span></span>
          </h1>
        </div>
        <p className="subtitle">
          Transforming Your Curiosity into Confidence and Success
        </p>
        <div className="data_container">
          <input
            type="text"
            name="firstName"
            required
            maxLength="28"
            placeholder="Full Name"
          />
          <input
            type="text"
            name="lastName"
            required
            maxLength="28"
            placeholder="Last Name"
          />
          <input
            type="number"
            name="contact"
            required
            maxLength="28"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="gmail"
            maxLength="28"
            placeholder="Email ID (Optional)"
          />
          <input
            type="text"
            name="course"
            required
            maxLength="28"
            placeholder="Course"
          />
          <input
            type="text"
            name="location"
            required
            maxLength="28"
            placeholder="Location (Optional)"
          />
          <input
            type="text"
            name="feedback"
            required
            maxLength="108"
            placeholder="Feedback"
          />
        </div>
        <button className="button">Submit</button>
      </div>
    </div>
  );
})

export default Form;