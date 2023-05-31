//Essa rota não precisa acessar o DB

const execSqlQquery = require("../connection");
const express = require("express");
const path = require("path");

const app = express();

app.locals.name = "teste";


app.locals.teste.get("/esqueceuSenha", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../frontend/ajuda/esqueceusenha.html"));
});

module.exports = {
  app,
  execSqlQquery,
};
