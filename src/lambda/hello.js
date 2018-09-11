var aws = require("aws-sdk");
aws.config.loadFromPath("./config.json");

const statusCode = 200;
var headers = null;
var ses = new aws.SES({
  region: "us-west-2"
});

export function handler(event, context, callback) {
  console.log(event);
  headers = event.headers;
  console.log("===Incoming:===");

  var email = JSON.parse(event.body);

  var eParams = {
    Destination: {
      ToAddresses: ["marissafromtexas@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Data: email.message
        }
      },
      Subject: {
        Data: email.subject
      }
    },
    Source: "goldmountaingalleryemailer@gmail.com"
  };

  console.log("===SENDING EMAIL===");
  var email = ses.sendEmail(eParams, function(err, data) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("===EMAIL SENT===");
    }
  });

  callback(null, {
    statusCode,
    headers,
    body: "String"
  });
}
