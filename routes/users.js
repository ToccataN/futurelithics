var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json());

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res, next){
  console.log(req, "req")
  res.json({success: true, message:"dead cat!!!"})
})

module.exports = router;
