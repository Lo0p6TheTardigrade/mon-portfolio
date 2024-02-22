// @flow
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Custom_Data_Array_Obj } from '../data/index';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface, Langage_Custom_Interface } from '../types';
import { Behavior_Action_Object } from '../actions/behavior.action';
import { Link } from 'react-router-dom';
import Career from './Career';

const Skills = () => {
  // START INNER <CODE>
  const dispatch = useDispatch();
  const info = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.info);
  const iconRef = useRef<SVGSVGElement>(null);
  const main = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.main);

  const handleClick = () => {
    dispatch(Behavior_Action_Object.behavior.set.action.info(!info));
    dispatch(Behavior_Action_Object.behavior.set.action.window.main(!main));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
      dispatch(Behavior_Action_Object.behavior.set.action.info(false));
      dispatch(Behavior_Action_Object.behavior.set.action.window.main(false));
    }
  };

  // END INNER </CODE>

  // START SUB <CODE>
  const Custom_Function_Obj = {
    click: {
      in: handleClick,
      out: handleClickOutside,
    },
  };

  useEffect(() => {
    document.addEventListener('click', Custom_Function_Obj.click.out);

    return () => {
      document.removeEventListener('click', Custom_Function_Obj.click.out);
    };
  }, [info, Custom_Function_Obj.click.out]);

  // END SUB </CODE>

  return (
    <div className="section-container">
      <div className="title-container">
        <div className="learn">
          <p className="learn-title">Roadmap</p>
          <div className="icon-container">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="roadmap-icon-trigger"
              height={27}
              width={27}
              fontSize={27}
              color={`${info && 'orange'}`}
              onClick={Custom_Function_Obj.click.in}
              ref={iconRef}
            />
          </div>
        </div>
      </div>
      {!main ? (
        <section className="section">
          <div className="description-box">
            {Custom_Data_Array_Obj.language.map((language: Langage_Custom_Interface, index: number) => (
              <div
                key={index}
                className="description-container"
                title={language.name}>
                <article
                  id={'card' + language.id}
                  className="description-item-container">
                  <h2 className="description-item item-title">
                    {language.name}
                    <Link
                      id={`wiki-viewer${language.id}`}
                      title={`${language.name} wiki`}
                      target="blank"
                      to={`${language.wiki}`}>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        height={27}
                        width={27}
                        color="black"
                      />
                    </Link>
                  </h2>
                  <p className="description-item item-text">{language.description}</p>
                </article>
                <div className="logo-container">
                  <img
                    src={language.image}
                    alt={language.alt}
                    className={language.class}
                    width="51"
                    height="51"
                  />
                </div>
                <div className="description-separator-container">
                  <div className="description-separator"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Career />
      )}
    </div>
  );
};

export default Skills;
