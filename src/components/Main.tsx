// @flow
import React, { useEffect } from 'react';
import Skills from './Skills';
import Project from './Project';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';
import Tabs from './modules/Tabs';
import { Behavior_Action_Object } from '../actions/behavior.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const dispatch = useDispatch();
  const basic = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.basic);
  const welcome = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.welcome);

  const handleSectionClick = () => {
    dispatch(Behavior_Action_Object.behavior.set.action.basic(false));
  };
  const handleProjectClick = () => {
    dispatch(Behavior_Action_Object.behavior.set.action.basic(true));
  };

  const switchIcon = (
    <FontAwesomeIcon
      className={basic ? 'rotate-animate' : 'rotate-animate'}
      icon={faRotate}
      height={27}
      width={27}
    />
  );

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
      <Tabs
        tab={{
          name: {
            name1: null,
            class1: 'tab-skills',
            name2: null,
            class2: 'tab-projects',
            name3: 'TOP',
            class3: 'tab-top-page',
          },
          image: {
            file: {
              image1: switchIcon,
            },
            class: {
              class1: 'switch-icon',
            },
          },
          href: {
            link1: '#top-page',
            class1: 'tab-link-top',
          },
          content: {
            class: {
              class1: 'projects-header-page-content',
              class2: 'skills-header-page-content',
            },
            value: {
              content1: 'Mes projets',
              content2: 'Mes compétences',
              content3: null,
            },
          },
          function: {
            onclicked1: handleSectionClick,
            onclicked2: handleProjectClick,
          },
        }}
        state={{ basic }}
      />
      {!basic && <Skills />}
      {basic && <Project />}
    </div>
  );
};

export default Main;
