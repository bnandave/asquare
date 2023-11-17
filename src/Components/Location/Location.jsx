import React from 'react';
import "./Location.css"
import "../style.css"
import maps_img from '../Assets/maps-img.jpg';
import location_logo from '../Assets/location-2.png';

function Location() {
  return (
    <div className="location">
      <div className="l_left">
        <img src={maps_img} alt="img" />
        <button className="button">Directions</button>
      </div>
      <div className="l_right">
        <div className="l_r_p1">
          <p>ASQUARE Classes Pvt Ltd</p>
          <p>
            Sai Vrindavan, Office No. 501, Near Indian Oil Petrol Pump, Nehru
            Nagar, Pimpri, Pune, Maharashtra - 411018
          </p>
          <p>Mobile - +91 97766118877</p>
        </div>
        <div className="l_r_p2">
            <button className='button'>Contact Us</button>
            <button className='button'>Mail Us</button>
        </div>
      </div>
    </div>
  );
}

export default Location;
