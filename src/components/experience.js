import React, { Component } from "react";
import './../styles/experience.scss';
// import ScrollToNext from './scroll-next';

class Experince extends Component {

  render() {
    return (
      <section id="experience" className="experience">
      <div className="content-grid">
        <div className='timeline-title'>
        <h3>EXPERIENCE</h3>
        <h3 className="special-in">UI / UX | GRAPHIC</h3>
        </div>
        <div className='timeline-content'>
        <h5>Designer, Freelance</h5>
        <p>2017 - Present</p>
        <h5>Graphic - UI/UX Designer, Le Bao Minh JSC</h5>
        <p>2013 - 2016</p>
        <h5>Graphic - UI/UX Designer, VMB Nam Phuong Co., LTD </h5>
        <p>2013 - 2016</p>
        <h5>Photo Retouching Intern, Lazada - Recess Co., LTD </h5>
        <p>2010 - 2011</p>
        <h5>Graphic Designer, Gia Kien Mobile Co., LTD </h5>
        <p>2010 - 2011</p>
        </div>
      </div>
      {/* <ScrollToNext pageSelector="#projects" /> */}
      </section>
    );
  }
}

export default Experince;
