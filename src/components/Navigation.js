import React from 'react';
import '../scss/components/Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav-list-container">
          <li className="nav-list-item">Accueil</li>
          <li className="nav-list-item">Mes projets</li>
          <li className="nav-list-item">Mes compétences</li>
          <li className="nav-list-item">À propos de moi</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
