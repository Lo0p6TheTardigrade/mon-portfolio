// import { Link } from 'react-router-dom';

import Build from '../components/Service/Build';
import Debug from '../components/Service/Debug';
import Functionality from '../components/Service/Functionality';
import Redesign from '../components/Service/Redesign';
import SEO from '../components/Service/SEO';

function Service() {
  return (
    <div className="service-container">
      <div className="service-title-container">
        <h2 className="service-title">Services</h2>
      </div>
      <div className="service-box">
        <div className="service-list-container">
          <ul className="service-list">
            <div className="service-list-item-box">
              <li className="service-list-item"></li>
              <Redesign default="Redesign:" />
            </div>
            <div className="service-list-item-box">
              <li className="service-list-item"></li>
              <Build default="Build:" />
            </div>
            <div className="service-list-item-box">
              <li className="service-list-item"></li>
              <SEO default="SEO:" />
            </div>
            <div className="service-list-item-box">
              <li className="service-list-item"></li>
              <Debug default="Debug:" />
            </div>
            <div className="service-list-item-box">
              <li className="service-list-item"></li>
              <Functionality default="Functionality:" />
            </div>
          </ul>
        </div>
        <div className="service-description-container"></div>
      </div>
    </div>
  );
}

export default Service;
