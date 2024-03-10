const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `${process.env.MY_SECRET_MAIL}`,
      pass: `${process.env.MY_SECRET_MAIL_PASSWORD}`,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_SECRET_MAIL,
    subject: 'Nouveau message de votre formulaire de contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
};
