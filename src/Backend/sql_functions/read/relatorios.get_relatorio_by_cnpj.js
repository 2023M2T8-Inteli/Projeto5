const execSqlQquery = require("../connection");

function getRelatoriosByCnpj(cnpj_empresa, res) {
  const query = `SELECT * FROM relatorios WHERE cnpj_empresa = ${cnpj_empresa}`;

  execSqlQquery(query, res);
}

module.exports = getRelatoriosByCnpj;
