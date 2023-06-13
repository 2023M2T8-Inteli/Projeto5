//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site


//Conecta ao banco de dados
const execSqlQuery = require("../connection");

//Função que insere dados no banco de dados
function inserirViagem(data_viagem, id_relatorio, res) {
  const query = `INSERT INTO viagens (data_viagem, id_relatorio) VALUES (date('${data_viagem}'), '${id_relatorio}')`;

  execSqlQuery(query, res);
}

//Exporta a função para que seja possível utilizá-la em outras partes do projeto
module.exports = inserirViagem;
