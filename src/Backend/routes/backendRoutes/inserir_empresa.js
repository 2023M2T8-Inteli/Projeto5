var express = require("express");
var router = express.Router();
const inserirEmpresa = require("../sql_functions/create/empresas.inserir_empresa");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const cnpj_empresa = req.body.cnpj_empresa;
  const senha_empresa = req.body.senha_empresa;
  const nome_empresa = req.body.nome_empresa;

  inserirEmpresa(cnpj_empresa, senha_empresa, nome_empresa, res);
});

module.exports = router;
