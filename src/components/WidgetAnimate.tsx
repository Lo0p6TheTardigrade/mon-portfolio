// @flow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface, Props } from '../types';

// @ts-ignore
const WidgetAnimate = ({ classX, state, element0, element1, font_awesome, font_size, height, width, onMouseEnter }: Props) => {
  const basic = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.basic);
  const info = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.info);

  return (
    <div className="widget-container">
      <div className={`dot-menu-display-container ${!basic && 'animate-action'}`}>
        {element0 && (
          <FontAwesomeIcon
            icon={font_awesome}
            height={height}
            width={width}
            fontSize={font_size}
            className={`dot-menu-display ${basic && 'animate-action'} ${info && 'animate-action2'}`}
          />
        )}
        {element1 && (
          <FontAwesomeIcon
            icon={font_awesome}
            height={height}
            width={width}
            fontSize={font_size}
            className={`dot-menu-display ${classX}`}
            onMouseEnter={onMouseEnter}
          />
        )}
      </div>
    </div>
  );
};

export default WidgetAnimate;
