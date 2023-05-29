var express = require("express");
var router = express.Router();

const getChoquesByLatitudeELongitude = require("../sql_functions/read/choques.get_choques_by_latitude_e_longitude");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const latitude_choque = req.query.latitude_choque;
  const longitude_choque = req.query.longitude_choque;

  getChoquesByLatitudeELongitude(latitude_choque, longitude_choque, res);
});

module.exports = router;
