class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Métodos de instancia
    //Podemos alterar um obj por vez 
    //Ou seja aumentar o volume da TV1
    aumentarVolume(){
        this.volume += 1;
    }

    diminuirVolume(){
        this.volume -= 1;    
    }

    //Métodos estaticos
    //Apenas alteram todos os objs
    //Trocar a pilha de TODAS as TV's
    static trocarPilha(){
        console.log('Trocas as pilhas');
    }
}

//Usar instancia
const tv1 = new ControleRemoto('LG');
const tv2 = new ControleRemoto('Philco');

console.log(tv1, tv2);

tv1.aumentarVolume();

console.log(tv1, tv2);

//Usar estático
ControleRemoto.trocarPilha();
