<<<<<<< Updated upstream
function verificar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
  
    if (usuario === "tech5" && senha === "123") {
      // Usuário e senha corretos, redireciona para a tela inicial
      console.log("Foi")
=======
const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const hostname = "127.0.0.1";
const port = 3031;
const db = new sqlite3.Database("database.db")

const path = require("path");
const cors = require("cors");
const bp = require("body-parser");
const cookieParser = require("cookie-parser");
const urlencodedParser = bp.urlencoded({ extended: false })
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//app.use(express.static("../frontend/Parceiro"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// Obtendo referência para o botão de entrada
const btnEntrar = document.getElementById('btnEntrar');
>>>>>>> Stashed changes

    //   window.location.href = "telahome.html";
    } else {
      // Exibe mensagem de erro
      alert("Usuário e/ou senha incorretos.");
      // Impede o envio do formulário
      event.preventDefault();
    }
  }



