//Essa rota não esta sendo utilizada no projeto
//No entanto construir essa rota a partir da estrutura que aqui se encontra pode ser útil para facilitar o desenvolvimento das futuras melhorias no site

//Conecta ao baco de dados
const execSqlQuery = require("../connection");

//Função que insere dados no banco de dados
function inserirEmpresa(cnpj_empresa, senha_empresa, nome_empresa, res) {
  const query = `INSERT INTO empresas (cnpj_empresa, senha_empresa, nome_empresa) VALUES (${cnpj_empresa}, ${senha_empresa}, '${nome_empresa}')`;

  execSqlQuery(query, res);
}

//Exporta a função para que seja possível utilizá-la em outras partes do projeto
module.exports = inserirEmpresa;
