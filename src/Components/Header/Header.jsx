import React from 'react';
import './Header.css';
import '../style.css';
import institude_logo from '../Assets/Logo-2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex-centre-bet'>
      <img src={institude_logo} alt="Logo" />
      <ul className='flex-centre-bet'>
        <li><Link to={"/"} className='link_tag'>Home</Link></li>
        <li><Link to={"/course"} className='link_tag'>Courses</Link></li>
        <li>Faculty</li>
        <li><Link to={"/about"} className='link_tag'>About Us</Link></li>
        <li>Contact Us</li>
        <li>Payment</li>
        <li className='side_bar'>☰</li>
      </ul>
    </header>
  );
};

export default Header;
