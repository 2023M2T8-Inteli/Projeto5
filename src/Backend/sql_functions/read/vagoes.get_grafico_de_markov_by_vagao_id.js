//Conecta ao banco de dados
const execSqlQuery = require("../connection");

//Função que seleciona os dados no banco de dados
function getGraficoDeMarcovByVagaoId(id_vagao, res) {
  const query = `SELECT grafico_de_marcov_viagem FROM vagoes WHERE id_vagao = ${id_vagao}`;

  execSqlQuery(query, res);
}

//Exporta a função para que seja possível utilizar em outras partes do projeto
module.exports = getGraficoDeMarcovByVagaoId;
