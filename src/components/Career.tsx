import { Custom_Data_Array_Obj } from '../data/index';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface, Learn_Custom_Interface, Roadmap_Custom_Interface, Skills_Custom_Interface } from '../types';
import Box from './modules/Components';
import { Custom_Date_Obj } from '../helpers/date.helper';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Behavior_Action_Object } from '../actions/behavior.action';

const Career = () => {
  // START INNER <CODE>
  const dispatch = useDispatch();
  let info = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.info);
  let window1 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window1);
  let window2 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window2);
  let window3 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window3);

  // Part of the component for the finding function
  const partComponent = (params1: Roadmap_Custom_Interface, params2: number) => {
    return (
      <Box
        key={params2}
        tag={'div'}
        content={
          <Box
            key={params2}
            tag={'li'}
            content={
              <>
                <Box
                  tag={'div'}
                  content={
                    <Box
                      tag={'h3'}
                      content={params1.year}
                      classX="courses-skills-year"
                    />
                  }
                  classX="courses-skills-year-container"
                />
                <Box
                  tag={'div'}
                  content={
                    <a
                      href={`${params1.link}`}
                      target="blank"
                      className="courses-link">
                      <Box
                        tag={'div'}
                        content={
                          <img
                            src={params1.image.src}
                            alt={params1.image.alt}
                            className={`learns-skills-logo ${params1.image.class}`}
                          />
                        }
                        classX={params1.class}
                      />
                      <Box
                        tag={'div'}
                        content={
                          <>
                            <Box
                              tag={'h4'}
                              content={`${params1.description} `}
                              classX="courses-skills-description"
                            />
                            <Box
                              tag={'p'}
                              content={`${params1.skill}`}
                            />
                          </>
                        }
                        classX="courses-skills-description-container"
                      />
                      <Box
                        tag={'p'}
                        content={`${params1.school}`}
                        classX="text-color"
                      />
                    </a>
                  }
                  classX="courses-skills-title-container"
                />
              </>
            }
            classX="courses-skills-container"
          />
        }
        classX="courses-skills-box decoration-box"
      />
    );
  };

  // Finding a precise date for map data
  const atDay = (params: string) => {
    const date = new Date(params);
    return Custom_Data_Array_Obj.roadmap.map((roadmap: Roadmap_Custom_Interface, index: number) => {
      if (parseInt(roadmap.year) <= date.getUTCFullYear()) {
        return partComponent(roadmap, index);
      }
      return null;
    });
  };

  const handleGraduatedClick = () => {
    if (window1 === false) {
      dispatch(Behavior_Action_Object.behavior.set.action.window.window1(!window1));
      dispatch(Behavior_Action_Object.behavior.set.action.window.window2(false));
      dispatch(Behavior_Action_Object.behavior.set.action.window.window3(false));
    } else {
      return null;
    }
  };
  const handleLearnClick = () => {
    if (window2 === false) {
      dispatch(Behavior_Action_Object.behavior.set.action.window.window1(false));
      dispatch(Behavior_Action_Object.behavior.set.action.window.window2(!window2));
      dispatch(Behavior_Action_Object.behavior.set.action.window.window3(false));
    } else {
      return null;
    }
  };
  const handleIncomingClick = () => {
    if (window3 === false) {
      dispatch(Behavior_Action_Object.behavior.set.action.window.window1(false));
      dispatch(Behavior_Action_Object.behavior.set.action.window.window2(false));
      dispatch(Behavior_Action_Object.behavior.set.action.window.window3(!window3));
    } else {
      return null;
    }
  };

  // END INNER </CODE>

  // START SUB <CODE>

  // END SUB </CODE>

  return (
    <div className="roadmap-list-container">
      <ul className={`roadmap-list ${info && 'displaying-roadmap-block'}`}>
        <Box
          tag={'div'}
          id="career-graduated-container"
          classX={'career-graduated-skill-title-container career-title-container'}
          content={
            <Box
              tag={'div'}
              classX="head-graduated"
              onClick={handleGraduatedClick}>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`caret-down ${window1 && 'rotate-animate'}`}
              />
              <Box
                tag={'div'}
                classX="head-title-container">
                <Box
                  tag={'div'}
                  classX={`career-dot-container ${window1 && 'dot-colored'}`}
                />
                <Box
                  tag={'h3'}
                  content={`🏆 Acquises ${Custom_Date_Obj.full.year} à ${Custom_Date_Obj.date.now.year}:`}
                  id="career-graduated"
                  classX={`career-graduated career-title ${!window1 && 'unselected-element'}`}
                />
              </Box>
            </Box>
          }
        />
        <div className="skill-map-box">
          {window1 &&
            Custom_Data_Array_Obj.skills.map((skill: Skills_Custom_Interface, index: number) => {
              return (
                <div
                  key={index}
                  className="decoration-box">
                  <li className={`${skill.class}`}>
                    <a
                      href={skill.link}
                      target="blank">
                      <Box
                        tag={'div'}
                        content={
                          <>
                            <Box
                              tag={'h3'}
                              content={`${skill.year}`}
                            />
                            <img
                              src={skill.image.src}
                              alt={skill.image.alt}
                              className={skill.image.class}
                            />
                            <Box
                              tag={'h4'}
                              content={`Formation ${skill.name}`}
                              classX={'graduate-skill-content-item'}
                            />
                          </>
                        }
                        classX={'graduate-skill-content-box'}
                      />
                      <span className={'text-color'}>{`${skill.school}`}</span>
                    </a>
                  </li>
                </div>
              );
            })}
        </div>
        <Box
          tag={'div'}
          classX="career-learn-skill-title-container career-title-container"
          content={
            <Box
              tag={'div'}
              classX="head-learn"
              onClick={handleLearnClick}>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`caret-down ${window2 && 'rotate-animate'}`}
              />
              <Box
                tag={'div'}
                classX="head-title-container">
                <Box
                  tag={'div'}
                  classX={`career-dot-container ${window2 && 'dot-colored'}`}
                />
                <Box
                  tag={'h3'}
                  content={`👨🏽‍🎓 Maintenant ${Custom_Date_Obj.date.now.year}:`}
                  id="career-learn"
                  classX={`learns-skills-status career-title ${!window2 && 'unselected-element'}`}
                />
              </Box>
            </Box>
          }
        />
        <div className="learn-map-box">
          {window2 &&
            Custom_Data_Array_Obj.learns.map((learn: Learn_Custom_Interface, index: number) => {
              return (
                <Box
                  key={index}
                  tag={'div'}
                  content={
                    <>
                      <li className={learn.class}>
                        <a
                          href={`${learn.link}`}
                          target="blank"
                          className="learns-skills-link">
                          <Box
                            tag={'div'}
                            content={
                              <>
                                <Box
                                  tag={'p'}
                                  content={`${learn.skill} ${learn.description} `}
                                  classX="learns-skills"
                                />
                                <Box
                                  tag={'h4'}
                                  content={learn.name}
                                  classX={'learns-skills-title'}
                                />
                                <img
                                  src={learn.image.src}
                                  alt={learn.image.alt}
                                  className={learn.image.class}
                                />
                                <Box
                                  tag={'h3'}
                                  content={learn.year}
                                  classX={'learns-skills-year'}
                                />
                              </>
                            }
                            classX={'learns-skills-title-container'}
                          />
                          <Box
                            tag={'p'}
                            content={`${learn.school}`}
                            classX="text-color"
                          />
                        </a>
                      </li>
                    </>
                  }
                  classX="learns-skills-container decoration-box"
                />
              );
            })}
        </div>
        <Box
          tag={'div'}
          classX="career-roadmap-skill-title-container career-title-container"
          content={
            <Box
              tag={'div'}
              classX="head-incoming"
              onClick={handleIncomingClick}>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`caret-down ${window3 && 'rotate-animate'}`}
              />
              <Box
                tag={'div'}
                classX="head-title-container">
                <Box
                  tag={'div'}
                  classX={`career-dot-container ${window3 && 'dot-colored'}`}
                />
                <Box
                  tag={'h3'}
                  content={`🔜 Roadmap ${Custom_Date_Obj.date.now.year} / ${Custom_Date_Obj.date.now.year + 1}:`}
                  id="career-incoming"
                  classX={`incoming-skills-status career-title ${!window3 && 'unselected-element'}`}
                />
              </Box>
            </Box>
          }
        />
        <div className="roadmap-map-box">{window3 && atDay('07/09/2024')}</div>
      </ul>
    </div>
  );
};

export default Career;
