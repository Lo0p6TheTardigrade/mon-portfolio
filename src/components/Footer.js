import React from 'react';
import '../scss/components/Footer.scss';
import github from '../assets/images/github.webp';
import email from '../assets/images/email.webp';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-list">
          <a
            href="https://github.com/Lo0p6TheTardigrade"
            className="link-to">
            <div className="logo-container">
              <img
                src={github}
                alt="logo de github"
                className="logo-github logo"
                width="36"
                height="36"
              />
            </div>
            Github
          </a>
          <a
            href="mailto:tardigrade.web@gmail.com"
            className="link-to">
            <div className="logo-container">
              <img
                src={email}
                alt="logo de contact email"
                className="logo-email logo"
                width="36"
                height="36"
              />
            </div>
            Contact
          </a>
        </div>
        <div className="copyright-container">
          <p className="copyright">©PC-Web 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
