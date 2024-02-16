// @flow
import React from 'react';
import WidgetAnimate from './WidgetAnimate';
const imageProfile = require('../assets/images/IMG_4876.webp');

const Header = () => {
  return (
    <div
      className="header-container"
      id="top-page">
      <header className="header">
        <div className="image-profile-container">
          <img
            src={imageProfile}
            alt="profile"
            className="image-profile"
            width={150}
            height={200}
          />
        </div>
        <h1 className="home-title">Développeur Frontend</h1>
        <WidgetAnimate
          state1={false}
          state2={true}
          state3={false}
        />
      </header>
    </div>
  );
};

export default Header;
