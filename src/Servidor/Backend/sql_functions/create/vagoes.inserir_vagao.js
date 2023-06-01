const execSqlQquery = require("../connection");

function inserirVagao(tipo_vagao, res) {
  const query = `INSERT INTO vagoes (tipo_vagao) VALUES ('${tipo_vagao}')`;

  execSqlQquery(query, res);
}

module.exports = inserirVagao;
