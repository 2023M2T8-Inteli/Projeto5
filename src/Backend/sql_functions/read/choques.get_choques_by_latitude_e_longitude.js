//Definindo uma váriavel que acessa o banco de dados, por meio de uma conexão ao arquivo 'connection.js'
const execSqlQuery = require("../connection");

//Função que seleciona os dados no banco de dados
function getChoquesByLatitudeELongitude(latitude_choque, longitude_choque, res) {
  //A constante 'query' armazena o código SQL que esta selecionando na tabela 'choques' os dados de 'latitude_choque' e 'longitude_choque' que são iguais aos valores solicitados no parâmetro da função
  const query = `SELECT * FROM choques WHERE latitude_choque = '${latitude_choque}' and longitude_choque = '${longitude_choque}'`;

  //Conecta ao banco de dados
  execSqlQuery(query, res);
}

//Exportando a função 'getChoquesByLatitudeELongitude' para que seja possível a sua utilização por outros módulos dentro do projeto
module.exports = getChoquesByLatitudeELongitude;
