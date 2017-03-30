let twilioClient = require('../twilioClient.js');

module.exports = (req, res) => {
  let sringEvent = req.body['event'];
  let event = JSON.parse(sringEvent);
  
  //add dbquery here

  twilioClient.sendSms(event, function(err, data) {
    if (err) {
      res.status(404).send('Could not send SMS');
    } else {
      res.status(201).send(data);
    }
  });
};