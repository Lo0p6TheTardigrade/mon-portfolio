import { Custom_Data_Array_Obj } from '../data';
import ServiceX from '../components/Service/ServiceX';
import { Link } from 'react-router-dom';

function Services() {
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
