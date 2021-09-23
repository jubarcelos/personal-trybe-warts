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

// requisito 18 
// Confere se o check está marcado e desabilita o submit do button caso não esteja. 
// usando a resposta de "lrpinheiro" no site:  https://pt.stackoverflow.com/questions/22439/como-habilitar-e-desabilitar-bot%C3%A3o-a-partir-do-onclick-ou-onchange-do-select;
// e também a resposta de "Pranav" no site: https://qastack.com.br/programming/9887360/how-can-i-check-if-a-checkbox-is-checked

function disabledCheck() {
  const submit = document.querySelector('#submit-btn');
  const checkAgree = document.querySelector('#agreement');
  if (checkAgree.checked (submit.disabled)) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};
disabledCheck()