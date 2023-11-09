import React from 'react';
import '../scss/components/Header.scss';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
