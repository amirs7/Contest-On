const express = require('express');

const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(routes);

app.listen(config.serverPort);