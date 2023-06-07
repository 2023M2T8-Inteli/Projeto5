var express = require("express");
var router = express.Router();

const getChoquesByIdViagem = require("../../sql_functions/read/choques.get_choques_by_id_viagem");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_viagem = req.query.id_viagem;

  getChoquesByIdViagem(id_viagem, res);
});

module.exports = router;
