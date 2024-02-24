// @flow
import WidgetAnimate from './WidgetAnimate';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';
import { Behavior_Action_Object } from '../actions/behavior.action';
import { Link } from 'react-router-dom';
const imageProfile = require('../assets/images/IMG_4876.webp');

const Header = () => {
  const dispatch = useDispatch();
  const window4 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window4);
  const window6 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window6);

  const easter_egg = window6 ? (
    <Link to="/certificate">
      <p className="image-profile easter-egg-proof">Proof</p>
    </Link>
  ) : (
    <p className="image-profile easter-egg-proof">Bientôt</p>
  );
  return (
    <div
      className="header-container"
      id="top-page">
      <header className="header">
        <div
          className={`image-profile-container ${window4 && 'easter-egg-display'}`}
          onClick={() => dispatch(Behavior_Action_Object.behavior.set.action.window.window4(!window4))}
          onMouseLeave={() => dispatch(Behavior_Action_Object.behavior.set.action.window.window4(false))}>
          {window4 ? (
            easter_egg
          ) : (
            <img
              src={imageProfile}
              alt="profile"
              className="image-profile"
              width={150}
              height={200}
            />
          )}
        </div>
        <h1 className="home-title">Développeur Frontend</h1>
        <WidgetAnimate
          state1={false}
          state2={true}
          state3={false}
        />
      </header>
    </div>
  );
};

export default Header;
