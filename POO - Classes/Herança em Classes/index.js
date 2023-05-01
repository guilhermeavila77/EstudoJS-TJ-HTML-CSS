class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.energia = false;
    }

    ligar(){
        if(this.energia){ //Já faz a verificação se é true ou não
            console.log(`${this.nome} já está ligado`);
            return;
        }

        this.energia = true;
    }

    desligar(){
        if(!this.energia){
            console.log(`${this.energia} já está desligado`);
            return;
        }
        this.energia = false;
    }
}

class SmartPhone  extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Metodo alterado');
    }
}