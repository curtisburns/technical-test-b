const mysql = require('mysql');

const dbConfig = {
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest',
  table: 'census_learn_sql'
};

const con = mysql.createConnection(dbConfig);

con.connect(function(err) {
  if (err) throw err;
  console.log('Now connected to birdietest database');
});

module.exports = con;
