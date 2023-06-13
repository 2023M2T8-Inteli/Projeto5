//Importa o framework express e o objeto router
var express = require("express");
var router = express.Router();

//Puxa o código que acessa os dados no banco de dados de outro arquivo, neste caso de 'choques.get_forcas_choques.js'
const getForcasChoques = require("../../sql_functions/read/choques.get_forcas_choques");

//Definindo a rota que acessa as informações do banco de dados
router.get("/", (_, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  getForcasChoques(res);
});

//Exporta a função para ser usada em outras partes do projeto
module.exports = router;
