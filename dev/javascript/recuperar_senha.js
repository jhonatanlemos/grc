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

// Navegação entre páginas

function CadastrarUsuario () {
    window.location.href = "http://127.0.0.1:5500/00-dev-grc/DEV/pages/cadastro_usuario.html";
    // window.location.href = "file://maquina07/Users/Public/Documents/DEV/pages/cadastro_usuario.html";
}