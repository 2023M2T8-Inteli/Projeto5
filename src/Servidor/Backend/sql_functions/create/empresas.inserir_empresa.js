const execSqlQquery = require("../connection");

function inserirEmpresa(cnpj_empresa, senha_empresa, nome_empresa, res) {
  const query = `INSERT INTO empresas (cnpj_empresa, senha_empresa, nome_empresa) VALUES (${cnpj_empresa}, ${senha_empresa}, '${nome_empresa}')`;

  execSqlQquery(query, res);
}

module.exports = inserirEmpresa;
