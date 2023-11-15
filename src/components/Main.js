import React from 'react';
import '../scss/components/Main.scss';
import Section from '../components/Section';
import Project from './Project';
import imageProfile from '../assets/images/IMG_4876.webp';

const Main = () => {
  return (
    <div className="main-container">
      <div className="subtitle-container">
        <div className="boxA">
          <h1 className="subtitle">Christophe développeur frontend</h1>
          <div className="description">
            <p className="text">Passionné par le web, l'expérience utilisateur et l'accessibilité, je me suis tourné vers le développement web coté client</p>
          </div>
        </div>
        <div className="boxB">
          <div className="image-profile-container">
            <img
              src={imageProfile}
              alt="profile"
              className="image-profile"
              width={150}
              height={200}
            />
          </div>
        </div>
      </div>
      <Section />
      <Project />
    </div>
  );
};

export default Main;
