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

// requisito 18 Confere se o check está marcado e desabilita o submit do button caso não esteja. A resposta de "Pranav" no site: https://qastack.com.br/programming/9887360/how-can-i-check-if-a-checkbox-is-checked nos fez pensar em uma saída, mas só depois de ver o código das meninas Meiryland e Camila é que conseguimos acertar o nosso.

function addCheck() {
  const check = document.querySelector('#agreement');
  const submit = document.querySelector('#submit-btn');
  check.addEventListener('click', () => {
    if (check.className === 'checked') {
      check.classList.remove('checked');
    } else {
      check.className = 'checked';
    }
    if (check.className === 'checked') {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  });
}
addCheck();

// perguntar para as meninas sobre o uso do className e classList para acessar esse checked.

// requisito 20

const textArea = document.querySelector('#textarea');
textArea.addEventListener('input', () =>{
 
  const limit = 500;
  let total = parseInt(textArea.value);
  if(total <= limit) {
    let resto = limit - total;
    document.getElementById('textarea').innerText = resto;
 }
 console.log('resto')
})
