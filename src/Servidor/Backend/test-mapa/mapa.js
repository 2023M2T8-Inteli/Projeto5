const execSqlQquery = require("./../connection");

function getChoquesByLatitudeELongitude(
    latitude_choque,
    longitude_choque,
    res
  ) {
    const query = `SELECT * FROM choques WHERE latitude_choque = '${latitude_choque}' and longitude_choque = '${longitude_choque}'`;
  
    execSqlQquery(query, res);
  }
  
  module.exports = getChoquesByLatitudeELongitude;