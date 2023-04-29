import React, { useEffect } from 'react'
import user from '../assets/user.png';
import logo from '../assets/logo.png';
import '../css/Header.css';
import { Outlet,useNavigate } from 'react-router-dom';


const Header = () => {

  
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
      if (!token) {
          navigate('/login');
      }
  }, [token, navigate]);

  if (!token) {
      return null;
  }

    return (
      <div>
        <div className='header-all'>
        <img src={logo} alt="My" className='logo'/>
        <img src={user} alt="My" className='user'/>
      </div>
      <Outlet/>
      </div>
      
    );
  }
  
  export default Header