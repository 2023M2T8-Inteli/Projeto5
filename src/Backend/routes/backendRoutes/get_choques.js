//Importa o framework express e o objeto router
var express = require("express");
var router = express.Router();

//Armazena na constante 'getChoques' o módulo exportado 'getChoques'
const getChoques = require("../../sql_functions/read/choques.get_choques");

//Definindo a rota que acessa as informações do banco de dados
router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_viagem = req.query.id_viagem;
  const tipo_engate = req.query.tipo_engate
  const tipo_choque = req.query.tipo_choque

  getChoques(id_viagem, tipo_engate, tipo_choque, res);
});

//Exporta a função como módulo para poder ser usada em outras partes do projeto
module.exports = router;
