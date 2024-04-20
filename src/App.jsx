import React, { useEffect } from 'react';
import './App.css';
import StudioPic from './assets/BenStudio1.jpg';
import logoImage from './assets/BenLogo.jpg';
import References from './References';
import AboutText from './AboutText'; 
import ServicesSection from './ServicesSection';
import backgroundImage from './assets/industrial.jpg';
import contactImage from './assets/deadguy.jpg';
import ImageSlider from './ImageSlider';
import FBImage from './assets/fbimage.jpg';

function App() {
  // Add smooth scrolling behavior to all anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []); // Empty dependency array to run only once after the initial render

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#references">References</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="home-section">
      <div className="buffer"></div>
      <div className="buffer"></div>

        <ImageSlider />
        <img className="logo-image" src={logoImage} alt="Logo" />
        <div className="buffer"></div>
        <div className="buffer"></div>
        <p className="home-text"></p>
      </section>

      <section id="about" className="section">
      <div className="buffer"></div>
        <AboutText /> {/* Use the AboutText component */}
      </section>

      <ServicesSection /> {/* Render the ServicesSection component */}

      <section id="references" className="section">
        <h2>References</h2>
        <References />
      </section>

      <section id="contact" className="section">

        
      
        <h2 className='contact-header'>Contact</h2>

        <a href="https://www.facebook.com/deadmanstudios666">
          <img className="fb-image" src={FBImage} alt="Logo" /></a>

        <a href="mailto:https://deadmanstudios740.com/">
          <img className="logo-image-2" src={logoImage} alt="Logo" /></a>

        <img className="contact-image" src={contactImage} alt="Contact Image" />

        <p className='contact-header'><br />Ben Moore<br /><br />
        <a href="mailto:https://deadmanstudios740.com/">deadmanstudios740.com</a>
        <br /><br />740-334-7364<br /><br /></p>

      </section>
    </div>
  );
}

export default App;
