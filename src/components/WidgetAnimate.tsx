// @flow
import React from 'react';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (state: { state1: boolean; state2: boolean; state3: boolean }) => {
  return (
    <div className="nav-container">
      <div className="dot-menu-display-container">
        {state.state1 && (
          <FontAwesomeIcon
            icon={faCircleNotch}
            height={27}
            width={27}
            fontSize={27}
            className="dot-menu-display"
          />
        )}
        {state.state2 && (
          <FontAwesomeIcon
            icon={faSpinner}
            height={27}
            width={27}
            fontSize={27}
            className="dot-menu-display"
          />
        )}
        {state.state3 && (
          <FontAwesomeIcon
            icon={faCircle}
            height={27}
            width={27}
            fontSize={27}
            className="dot-menu-display"
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
