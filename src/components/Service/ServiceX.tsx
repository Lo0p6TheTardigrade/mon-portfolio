import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { Props } from '../../types';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from 'react-redux';

const ServiceX = ({ classX, name, description, onClick, redesign, seo, debug, advice, build, functionality, collaboration }: Props) => {
  return (
    <div className="services-container">
      <div className={`${classX}-title-container services-title-box`}>
        <h3 className={`${classX}-title services-title`}>{name}</h3>
        <FontAwesomeIcon
          icon={faCaretDown}
          height={27}
          width={27}
          fontSize={18}
          onClick={onClick}
        />
      </div>
      <div className="services-content-box">
        {redesign && <p className="services-content">{description}</p>}
        {seo && <p className="services-content">{description}</p>}
        {debug && <p className="services-content">{description}</p>}
        {advice && <p className="services-content">{description}</p>}
        {build && <p className="services-content">{description}</p>}
        {functionality && <p className="services-content">{description}</p>}
        {collaboration && <p className="services-content">{description}</p>}
      </div>
    </div>
  );
};

export default ServiceX;
