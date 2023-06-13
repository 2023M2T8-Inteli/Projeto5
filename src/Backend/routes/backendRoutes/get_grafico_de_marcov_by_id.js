//Importa o framework express e o objeto router
var express = require("express");
var router = express.Router();

//Armazena na constante 'getGraficoDeMarcovByVagaoId' o módulo exportado 'getChoques'
const getGraficoDeMarcovByVagaoId = require("../../sql_functions/read/vagoes.get_grafico_de_markov_by_vagao_id");

//Definindo a rota que acessa as informações do banco de dados
router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_vagao = req.query.id_vagao;

  getGraficoDeMarcovByVagaoId(id_vagao, res);
});

//Exporta a função como módulo para poder ser usada em outras partes do projeto
module.exports = router;
