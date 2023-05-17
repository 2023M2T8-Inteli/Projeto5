// Obtendo referência para o botão de entrada
const btnEntrar = document.getElementById('btnEntrar');

// Adicionando um evento de clique ao botão de entrada
btnEntrar.addEventListener('click', function() {
  // Obtendo os valores digitados pelo usuário
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  // Verificando as condições de usuário e senha
  if (usuario === 'tech5' && senha === '123') {
    // Redirecionando para a tela de login
    window.location.href = 'login.html';
  } else {
    alert('Usuário ou senha inválidos. Tente novamente.');
  }
});

