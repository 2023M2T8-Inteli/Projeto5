//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site

//Conecta ao banco de dados
const execSqlQuery = require("../connection");

//Função que insere dados no banco de dados
function inserirTecnico(user_tecnico, senha_tecnico, nome_tecnico, res) {
  const query = `INSERT INTO tecnicos_ipt (user_tecnico, senha_tecnico, nome_tecnico) VALUES ('${user_tecnico}', '${senha_tecnico}', '${nome_tecnico}')`;

  execSqlQuery(query, res);
}

//Exporta a função para que seja possível utilizá-la em outras partes do projeto
module.exports = inserirTecnico;
