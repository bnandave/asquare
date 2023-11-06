import React, { useState } from 'react';

import './Testimonials.css';
import '../style.css';
import teacher_img_1 from '../Assets/student-img-1.png';
import hollow_star_icon from '../Assets/hollow-star-icon.png';
import gold_star_icon from '../Assets/gold-star-icon.png';
import arrow_logo_2 from '../Assets/arrow-logo-2.png';
import Data from './Data';

function Testimonials() {
  let [index, setIndex] = useState(0);

  let i = index;
  function update_index() {
    i = index;
    i++;
    if (i >= Data.length) {
      i = 0;
    }
    setIndex(i);
  }

  function decrease_index() {
    i = index;
    i--;
    if (i < 0) {
      i = Data.length - 1;
    }
    setIndex(i);
  }

  // setInterval(update_index, 3000);

  function testimonial(data) {
    if (data.id == Data[i].id) {
      return (
        <div className="testi_container" key={data.id}>
          <div className="testi_container_left">
            <img src={data.img} alt="img" />
            <img onClick={decrease_index} src={arrow_logo_2} alt="img" />
            <img onClick={update_index} src={arrow_logo_2} alt="img" />
          </div>
          <div className="testi_container_right">
            <div>
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              <img src={gold_star_icon} alt="start" />
              <img src={hollow_star_icon} alt="start" />
              {/* {Data.map()} */}
            </div>
            <p>{data.feedback}</p>
            <p>{data.name}</p>
            <p>{data.college}</p>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="testi">
      <div className="title_aaa">
        <span className="block_aaa"></span>
        <h1>
          Testimonials<span></span>
        </h1>
      </div>
      <p className="subtitle testi_subtitle">Student Success Stories</p>
      {Data.map(testimonial)}
    </div>
  );
}

export default Testimonials;
