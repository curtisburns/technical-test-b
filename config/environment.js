const port = process.env.PORT || 4000;
const dbConfig = {
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest',
  table: 'census_learn_sql'
};

module.exports = { port, dbConfig };
