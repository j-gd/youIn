'use strict';

let db = require('../config.js');
let model = require('../models/index.js');
let trace = require('babel-plugin-trace');

//query database to get all events

module.exports = (req, res) => {
  trace: 'req:', req;
  // console.log(req.user.user_id);
  
  model.getEvents(req.user.user_id)
  .then( (results) => {
    res.status(200).json(results);
  })
  .catch( (error) => {
    res.status(404).send(error, 'failed to get events, please try again');
  });
};
