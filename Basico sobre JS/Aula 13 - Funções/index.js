function helloWorld(nome){
    console.log(`Olá ${nome}`);
}

helloWorld('Senhor doutor Detonator');

const var1 = helloWorld('Senhor doutor Detonator'); //tetorna undefined

function helloWorld2(nome2){
    return `Olá ${nome2}`;
}

const var2 = helloWorld2('Senhor doutor Detonator');
console.log(var2) //A função cria um valor de retorno

const raiz = function(n){
    return n ** 0.5;
}

console.log(raiz(9));

//ou

const raiz2 = n => n ** 0.5;

console.log(raiz2);