let tempC = 0;
let tempF = 0;

const texto = document.getElementById('valor');

tempC = prompt(`Digite uma temperatura em graus celsius: `);

tempF = tempC * 1.8 + 32;

texto.innerHTML = '';
texto.innerHTML += `A conversão de temperatura para fahrenheit é ${tempF}`