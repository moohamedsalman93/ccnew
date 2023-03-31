import React from 'react'
import user from '../assets/user.png';
import logo from '../assets/logo.png';
import '../css/Header.css';


const Header = () => {
    return (
      <div className='header-all'>
        <img src={logo} alt="My" className='logo'/>
        <img src={user} alt="My" className='user'/>
      </div>
    );
  }
  
  export default Header