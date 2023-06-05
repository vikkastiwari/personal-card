import React, { useState } from 'react';
import DarkMode from '../src/components/darkmode/darkmode';
import './App.css';

import profile from './images/profile-1x.png';
import linkedin from './images/linkedin-icon.svg';
import email from './images/email-icon.svg';
import fb from './images/fb.svg'
import insta from './images/insta.svg'
import ghub from './images/ghub.svg'
import twitter from './images/twitter.svg'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <div className={isDarkMode ? 'card--container container dark-mode' : 'card--container container'}>
      <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <article className="card--profile">
        <header className="card--hero-banner">
          <img src={profile} className="card--profile-img" alt="logo" />
        </header>
        <section className="card--info">
          <h1 className="card--profile-info-name">Laura Smith</h1>
          <h2 className="card--profile-info-title"> Frontend Developer </h2>
          <h3 className="card--profile-info-website"> laurasmith.website </h3>
          <div className="card--contact-cta">
            <button className="card--email-btn">
              <img src={email} alt="email-icon"></img>
              <span>Email</span>
            </button>
            <button className="card--linkedin-btn">
              <img src={linkedin} alt="linkedin-icon"></img>
              <span>LinkedIn</span>
            </button>
          </div>
        </section>
        <section>
          <div className="card--content-section">
            <h2>About</h2>
            <p> 
              I am a frontend developer with a particular interest in making 
              things simple and automating daily tasks. I try to keep up with 
              security and best practices, and am always looking for new things 
              to learn.
            </p>
          </div>
          <div className="card--content-section">
            <h2>Interests</h2>
            <p> 
              Food expert. Music scholar. Reader. 
              Internet fanatic. Bacon buff. Entrepreneur. 
              Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </section>
        <footer>
          <div className="card--social-icons">
            <img src={twitter} alt="fb-icon"></img>
            <img src={fb} alt="fb-icon"></img>
            <img src={insta} alt="fb-icon"></img>
            <img src={ghub} alt="fb-icon"></img>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default App;
