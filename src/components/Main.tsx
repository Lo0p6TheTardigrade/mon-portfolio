// @flow
import { useEffect } from 'react';
import Skills from './Skills';
import Project from './Project';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';
import { Behavior_Action_Object } from '../actions/behavior.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Div from './modules/Components';
import Nav from './modules/Components';
import Span from './modules/Components';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Main = () => {
  const dispatch = useDispatch();
  const basic = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.basic);
  const welcome = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.welcome);
  const view = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.view);
  // const main = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.main);

  const handleSectionClick = () => {
    dispatch(Behavior_Action_Object.behavior.set.action.basic(false));
    dispatch(Behavior_Action_Object.behavior.set.action.view(false));
    dispatch(Behavior_Action_Object.behavior.set.action.window.main(false));
  };
  const handleProjectClick = () => {
    dispatch(Behavior_Action_Object.behavior.set.action.basic(true));
    dispatch(Behavior_Action_Object.behavior.set.action.view(false));
    dispatch(Behavior_Action_Object.behavior.set.action.window.main(false));
  };

  const handleSwitchClick = () => {
    switch (basic) {
      case true:
        handleSectionClick();

        break;
      case false:
        handleProjectClick();

        break;

      default:
        break;
    }
  };
  const handleHeader2Section = () => {
    switch (view) {
      case true:
        return <h2 className={`title-tab-content roadmap-header-page-content`}>Roadmap</h2>;
      case false:
        switch (basic) {
          case true:
            return <h2 className={`title-tab-content projects-header-page-content`}>Mes Projets</h2>;

          case false:
            return <h2 className={`title-tab-content skill-header-page-content`}>Mes compétences</h2>;

          default:
            break;
        }
    }
  };

  const switchIcon = () => {
    return (
      <Div
        tag={'div'}
        classX="click-btn-container">
        <FontAwesomeIcon
          className={`${basic ? 'rotate-element' : 'rotate-animate'}`}
          icon={faCircle}
          height={27}
          width={27}
        />
      </Div>
    );
  };
  const switch_skills_or_projets = basic ? 'tab-projects' : 'tab-skills';

  setTimeout(() => {
    dispatch(Behavior_Action_Object.behavior.set.action.welcome(false));
    sessionStorage.setItem('endTime', 'true');
  }, 35000);

  useEffect(() => {
    switch (sessionStorage.getItem('endTime')) {
      case 'true':
        dispatch(Behavior_Action_Object.behavior.set.action.welcome(false));
        break;
      default:
        break;
    }
  }, [dispatch]);

  return (
    <div className="main-container">
      {welcome && (
        <div className="subtitle-container">
          <div className="boxA">
            <div className="description">
              <h2 className="subtitle">Hello 👋🏽,</h2>
              <p className="text">Moi c'est Christophe, développeur frontend.</p>
              <p className="text">Passionné par le web, l'expérience utilisateur et l'accessibilité, je me suis tourné vers le développement web coté client.</p>
            </div>
          </div>
        </div>
      )}
      <Div
        tag={'div'}
        classX="main-tab-container">
        <Div
          tag={'div'}
          classX="main-tab-box"
          onClick={handleSwitchClick}>
          <div className="main-tab-content tab-box">{handleHeader2Section()}</div>
          <Nav
            tag={'nav'}
            classX="main-tab-item tab-box">
            <Div
              tag={'div'}
              classX="click-text-button">
              {/* {basic ? 'Compétences' : 'Projets'} */}
              {/* Cliquez moi ! */}
            </Div>
            <Span
              tag={'span'}
              classX={`tab-item tab ${switch_skills_or_projets}`}>
              {switchIcon()}
            </Span>
          </Nav>
        </Div>
      </Div>
      {!basic ? <Skills /> : <Project />}
    </div>
  );
};

export default Main;
