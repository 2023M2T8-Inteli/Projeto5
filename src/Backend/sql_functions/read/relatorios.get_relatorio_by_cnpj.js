//Conecta ao banco de dados
const execSqlQuery = require("../connection");

//Função que seleciona as informações no banco de dados
function getRelatoriosByCnpj(cnpj_empresa, res) {
  const query = `SELECT * FROM relatorios WHERE cnpj_empresa = ${cnpj_empresa}`;

  execSqlQuery(query, res);
}

//Exporta a função como módulo para poder ser usada em outras partes do projeto
module.exports = getRelatoriosByCnpj;
