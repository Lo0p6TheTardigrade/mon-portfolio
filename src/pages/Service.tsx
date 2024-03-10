import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="service-container">
      Service Content
      <div className="service-title-container">
        <h2 className="service-title">Service</h2>
      </div>
      <div className="service-list-container">
        <ul className="service-list">
          <Link to="/">
            <li className="service-list-item">Refonte</li>
          </Link>
          <Link to="/">
            <li className="service-list-item">Création</li>
          </Link>
          <Link to="/">
            <li className="service-list-item">SEO</li>
          </Link>
          <Link to="/">
            <li className="service-list-item">Debug</li>
          </Link>
          <Link to="/">
            <li className="service-list-item">Fonctionnalités</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Service;
