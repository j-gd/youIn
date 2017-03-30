var dotenv = require('dotenv');
dotenv.config({path: '.env'});

let twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
let twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
let twilioNumber = process.env.TWILIO_NUMBER;

let attendees = require('./dummy_data.json');
let client = require('twilio')(twilioAccountSid, twilioAuthToken); 
 
module.exports.sendSms = function(cb) {
  attendees.forEach(function(attendee) {
    client.messages.create({ 
      to: attendee.phoneNumber, 
      from: twilioNumber, 
      body: 'Hey Jeff, Bcoin Hackathon is happening in 2 hours! Are youIn?' 
    }, function(err, data) {
      if (err) {
        console.error(err);
        cb(err, null);
      } else {
        console.log('SMS sent!');
        cb(null, data);
      }
    });
  });
};