//Conecta ao banco de dados
const execSqlQquery = require("../connection");

//Função que seleciona as informações da coluna `tipo_choque` e `forca_maxima_choque` da tabela 'Choques_All - Todos Choques' 
function getForcasChoques(res) {
  const query = `SELECT tipo_choque, forca_maxima_choque FROM 'Choques_All - Todos Choques'`;

  execSqlQquery(query, res);
}

//Exporta a função para ser usada em outras partes do projeto
module.exports = getForcasChoques;
