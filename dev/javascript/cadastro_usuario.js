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

function mostrarSenhaConfirm(){
    var inputPassConfirm = document.getElementById('password-confirmacao')
    var btnShowPassConfirm = document.getElementById('btn-senha-confirmacao')

    if(inputPassConfirm.type === 'password'){
        inputPassConfirm.setAttribute('type','text')
        btnShowPassConfirm.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPassConfirm.setAttribute('type','password')
        btnShowPassConfirm.classList.replace('bi-eye-slash','bi-eye')
    }
}

// Navegação entre páginas

function FazerLogin () {
    window.location.href = "http://127.0.0.1:5500/00-dev-grc/DEV/pages/login.html";
    // window.location.href = "file://maquina07/Users/Public/Documents/DEV/pages/login.html";
}