const gerarNumeroAleatorio = () => {
    var numero = Math.floor(Math.random() * 76);
    return numero;
}

const adicionarNumero = (numero) => {
    numerosUsados.push(numero);
    localStorage.setItem('numerosUsados', numerosUsados);
    h2.innerText = localStorage.getItem('numerosUsados')
}

const rotina = () => {
    var numeroAtual = gerarNumeroAleatorio();
    if (numerosUsados.indexOf(numeroAtual) == -1) {
        adicionarNumero(numeroAtual);
        h1.innerHTML = numeroAtual;
    } else {
        let numeroAtualLet = gerarNumeroAleatorio();
        while (numerosUsados.indexOf(numeroAtualLet) != -1) {
            numeroAtualLet = gerarNumeroAleatorio();
        }
        adicionarNumero(numeroAtualLet);
        h1.innerText = numeroAtualLet;
    }
}


const reset = () => {
    numerosUsados = [];
    localStorage.setItem('numerosUsados', numerosUsados)
    h1.innerText = 'Clique em Gerar Numero.'
    h2.innerText = 'Sem registro'
}



var numerosUsados = [];
var h1 = document.createElement('h1');
var arrayNumerosUsados = localStorage.getItem('numerosUsados') === '' ? 'Gerar Numero Aleatorio' : localStorage.getItem('numerosUsados').split(',')
h1.innerText = arrayNumerosUsados[arrayNumerosUsados.length - 1]
document.querySelector('.container').appendChild(h1)
var h2 = document.createElement('h2');
h2.innerText = localStorage.getItem('numerosUsados')
document.querySelector('.registro').appendChild(h2)