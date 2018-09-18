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
      ToAddresses: [
        "mark@goldmountaingallery.com",
        "scott@goldmountaingallery.com",
        "marissafromtexas@gmail.com"
      ]
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

  sendPromise.then(
    function(data) {
      awsCallback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent." }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    function(error) {
      awsCallback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  );
}
