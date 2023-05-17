function verificar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
  
    if (usuario === "tech5" && senha === "123") {
      // Usuário e senha corretos, redireciona para a tela inicial
      console.log("Foi")

    //   window.location.href = "telahome.html";
    } else {
      // Exibe mensagem de erro
      alert("Usuário e/ou senha incorretos.");
      // Impede o envio do formulário
      event.preventDefault();
    }
  }



