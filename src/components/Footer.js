import React from 'react';
import './Footer.css';
import githubLogo from '../assets/images/github-mark-white.png';
import linkedinLogo from '../assets/logos/Inwhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="social-links">
        <a href="https://github.com/samvillasmith" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" height={64} width={64} />
        </a>
        <a href="https://www.linkedin.com/in/samuel-villa-smith-mba-a803a0109" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" height={64} width={64} />
        </a>
      </div>
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faEnvelope} /> svillasmith2@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> 806-440-2215</p>
      </div>
    </div>
  </footer>
);

export default Footer;
