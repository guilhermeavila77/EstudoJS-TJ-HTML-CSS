const pessoa1 = {
    nome: 'Guilerme',
    idade: 22
}
console.log(pessoa1.idade);

function criarPessoa (nome, idade){
    return{
        nome: nome, 
        idade: idade
    }
}
function criarPessoaAlt (nome, idade){
    return{
        nome, 
        idade
    }
}
const pessoa2 = criarPessoa('Guilherme', 22);
console.log(pessoa2);

const pessoaFalar = {
    nome: 'Zé',
    idade: 24,

    falar(){
        console.log('Hello World!!');
    }
}

pessoaFalar.falar();

const pessoaFalar2 = {
    nome: 'Jão',
    idade: 26,

    falar2(){
        console.log(`${this.nome} está falando oi`); //Chamar o metodo na função
    }
}

pessoaFalar2.falar2();