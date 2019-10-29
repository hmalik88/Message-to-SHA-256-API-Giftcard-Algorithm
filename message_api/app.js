const express = require('express');
const morgan = require('morgan');
const app = express();
const messageRoutes = require('./routes/messages.js');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/messages', messageRoutes);

module.exports = app;
