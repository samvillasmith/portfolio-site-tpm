import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/transparentwhite.png';
import './Navbar.css';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1rem',
    background: '#005da9',
  };

  const logoStyle = {
    maxWidth: '200px',
    height: 'auto',
    marginTop: '25px',
    marginBottom: '25px',
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" exact>
        <img src={logo} alt="logo" className="logo" style={logoStyle} />
      </NavLink>
      <NavLink className="linkStyle" to="/telmii">
        Latest Product Launches
      </NavLink>
      <NavLink className="linkStyle" to="/tpm">
        Technical Product Management Experience
      </NavLink>
      <NavLink className="linkStyle" to="/organizational_leadership">
        Organizational Leadership
      </NavLink>
    </nav>
  );
};

export default Navbar;
