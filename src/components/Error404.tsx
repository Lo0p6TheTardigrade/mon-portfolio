import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Error404 = (props: Props) => {
  return (
    <div className="error-container">
      <div className="error-title-container">
        <h2 className="error-title">Erreur</h2>
        <h3 className="error-title error-info-status-number">404</h3>
      </div>
      <div className="error-info-container">
        <div className="error-info-box">
          <p className="error-info">Oups !!!</p>
        </div>
        <div className="error-info-box">
          <p className="error-info">La page demandée n'existe plus</p>
        </div>
      </div>
      <div className="error-link-home-container box">
        <Link
          to="/"
          className="error-link-home">
          Retourner à l’accueil
        </Link>
      </div>
    </div>
  );
};

export default Error404;
