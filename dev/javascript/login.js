let inputs = document.getElementsByClassName("input-form");
for(let input of inputs) {
    input.addEventListener("blur", function () {
        if(input.value.trim() != "") {
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    })
}

let form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
    let inputs = document.getElementsByClassName("input-form");
    for(let input of inputs) {
        if(input.value.trim() == "") {
            input.parentElement.classList.add("wrap-input-invalid");
        }
    }

    event.preventDefault();
})

function mostrarSenha(){
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

// Autenticação e Redirecionamento de Páginas
var email = document.getElementById("email");
var senha = document.getElementById("password");

const firebaseConfig = {
    apiKey: "AIzaSyCUQA5BVnKTtBPE1Xj1Wfm_iEbo4TbL-8A",
    authDomain: "sistema-grc-3a471.firebaseapp.com",
    projectId: "sistema-grc-3a471",
    storageBucket: "sistema-grc-3a471.appspot.com",
    messagingSenderId: "293268226715",
    appId: "1:293268226715:web:98821aee6c3bb51e0cbc3e"
};
        
firebase.initializeApp(firebaseConfig);

function Entrar () {
    firebase.auth().signInWithEmailAndPassword(
        email.value, senha.value
    ).then(response => {
        window.location.href = "http://127.0.0.1:5500/00-dev-grc/DEV/pages/main-layout.html";
        // window.location.href = "file://maquina07/Users/Public/Documents/DEV/pages/main-layout.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-email") {
        return "Usuário não encontrado";
    }
    return error.message;
}

function CadastrarUsuario () {
        window.location.href = "http://127.0.0.1:5500/00-dev-grc/DEV/pages/cadastro_usuario.html";
        // window.location.href = "file://maquina07/Users/Public/Documents/DEV/pages/cadastro_usuario.html";
}

function RecuperarSenha () {
    window.location.href = "http://127.0.0.1:5500/00-dev-grc/DEV/pages/recuperar_senha.html";
    // window.location.href = "file://maquina07/Users/Public/Documents/DEV/pages/recuperar_senha.html";
}