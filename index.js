const express = require('express');
const app = express();

// Database

const mysql = require('mysql');


const dbConfig = {
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  name: 'birdietest',
  table: 'census_learn_sql'
};

const con = mysql.createConnection(dbConfig);

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});


app.listen(4000, () => console.log('Express is listening on port 4000'));
