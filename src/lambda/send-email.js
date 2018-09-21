var aws = require("aws-sdk");

var accessKeyId = process.env.AWS_KEY
var secretAccessKey = process.env.AWS_SECRET

var ses = new aws.SES({
  region: "us-west-2",
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
});

var headers = null;

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

  sendPromise.then(
    function(data) {
      awsCallback(null, {
        statusCode: 200,
        body: JSON.stringify({
          status: 200,
          message: "Your email was successfully sent."
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    function(error) {
      awsCallback(null, {
        statusCode: 500,
        body: JSON.stringify({ secretAccessKey: secretAccessKey, accessKeyId: accessKeyId, error: error }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  );
}
