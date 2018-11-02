const express = require('express');
const Router = express.Router();
const db  = require('../model/db');

Router.route('/')
  .get((req, res)=> {
    res.send('test');
  });

Router.route('/data')
  .get((req, res) => {
    db.query('SELECT * FROM census_learn_sql limit 100', function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

module.exports = Router;
