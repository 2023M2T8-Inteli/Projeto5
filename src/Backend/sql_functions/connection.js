//Criando uma instância do objeto 'sqlite3' com mensagens de depuração habilitadas
const sqlite3 = require("sqlite3").verbose();
//Importa o módulo 'path' para trabalhar com caminhos de arquivos e diretório
const path = require ('path');
//Armazena o caminho absoluto da 'database.db' na constante DBPATH
const DBPATH = path.join(__dirname, "..", "database", "database.db"); 

//Essa função é responsável por acessar o banco de dados
function execSqlQuery(query, res) {
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

//Exportando a função 'execSqlQquery' para que seja possível a sua utilização por outros módulos dentro do projeto
module.exports = execSqlQuery;
