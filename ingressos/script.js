const titulo = document.getElementById("titulo");
const campoBusca = document.getElementById("busca");
const listaEventos = document.getElementById("eventos");
const botaoComprar = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
const itens = document.querySelectorAll("#eventos li");

itens.forEach(function (item) {
    console.log("Evento:", item.textContent);
});

campoBusca.addEventListener("keyup", function (event) {
    const termo = event.target.value.toLowerCase().trim();

    itens.forEach(function (item) {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(termo)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

itens.forEach(function (item) {
    item.addEventListener("click", function () {
        itens.forEach(function (el) {
            el.classList.remove("active");
        });

        item.classList.add("active");
    });
});

botaoComprar.addEventListener("click", function () {
    const itemSelecionado = document.querySelector("#eventos li.active");

    if (itemSelecionado) {
        mensagem.textContent = "Ingresso para " + itemSelecionado.textContent + " comprado com sucesso!";
        mensagem.className = "alert alert-success mt-3";
        mensagem.hidden = false;
    } else {
        mensagem.textContent = "Por favor, clique em um evento da lista para selecionar.";
        mensagem.className = "alert alert-warning mt-3";
        mensagem.hidden = false;
    }
});
