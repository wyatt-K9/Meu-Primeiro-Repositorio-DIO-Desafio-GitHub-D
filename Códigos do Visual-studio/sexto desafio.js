
class Pessoa {    //class é a definição do que deve ser aquele objeto 
    nome;
    idade;
    anoDeNascimento;             // <--- atributo 

    constructor (nome, idade){
        this.nome = nome;                //sempre que la em baixo na instancia for chamado new, ele vai passar primeiro pelo constructor.
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} eu tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}`);
    }

}


const brian = new Pessoa('brian', 19);         // e instancia é uma ocorrencia daquele objeto

const isabelle = new Pessoa('isabelle', 17);

brian.descrever();
isabelle.descrever();