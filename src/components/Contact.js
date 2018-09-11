import React, { Component } from "react";

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
      lambdaLoading: false,
      lamdaMessage: null,
      sendattempted: false,
      sendsuccessful: null,
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

  hasErrorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.subjectValid &&
        this.state.messageValid
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
      message: bodymessage
    };

    this.setState({ lambdaLoading: true });
    fetch("/.netlify/functions/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(function(json) {
        this.setState({ lambdaLoading: false, lambdaMessage: json.msg });
      });
    console.log("Submit function");
  };

  render() {
    const { lambdaLoading, lambdaMessage } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">Get In Touch</h1>
        <p>{lambdaLoading ? "Loading..." : "Call Lambda"}</p>
        <p>{lambdaMessage}</p>
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
          <button
            className="btn btn-default"
            type="submit"
            disabled={!this.state.formValid}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
