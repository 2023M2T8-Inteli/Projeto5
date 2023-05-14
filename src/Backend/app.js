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

const inserirRelatorio = require("./routes/inserir_relatorio");
app.use("/inserir-relatorio", inserirRelatorio);

const inserirViagem = require("./routes/inserir_viagem");
app.use("/inserir-viagem", inserirViagem);

const inserirVagao = require("./routes/inserir_vagao");
app.use("/inserir-vagao", inserirVagao);

const inserirChoque = require("./routes/inserir_choque");
app.use("/inserir-choque", inserirChoque);

const getRelatoriosByCnpj = require("./routes/get_relatorio_by_cnpj");
app.use("/get-relatorios-by-cnpj", getRelatoriosByCnpj);

const getGraficoDeMarcovByVagaoId = require("./routes/get_grafico_de_marcov_by_id");
app.use("/get-grafico-de-markov-by-vagao-id", getGraficoDeMarcovByVagaoId);

app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
