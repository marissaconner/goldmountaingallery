var aws = require("aws-sdk");
aws.config.loadFromPath("./config.json");

var headers = null;
var ses = new aws.SES({
  region: "us-west-2"
});

export function handler(event, context, awsCallback) {
  console.log(event);
  headers = event.headers;
  console.log("===Incoming:===");

  var emailform = JSON.parse(event.body);

  var eParams = {
    Destination: {
      ToAddresses: ["marissafromtexas@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Data: emailform.message
        }
      },
      Subject: {
        Data: emailform.subject
      }
    },
    Source: "goldmountaingalleryemailer@gmail.com",
    ReplyToAddresses: [emailform.replyto]
  };

  var sendPromise = ses.sendEmail(eParams).promise();

  sendPromise
    .then(function(data) {
      console.log("==Sent?==");
      console.log(data.messageId);
    })
    .catch(function(err) {
      console.error(err, err.stack);
    });
}
