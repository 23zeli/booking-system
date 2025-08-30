import React from 'react'
import './Header.css'
import logoImage from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img
          src={logoImage}
          alt="logo"
          style={{ width: '199px', height: '50px' }}
        />
      </Link>
    </div>
  )
}

export default Header