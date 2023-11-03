import React from 'react';
import './Header.css';
import '../style.css';
import institude_logo from '../Assets/Logo-2.png';

const Header = () => {
  return (
    <header className='flex-centre-bet'>
      <img src={institude_logo} alt="Logo" />
      <ul className='flex-centre-bet'>
        <li>Home</li>
        <li>Courses</li>
        <li>Faculty</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Payment</li>
      </ul>
    </header>
  );
};

export default Header;
