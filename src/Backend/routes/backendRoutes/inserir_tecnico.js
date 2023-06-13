//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site
var express = require("express");
var router = express.Router();
const inserirTecnico = require("../../sql_functions/create/tecnicos_ipt.inserir_tecnico");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const user_tecnico = req.body.user_tecnico;
  const senha_tecnico = req.body.senha_tecnico;
  const nome_tecnico = req.body.nome_tecnico;

  inserirTecnico(user_tecnico, senha_tecnico, nome_tecnico, res);
});

module.exports = router;
