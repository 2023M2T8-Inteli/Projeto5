var express = require("express");
var router = express.Router();

const inserirRelatorio = require("../../sql_functions/create/relatorios.inserir_relatorio");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const data_relatorio = req.body.data_relatorio;
  const cnpj_empresa = req.body.cnpj_empresa;

  inserirRelatorio(data_relatorio, cnpj_empresa, res);
});

module.exports = router;
