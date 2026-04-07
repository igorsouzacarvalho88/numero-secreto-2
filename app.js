let titulo = document.querySelector('h1');
titulo.innerHTML = ('Jogo do número secreto');

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = ('Tente advinhar o número secreto entre 1 e 100');

function verificarChute(){
    console.log('Verificando o chute');
    let chute = document.querySelector('#chute').value;
}
