const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/email');

const app = express();

app.use(bodyParser.json());

app.use('/api', emailRoutes);

module.exports = app;
