import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DownloadFilesButton from '../components/DownloadFilesButton';
import Footer from '../components/Footer';
import slide1 from '../assets/images/telm1.png';
import slide2 from '../assets/images/telm2.png';
import slide3 from '../assets/images/telm3.png';
import slide4 from '../assets/images/telm4.png';
import slide5 from '../assets/images/telm5.png';
import slide6 from '../assets/images/telm6.png';
import slide7 from '../assets/images/telm7.png';
import slide8 from '../assets/images/telm8.png';
import slide9 from '../assets/images/telm9.png';
import slide10 from '../assets/images/telm10.png';
import slide11 from '../assets/images/telm11.png';
import slide12 from '../assets/images/telm12.png';
import slide13 from '../assets/images/telm13.png';
import slide14 from '../assets/images/Demo1.png';
import slide15 from '../assets/images/telmiisignin.png';
import slide16 from '../assets/images/DemoAlt2.png';
import slide17 from '../assets/images/Demo2.png';
import slide18 from '../assets/images/Demo3.png';
import slide19 from '../assets/images/Demo4.png';
import slide20 from '../assets/images/Runners_Feedback.png';
import slide21 from '../assets/images/Agile_Board.png';
import slide22 from '../assets/images/Backlog.png';

// ... import other slide images

const Products = () => {
  return (
    <div>
    <div className="carousel-container">
      </div>
      <Carousel>
        <div>
          <img src={slide1} alt="Slide 1" />
          <p className="legend">Telmii Presentation, Agile Development, and Demo. Please Click the Arrow on the Right to Proceed</p>
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" />
        </div>
        <div>
          <img src={slide6} alt="Slide 6" />
        </div>
        <div>
          <img src={slide7} alt="Slide 7" />
        </div>
        <div>
          <img src={slide8} alt="Slide 8" />
        </div>
        <div>
          <img src={slide9} alt="Slide 9" />
        </div>
        <div>
          <img src={slide10} alt="Slide 10" />
        </div>
        <div>
          <img src={slide11} alt="Slide 11" />
        </div>
        <div>
          <img src={slide12} alt="Slide 12" />
        </div>
        <div>
          <img src={slide13} alt="Slide 13" />
        </div>
        <div>
          <img src={slide14} alt="Slide 14" />
          <p className="legend">Product Demo, Start Screen</p>
        </div>
        <div>
          <img src={slide15} alt="Slide 15" />
          <p className="legend">User Sign-In with Google</p>
        </div>
        <div>
          <img src={slide16} alt="Slide 16" />
          <p className="legend">User Home Page</p>
        </div>
        <div>
          <img src={slide17} alt="Slide 17" />
          <p className="legend">Users Purchase Tokens to Send Surveys, $5 for 5 Tokens</p>
        </div>
        <div>
          <img src={slide18} alt="Slide 18" />
          <p className="legend">Users Survey Form to Send to Their Users</p>
        </div>
        <div>
          <img src={slide19} alt="Slide 19" />
          <p className="legend">Survey Form Review Page</p>
        </div>
        <div>
          <img src={slide20} alt="Slide 20" />
          <p className="legend">Once You Send a Survey, This is What Your Users See</p>
        </div>
        <div>
          <img src={slide21} alt="Slide 21" />
          <p className="legend">Agile Project Management with Atlassian Jira</p>
        </div>
        <div>
          <img src={slide22} alt="Slide 22" />
          <p className="legend">Agile Project Management with Atlassian Jira</p>
        </div>




        {/* Add other slides */}
      </Carousel>
      <h1 style={{marginTop: '25px', textDecoration: 'underline'}}><a href="https://telmii.herokuapp.com" target="_blank" >Try Out the Product</a></h1>,
    <div style={{alignItems: 'center', marginBottom: '-30px', marginTop: '0px', paddingBottom: '-200px'}}>
      <DownloadFilesButton downloadText="Download Project Documentation, Wireframes, Research, and Case Study" />
    </div>
    <Footer />
  </div>

 

  );
};

export default Products;
