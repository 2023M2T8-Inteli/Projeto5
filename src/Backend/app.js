const express = require("express");
const app = express();

const hostname = "http://localhost";
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "./database/database.db";

app.use(express.json());

//Endpoints
var inserirEmpresa = require("./routes/inserir_empresa");
app.use("/inserir-empresa", inserirEmpresa);

app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
