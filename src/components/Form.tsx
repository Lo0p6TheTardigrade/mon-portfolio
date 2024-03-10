// @ts-ignore
import axios from 'axios';
import React, { useState } from 'react';

type Props = {};
// @ts-ignore
const Form = (props: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', formData);
      console.log('Email sent successfully', response.data);
      // Réinitialiser le formulaire ici si nécessaire
    } catch (error) {
      console.error('Error sending email', error);
    }
  };
  return (
    <div className="form-container">
      <form
        id="form"
        onSubmit={handleSubmit}>
        <div className="informations-fields">
          <label
            htmlFor="fname"
            className="form-input-label">
            <input
              id="fname"
              placeholder="Nom:"
              type="text"
              className="form-input"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              className="form-input form-textarea"
              onChange={handleChange}></textarea>
          </label>
        </div>
      </form>
      <div className="btn-submit-container">
        <button className="btn-submit">Envoyer</button>
      </div>
    </div>
  );
};
export default Form;
