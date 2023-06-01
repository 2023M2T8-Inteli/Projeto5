const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require('sqlite3').verbose();

const express = require("express");
const app = express();

const hostname = "http://localhost";
const port = 3000;
const path = require ('path');

app.use(express.json());
app.use(express.static("public"));

//Endpoints
const inserirTecnico = require("./routes/backendRoutes/inserir_tecnico");
app.use("/inserir-tecnico", inserirTecnico);

const inserirEmpresa = require("./routes/backendRoutes/inserir_empresa");
app.use("/inserir-empresa", inserirEmpresa);

const inserirRelatorio = require("./routes/backendRoutes/inserir_relatorio");
app.use("/inserir-relatorio", inserirRelatorio);

const inserirViagem = require("./routes/backendRoutes/inserir_viagem");
app.use("/inserir-viagem", inserirViagem);

const inserirVagao = require("./routes/backendRoutes/inserir_vagao");
app.use("/inserir-vagao", inserirVagao);

const inserirChoque = require("./routes/backendRoutes/inserir_choque");
app.use("/inserir-choque", inserirChoque);

const getRelatoriosByCnpj = require("./routes/backendRoutes/get_relatorio_by_cnpj");
app.use("/get-relatorios-by-cnpj", getRelatoriosByCnpj);

const getGraficoDeMarcovByVagaoId = require("./routes/backendRoutes/get_grafico_de_marcov_by_id");
app.use("/get-grafico-de-markov-by-vagao-id", getGraficoDeMarcovByVagaoId);

const getChoquesByLatitudeELongitude = require("./routes/backendRoutes/get_choques_by_latitude_e_longitude");
app.use("/get-choques-by-latitude-e-longitude", getChoquesByLatitudeELongitude);

const getViagensByIdRelatorio = require("./routes/backendRoutes/get_viagens_by_id_relatorio");
app.use("/get-viagens-by-id-relatorio", getViagensByIdRelatorio);

const main = require("./routes/frontendRoutes/get_main");
app.use("/", main)

const home = require("./routes/frontendRoutes/get_home");
app.use("/home", home)

const ajuda = require("./routes/frontendRoutes/get_ajuda");
app.use("/ajuda", ajuda)

const analise = require("./routes/frontendRoutes/get_analise");
app.use("/analise", analise)

const comparacao = require("./routes/frontendRoutes/get_comparacao");
app.use("/comparacao", comparacao)

app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
