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

// requisito 18 - A resposta de "Pranav" no site: https://qastack.com.br/programming/9887360/how-can-i-check-if-a-checkbox-is-checked e o código do colega João Melo conseguimos arrumar o nosso.
const checkAgree = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');
checkAgree.addEventListener('click', () => {
  if (checkAgree.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
// sem if nem nada usar : submit.disabled = !submit.disabled

// Pensamos também nessa solução das classes conversando e vendo o código da Camila.
// const check = document.querySelector('#agreement');
// const submit = document.querySelector('#submit-btn');
// check.addEventListener('click', (event) => {
//   event.target.classList.toggle('checked');
//   if (check.className === 'checked') {
//     submit.disabled = false;
//   } else {
//     submit.disabled = true;
//   }
// });

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

// escutar o botão de envio e armazenar nos próprios inputs as informações preenchidas e as solicitações.
const allForm = document.querySelector('#evaluation-form');
const clearForm = () => allForm.innerHTML = '';

const family = document.querySelectorAll('.family');
const allRate = document.querySelectorAll('.rate');
let inputFamily = '';
let inputRate = '';

function checkSubjects() {
  let personSubjects = '';
  const checkedButtons = document.querySelectorAll('.subject:checked');
  for (let i = 0; i < checkedButtons.length; i += 1) {
    personSubjects += checkedButtons[i].value;
    if (i + 1 !== checkedButtons.length) {
      personSubjects += ', ';
    }
  }
  return personSubjects;
}

family.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    inputFamily = event.target.value;
  });
});

allRate.forEach((rate) => {
  rate.addEventListener('click', (event) => {
    inputRate = event.target.value;
  });
});
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const formAnswers = (`\n
  Nome: ${document.querySelector('#input-name').value} ${document.querySelector('#input-lastname').value}
    Email: ${document.querySelector('#input-email').value}
    Casa: ${document.querySelector('#house').value}
    Família: ${inputFamily}
    Avaliação: ${inputRate}
    Matérias: ${checkSubjects()}
    Observações: ${document.querySelector('#textarea').value}`);
  clearForm()
  document.querySelector('#evaluation-form').innerHTML = formAnswers;
});