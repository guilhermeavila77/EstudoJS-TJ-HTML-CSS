class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Metodo
    falar(){
        console.log(`${this.nome} está falando`);
    }
}

//Criando uma pessoa com a classe
const p1 = new Pessoa ('Luiz', 'Otavio');
const p2 = new Pessoa ('Guilherme', 'Avila');

console.log(p2);
console.log(p2.nome);
p2.falar() ;