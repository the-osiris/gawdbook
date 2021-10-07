const dbConnection = require('./utils/db');

const express = require('express');
const app = express();

dbConnection(process.env.A_DB_URI)
  .then(() => {
    console.log('Connected to database');
    return app.listen(3000);
  })
  .then(() => {
    console.log('App Running');
  })
  .catch((err) => {
    console.log('Could not connect to db, app not running');
  });
