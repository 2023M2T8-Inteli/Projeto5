const sqlite3 = require("sqlite3").verbose();
const path = require ('path');
const DBPATH = path.join(__dirname, "..", "database", "database.db"); 

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
