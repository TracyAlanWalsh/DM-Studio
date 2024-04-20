import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="section services-section">
        <div className="buffer"></div>
      <h2>Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Recording</h3>
          <p>Book time, by the hour or the day, and record your masterpiece at 
            Deadman Studios.<br /> <br />
            You'll have access to quality gear and quality knowledge. <br /><br />
            We have several studio musicians that can help you harmonize vocals and riffs, 
            add instruments to your material, or even help you rearrange your songs.</p>
        </div>
        <div className="service-card">
          <h3>Reamping</h3>
          <p>Record your guitars at home, and take all the time you need 
            to get things right. Once you finish recording your D.I. tracks, 
            we will reamp them here at Deadman Studios. <br /><br />Reamping typically involves
            routing the recorded audio signal to a separate amp 
            or effects setup.<br /><br /> The new sound is then recorded again, 
            giving flexibility to adjust the tone during mixing. 
            It's handy for getting just the right sound or 
            experimenting with different styles. </p>
        </div>
        <div className="service-card">
          <h3>Mixing</h3>
          <p>This is the crucial stage in the audio production process 
            where individual tracks or elements of a recording are combined 
            and balanced to create a cohesive and harmonious sound.<br /><br />
            It involves adjusting the levels, panning, equalization, 
            dynamics, and spatial effects of each element to achieve 
            clarity, depth, and sonic balance.
            </p>
        </div>
        <div className="service-card">
          <h3>Mastering</h3>
          <p>The final stage in the audio production process; this is 
            where our skilled audio engineer polishes and refines 
            the mixed audio tracks to achieve a cohesive and professional sound.<br /><br /> 
            It involves a combination of technical processes 
            and artistic decisions to optimize the audio for distribution 
            and playback across various formats and platforms. 
            </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;