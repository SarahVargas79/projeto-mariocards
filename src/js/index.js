// Variável para trabalhar com a listagem de mariocards.
const listaSelecaoMariocards = document.querySelectorAll(".mariocard");
console.log(listaSelecaoMariocards);

// Identificação do evento de clique no elemento da listagem.
listaSelecaoMariocards.forEach(mariocard => {
    mariocard.addEventListener("click", () => {
        // Removendo a classe aberto só do cartão que tá aberto.
        esconderCartaoMariocard();

        // Ao clicar em um mariocard da lista pegasse o id desse mariocard para saber qual cartão abrir.
        const idMariocardSelecionado = mostrarCartaoMariocardSelecionado(mariocard);

        // Removendo a classe ativo que marca o mariocard selecionado na listagem.
        desativarMariocardNaListagem();

        // Adicinando a classe ativo no mariocard selecionado na listagem.
        ativarMariocardSelecionadoNaListagem(idMariocardSelecionado);
    })
})

function ativarMariocardSelecionadoNaListagem(idMariocardSelecionado) {
    const mariocardSelecionadoNaListagem = document.getElementById(idMariocardSelecionado);
    mariocardSelecionadoNaListagem.classList.add("ativo");
}

function desativarMariocardNaListagem() {
    const mariocardAtivoNaListagem = document.querySelector(".ativo");
    mariocardAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoMariocardSelecionado(mariocard) {
    const idMariocardSelecionado = mariocard.attributes.id.value;
    const idDoCartaoMariocardParaAbrir = "cartao-" + idMariocardSelecionado;
    const cartaoMariocardParaAbrir = document.getElementById(idDoCartaoMariocardParaAbrir);
    cartaoMariocardParaAbrir.classList.add("aberto");
    return idMariocardSelecionado;
}

function esconderCartaoMariocard() {
    const cartaoMariocardAberto = document.querySelector(".aberto");
    cartaoMariocardAberto.classList.remove("aberto");
}
