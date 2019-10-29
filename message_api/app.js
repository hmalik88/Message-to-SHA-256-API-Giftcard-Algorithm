const express = require('express');
const morgan = require('morgan');
const app = express();
const messageRoutes = require('./routes/messages');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/messages', messageRoutes);

app.use((req, res, next) => {
  const error = new Error('Message not found');
  error.status = 404;
  next(error);
})

module.exports = app;
