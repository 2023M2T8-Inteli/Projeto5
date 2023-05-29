var express = require("express");
var router = express.Router();

const getRelatoriosByCnpj = require("../sql_functions/read/relatorios.get_relatorio_by_cnpj");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const cnpj_empresa = req.query.cnpj_empresa;

  getRelatoriosByCnpj(cnpj_empresa, res);
});

module.exports = router;
