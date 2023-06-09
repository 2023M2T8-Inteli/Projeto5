var express = require("express");
var router = express.Router();

const getChoques = require("../../sql_functions/read/choques.get_choques");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_viagem = req.query.id_viagem;
  const tipo_engate = req.query.tipo_engate
  const tipo_choque = req.query.tipo_choque

  getChoques(id_viagem, tipo_engate, tipo_choque, res);
});

module.exports = router;
