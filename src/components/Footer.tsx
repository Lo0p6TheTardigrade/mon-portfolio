// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Custom_Data_Array_Obj } from '../data';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-list">
          {Custom_Data_Array_Obj.contacts.map((contact, index) => {
            return (
              <Link
                key={index}
                to={contact.link}
                title={contact.description}
                target="blank"
                id={`link${index}`}
                className={`link-to ${contact.class}`}>
                <div className="logo-container">
                  <img
                    src={contact.image.src}
                    alt={contact.image.alt}
                    className={contact.image.class}
                    width={contact.image.size.width}
                    height={contact.image.size.height}
                  />
                </div>
                {contact.name}
              </Link>
            );
          })}
        </div>
        {Custom_Data_Array_Obj.copyright.map((copyright, index) => {
          return (
            <div
              className={copyright.class}
              key={index}>
              <p className={copyright.watermark.class}>{`${copyright.watermark.copy} ${copyright.watermark.year} ${copyright.watermark.who}`}</p>
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default Footer;
