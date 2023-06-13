//Importação de módulos para o servidor funcionar
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require("sqlite3").verbose();

//Configuração do servidor
const express = require("express");
const app = express();
const hostname = "http://localhost";
const port = 3000;
const path = require("path");

//Configuração de middlewares
app.use(express.json());
app.use("/public", express.static('./public/'));

//Endpoints do back-end
/* Inserção de dados no banco de dados */
const inserirTecnico = require("./Backend/routes/backendRoutes/inserir_tecnico.js");
app.use("/inserir-tecnico", inserirTecnico);
const inserirEmpresa = require("./Backend/routes/backendRoutes/inserir_empresa.js");
app.use("/inserir-empresa", inserirEmpresa);
const inserirRelatorio = require("./Backend/routes/backendRoutes/inserir_relatorio.js");
app.use("/inserir-relatorio", inserirRelatorio);
const inserirViagem = require("./Backend/routes/backendRoutes/inserir_viagem.js");
app.use("/inserir-viagem", inserirViagem);
const inserirVagao = require("./Backend/routes/backendRoutes/inserir_vagao.js");
app.use("/inserir-vagao", inserirVagao);
const inserirChoque = require("./Backend/routes/backendRoutes/inserir_choque.js");
app.use("/inserir-choque", inserirChoque);

/* Pegando informações do banco de dados */
const getRelatoriosByCnpj = require("./Backend/routes/backendRoutes/get_relatorio_by_cnpj.js");
app.use("/get-relatorios-by-cnpj", getRelatoriosByCnpj);
const getGraficoDeMarcovByVagaoId = require("./Backend/routes/backendRoutes/get_grafico_de_marcov_by_id.js");
app.use("/get-grafico-de-markov-by-vagao-id", getGraficoDeMarcovByVagaoId);
const getChoquesByLatitudeELongitude = require("./Backend/routes/backendRoutes/get_choques_by_latitude_e_longitude.js");
app.use("/get-choques-by-latitude-e-longitude", getChoquesByLatitudeELongitude);
const getViagensByIdRelatorio = require("./Backend/routes/backendRoutes/get_viagens_by_id_relatorio.js");
app.use("/get-viagens-by-id-relatorio", getViagensByIdRelatorio);
const getChoques = require("./Backend/routes/backendRoutes/get_choques.js");
app.use("/get-choques", getChoques);

//Endpoints do front-end
const main = require("./Backend/routes/frontendRoutes/get_main.js");
app.use("/", main);

const comparacao = require("./Backend/routes/frontendRoutes/get_comparacao.js");
app.use("/comparacao", comparacao);

const home = require("./Backend/routes/frontendRoutes/get_home.js");
app.use("/home", home);

const analise = require("./Backend/routes/frontendRoutes/get_analise.js");
app.use("/analise", analise);

const relatorios = require("./Backend/routes/frontendRoutes/get_relatorios.js");
app.use("/relatorios", relatorios);

const esqueceSenha = require("./Backend/routes/frontendRoutes/get_esqueceSenha.js");
app.use("/esqueceSenha", esqueceSenha);

//Definindo a porta em que o servidor aguarda e processa as requisições
app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
