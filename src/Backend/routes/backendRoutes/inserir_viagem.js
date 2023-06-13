//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site
var express = require("express");
var router = express.Router();

const inserirViagem = require("../../sql_functions/create/viagens.inserir_viagem");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const data_viagem = req.body.data_viagem;
  const id_relatorio = req.body.id_relatorio;

  inserirViagem(data_viagem, id_relatorio, res);
});

module.exports = router;
