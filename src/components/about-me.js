import React from 'react';
import ScrollToNext from './scroll-next';
import resume from "../images/resume.pdf";
import './../styles/about.scss';

const AboutMe = () => {

  return (
    <div className="about-page" >
      <div className="content-grid">
        <div className="about-wrapper">
          <div className="about-content">
          <p >Hello, my name is <span className="highlight">Tam Phan.</span><br/>
          I love everything about graphic design, user interface and user experience.<br/>
          I have 6 years experience in <span className="highlight">Graphic Design</span> and <span className="highlight">UI/UX Design</span>.</p>
          </div>
          <div className='info'>
            <div className='contact'>
            <p>0933 532 059</p>
            <p>ptntam@gmail.com</p>
            </div>    
            <div className="download">
            <a href={resume} target="_blank">Get my CV</a>
          </div>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector="#experience" />
    </div>
  );
};

export default AboutMe;
