var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var passport = require('passport');
var authenticate = require("../utilities/authenticate");
const User = require("../db/models/user");

router.use(bodyParser.json());

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", function(req, res, next) {
  const { username, password, passwordConfirm } = req.body;

  User.create({
      userName: username,
      password: password
    }).then((user) => {
      const userObject = user.toJSON();
      let token = authenticate.getToken( userObject );
      let responseObject = {
        id: userObject.id,
        username: userObject.userName
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: "Registration Successful!", token, user: responseObject });   
    }).catch((err) => {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err });    
    })

})

router.post("/login", function (req, res, next){
  console.log(req, "req")
  res.json({success: true, message:"dead cat!!!"})
})

module.exports = router;
