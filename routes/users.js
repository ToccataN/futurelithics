var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var passport = require("passport");
var authenticate = require("../utilities/authenticate");
const model = require("../db/models");

router.use(bodyParser.json());

/* GET users listing. */
router.get("/", function (req, res, next) {
  model.User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err, "err");
    });
});

router.post("/register", function (req, res, next) {
  const { username, password, email, passwordConfirm } = req.body;

  model.User.create({
    name: username,
    password: password,
    email: email,
  })
    .then((user) => {
      const userObject = user.toJSON();
      let token = authenticate.getToken(userObject);
      let responseObject = {
        id: userObject.id,
        username: userObject.name,
        email: userObject.email,
      };
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "Registration Successful!",
        token,
        user: responseObject,
      });
    })
    .catch((err) => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err: err });
    });
});

router.post("/login", function (req, res, next) {
  console.log(req.body, "BODY!!!");
  const { username, password } = req.body;
  model.User.findOne({
    where: {
      name: username,
    },
  })
    .then((user) => {
      console.log(user, "USER!!!");
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 401;
      if (!user) {
        res.json({ success: false, status: "Login failed, user not found." });
      }

      const checkPassword = user.comparePassword(password);

      if (!checkPassword) {
        res.json({
          success: false,
          status: "Login failed, password incorrect.",
        });
      } else {
        const userObject = user.toJSON();
        let token = authenticate.getToken(userObject);
        console.log(token, "TOKEN!!!");
        let responseObject = {
          id: userObject.id,
          username: userObject.name,
          email: userObject.email,
        };
        res.statusCode = 200;
        res.json({
          success: true,
          status: "Login Successful!",
          token,
          user: responseObject,
        });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err: err });
    });
});

module.exports = router;
