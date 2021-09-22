// requisito 3 - email e senha
function login() {
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const entrada = document.querySelector('.entrada');
entrada.addEventListener('click', login);
