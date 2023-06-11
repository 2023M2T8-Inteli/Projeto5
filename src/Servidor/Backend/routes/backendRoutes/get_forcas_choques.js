var express = require("express");
var router = express.Router();

const getForcasChoques = require("../../sql_functions/read/choques.get_forcas_choques");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  getForcasChoques(res);
});

module.exports = router;
