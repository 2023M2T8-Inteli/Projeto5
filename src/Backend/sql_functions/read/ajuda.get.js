const execSqlQquery = require("../connection");
const express = require("express");
const path = require("path");

const app = express();

app.locals.name = "teste";


app.locals.teste.get("/popupajuda", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../frontend/ajuda/popupajuda.html"));
});

module.exports = {
  app,
  execSqlQquery,
};
