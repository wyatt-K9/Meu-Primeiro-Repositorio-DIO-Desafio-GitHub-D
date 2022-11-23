 
 class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    construtor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
} 

function compararPessoas(p1, p2) {   //ok
    if (p1.idade > p2.idade) {      //ok
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);   //ok
    } else if (p2.idade > p1.idade) {   //ok
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);   //ok
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
      }
}

const brian = new Pessoa ('brian', 19);
const isabelle = new Pessoa ('isabelle', 17);
compararPessoas(brian, isabelle);