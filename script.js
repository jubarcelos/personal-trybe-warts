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
const check = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');
check.addEventListener('click', (event) => {
  event.target.classList.toggle('checked');
  if (check.className === 'checked') {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

// taskList.addEventListener('click', (event) => {
//   event.target.classList.toggle('checked');
// });

// perguntar para as meninas sobre o uso do className e classList para acessar esse checked.

// requisito 20

const textArea = document.querySelector('#textarea');
const count = document.querySelector('#counter');
textArea.addEventListener('input', () => {
  const arrayTextArea = textArea.value.split('');
  const limit = 500;
  const text = arrayTextArea.length;
  if (text <= limit) {
    const result = limit - text;
    count.innerHTML = result;
  }
});
