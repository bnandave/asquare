import React from 'react';
import './Navbar.css';
import '../style.css';
import facebook_logo from '../Assets/logo-facebook.png';
import insta_logo from '../Assets/logo-insta.png';
import telegram_logo from '../Assets/logo-telegram.png';
import twitter_logo from '../Assets/logo-twitter.png';
import whatsapp_logo from '../Assets/logo-whatsapp.png';
import youtube_logo from '../Assets/logo-youtube.png';

const Navbar = () => {
  return (
    <nav className='flex-centre-bet'>
      <p>(+91)-9404282283</p>
      <div className="social-media-icons">
        <img src={facebook_logo} alt="facebook_logo" />
        <img src={insta_logo} alt="insta_logo" />
        <img src={telegram_logo} alt="telegram_logo" />
        <img src={twitter_logo} alt="twitter_logo" />
        <img src={whatsapp_logo} alt="whatsapp_logo" />
        <img src={youtube_logo} alt="youtube_logo" />
      </div>
    </nav>
  );
};

export default Navbar;
