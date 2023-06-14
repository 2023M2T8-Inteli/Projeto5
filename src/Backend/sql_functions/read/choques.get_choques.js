//Conecta ao banco de dados pegando o código do 'connection.js'
const execSqlQuery = require("../connection");

//Função que seleciona as colunas 'id_viagem', 'tipo_engate' e 'tipo_choque' da tabela 'Choques_All' de acordo com a condição '1=1' e com os valores especificados dentro de cada `if`
function getChoques(id_viagem, tipo_engate, tipo_choque, res) {
  let query = `SELECT * FROM 'choques' WHERE 1=1`;

  // Add filters based on the selected values
  if (id_viagem != null) {
    query += ` AND id_viagem = '${id_viagem}'`;
  }
  if (tipo_engate != null) {
    query += ` AND tipo_engate = '${tipo_engate}'`;
  }
  if (tipo_choque != null) {
    query += ` AND tipo_choque = '${tipo_choque}'`;
  }

  query += ` LIMIT 120` // SOMENTE PARA TESTES [REMOVER DEPOIS]

  execSqlQuery(query, res);
}

//Exporta a função como módulo para poder ser usada em outras partes do projeto
module.exports = getChoques;
