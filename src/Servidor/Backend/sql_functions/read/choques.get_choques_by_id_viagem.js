const execSqlQquery = require("../connection");

function getChoquesByIdViagem(
  id_viagem,
  res
) {
  const query = `SELECT latitude_choque, longitude_choque FROM 'Choques_All - Todos Choques' WHERE id_viagem = '${id_viagem}'`;

  execSqlQquery(query, res);
}

module.exports = getChoquesByIdViagem;
