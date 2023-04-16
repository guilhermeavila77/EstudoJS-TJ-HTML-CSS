const nome = prompt('Digite seu nome: ');
let numLetras;
let secLetra;
let fistA;
let lastA;
let last3;
let quantPalavras;
let upper;
let lower;

numLetras = nome.length;
secLetra = nome.charAt(1);
fistA = nome.indexOf('a');
lastA = nome.lastIndexOf('a');
last3 = nome.slice(-3);
quantPalavras = nome.split(' ')
upper = nome.toUpperCase();
lower = nome.toLowerCase();

document.body.innerHTML += `O seu nome é ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${numLetras} letras<br /> `;
document.body.innerHTML += `A segunda letra do seu nome é: ${secLetra}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${fistA}<br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${lastA}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${last3}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${quantPalavras}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${upper}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${lower}<br />`;