// @flow
import React from 'react';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';

const Navigation = (state: { state1: boolean; state2: boolean; state3: boolean }) => {
  const basic = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.basic);
  const info = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.info);
  return (
    <div className="nav-container">
      <div className={`dot-menu-display-container ${!basic && 'animate-action'}`}>
        {state.state1 && (
          <FontAwesomeIcon
            icon={faCircleNotch}
            height={27}
            width={27}
            fontSize={27}
            className={`dot-menu-display ${basic && 'animate-action'} ${info && 'animate-action2'}`}
          />
        )}
        {state.state2 && (
          <FontAwesomeIcon
            icon={faSpinner}
            height={27}
            width={27}
            fontSize={27}
            className={`dot-menu-display ${basic && 'animate-action'} ${info && 'animate-action2'}`}
          />
        )}
        {state.state3 && (
          <FontAwesomeIcon
            icon={faCircle}
            height={27}
            width={27}
            fontSize={27}
            className={`dot-menu-display ${basic && 'animate-action'} ${info && 'animate-action2'}`}
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
