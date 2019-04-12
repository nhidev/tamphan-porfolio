import React from 'react';
import ScrollToNext from './scroll-next';
import './../styles/cover.scss';

const Cover = () => {
 
  return (
    <div className="landing-page">
      <main>
        <div className="intro-wrapper content-grid">
          <div className="intro-heading">
          <strong>“Today</strong> <strong className="highlight">different</strong> from <strong>yesterday”</strong>
          </div>
          
          
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};


export default Cover;
