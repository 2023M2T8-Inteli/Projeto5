const execSqlQuery = require("../connection");

function inserirViagem(data_viagem, id_relatorio, res) {
  const query = `INSERT INTO viagens (data_viagem, id_relatorio) VALUES (date('${data_viagem}'), '${id_relatorio}')`;

  execSqlQuery(query, res);
}

module.exports = inserirViagem;
