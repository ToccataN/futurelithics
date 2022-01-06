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
      console.log(err, "error");
      res.status(500).send(err);
    } else {
      res.status(200).send("mail successfully sent!");
    }
  });
});

module.exports = router;
