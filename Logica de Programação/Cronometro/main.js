function criaSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

let clock = document.getElementById("clock");
let iniciar = document.getElementById("on");
let desligar = document.getElementById("of");
let pausar = document.getElementById("pause");
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos ++;
        clock.innerHTML = criaSegundos(segundos);
    }, 1000);
}

function pararRelogio(){
    clearInterval(timer);
}
iniciar.addEventListener('click', function(e){
    iniciaRelogio();
})

desligar.addEventListener('click', function(e){
    pararRelogio();
    segundos = 0;
    clock.innerHTML = '00:00:00';
})

pausar.addEventListener('click', function(e){
    pararRelogio();
})
