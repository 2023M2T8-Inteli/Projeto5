var express = require("express");
var router = express.Router();

const getLatitudeELongitudeChoques = require("./choques.getLatitudeLongitudeChoques.js");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  getLatitudeELongitudeChoques(res);
});

module.exports = router;