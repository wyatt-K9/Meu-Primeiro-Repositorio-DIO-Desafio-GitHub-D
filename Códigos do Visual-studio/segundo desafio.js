
//Faça um programa para calcular o valor de uma viagem.

/* Você terá 5 variaveis. sendo elas:
1 - preço do etanol;
2 - preço da gasolina; 
3 - o tipo de combustivel que está no seu carro;
4 - gasto médio de combustivel do carro por km;
5 - Distancia em km da viagem;

imprima no console o valor que será gasto para realizar esta viagem.*/

/*const precoDoEtanol = 5.50
const precoDaGasolina = 6.50
const combustivelNoCarro = precoDaGasolina
const kmPorLitros = 10
const distanciaEmKm = 100

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const ValorGasto = litrosConsumidos * combustivelNoCarro;
console.log('Total de gastos com Gasolina');
console.log(ValorGasto.toFixed(2));

const litrosConsumidos2 = distanciaEmKm / kmPorLitros;
const ValorGasto2 = litrosConsumidos2 * precoDoEtanol;
console.log('Total de gastos com Etanol');
console.log(ValorGasto2.toFixed(2)); */

        //jeito correto explicado na aula(+exp)

const precoDoEtanol = 5.50
const precoDaGasolina = 6.50
const combustivelNoCarro = precoDaGasolina
const kmPorLitros = 10
const distanciaEmKm = 100
const tipoCombustivel = 'Etanol' 

const litrosConsumidos = distanciaEmKm / kmPorLitros;     //muito importante a distancia vir primeiro na divisão 

if (tipoCombustivel === 'Etanol') {     
    const ValorGasto = litrosConsumidos * precoDoEtanol;     //Etanol
    console.log(ValorGasto.toFixed(2));

} else { 
    const ValorGasto = litrosConsumidos * precoDaGasolina;   //Gasolina
    console.log(ValorGasto.toFixed(2));
}
//Segundo Desafio Concluido.
