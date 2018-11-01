const express = require('express');
const Router = express.Router();

Router.route('/')
  .get((req, res)=> {
    res.send('test');
  });

module.exports = Router;
