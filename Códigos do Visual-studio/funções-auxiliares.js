
const entradas = [5, 50, 10, 98, 23,];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;    // i++ foi usado pra simplificar o i = i + 1
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };