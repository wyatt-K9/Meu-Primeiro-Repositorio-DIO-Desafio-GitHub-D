/* 

     3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
        e a escolha da condição de pagamento.
        Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida a efetuar o cálculo
        adequado.

        Código Condição de pagamento:
        1- Á vista Débito, recebe 10% de desconto;
        2- Á vista no dinheiro ou PIX, recebe 15% de desconto;
        3- Em duas vezes, preço normal de etiqueta sem juros;
        4- Açima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const preçoEtiqueta = 100
const formaDePagamento = 4;

if (formaDePagamento === 1){
   console.log(aplicarDesconto(preçoEtiqueta, 10));
   
} else if ( (formaDePagamento === 2)){
    console.log(aplicarDesconto(preçoEtiqueta, 15));
 
} else if ( (formaDePagamento === 3)){ 
    console.log(preçoEtiqueta);

} else {
    console.log(aplicarJuros(preçoEtiqueta, 10));
}
// Quinto desafio concluido


console.log(200)

// Quinto Desafio Remasterizado, concluido!


