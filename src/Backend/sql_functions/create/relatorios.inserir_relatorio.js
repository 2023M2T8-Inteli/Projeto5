//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site

//Conecta ao Banco de dados
const execSqlQuery = require("../connection");

//Insere relatório no banco de dados
function inserirRelatorio(data_relatorio, cnpj_empresa, res) {
  const query = `INSERT INTO relatorios (data_relatorio, cnpj_empresa) VALUES (date('${data_relatorio}'), '${cnpj_empresa}')`;

  execSqlQuery(query, res);
}

//Exporta a função para que seja possível utilizá-la em outras partes do projeto
module.exports = inserirRelatorio;
