//Arredondando os numeros
let num1 = 10.8597582456;
console.log(num1.toFixed(2));

//Verificando se o numero é inteiro
console.log(Number.isInteger(num1)); // Retorna booleean

//Retornar verdadeiro quando a conta for invalida
let temp = num1 * 'Hello';
console.log(Number.isNaN(temp));

//Tratando a imprecisão
let num2 = 0.7;
let num3 = 0.1;
console.log(num2 + num3);

num2 += num3;

num2 = parseFloat(num2.toFixed(2));
console.log(num2);