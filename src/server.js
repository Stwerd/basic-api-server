'use strict';

const express = require('express');
const gymRouter = require('./routes/gym');
const app = express();

app.use(gymRouter);