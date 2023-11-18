import React, { useState } from 'react';
import './Header.css';
import '../style.css';
import institude_logo from '../Assets/Logo-2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuopen, setMenuOpen] = useState(false);
  return (
    <nav className='flex-centre-bet'>
      <Link to='/'>
        <img src={institude_logo} alt="Logo" />
      </Link>
      <div className='menu' onClick={() => {
        setMenuOpen(!menuopen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuopen ? "open" : ""}>
        <li><Link to={"/"} className='link_tag'>Home</Link></li>
        <li><Link to={"/course"} className='link_tag'>Courses</Link></li>
        <li>Faculty</li>
        <li><Link to={"/about"} className='link_tag'>About Us</Link></li>
        <li><Link to={"/contact"} className='link_tag'>Contact Us</Link></li>
        <li>Payment</li>
        {/* <li className='side_bar'>☰</li> */}
      </ul>
    </nav>
  );
};

export default Header;
