/*1) faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3; <--- COMO CALCULAR MÉDIA 

Classificação: 
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 4
let nota2 = 4
let nota3 = 4

const Media = (nota1 + nota2 + nota3) / 3;

if (Media > 7){
    console.log('Parabéns, voçê concluiu o semestre!\nSua Média: '+ Media);
}   
    
 else if (Media >= 5 && Media <=7){
    console.log('Recuperação!\nSua Média: '+ Media)

 } else {
    console.log('Reprovado! Média insuficiente \nSua Média: '+ Media); {

    }
}
// Terceiro Desafio Concluido.
