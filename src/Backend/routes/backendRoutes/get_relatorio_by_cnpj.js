//Importa o framework express e o objeto router
var express = require("express");
var router = express.Router();

//Armazena na constante 'getRelatoriosByCnpj' o módulo exportado 'getChoques'
const getRelatoriosByCnpj = require("../../sql_functions/read/relatorios.get_relatorio_by_cnpj");

//Definindo a rota que acessa as informações do banco de dados
router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const cnpj_empresa = req.query.cnpj_empresa;

  getRelatoriosByCnpj(cnpj_empresa, res);
});

//Exporta a função como módulo para poder ser usada em outras partes do projeto
module.exports = router;
