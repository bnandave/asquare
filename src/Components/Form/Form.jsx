import React, { forwardRef, useState } from 'react';
import './Form.css';
import '../style.css';
import { useInView } from 'react-intersection-observer';

const Form = forwardRef((props, ref) => {
  //
  const [viewRef, inView] = useInView({
    triggerOnce: true
  });
  //
  let [text, setText] = useState(false);
  const handleChange = (event) => {
    let newValue = event.target.value;
    if (newValue.length != 0) {
      setText(true);
    }
  };

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
          <div className="input_text">
            <input
              type="text"
              onChange={handleChange}
              required
              maxLength={20}
              name="given-name"
              id='first-name'
              autoComplete="given-name"
            />
            <label htmlFor="first-name" className={text ? 'it_label_true' : 'it_label_false'}>
              First Name
            </label>
          </div>
          <div className="input_text">
            <input
              type="text"
              onChange={handleChange}
              required
              maxLength={20}
              name="family-name"
              autoComplete="family-name"
              id='last-name'
            />
            <label htmlFor='last-name' className={text ? 'it_label_true' : 'it_label_false'}>
              Last Name
            </label>
          </div>
          <div className="input_text">
            <input
              type="number"
              onChange={handleChange}
              required
              minLength={10}
              maxLength={16}
              name="tel"
              autoComplete="tel"
              id="tel"
            />
            <label htmlFor="tel" className={text ? 'it_label_true' : 'it_label_false'}>
              Phone Number
            </label>
          </div>
          <div className="input_text">
            <input
              type="text"
              onChange={handleChange}
              required
              maxLength={30}
              name="email"
              autoComplete="email"
              id='email'
            />
            <label htmlFor='email' className={text ? 'it_label_true' : 'it_label_false'}>
              Email ID (Optional)
            </label>
          </div>
          <div className="input_text">
            <input
              type="text"
              onChange={handleChange}
              required
              maxLength={20}
              name="course"
              autoComplete="course"
              id='course'
            />
            <label htmlFor='course' className={text ? 'it_label_true' : 'it_label_false'}>
              Course
            </label>
          </div>
          <div className="input_text">
            <input
              type="text"
              onChange={handleChange}
              required
              maxLength={50}
              name="street-address"
              autoComplete="street-address"
              id='location'
            />
            <label htmlFor='location' className={text ? 'it_label_true' : 'it_label_false'}>
              Location
            </label>
          </div>
          <div className="input_text">
            <input
              type="text"
              onChange={handleChange}
              required
              maxLength={140}
              name="feedback"
              autoComplete="feedback"
              id='feedback'
            />
            <label htmlFor='feedback' className={text ? 'it_label_true' : 'it_label_false'}>
              Feedback
            </label>
          </div>
        </div>
        <button className="button">Submit</button>
      </div>
    </div>
  );
});

export default Form;
