/* 

    2) O IMC - Indice de massa Corporal é um critério da Organização Mundial de saúde para dar uma indicação sobre
    a condição de peso de uma pessoa.

    Formula do IMC:
    IMC - peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

const peso = 57
const altura = 1.69

const imc = peso / (altura * altura);

if (imc < 18.5){
    console.log('Voçê está abaixo do peso!\nSeu IMC: ' + imc.toFixed(2));

} else if (imc >= 18.5 && imc <= 25) {
    console.log('Seu peso está normal!\nSeu IMC: ' + imc.toFixed(2));

} else if (imc >=25 && imc <= 30) {
    console.log('Voçê está acima do peso!\nSeu IMC: ' + imc.toFixed(2));

} else if (imc >=30 && imc <= 40) {
    console.log('Voçê está obeso!\nSeu IMC: ' + imc.toFixed(2));

} else {
    console.log('Nivel de Obesidade grave!\nSeu IMC: ' + imc.toFixed(2));
}
// Quarto desafio concluido.