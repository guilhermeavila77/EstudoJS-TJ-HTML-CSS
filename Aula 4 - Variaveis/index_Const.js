//Const não pode ser alterado o valor
//Também não pode ser apenas inicializado e atribuido o valor posteriormente
const nome = 'João';

console.log('João nasceu em 1984');
console.log('Em 2000 João conheceu Maria');

//Colocando o valor de uma const por const já existente
//Evoluindo a variavel
const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;

console.log(conta);

//typeof é utilizado para saber o tipo da variavel
console.log(typeof conta);

//Utilizando template
//Abrir uma unica vez a strng com ` e colocar a variavel lá dentro
//${varialvel}
console.log(`Em 2000 ${nome} conheceu Maria`);