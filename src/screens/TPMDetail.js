import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import offblue from '../assets/images/offblue.jpg';
import Footer from '../components/Footer';

const headingStyle = {
  margin: 0,
  textAlign: 'center',
  color: '#005da9',
  fontSize: '50px',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  fontFamily: 'Roboto, sans-serif',
};


const TPMDetail = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const onEnterViewport = (index) => {
    setVisibleIndex(index);
  };

  const onExitViewport = () => {
    setVisibleIndex(null);
  };

  const portfolioContainerStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${offblue})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '1600px', // Adjusted value
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };
  

  const paragraphStyle = {
    fontSize: '2.0rem',
    lineHeight: '1.6',
    color: '#005da9',
    textAlign: 'left',
    paddingLeft: '10px',
    fontFamily: 'Roboto, sans-serif',
    wordSpacing: '0.1rem',
    
  };
  
  const paragraphsWrapperStyle = {
    flex: 2, // Adjusted value
    marginRight: '200px',
    marginBottom: '50px',
    maxWidth: '1000px',
    marginLeft: '0px',
  };
  
  
  const imgContainerStyle = {
    width: '900px', // Adjusted value for image container
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: '0px',
  };
  
  const imgStyle = {
    width: '100%',
    padding: '2rem',
    paddingLeft: '50px', // Adjusted value
    marginRight: '10px', // Adjusted value
    marginBottom: '35px',
    marginTop: '-5x',
  };
  
  // ...
  
  
  // ...
  
  // ...
  
  
  
  const paragraphs = [
    {
      text: "Over a challenging 9-month period, I managed a digital transformation process in a nonprofit organization that revamped the way my organization functioned. Working across departments and disciplines, I made a significant impact on the company's efficiency and future growth.",
      imgSrc: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "As a leader, I managed a cross-functional team that included data analysts, web developers, and members of the board of directors. By employing Agile methodologies, we were able to effectively plan, prioritize, and execute product initiatives for various clients, thereby providing a high level of service and ensuring successful outcomes for all stakeholders.",
      imgSrc: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      text: "One of my most significant contributions during this time was leading a major digital transformation and innovation effort for a non-profit organization. This involved modernizing their IT infrastructure and processes to better align with business requirements, ultimately enhancing their ability to serve their mission and clients.",
      imgSrc: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "A key milestone in our transformation journey was the successful migration of the organization's data to a cloud-based SaaS CRM. This was coupled with the launch of a new web app ahead of schedule, which resulted in improved donor retention and increased overall efficiency. Our efforts had a direct impact on the organization's bottom line and future prospects.",
      imgSrc: "https://brytidea.consulting/application/files/9715/6710/9772/neoncrm-device-screenshots-updated.png",
    },
    {
      text: "In addition to these accomplishments, I also achieved cost savings by resolving technical debt and increased the organization's legitimacy by implementing the new CRM solution. This initiative enabled us to eliminate inefficiencies and focus on delivering real value to our stakeholders.",
      imgSrc: "https://donorbox.org/landing_pages_assets/new-landing-pages/neon/neon-dashboard-89b9fad8856e7c6f975619334ce9ab07e16aaa3a78ccf7f6104a2ed49116e318.png",
    },
    {
      text: "I was instrumental in leading the implementation of new software solutions and process improvements, which resulted in a more streamlined and efficient workflow. By identifying bottlenecks and leveraging cutting-edge technology, we were able to optimize our operations and enhance overall productivity.",
      imgSrc: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    },
    {
      text: "Beyond my work within the organization, I provided network support to clients on a freelance basis and developed mobile/web applications as new products. These experiences allowed me to expand my skill set and offer valuable insights to drive further innovation and growth. I also gained valuable experience in the areas of project management, software development, and data analytics.",
      imgSrc: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <>
      <style>
        {`body { margin: 0; padding: 0; }`}
      </style>
      <div style={portfolioContainerStyle}>
        <h1 style={headingStyle}>Product Management Experience</h1>
        <div style={contentWrapperStyle}>
          <div style={paragraphsWrapperStyle}>
            {paragraphs.map((paragraph, index) => (
              <ScrollTrigger
                key={index}
                onEnter={() => onEnterViewport(index)}
                onExit={onExitViewport}
                triggerOnce={false}
              >
                <div
                  className={`profile-section${visibleIndex === index ? ' visible' : ''}`}
                >
                  <p style={paragraphStyle}>{paragraph.text}</p>
                </div>
              </ScrollTrigger>
            ))}
          </div>
          <div style={imgContainerStyle}>
            {paragraphs.map((paragraph, index) => (
              <img
                key={index}
                src={paragraph.imgSrc}
                alt={`Love Inc ${index}`}
                style={imgStyle}
              />
            ))}
          </div>
        </div>
        
      </div>
      <Footer />
    </>
    
  );
  
};



export default TPMDetail;
