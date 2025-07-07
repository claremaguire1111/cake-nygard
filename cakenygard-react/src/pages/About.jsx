import React from 'react';
import '../styles/App.css';

const About = () => {
  return (
    <main className="about-container">
      <div className="about-image">
        <img src="/images/cakeartist.png" alt="Cake Nygard - Artist" />
      </div>
      <div className="about-text">
        <p>Cake Nygard is an artist who lives in the woods. He has lived in the heartland of the vast nowhere of Minnesota almost all his life, far removed from bustling city life and its museums. His focus therefore was never so much on looking at art, but rather on creating it: he was constantly drawing from the moment he could.</p>
        
        <p>Nygard's passion for creating art seemed to indicate a future in art school, but the artisan chose to study graphic design - for job security reasons - instead. However, after spending considerable time immersed in corporate graphic design jobs and working within the stringent parameters of brand standards, Nygard felt the strong urge to branch out.</p>
        
        <p>At the age of 30 he left his stable life behind and returned to his parents' home in the North Star State. The area's harsh weather, which keeps people indoors for about eight months of the year, proved to be an accelerator for his creative outlet. Canvas after canvas filled his days, as he painted with the fervor and dedication of a man possessed for five years, without his creative endeavors really taking him anywhere. But then, Nygard noticed new digital art opportunities on his timeline.</p>
        
        <p>Words by Nina Knaack</p>
      </div>
    </main>
  );
};

export default About;