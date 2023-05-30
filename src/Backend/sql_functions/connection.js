const sqlite3 = require("sqlite3").verbose();
const DBPATH =
  "C:/Users/Inteli/Desktop/projeto_modulo_2/src/Backend/database/database.db";

function execSqlQquery(query, res) {
  var db = new sqlite3.Database(DBPATH);
  db.all(query, [], (error, rows) => {
    if (error) {
      throw error;
    } else {
      res.json(rows);
    }
  });

  db.close();
}

module.exports = execSqlQquery;
