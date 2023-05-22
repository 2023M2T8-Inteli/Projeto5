function verificar(event) {
  event.preventDefault(); // Impede o envio do formulário

  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario === "tech5" && senha === "123") {
    // Usuário e senha corretos, redireciona para a tela inicial
    window.location.href = "home.html";
  } else {
    // Exibe mensagem de erro
    alert("Usuário e/ou senha incorretos.");
  }
}





