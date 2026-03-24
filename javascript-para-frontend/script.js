/* ============================= */
/* Manipulação básica do DOM     */
/* ============================= */

const tituloDom = document.querySelector(".titulo-dom");
const paragrafoDom = document.querySelector(".paragrafo-dom");
const botaoDom = document.querySelector("#botao-dom");

botaoDom.addEventListener("click", () => {
    tituloDom.textContent = "Título alterado com JavaScript";
    paragrafoDom.textContent = "O parágrafo também foi alterado dinamicamente utilizando manipulação do DOM.";
});

/* ============================= */
/* Alternar classe CSS           */
/* ============================= */

const blocoToggle = document.querySelector("#bloco-toggle");
const botaoToggle = document.querySelector("#botao-toggle");

botaoToggle.addEventListener("click", () => {
    blocoToggle.classList.toggle("ativo");
});

/* ============================= */
/* Lista dinâmica                */
/* ============================= */

const campoItem = document.querySelector("#campo-item");
const botaoAdicionar = document.querySelector("#botao-adicionar");
const listaDinamica = document.querySelector("#lista-dinamica");

botaoAdicionar.addEventListener("click", () => {
    const textoDigitado = campoItem.value.trim();

    if (textoDigitado === "") {
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.textContent = textoDigitado;

    listaDinamica.appendChild(novoItem);
    campoItem.value = "";
    campoItem.focus();
});

/* ============================= */
/* Contador interativo           */
/* ============================= */

let contador = 0;

const contadorValor = document.querySelector("#contador-valor");
const botaoIncrementar = document.querySelector("#botao-incrementar");
const botaoDecrementar = document.querySelector("#botao-decrementar");

function atualizarContador() {
    contadorValor.textContent = contador;
}

botaoIncrementar.addEventListener("click", () => {
    contador++;
    atualizarContador();
});

botaoDecrementar.addEventListener("click", () => {
    contador--;
    atualizarContador();
});

/* ============================= */
/* Interação com múltiplos cards */
/* ============================= */

const cardsInterativos = document.querySelectorAll(".card-interativo");

cardsInterativos.forEach((card) => {
    card.addEventListener("click", () => {
        const jaEstaDestacado = card.classList.contains("destaque");

        cardsInterativos.forEach((item) => {
            item.classList.remove("destaque");
        });

        if (!jaEstaDestacado) {
            card.classList.add("destaque");
        }
    });
});