import React from 'react';
import '../scss/components/Header.scss';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Navigation />
        <div className="title-container">
          <h1 className="title">Portfolio</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
