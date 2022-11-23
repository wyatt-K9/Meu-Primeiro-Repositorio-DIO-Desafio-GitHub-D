

class Carro {
 marca;             // serve apenas para informar oque sera usado ao decorrer
 cor;
 gastoMedioPorKm;

 constructor(marca, cor, gastoMedioPorKm) {
  this.marca = marca;
  this.cor = cor;
  this.gastoMedioPorKm = gastoMedioPorKm;
 }

 calcularGastoDoPercurso(distanciaEmKm, precoCombustivel){      //para acessar coisas que estão fora usa 'this.exemplo'
  return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
 }
}

    // ja possui marca, cor e gasto medio
const uno = new Carro('fiat','preto',1/12);    //pode fazer calculo direto aqui dentro tbm
console.log('Gasto Médio do Uno: '+ uno.calcularGastoDoPercurso(70, 5))
const palio = new Carro('fiat','azul',1/10);
console.log('Gasto Médio do Palio '+palio.calcularGastoDoPercurso(200, 6))