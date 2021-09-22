// requisito 3 - email e senha
function login() {
  let email = document.querySelector('.email');
  let password = document.querySelector('.password');
  if ( (email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert ('Olá, Tryber!');
  } else {
    alert ('Email ou senha inválidos.');
  }
}
let entrada = document.querySelector('.entrada');
entrada.addEventListener("click", login);
