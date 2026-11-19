const formCadastro = document.getElementById("form-cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const categoria = document.getElementById("categoria");
const termos = document.getElementById("termos");
const alertaCadastro = document.getElementById("alerta-cadastro");

function mostrarAlerta(texto, tipo) {
    alertaCadastro.textContent = texto;
    alertaCadastro.className = "alert alert-" + tipo;
    alertaCadastro.hidden = false;
}

formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = {
        nome: nome.value.trim(),
        email: email.value.trim().toLowerCase(),
        senha: senha.value,
        categoria: categoria.value,
        aceitouTermos: termos.checked
    };

    console.log(usuario);

    const nomeCategoria = categoria.selectedOptions[0].textContent;

    mostrarAlerta(
        `Cadastro realizado, ${usuario.nome}! E-mail: ${usuario.email}. Categoria preferida: ${nomeCategoria}.`,
        "success"
    );

    formCadastro.reset();

    const destino = window.location.pathname.includes("/login/") ? "../ingressos/index.html" : "ingressos/index.html";
    window.location.href = destino;
});
