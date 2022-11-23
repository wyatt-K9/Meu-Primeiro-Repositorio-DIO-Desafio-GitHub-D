
const {gets, print } = require('./funções-auxiliares');

const numerosSorteados = [];     //gets ele puxa o valor

for (let i = 0; i < 5; i++) {          // print ele me informa o valor
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }

}

print(maiorValor);
