import { Props } from '../../types';

const ServiceX = ({ classX, name, description }: Props) => {
  return (
    <div className="services-container">
      <div className={`${classX}-title-container services-title-box`}>
        <h3 className={`${classX}-title services-title`}>{name}</h3>
      </div>
      <div className="services-content-box">
        <p className="services-content">{description}</p>
      </div>
    </div>
  );
};

export default ServiceX;
