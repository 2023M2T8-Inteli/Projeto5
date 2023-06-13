const execSqlQuery = require("../connection");

function inserirVagao(tipo_vagao, res) {
  const query = `INSERT INTO vagoes (tipo_vagao) VALUES ('${tipo_vagao}')`;

  execSqlQuery(query, res);
}

module.exports = inserirVagao;
