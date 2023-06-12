const execSqlQuery = require("../connection");

function getChoques(id_viagem, tipo_engate, tipo_choque, res) {
  let query = `SELECT latitude_choque, longitude_choque FROM 'Choques_All' WHERE 1=1`;

  // Add filters based on the selected values
  if (id_viagem != 'null') {
    query += ` AND id_viagem = '${id_viagem}'`;
  }
  if (tipo_engate != 'null') {
    query += ` AND tipo_engate = '${tipo_engate}'`;
  }
  if (tipo_choque != 'null') {
    query += ` AND tipo_choque = '${tipo_choque}'`;
  }

  query += `LIMIT 100` // SOMENTE PARA TESTES [REMOVER DEPOIS]

  execSqlQuery(query, res);
}

module.exports = getChoques;
