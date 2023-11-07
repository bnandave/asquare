import React from 'react';
import student_img_5 from '../Assets/student-img-5.png';
import './Footer.css';
import '../style.css';
import facebook_logo from '../Assets/logo-facebook.png';
import insta_logo from '../Assets/logo-insta.png';
import telegram_logo from '../Assets/logo-telegram.png';
import twitter_logo from '../Assets/logo-twitter.png';
import whatsapp_logo from '../Assets/logo-whatsapp.png';
import youtube_logo from '../Assets/logo-youtube.png';
import email from '../Assets/email.png';
import location from '../Assets/location.png';
import phone from '../Assets/phone.png';

function Footer() {
  return (
    <div className="footer">
      <div className="top_container">
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Help Center</li>
          <li>Career</li>
          <li>Blog</li>
          <li>Press Kits</li>
        </ul>
        <ul>
          <li>Featured Courses</li>
          <li>Digital Marketing</li>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Graphic Design</li>
          <li>Motion Graphic Design</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Profile</li>
          <li>Refund</li>
          <li>Privacy Policy</li>
          <li>Conditions</li>
          <li>Get in touch</li>
        </ul>
        <ul>
        <li>Contact Us</li>
          <div className='top_container_1'>
            <img src={location} alt="icon" />
            <div>
              <p>Location</p>
              <p>351 W, Gray St. Pennsylvania, USA</p>
            </div>
          </div>
          <div className='top_container_1'>
            <img src={phone} alt="icon" />
            <div>
              <p>Phone</p>
              <p>(00) 2224 1456 222</p>
            </div>
          </div>
          <div className='top_container_1'>
            <img src={email} alt="icon" />
            <div>
              <p>Email</p>
              <p>info@yourmail.com</p>
            </div>
          </div>
        </ul>
      </div>
      <div className="bottom_container">
        <p>Copyright 2023 bt Asquare.com</p>
        <div>
          <img src={facebook_logo} alt="facebook_logo" />
          <img src={insta_logo} alt="insta_logo" />
          <img src={telegram_logo} alt="telegram_logo" />
          <img src={twitter_logo} alt="twitter_logo" />
          <img src={whatsapp_logo} alt="whatsapp_logo" />
          <img src={youtube_logo} alt="youtube_logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
