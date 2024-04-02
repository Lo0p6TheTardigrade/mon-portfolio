import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Props } from '../../types';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const ServiceX = ({ classX, name, description, link }: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="services-container">
      <div className={`${classX}-title-container services-title-box`}>
        <h3 className={`${classX}-title services-title`}>{name}</h3>
        <FontAwesomeIcon
          icon={faCircle}
          height={27}
          width={27}
          fontSize={18}
        />
      </div>
      <Link to={`${pathname}/${link}`}>
        <div className="services-content-box">
          <p className="services-content">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceX;
