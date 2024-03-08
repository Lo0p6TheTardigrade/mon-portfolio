// @ts-ignore
import React from 'react';

type Props = {};
// @ts-ignore
const Form = (props: Props) => {
  return (
    <div className="form-container">
      <form id="form">
        <div className="informations-fields">
          <label
            htmlFor="fname"
            className="form-input-label">
            <input
              id="fname"
              placeholder="Nom:"
              type="text"
              className="form-input"
            />
          </label>
          <label
            htmlFor="lname"
            className="form-input-label">
            <input
              id="lname"
              placeholder="Prénom:"
              type="text"
              className="form-input"
            />
          </label>
          <label
            htmlFor="email"
            className="form-input-label">
            <input
              id="email"
              placeholder="Email:"
              type="email"
              className="form-input"
            />
          </label>
          <label
            htmlFor="tel"
            className="form-input-label">
            <input
              id="tel"
              placeholder="Téléphone:"
              type="tel"
              className="form-input"
            />
          </label>
        </div>
        <div className="message-fields">
          <label
            htmlFor="message"
            className="form-input-label">
            <textarea
              id="message"
              placeholder="Message:"
              className="form-input form-textarea"></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};
export default Form;
