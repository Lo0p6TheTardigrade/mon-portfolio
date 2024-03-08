import { Custom_Data_Array_Obj } from '../data/index';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface, Learn_Custom_Interface, Roadmap_Custom_Interface } from '../types';
import Box from './modules/Components';
import { Custom_Date_Obj } from '../helpers/date.helper';

const Career = () => {
  // START INNER <CODE>
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
                      class="courses-skills-year"
                    />
                  }
                  class="courses-skills-year-container"
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
                        class={params1.class}
                      />
                      <Box
                        tag={'div'}
                        content={
                          <>
                            <Box
                              tag={'h4'}
                              content={`${params1.description} `}
                              class="courses-skills-description"
                            />
                            <Box
                              tag={'p'}
                              content={`${params1.skill}`}
                            />
                          </>
                        }
                        class="courses-skills-description-container"
                      />
                      <Box
                        tag={'p'}
                        content={`${params1.school}`}
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

  // END INNER </CODE>

  // START SUB <CODE>

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
        <div className="skill-map-box">
          {window1 &&
            Custom_Data_Array_Obj.skills.map((skill: any, index: number) => {
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
        </div>
        <Box
          tag={'h3'}
          content={`En cours ${Custom_Date_Obj.date.now.year}:`}
          id="career-learn"
          class="learns-skills-status career-title"
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
                        <Box
                          tag={'h3'}
                          content={learn.year}
                          class="learns-skills-year"
                        />
                        <Box
                          tag={'div'}
                          content={
                            <>
                              <Box
                                tag={'h4'}
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
        </div>
        <Box
          tag={'h3'}
          content={`À venir ${Custom_Date_Obj.date.now.year} / ${Custom_Date_Obj.date.now.year + 1}:`}
          id="career-incoming"
          class="incoming-skills-status career-title"
        />
        <div className="roadmap-map-box">{window3 && atDay('07/09/2024')}</div>
      </ul>
    </div>
  );
};

export default Career;
