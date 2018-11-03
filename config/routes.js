const express = require('express');
const Router = express.Router();
const dataController = require('../controllers/dataController');

Router.route('/data')
  .get(dataController.gatherVariableNames);

Router.route('/data/:variable')
  .get(dataController.retrieveData);

module.exports = Router;
