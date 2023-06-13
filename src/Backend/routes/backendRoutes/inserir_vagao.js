//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site
var express = require("express");
var router = express.Router();

const inserirVagao = require("../../sql_functions/create/vagoes.inserir_vagao");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const tipo_vagao = req.body.tipo_vagao;

  inserirVagao(tipo_vagao, res);
});

module.exports = router;
