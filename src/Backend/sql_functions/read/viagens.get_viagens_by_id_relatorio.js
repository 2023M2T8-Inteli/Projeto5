const execSqlQuery = require("../connection");

function getViagensByIdRelatorio(id_relatorio, res) {
  const query = `SELECT relatorios.id_relatorio, data_viagem from relatorios INNER JOIN viagens on viagens.id_relatorio = relatorios.id_relatorio AND relatorios.id_relatorio = ${id_relatorio}`;

  execSqlQuery(query, res);
}

module.exports = getViagensByIdRelatorio;
