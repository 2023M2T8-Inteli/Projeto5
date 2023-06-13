//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site

//Conecta ao banco de dados
const execSqlQuery = require("../connection");
const express = require("express");
const path = require("path");

const app = express();

app.locals.name = "teste";


app.locals.teste.get("/esqueceuSenha", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../frontend/ajuda/esqueceusenha.html"));
});

module.exports = {
  app,
  execSqlQuery,
};
