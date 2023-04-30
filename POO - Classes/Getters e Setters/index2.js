const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    //Permitir inputs cotrolados
    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

//A velocidade não vai mudar
c1.velocidade = 200;
console.log(c1.velocidade);

c1.velocidade = 99;
console.log(c1.velocidade);

//Apenas com o metodo acelerar até 100 no maximo

for(let i = 0; i<200;i++){
    c1.acelerar();
}

console.log(c1.velocidade);