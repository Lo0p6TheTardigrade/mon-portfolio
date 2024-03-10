// @ts-ignore
import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
const carret = require('../assets/images/carretLeft.webp');

type Props = {};
// @ts-ignore
const Contact = (props: Props) => {
  return (
    <div className="contact-page-container">
      <div className="contact-head-container">
        <div className="contact-title-container">
          <h2 className="contact-title">Contact:</h2>
        </div>
        <Link
          to={'/'}
          className="home-btn-container">
          <img
            src={carret}
            alt="bouton d'accueil"
            id="home-btn"
            className="home-btn"
          />
        </Link>
      </div>
      <Form />
    </div>
  );
};
export default Contact;
