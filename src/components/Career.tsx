import React, { useEffect, useRef } from 'react';
import { Custom_Data_Array_Obj } from '../data/index';
import { useDispatch, useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from '../types';
import { Behavior_Action_Object } from '../actions/behavior.action';
import Box from './modules/Components';
import { Custom_Date_Obj } from '../helpers/date.helper';

const Career = () => {
  // START INNER <CODE>
  const dispatch = useDispatch();
  let info = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.info);
  const iconRef = useRef<SVGSVGElement>(null);
  let window1 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window1);
  let window2 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window2);
  let window3 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window3);

  const handleClickOutside = (event: MouseEvent) => {
    if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
      dispatch(Behavior_Action_Object.behavior.set.action.info(false));
    }
  };

  // END INNER </CODE>

  // START SUB <CODE>
  const Custom_Function_Obj = {
    click: {
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
    <div className="roadmap-list-container">
      <ul className={`roadmap-list ${info && 'displaying-roadmap-block'}`}>
        <Box
          tag={'div'}
          content={
            <Box
              tag={'h3'}
              content={`Acquises de ${Custom_Date_Obj.full.year} à ${Custom_Date_Obj.date.now.year}:`}
              id="career-graduated"
              class="career-graduated career-title"
            />
          }
          id="career-graduated-container"
          class="career-graduated-skill-title-container career-title-container"
        />
        {window1 &&
          Custom_Data_Array_Obj.skills.map((skill: any, index: any) => {
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
                            tag={'p'}
                            content={`${skill.year}: `}
                          />
                          <Box
                            tag={'p'}
                            content={`Formation ${skill.name}`}
                            class={'graduate-skill-content-item'}
                          />
                        </>
                      }
                      class="graduate-skill-content-box"
                    />
                    <span className={'text-color'}>{`${skill.school}`}</span>
                  </a>
                </li>
              </div>
            );
          })}
        <Box
          tag={'h3'}
          content={`En cours ${Custom_Date_Obj.date.now.year}:`}
          id="career-learn"
          class="learns-skills-status career-title"
        />
        {window2 &&
          Custom_Data_Array_Obj.learns.map((learn: any, index: any) => {
            return (
              <Box
                key={index}
                tag={'div'}
                content={
                  <>
                    <li className={learn.class}>
                      <Box
                        tag={'p'}
                        content={learn.year + ':'}
                        class="learns-skills-year"
                      />
                      <Box
                        tag={'div'}
                        content={
                          <>
                            <Box
                              tag={'h3'}
                              content={learn.name}
                              class="learns-skills-title"
                            />
                            <img
                              src={learn.image.src}
                              alt={learn.image.alt}
                              className={learn.image.class}
                            />
                          </>
                        }
                        class="learns-skills-title-container"
                      />
                      <a
                        href={`${learn.link}`}
                        target="blank"
                        className="learns-skills-link">
                        <Box
                          tag={'p'}
                          content={`${learn.skill} ${learn.description} `}
                          class="learns-skills"
                        />
                        <Box
                          tag={'p'}
                          content={`${learn.school}`}
                          class="text-color"
                        />
                      </a>
                    </li>
                  </>
                }
                class="learns-skills-container decoration-box"
              />
            );
          })}
        <Box
          tag={'h3'}
          content={`À venir ${Custom_Date_Obj.date.now.year + 1}:`}
          id="career-incoming"
          class="incoming-skills-status career-title"
        />
        {window3 &&
          Custom_Data_Array_Obj.roadmap.map((map: any, index: any) => {
            return (
              <Box
                key={index}
                tag={'div'}
                content={
                  <Box
                    key={index}
                    tag={'li'}
                    content={
                      <>
                        <Box
                          tag={'div'}
                          content={
                            <Box
                              tag={'p'}
                              content={Custom_Date_Obj.date.now.year + 1 + ':'}
                              class="courses-skills-year"
                            />
                          }
                          class="courses-skills-year-container"
                        />
                        <Box
                          tag={'div'}
                          content={
                            <a
                              href={`${map.link}`}
                              target="blank"
                              className="courses-link">
                              <Box
                                tag={'div'}
                                content={
                                  <>
                                    <Box
                                      tag={'h4'}
                                      content={`${map.description} `}
                                      class="courses-skills-description"
                                    />
                                    <Box
                                      tag={'p'}
                                      content={`${map.skill}`}
                                    />
                                  </>
                                }
                                class="courses-skills-description-container"
                              />
                              <Box
                                tag={'p'}
                                content={`${map.school}`}
                                class="text-color"
                              />
                            </a>
                          }
                          class="courses-skills-title-container"
                        />
                      </>
                    }
                    class="courses-skills-container"
                  />
                }
                class="courses-skills-box decoration-box"
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Career;
