// Variaveis
let btn = document.querySelector('.verSenha');
let btn2 = document.querySelector('.verConfirmarSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validConfirmarSenha = false;

let msgErro = document.querySelector('#msgErro');
let msgSucesso = document.querySelector('#msgSucesso');

// SENHA
btn.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha');
    if(inputSenha.getAttribute('type') == 'password') {
        btn.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        inputSenha.setAttribute('type', 'text');
    }
    else {
        btn.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        inputSenha.setAttribute('type', 'password');
    }
});

// Confirmar Senha
btn2.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
btn2.addEventListener('click', ()=> {
    let inputConfirmarSenha = document.querySelector('#confirmarSenha');
    if(inputConfirmarSenha.getAttribute('type') == 'password') {
        btn2.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        inputConfirmarSenha.setAttribute('type', 'text');
    }
    else {
        btn2.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        inputConfirmarSenha.setAttribute('type', 'password');
    }
});

// Verificação dos campos 

// Tela de Registro

// Nome
nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style','color:red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres!'
        nome.setAttribute('style','border-color:red')
        validNome = false;
    }
    else {
        labelNome.setAttribute('style','color:black');
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style','border-color:black')
        validNome = true;
    }
})

// Usuario
usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length <= 3) {
        labelUsuario.setAttribute('style','color:red');
        labelUsuario.innerHTML = 'Usuario *Insira no mínimo 4 caracteres!'
        usuario.setAttribute('style','border-color:red')
        validUsuario = false;
    }
    else {
        labelUsuario.setAttribute('style','color:black');
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style','border-color:black')
        validUsuario = true;
    }
})

// Senha
senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style','color:red');
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres!'
        senha.setAttribute('style','border-color:red')
        validSenha = false;
    }
    else {
        labelSenha.setAttribute('style','color:black');
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style','border-color:black')
        validSenha = true;
    }
})

// Confirmar Senha
confirmarSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style','color:red');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha *Senhas são diferentes!'
        confirmarSenha.setAttribute('style','border-color:red')
        validConfirmarSenha = false;
    }
    else {
        labelConfirmarSenha.setAttribute('style','color:black');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha'
        confirmarSenha.setAttribute('style','border-color:black')
        validConfirmarSenha = true;
    }
})

// Botão Cadastro
function cadastrar() {
    if(validNome && validUsuario && validSenha  && validConfirmarSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        listaUser.push({
            nomeCad: nome.value,
            usuarioCad: usuario.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSucesso.setAttribute('style','display:block');
        msgSucesso.innerHTML = 'Cadastrado com Sucesso!'
        msgErro.setAttribute('style','display:none');
        msgErro.innerHTML = '';

        setTimeout(() => {
            window.location.href = '../index.html'
        },3000)
    }
    else {
        msgErro.setAttribute('style','display:block');
        msgErro.innerHTML = 'Preencha os campos corretamente!'
        msgSucesso.setAttribute('style','display:none');
        msgSucesso.innerHTML = '';
    }
}

// Botão Logar

function logar() {
    
}