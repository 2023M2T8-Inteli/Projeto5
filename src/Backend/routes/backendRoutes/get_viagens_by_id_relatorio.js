//Importa o framework express e o objeto router
var express = require("express");
var router = express.Router();

//Armazena na constante 'getViagensByIdRelatorio' o módulo exportado 'getViagensByIdRelatorio'
const getViagensByIdRelatorio = require("../../sql_functions/read/viagens.get_viagens_by_id_relatorio");

//Definindo a rota que acessa as informações do banco de dados
router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id_relatorio = req.query.id_relatorio;

  getViagensByIdRelatorio(id_relatorio, res);
});

//Exporta a função como módulo para poder ser usada em outras partes do projeto
module.exports = router;
