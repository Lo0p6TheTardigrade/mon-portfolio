import { Custom_Data_Array_Obj } from '../data';
import ServiceX from '../components/Service/ServiceX';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';

function Services() {
  const redesign = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.redesign);
  // const seo = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.seo);
  // const debug = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.debug);
  // const advice = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.advice);
  // const build = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.build);
  // const functionality = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.functionality);
  // const collaboration = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.collaboration);

  const handleClick = () => {
    console.log('ici: EVENT CLICK');
  };

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
                redesign={redesign}
                // seo={seo}
                // debug={debug}
                // advice={advice}
                // build={build}
                // functionality={functionality}
                // collaboration={collaboration}
                onClick={() => handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
