const express = require('express');
const app = express();
const { port, dbConfig } = require('./config/environment');
const Router = require('./config/routes');
// Database
const mysql = require('mysql');

const con = mysql.createConnection(dbConfig);

con.connect(function(err) {
  if (err) throw err;
  console.log('Now connected to birdietest database');
  // con.query('SELECT * FROM census_learn_sql', function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
});

// connection.end();

app.use('/api', Router);

app.listen(port, () => console.log('Express is listening on port ' + port));
