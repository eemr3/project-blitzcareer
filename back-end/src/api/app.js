const express = require('express');
const Routes = require('../routes');

const app = express();
app.use(express.json());

app.use('/users', Routes.UserRoutes);
module.exports = app;
