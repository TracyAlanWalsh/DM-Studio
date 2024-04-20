import React from 'react';
import brianScore from './assets/brian-score.jpg';
import Ase from './assets/ASE.jpg';
import Squatch from './assets/squatch1.jpg';
import Toyz from './assets/SToyz.jpg';
import Toxic from './assets/toxic-era.jpg';
import HDS from './assets/HDS1.jpg';
import Tat from './assets/tats.jpg';

function ReferenceCard({ title, description, imageUrl, link }) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="reference-card">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    );
  }
  

function References() {
  return (
    <div className="reference-cards-container">
      <ReferenceCard
        title="Brian J. Banks"
        description="Listen to 'The Score' on DistroKid."
        imageUrl={brianScore} // 
        link="https://distrokid.com/hyperfollow/brianjbanks/the-score" 
      />
      <ReferenceCard
        title="A Scarred Existence"
        description="Listen on Spotify."
        imageUrl={Ase} // 
        link="https://open.spotify.com/artist/081SRKo4uZkxQ65w0i9XYT"
      />
      {/* Add more ReferenceCard components as needed */}
      <ReferenceCard
        title="Black Sasquatch"
        description="Listen to 'Wizard' on bandcamp."
        imageUrl={Squatch} // 
        link="https://blacksasquatch.bandcamp.com/track/wizard"
      />
      {/* Add more ReferenceCard components as needed */}
      <ReferenceCard
        title="Suicide Toyz"
        description="Listen on Spotify."
        imageUrl={Toyz} // 
        link="https://open.spotify.com/artist/18WBpPrlaXeYYVJ7syCYJ2"
      />
      {/* Add more ReferenceCard components as needed */}

      <ReferenceCard
        title="Toxic Era"
        description="Listen on Apple Music."
        imageUrl={Toxic} // 
        link="https://music.apple.com/us/artist/toxic-era/1567138991"
      />
      {/* Add more ReferenceCard components as needed */}

      <ReferenceCard
        title="Humanitarian Death Squad"
        description="Listen on Apple Music."
        imageUrl={HDS} // 
        link="https://music.apple.com/us/artist/humanitarian-death-squad/1654088061"
      />
      {/* Add more ReferenceCard components as needed */}

      <ReferenceCard
        title="Tattoos"
        description="In case you're looking for Deadmans Studio, the tattoo shop in California."
        imageUrl={Tat} // 
        link="https://www.deadmanstudio.com/"
      />
      {/* Add more ReferenceCard components as needed */}


    </div>
  );
}

export default References;