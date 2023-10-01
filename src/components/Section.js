import React from 'react';
import '../scss/components/Section.scss';
import html5 from '../assets/images/html5.webp';
import css3 from '../assets/images/css3.webp';
import sass from '../assets/images/sass.webp';
import javascript from '../assets/images/javascript.webp';
import react from '../assets/images/react.webp';
import redux from '../assets/images/redux.webp';
import seo from '../assets/images/seo.webp';

const Section = () => {
  return (
    <div className="section-container">
      <section className="section">
        <div className="section-title-container">
          <h3 className="section-title">Mes compétences</h3>
        </div>
        <div className="description-box">
          <article className="description-container">
            <div className="description-item-container">
              <p className="description-item">HTML5 & CSS3</p>
            </div>
            <div className="logo-container">
              <img
                src={html5}
                alt="logo de html5"
                className="logo-html5 logo"
              />
              <img
                src={css3}
                alt="logo de css3"
                className="logo-css3 logo"
              />
            </div>
            <div className="description-separator-container">
              <div className="description-separator"></div>
            </div>
          </article>
          <article className="description-container">
            <div className="description-item-container">
              <p className="description-item">Sass</p>
            </div>
            <div className="logo-container">
              <img
                src={sass}
                alt="logo de sass"
                className="logo-sass logo"
              />
            </div>
            <div className="description-separator-container">
              <div className="description-separator"></div>
            </div>
          </article>
          <article className="description-container">
            <div className="description-item-container">
              <p className="description-item">JavaScript</p>
            </div>
            <div className="logo-container">
              <img
                src={javascript}
                alt="logo de javascript"
                className="logo-javascript logo"
              />
            </div>
            <div className="description-separator-container">
              <div className="description-separator"></div>
            </div>
          </article>
          <article className="description-container">
            <div className="description-item-container">
              <p className="description-item">React</p>
            </div>
            <div className="logo-container">
              <img
                src={react}
                alt="logo de react"
                className="logo-react logo"
              />
            </div>
            <div className="description-separator-container">
              <div className="description-separator"></div>
            </div>
          </article>
          <article className="description-container">
            <div className="description-item-container">
              <p className="description-item">Redux</p>
            </div>
            <div className="logo-container">
              <img
                src={redux}
                alt="logo de redux"
                className="logo-redux logo"
              />
            </div>
            <div className="description-separator-container">
              <div className="description-separator"></div>
            </div>
          </article>
          <article className="description-container">
            <div className="description-item-container">
              <p className="description-item">SEO</p>
            </div>
            <div className="logo-container">
              <img
                src={seo}
                alt="logo de seo"
                className="logo-seo logo"
              />
            </div>
            <div className="description-separator-container">
              <div className="description-separator"></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Section;
