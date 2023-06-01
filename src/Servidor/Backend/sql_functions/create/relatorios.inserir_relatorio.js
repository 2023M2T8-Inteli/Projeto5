const execSqlQquery = require("../connection");

function inserirRelatorio(data_relatorio, cnpj_empresa, res) {
  const query = `INSERT INTO relatorios (data_relatorio, cnpj_empresa) VALUES (date('${data_relatorio}'), '${cnpj_empresa}')`;

  execSqlQquery(query, res);
}

module.exports = inserirRelatorio;
