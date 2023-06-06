const execSqlQquery = require("../sql_functions/connection");

function getLatitudeELongitudeChoques(res){
    const query = `SELECT latitude_choque, longitude_choque FROM "Choques_All - Todos Choques"`;
    execSqlQquery(query, res);
}
  
module.exports = getLatitudeELongitudeChoques;