/* Desafio
    Alterar os valores das variaveis 
    Fazer com que o resultado finasl seja 
    B C A, porém a ordem no console log deve se manter 
    varA, varB, varC
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

//OU
//[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);