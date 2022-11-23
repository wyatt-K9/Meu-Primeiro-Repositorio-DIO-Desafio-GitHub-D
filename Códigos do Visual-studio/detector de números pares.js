
const numeros = [83,54,23,21,4,2,8,6,3,56,23,12,];

for (let i = 0; i < numeros.length; i++) {     // o loop vai executar todo esse trecho do codigo desde que a condição seja valida
    const numero = numeros[i];
    if (numero % 2 === 0 ){
      console.log(numero);
    }
}