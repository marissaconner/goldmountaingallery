import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import queryString from 'query-string';

const formErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map((fieldName, index) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={index}>
            {fieldName} {formErrors[fieldName]}
          </p>
        );
      } else {
        return "";
      }
    })}
  </div>
);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      captchaValid: false,
      lambdaLoading: false,
      sendAttempted: false,
      sendSuccessful: null,
      errorMessage: null,
      name: "",
      nameValid: false,
      email: "",
      emailValid: false,
      subject: "",
      subjectValid: false,
      message: "",
      messageValid: false,
      formValid: false,
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  }

  componentDidMount() {
  const values = queryString.parse(this.props.location.search)
  console.log(values.item) // 
  if( values.item != undefined ){
      this.setState( { 
        message : "Hello, I am interested the " + values.item + " on your web site and would like to learn more about it. Can you tell me more?",
        messageValid: true,
       })
  }
  }

  hasErrorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  validateForm() {
    console.log("Validating");
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.subjectValid &&
        this.state.messageValid &&
        this.state.captchaValid
    });
  }

  validateField(fieldName, value) {
    let formValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;

    if (fieldName === "email") {
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      formValidationErrors.email = emailValid
        ? ""
        : "is not in the proper format";
      emailValid = emailValid ? true : false;
    } else {
      let message = "";
      let isValid = false;
      if (value.length === 0) {
        isValid = false;
        message = "may not be blank";
      } else {
        isValid = true;
      }

      if (fieldName === "name") {
        formValidationErrors.name = message;
        nameValid = isValid;
      }

      if (fieldName === "subject") {
        formValidationErrors.subject = message;
        subjectValid = isValid;
      }

      if (fieldName === "message") {
        formValidationErrors.message = message;
        messageValid = isValid;
      }
    }

    this.setState(
      {
        formErrors: formValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        subjectValid: subjectValid,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  doCaptcha = e => {
    console.log("Captcha value:", e);
    if (e !== null) {
      console.log("Successful");
      this.setState({ captchaValid: true }, () => {
        this.validateForm();
      });
    } else {
      this.setState({ captchaValid: false }, () => {
        this.validateForm();
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    var bodymessage =
      this.state.name +
      " is sending you the following message: \r\n\r\n" +
      this.state.message +
      "\r\n\r\n To respond, please send an email to: " +
      this.state.email;

    var data = {
      subject: this.state.subject,
      message: bodymessage,
      replyto: this.state.email
    };

    this.setState({ sendAttempted: true, lambdaLoading: true });
    fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        console.log("Response received");
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log("This is the then function with the data part");
        console.log(data);
        this.setState({ lambdaLoading: false });
        if (data.status === 200) {
          this.setState({ sendSuccessful: true });
        } else {
          this.setState({ sendSuccessful: false });
        }
        this.setState({ errorMessage: data.message });
      });
  };

  render() {
    const {
      sendAttempted,
      sendSuccessful,
      lambdaLoading,
      errorMessage
    } = this.state;

    return (
      <div className="container">
        <h1 className="text-center">Get In Touch</h1>
        <div className="row">
          <div className="col-md-3">
            <h3>Call</h3>
            { this.state.item }
            <p>
              <a href="tel:9145848333">
                <strong>Mark:</strong> 914 584 8333
              </a>
            </p>
            <p>
              <a href="tel:9145848333">
                <strong>Scott:</strong> 970 708 1321
              </a>
            </p>

            <h3>Visit</h3>
            <p>135 W. Colorado Avenue</p>
            <p>Telluride, CO 81435</p>

            <h3>Ship</h3>
            <p>PO Box 4013</p>
            <p>Telluride, CO 81435</p>
          </div>
          <div className="col-md-9 section">
            <h3>Email</h3>

            <div>
              {sendAttempted ? (
                <div>
                  {lambdaLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div>
                      {sendSuccessful ? (
                        <div>
                          <h4>Thank you!</h4>
                          <p>
                            Your message has been sent and will be arriving in
                            our inbox shortly. Thanks again for contacting us.
                            We will reach out to you as soon as possible.
                          </p>
                        </div>
                      ) : (
                        <div>
                          <h4>Whoops...</h4>
                          <p>
                            It appears that something went wrong and your
                            message has not been sent. We're sorry for the
                            inconvenience. In the meantime, you can send your
                            message to <b>mark @ goldmountaingallery.com.</b>
                          </p>
                          <p>
                            If you want to tell us about the error, please send
                            this information to us:
                          </p>
                          <p>
                            <b>Error Message:</b> {errorMessage}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={this.handleSubmit} className="form">
                  <div
                    className={`form-group ${this.hasErrorClass(
                      this.state.formErrors.name
                    )}`}
                  >
                    <label htmlFor="guest-name">Your Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={this.state.name}
                      id="guest-name"
                      onChange={this.handleInput}
                    />
                  </div>
                  <div
                    className={`form-group ${this.hasErrorClass(
                      this.state.formErrors.email
                    )}`}
                  >
                    <label htmlFor="guest-email">Your Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      value={this.state.email}
                      name="email"
                      id="guest-email"
                      onChange={this.handleInput}
                    />
                  </div>

                  <div
                    className={`form-group ${this.hasErrorClass(
                      this.state.formErrors.subject
                    )}`}
                  >
                    <label htmlFor="guest-subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.subject}
                      name="subject"
                      id="guest-subject"
                      onChange={this.handleInput}
                    />
                  </div>

                  <div
                    className={`form-group ${this.hasErrorClass(
                      this.state.formErrors.message
                    )}`}
                  >
                    <label htmlFor="guest-message">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      value={this.state.message}
                      id="guest-message"
                      onChange={this.handleInput}
                    />
                  </div>

                  <ReCAPTCHA
                    sitekey="6LdZr3IUAAAAAPmlKvXfIh4bfxjTG1E4w3Wx7NOs"
                    onChange={this.doCaptcha}
                  />

                  <div className="row section">
                    <div className="col-md-12">
                      <button
                        className="btn btn-gold btn-block"
                        type="submit"
                        disabled={!this.state.formValid}
                      >
                        Talk To Us
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
