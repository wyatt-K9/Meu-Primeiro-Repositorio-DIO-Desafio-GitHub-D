
class Pessoa {
 nome;
 peso;
 altura;

 constructor(nome, peso, altura) {
  this.nome = nome;
  this.peso = peso;
  this.altura = altura;
 }

 calcularImc() {
   return this.peso / (this.altura * this.altura);
 }

 classifiqueSeuImc(){
  const imc = this.calcularImc();
  if (imc < 18.5){
   return ('Voçê está abaixo do peso!\nSeu IMC: ' + imc.toFixed(2) );

} else if (imc >= 18.5 && imc <= 25) {
   return ('Seu peso está normal!\nSeu IMC: ' + imc.toFixed(2) );

} else if (imc >=25 && imc <= 30) {
   return ('Voçê está acima do peso!\nSeu IMC: ' + imc.toFixed(2) );

} else if (imc >=30 && imc <= 40) {
   return ('Voçê está obeso!\nSeu IMC: ' + imc.toFixed(2) );

} else {
   return ('Nivel de Obesidade grave!\nSeu IMC: ' + imc.toFixed(2) );
}
 }
}
 const jose = new Pessoa('jose',70,1.75,);
 console.log(jose.classifiqueSeuImc());
 const brian = new Pessoa('brian',55,1.70);
 console.log(brian.classifiqueSeuImc())

 //nono desafio concluido