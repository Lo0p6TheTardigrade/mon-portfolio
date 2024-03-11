// import { Link } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import Build from '../components/Service/Build';
// import Debug from '../components/Service/Debug';
// import Functionality from '../components/Service/Functionality';
// import Redesign from '../components/Service/Redesign';
// import SEO from '../components/Service/SEO';
// import { Behavior_Custom_Interface } from '../types';
// import Collaboration from '../components/Service/Collaboration';
// import Advice from '../components/Service/Advice';
// import { Behavior_Action_Object } from '../actions/behavior.action';
import { Custom_Data_Array_Obj } from '../data';
import ServiceX from '../components/Service/ServiceX';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div id="services">
      <div className="services-title-container">
        <h2 className="services-title">Services</h2>
        <Link
          to="/"
          className="link-to-home">
          Accueil
        </Link>
      </div>
      <div className="services-box">
        <div className="services-description-container">
          {Custom_Data_Array_Obj.services.map((service: any, index: number) => {
            return (
              <ServiceX
                key={index}
                name={service.name}
                id={service.id}
                classX={service.class}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
