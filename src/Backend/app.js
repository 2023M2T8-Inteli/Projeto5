const express = require("express");
const app = express();

const hostname = "http://localhost";
const port = 3000;
const path = require ('path');

app.use(express.json());

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

app.get("/login", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/login/login.html")

)});

app.get("/home", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/home/home.html")
)});



app.get("/esqueceuasenha", (req, res)=>{
    res.sendFile(
        path.resolve(__dirname + "/../frontend/esqueceuSenha/esqueceuasenha.html")

)});


app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
