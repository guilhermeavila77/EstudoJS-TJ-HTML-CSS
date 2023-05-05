function Pessoa(nome, sobreNome){
    // Atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    //Atributos ou métodos publicos
    this.nome = nome;
    this.sobreNome = sobreNome;

    this.metodo = function(){
        console.log(this.nome)
    }
}

const p1 = new Pessoa('Guilherme', 'Avila');
const p2 = new Pessoa('Maria', 'Leopodo');

console.log(p1.nome);
console.log(p2.sobreNome);
p2.metodo();