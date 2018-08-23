var aws = require("aws-sdk");
aws.config.loadFromPath("./config.json");

var ses = new aws.SES({
  region: "us-west-2"
});

export function handler(event, context) {
  console.log("Incoming: ", event);

  var eParams = {
    Destination: {
      ToAddresses: ["marissafromtexas@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Data: "Test message what is up"
        }
      },
      Subject: {
        Data: "Email Subject!"
      }
    },
    Source: "goldmountaingalleryemailer@gmail.com"
  };

  console.log("===SENDING EMAIL===");
  var email = ses.sendEmail(eParams, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("===EMAIL SENT===");
      console.log("EMAIL CODE END");
      console.log("EMAIL: ", email);
      console.log(data);
    }
  });
}
