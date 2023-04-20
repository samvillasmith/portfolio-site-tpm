import React from 'react';
import './Portfolio.css';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Paragraph from '../components/Paragraph';
import DownloadButton from '../components/DownloadButton';
import Technologies from '../components/Technologies';
import GenericButton from '../components/GenericButton';
import collab from '../assets/images/counterdrug2.png';
import awscert from '../assets/images/AWSSAA.png';
import securitycert from '../assets/images/security+.png';
import Certifications from '../components/Certifications';


const collaburl = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg';
const telmii = 'http://telmii.herokuapp.com/telmii-main2.png';

const Portfolio = () => {
  const handleJumpToContact = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleJumpToPortfolio = () => {
    const projects = document.querySelector(".project-container");
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  

  return (
    <div className="portfolio-container">
      <h1 className="heading" style={{ marginBottom: '-25px', color: '#0165E1', fontWeight: 'bold', fontSize: '50px'}}>
        Samuel Villa-Smith, MBA, AWS Solutions Architect Associate, Security+
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '20px',
          maxWidth: '100%',
        }}
      >
        <div className="profile-image-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Profile
            className="profile-image"
            photo="./portfolio-image2.jpg"
            style={{ maxWidth: '300px', height: 'auto', marginTop: '50px' }}
          />
        </div>

        <div className="profile-text-container">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Paragraph className="intro-text" style={{ marginLeft: '20px' }} />
          <div>
            <h2 style={{marginTop: '65px', marginBottom: '-75px'}}>Experienced in the Latest Technologies </h2>
            <Technologies />
          </div>
          </div>

        </div>
      </div>
      <div className="buttons-container">
        <DownloadButton downloadText="Download CV" />
        <GenericButton handleJump={handleJumpToPortfolio} genericText="Work Sample" />
        <GenericButton handleJump={handleJumpToContact} genericText="Contact" />
      </div>

      <h2 style={{ paddingTop: '10x', paddingBottom: '15px'}}>
        Recent Products, Projects, and Accomplishments
      </h2>
      <div className="project-container" style={{marginTop: '-100px', paddingLeft: '-100px'}}>
        <Project
          title="Latest Product Launches and Work Samples"
          description="Telmii: The Most Convenient Way for Product Managers and Startups to Get Feedback"
          imageUrl={telmii}
          projectId="telmii"
        />
        <Project 
          title="Product Management and Innovation Consulting"
          description="Technical Product and Innovation Management Experience" 
          imageUrl={collaburl}
          projectId="tpm"
        />
        {/*
        <Project 
          title="Data Science Projects"
          description="Technical Product and Innovation Manager" 
          imageUrl={dschart}
          projectId="tpm"
        />
        */}
        <Project
          title="Organizational Leadership"
          description="Military Leadership and Organizational Leadership Experience"
          imageUrl={collab}
          projectId="organizational_leadership"
    />
  </div>
  <h1 style={{ marginBottom: '50px', marginTop: '50px', color: '#0165E1', fontWeight: 'bold'}}>Industry Certifications</h1>
  <Certifications className="certifications-container" awscert={awscert} securitycert={securitycert} />


  <div id="footer">
  <Footer />
  </div>
</div>
  );
};

export default Portfolio;