

function escrevaMeuNome(nome) {      //function (função)
     return 'Meu nome é ' + nome;       //return (Retornar o valor)
}

function verificarIdade(idade) {        //outra função
    if (idade >= 18) {                  //condição SE
        console.log(escrevaMeuNome('brian') + '\nMaior');   //imprimir na tela
    } else {  // SE NÃO
        console.log('Menor');
    }
}

verificarIdade(18);     //A idade que o usuario entrou