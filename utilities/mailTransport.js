"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOST, //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take your messages");
  }
});

module.exports = transporter;