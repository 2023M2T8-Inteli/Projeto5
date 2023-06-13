const execSqlQuery = require("../connection");

function getGraficoDeMarcovByVagaoId(id_vagao, res) {
  const query = `SELECT grafico_de_marcov_viagem FROM vagoes WHERE id_vagao = ${id_vagao}`;

  execSqlQuery(query, res);
}

module.exports = getGraficoDeMarcovByVagaoId;
