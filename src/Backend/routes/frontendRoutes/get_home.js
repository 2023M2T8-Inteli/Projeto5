//Importa o express e insere na variável 'router' a classe 'Router' do express
var express = require("express");
var router = express.Router();

//Importação do módulo path para facilitar o trabalho com caminhos dos arquivos
const path = require("path");

//Define uma rota do tipo get
router.get("/", (_, res) => {
  res.sendFile(
    path.resolve(
      __dirname + "./../../../frontend/paginas/homepage/homepage.html"
    )
  );
});

//Exportação do módulo para uso da rota no app.js
module.exports = router;
