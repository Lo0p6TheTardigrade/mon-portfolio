import React from 'react';
import '../scss/components/Project.scss';

const Project = () => {
  return (
    <div className="projects-section">
      <div
        className="projects-section-title"
        id="projects">
        <h3 className="title">Mes projets</h3>
      </div>
      <div className="learn">
        <p className="learn-title">Projet réalisé dans le cadre de ma formation Développeur Frontend chez Openclassroom</p>
      </div>
      <div className="projects">
        <div className="article-container">
          <article className="article-item">
            <a
              href="https://pc-web-ohmyfood.netlify.app"
              className="project-link">
              <div className="project-title-box">
                <p className="project-type">SCSS:</p>
                <p className="project-name">OhMyFood</p>
              </div>
              <img
                src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cbf90bb6aa01b2aeffc61/screenshot_2023-11-09-11-16-42-0000.png"
                alt="scss oh my food preview"
                className="project-preview-image"
                width={336}
                height={210}
              />
              <div className="description-container">
                <p className="description">Utilisation de SASS et des animations</p>
                <p className="skills">Compétences SCSS</p>
              </div>
            </a>
          </article>
        </div>
        <div className="article-container">
          <article className="article-item">
            <a
              href="https://pc-web-print-it.netlify.app"
              className="project-link">
              <div className="project-title-box">
                <p className="project-type">JS:</p>
                <p className="project-name">Print-it</p>
              </div>
              <img
                src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cbd912e06c6190cc3eded/screenshot_2023-11-09-11-08-25-0000.png"
                alt="js print it preview"
                className="project-preview-image"
                width={336}
                height={210}
              />
              <div className="description-container">
                <p className="description">Premiers pas sur JavaScript avec l'implémentation d'un carousel</p>
                <p className="skills">Compétences JavaScript</p>
              </div>
            </a>
          </article>
        </div>
        <div className="article-container">
          <article className="article-item">
            <a
              href="https://pc-web-nina-carducci.netlify.app"
              className="project-link">
              <div className="project-title-box">
                <p className="project-type">SEO:</p>
                <p className="project-name">Nina Carducci</p>
              </div>
              <img
                src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc033b5dcf7156a942acf/screenshot_2023-11-09-11-19-24-0000.png"
                alt="seo nina carducci preview"
                className="project-preview-image"
                width={336}
                height={210}
              />
              <div className="description-container">
                <p className="description">Optimisation du référencement du site d'une photographe.</p>
                <p className="skills">Compétences SEO</p>
              </div>
            </a>
          </article>
        </div>
        <div className="article-container">
          <article className="article-item">
            <a
              href="https://pc-web-724event.netlify.app"
              className="project-link">
              <div className="project-title-box">
                <p className="project-type">Debug:</p>
                <p className="project-name">724Event</p>
              </div>
              <img
                src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc08057495a2146d6dc3f/screenshot_2023-11-09-11-21-07-0000.png"
                alt="debug 724Event preview"
                className="project-preview-image"
                width={336}
                height={210}
              />
              <div className="description-container">
                <p className="description">Debug d'un site d'évènementiel à l'aide des outils de debug et des tests unitaire</p>
                <p className="skills">Compétences Debug</p>
              </div>
            </a>
          </article>
        </div>
        <div className="article-container">
          <article className="article-item">
            <a
              href="pc-web-kasa.netlify.app"
              className="project-link">
              <div className="project-title-box">
                <p className="project-type">React:</p>
                <p className="project-name">Kasa</p>
              </div>
              <img
                src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc66a413130287af09dce/screenshot_2023-11-09-11-46-21-0000.png"
                alt="kasa preview"
                className="project-preview-image"
                width={336}
                height={210}
              />
              <div className="description-container">
                <p className="description">Realisation d'une application REACT pour une agence immobilière</p>
                <p className="skills">Compétences REACT</p>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Project;
