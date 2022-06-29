const express = require('express');
const Routes = require('../routes');

const app = express();
app.use(express.json());

app.use('/users', Routes.UserRoutes);
app.use('/login', Routes.LoginRoutes);
app.use('/tasks', Routes.TaskRoutes);

module.exports = app;
