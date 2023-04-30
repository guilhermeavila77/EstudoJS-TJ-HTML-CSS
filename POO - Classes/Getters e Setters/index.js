class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100) return;
        this.velocidade++;
    }
    freiar(){
        if(this.velocidade <= 0) return;
        this.velocidade--;
    }
}

const c1 = new Carro('Fusca');

//Protejendo a variavel velocidade para que não seja ultrapasada de jeito nenhum
//Arquivo index2.js