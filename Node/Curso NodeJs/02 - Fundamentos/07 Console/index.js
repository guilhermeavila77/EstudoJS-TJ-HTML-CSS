//LOG
const x = 10; 
const y = 'Texto';
const z =[1,2];

console.log(x, y, z);

//COUNT
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);
console.count(`O valor de X é: ${x}, contagem`);

//Variavel de string
console.log('Isso aqui é um %s que utiliza variaveis', y);

//Limpar dps de um tempo
setTimeout(() =>{
    console.clear()
}, 5000)
