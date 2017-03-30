var dotenv = require('dotenv');
dotenv.config({path: '.env'});

let twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
let twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
let twilioNumber = process.env.TWILIO_NUMBER;

let attendees = require('./dummy_data.json');
let client = require('twilio')(twilioAccountSid, twilioAuthToken); 
 
module.exports.sendSms = function(event, cb) {
  // console.log('event', event);
  let eventDateString = event.date.slice(0, 10);
  let fullEventTime = new Date (eventDateString + ' ' + event.time);

  let hoursLeft = Math.floor((Date.parse(fullEventTime) - Date.now()) / (60 * 60 * 1000));

  attendees.forEach(function(attendee) {
    client.messages.create({ 
      to: attendee.phoneNumber, 
      from: twilioNumber, 
      body: `Hey ${attendee.name}, ${event.title} is happening in ${hoursLeft} hours! Are youIn?`
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