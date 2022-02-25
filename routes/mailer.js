"use strict";
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

const transporter = require("../utilities/mailTransport");

router.use(bodyParser.json());

router.post("/contact-me", function (req, res, next) {
  const { firstName, lastName, message, email } = req.body;

  const from = `${firstName} ${lastName} <${email}>`;

  const mail = {
    from,
    to: process.env.MAILER_EMAIL,
    subject: "Contact from FutureLithics",
    text: `${from} \n ${message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({success: false, message:err});
    } else {
      res.status(200).json({success: true, message: "Mail successfully sent!"});
    }
  });
});

module.exports = router;
