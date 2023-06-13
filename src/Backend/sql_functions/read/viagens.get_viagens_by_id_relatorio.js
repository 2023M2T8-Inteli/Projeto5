//Conecta ao banco de dados
const execSqlQuery = require("../connection");

//Função que seleciona as informações do banco de dados
function getViagensByIdRelatorio(id_relatorio, res) {
  const query = `SELECT relatorios.id_relatorio, data_viagem from relatorios INNER JOIN viagens on viagens.id_relatorio = relatorios.id_relatorio AND relatorios.id_relatorio = ${id_relatorio}`;

  execSqlQuery(query, res);
}

//Exporta a função como módula para poder ser utilizada em outras partes do projeto
module.exports = getViagensByIdRelatorio;
