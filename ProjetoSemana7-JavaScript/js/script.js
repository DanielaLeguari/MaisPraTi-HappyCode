//ex1
const primeiraOperacao = () => {
    let numero1 = 6;
    let numero2 = 20;
    let numero3 = 12;
    let numero4 = 2;
    let operacao = numero1 + numero2 - numero3 * numero4;
    let resultado = document.getElementById('ex1');
    resultado.innerHTML = `<p>O resultado é ${operacao}</p>`
}

//ex2
const segundaOperacao = () => {
    let numero1 = 30;
    let numero2 = 10;
    let numero3 = 2;
    let numero4 = 3;
    let operacao = numero1 / (numero2 + (numero3 + numero4));
    let resultado = document.getElementById('ex2');
    resultado.innerHTML = `<p>O resultado é ${operacao}</p>`
}


//ex3
const terceiraOperacao = () => {
    let operacao = ((18 + 3 * 2) / 8 + 5 * 3) / 6;
    let resultado = document.getElementById('ex3');
    resultado.innerHTML = `<p>O resultado é ${operacao}</p>`
}


//ex4
const quartaOperacao = () => {
    let operacao = ((64 - 16 * 4) + (48 * 10 - 180)) * 5;
    let resultado = document.getElementById('ex4');
    resultado.innerHTML = `<p>O resultado é ${operacao}</p>`
}

//ex5
const quintaOperacao = () => {
    let operacao = (((8 * 4 + 3) / 7 + (3 + 15 / 5) * 3) * 2 - (19 - 7) / 6) * 2 + 12;
    let resultado = document.getElementById('ex5');
    resultado.innerHTML = `<p>O resultado é ${operacao}</p>`
}