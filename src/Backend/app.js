const express = require("express");
const app = express();

const hostname = "http://localhost";
const port = 3000;

app.use(express.json());

//Endpoints
const inserirEmpresa = require("./routes/inserir_empresa");
app.use("/inserir-empresa", inserirEmpresa);

const inserirTecnico = require("./routes/inserir_tecnico");
app.use("/inserir-tecnico", inserirTecnico);

app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
