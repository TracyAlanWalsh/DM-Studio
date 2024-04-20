import React from 'react';
import BenPic from './assets/BenPic1.jpg';
import Drums from './assets/drums1.jpg';
import BenBassPic from './assets/BenPic2.jpg';

const AboutText = () => {
  return (
    <p className="about-text"><br /><br /><br />About Deadman Studios <br /><br /><br />Nestled in the tranquil foothills of central Ohio,<br /> 
      Deadman Studios emerged from humble beginnings in 2006.<br /> <br /><br />
      Initially conceived of as a personal project, it swiftly <br />
      transformed into a beacon of musical creativity under <br />
      the meticulous stewardship of its founder, <a href="https://www.facebook.com/benjamin.moore.7374">Ben&nbsp;Moore</a>. <br /><br />
      <br /><img className="about-image" src={BenPic} alt="Ben Moore" /><br /><br /><br />
      With an unwavering commitment to excellence, <br />
      Deadman Studios has evolved into a sought-after <br />
      destination for artists seeking to <br />realize their 
      musical vision.<br /><br /><br />

      Through years of dedicated effort and a relentless pursuit <br />
      of sonic perfection, Deadman Studios has curated a space <br />that 
      inspires creativity and fosters collaboration. <br /><br /><br />
      <img className="Drummin" src={Drums}/><br /><br /><br />Equipped with 
      top-of-the-line technology, <br />it offers 
      artists a platform to elevate their craft <br />and bring their 
      musical aspirations to life.<br /><br /><br />

      At Deadman Studios, the ethos is simple: <br />
      to provide a welcoming environment where artists can thrive <br />
      creatively while receiving personalized attention and guidance. <br /><br /><br />
      Whether working on creating a demo or a full fledged <br />
      album, artists can trust Deadman Studios to <br />deliver exceptional 
      results.<br /><br /><br /><img className="Bass" src={BenBassPic}/><br /><br /><br />

      For those who are excited <br />to take the next steps on their musical journey, <br />
      Deadman Studios invites you to explore <br />its world-class 
      facilities and experience the <br />magic of music creation firsthand. <br /><br /><br />
      Your artistic odyssey begins here!<br /><br /><br />
    </p>
  );
}

export default AboutText;