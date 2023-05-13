const execSqlQquery = require("../connection");

function inserirTecnico(user_tecnico, senha_tecnico, nome_tecnico, res) {
  const query = `INSERT INTO tecnicos_ipt (user_tecnico, senha_tecnico, nome_tecnico) VALUES ('${user_tecnico}', '${senha_tecnico}', '${nome_tecnico}')`;

  execSqlQquery(query, res);
}

module.exports = inserirTecnico;
