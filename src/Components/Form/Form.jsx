import React from 'react';
import './Form.css';
import '../style.css';

function Form() {
  return (
    <div className="form">
      <div className="container">
      <div class="title_aaa">
        <span class="block_aaa"></span>
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
            id="name"
            name="name"
            required
            maxlength="28"
            placeholder="Full Name"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            maxlength="28"
            placeholder="Last Name"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            maxlength="28"
            placeholder="Phone Number"
          />
          <input
            type="text"
            id="name"
            name="name"
            maxlength="28"
            placeholder="Email ID (Optional)"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            maxlength="28"
            placeholder="Course"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            maxlength="28"
            placeholder="Location (Optional)"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            maxlength="108"
            placeholder="Feedback"
          />
        </div>
        <button className="button">Submit</button>
      </div>
    </div>
  );
}

export default Form;
