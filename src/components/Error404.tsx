import { Link } from 'react-router-dom';
import WidgetAnimate from './WidgetAnimate';

const Error404 = () => {
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
      <Link
        to="/"
        className="error-link-home-container box">
        <div className="error-link-to-home-container">
          <p className="error-link-to-home">Retourner à l’accueil</p>
        </div>
        <div className="animation-link">
          <WidgetAnimate state4={true} />
        </div>
      </Link>
    </div>
  );
};

export default Error404;
