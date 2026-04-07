let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Tente advinhar o número secreto entre 1 e 10');


function verificarChute(){
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio(){
   return parseInt (Math.random() * 10 + 1);
}