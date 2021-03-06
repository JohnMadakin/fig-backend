require('dotenv').config();
require('./config/database');
const express = require('express');
const events = require('./routes/v1');
const cors = require('./utils/cors')


const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors);

// Handle cases where invalid JSON data is passed
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    res.json({
      code: '1',
      message: `invalid JSON '${err.body}' passed`,
    });
  } else {
    next();
  }
});


app.get('/', (req, res) => {
  res.json({ version: '1.0' });
});

const version = '/v1';

app.use(version, events);

// Handle cases where no route is matched
app.use('*', (req, res) => {
  res.status(404).json({ code: 2, msg: `Unimplemented ${req.method} ${req.path} route access` });
});

module.exports = app;
