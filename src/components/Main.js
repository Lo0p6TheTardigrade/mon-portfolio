import React from 'react';
import '../scss/components/Main.scss';

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-title-container">
        <h2 className="main-title">Bienvenue</h2>
      </div>
      <div className="subtitle-container">
        <h3 className="subtitle">Hello moi c'est Christophe développeur frontend</h3>
      </div>
      <div className="description">
        <p className="text">Passionné par le web, l'expérience utilisateur et l'accessibilité, je me suis tourné vers le développement web coté client</p>
      </div>
      <div className="article-container">
        <article className="article-item">
          <a
            href="https://pc-web-ohmyfood.netlify.app"
            className="project-link">
            <p className="project-name">SCSS OhMyFood</p>
            <img
              src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cbf90bb6aa01b2aeffc61/screenshot_2023-11-09-11-16-42-0000.png"
              alt="scss oh my food preview"
              className="project-preview-image"
            />
          </a>
        </article>
      </div>
      <div className="article-container">
        <article className="article-item">
          <a
            href="https://pc-web-print-it.netlify.app"
            className="project-link">
            <p className="project-name">JS Print-it</p>
            <img
              src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cbd912e06c6190cc3eded/screenshot_2023-11-09-11-08-25-0000.png"
              alt="js print it preview"
              className="project-preview-image"
            />
          </a>
        </article>
      </div>
      {/* <div className="article-container">
        <article className="article-item">
          <a
            href="https://lo0p6thetardigrade.github.io/Portfolio-architecte-sophie-bluel/"
            className="project-link">
            <p className="project-name">Portfolio architecte Sophie Bluel</p>
            <img
              src=""
              alt="project-preview-image"
              className="project-preview-image"
            />
          </a>
        </article>
      </div> */}
      <div className="article-container">
        <article className="article-item">
          <a
            href="https://pc-web-nina-carducci.netlify.app"
            className="project-link">
            <p className="project-name">SEO Nina Carducci</p>
            <img
              src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc033b5dcf7156a942acf/screenshot_2023-11-09-11-19-24-0000.png"
              alt="seo nina carducci preview"
              className="project-preview-image"
            />
          </a>
        </article>
      </div>
      <div className="article-container">
        <article className="article-item">
          <a
            href="https://pc-web-724event.netlify.app"
            className="project-link">
            <p className="project-name">Debug 724Event</p>
            <img
              src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc08057495a2146d6dc3f/screenshot_2023-11-09-11-21-07-0000.png"
              alt="debug 724Event preview"
              className="project-preview-image"
            />
          </a>
        </article>
      </div>
      <div className="article-container">
        <article className="article-item">
          <a
            href="pc-web-kasa.netlify.app"
            className="project-link">
            <p className="project-name">React Kasa</p>
            <img
              src="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc66a413130287af09dce/screenshot_2023-11-09-11-46-21-0000.png"
              alt="kasa preview"
              className="project-preview-image"
            />
          </a>
        </article>
      </div>
      {/* <div className="article-container">
        <article className="article-item">
          <a
            href=""
            className="project-link">
            <p className="project-name"></p>
            <img
              src=""
              alt="project-preview-image"
              className="project-preview-image"
            />
          </a>
        </article>
      </div>
      <div className="article-container">
        <article className="article-item">
          <a
            href=""
            className="project-link">
            <p className="project-name"></p>
            <img
              src=""
              alt="project-preview-image"
              className="project-preview-image"
            />
          </a>
        </article>
      </div> */}
    </div>
  );
};

export default Main;
