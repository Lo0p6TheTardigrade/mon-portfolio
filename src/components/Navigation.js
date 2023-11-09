import React from 'react';
import '../scss/components/Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav-list-container">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">
            <a
              href="#projects"
              className="anchor-projects">
              Projets
            </a>
          </li>
          <li className="nav-list-item">
            <a
              href="#skills"
              className="anchor-skills">
              Compétences
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
