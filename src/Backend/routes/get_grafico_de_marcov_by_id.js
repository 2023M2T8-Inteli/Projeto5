var express = require("express");
var router = express.Router();

const getGraficoDeMarcovByVagaoId = require("../sql_functions/read/vagoes.get_grafico_de_markov_by_vagao_id");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_vagao = req.query.id_vagao;

  getGraficoDeMarcovByVagaoId(id_vagao, res);
});

module.exports = router;
