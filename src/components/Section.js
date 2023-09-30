import React from 'react';
import '../scss/components/Section.scss';

const Section = () => {
  return (
    <div className="section-container">
      <section className="section">
        <div className="section-title-container">
          <h3 className="section-title">Mes compétences</h3>
        </div>
        <div className="description-container">
          <p className="description-item">HTML5 & CSS3</p>
        </div>
        <div className="description-container">
          <p className="description-item">Sass</p>
        </div>
        <div className="description-container">
          <p className="description-item">JavaScript</p>
        </div>
        <div className="description-container">
          <p className="description-item">React</p>
        </div>
        <div className="description-container">
          <p className="description-item">Redux</p>
        </div>
        <div className="description-container">
          <p className="description-item">SEO</p>
        </div>
      </section>
    </div>
  );
};

export default Section;
