//Funções de janelas de mensagens do navegardor 

//Janela com uma mensagem de alerta
//Não retorna nada
alert('Mensagem do alert');

//Janela com mensagem e opção de "OK" e "CANCELAR"
//Retorno BOLEEAN
confirm('Deseja executar a ação?');

//Pede um input do usuario
//Retorno em string
prompt('Digite seu nome');

//Atribuir esse retorno em variaveis para manipular os inputs
const caminho = confirm('Deseja executar a soma?');
console.log(caminho)

let num1 = prompt('Digite o primeiro numero da soma:');
let num2 = prompt('Digite o segundo numero da soma:');
console.log(num1, num2);

num1 = Number(num1);
num2 = Number(num2);

let soma;
soma = num1 + num2;
console.log(soma);

alert('O resulado da soma é ' + soma);