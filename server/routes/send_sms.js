let twilioClient = require('../twilioClient.js');

module.exports = function (req, res) {
  twilioClient.sendSms(function(err, data) {
    if (err) {
      res.status(404).send('Could not send SMS');
    } else {
      res.status(201).send(data);
    }
  });
};