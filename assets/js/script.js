var nome = window.document.getElementById('nome')
var nomeOk = false
var email = document.querySelector('#email')
var emailOk = false

function validarNome() {
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.value.length > 3 && nome.value.indexOf(' ') > 0) {
        TxtNome.innerHTML = 'Nome Válido! 😃'
        TxtNome.style.color = 'green'
        nomeOk = true
    } else {
        TxtNome.innerHTML = 'Nome Inválido! 😢'
        TxtNome.style.color = 'red'
        nomeOk = false
    }
}

function validarEmail() {
    let TxtEmail = document.querySelector('#TxtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        TxtEmail.innerHTML = 'E-mail Válido! 😃'
        TxtEmail.style.color = 'green'
        emailOk = true
    } else {
        TxtEmail.innerHTML = 'E-mail Inválido! 😢'
        TxtEmail.style.color = 'red'
        emailOk = false
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true) {
        alert('Preenchido corretamente, enviado!')
    } else {
        alert('Preencha o campo corretamente')
    }
}

function buscarTexto() {
    let input = document.getElementById('busca').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('buscas');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}

var btn = document.querySelector('#btnn');

btn.addEventListener('click', ss);

function ss(e) {
    e.preventDefault();
}