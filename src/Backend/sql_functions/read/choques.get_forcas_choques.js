const execSqlQquery = require("../connection");

function getForcasChoques(res) {
  const query = `SELECT tipo_choque, forca_maxima_choque FROM 'Choques_All - Todos Choques'`;

  execSqlQquery(query, res);
}

module.exports = getForcasChoques;
