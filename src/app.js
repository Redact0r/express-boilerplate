require('dotenv');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganOption = process.env.NODE_ENV === 'production'
  ? 'tiny'
  : 'common';

app.use(cors());
app.use(helmet());
app.use(morgan(morganOption));

module.exports = app;