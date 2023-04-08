let nome = 'João';

console.log('João nasceu em 1984');
console.log('Em 2000 João conheceu Maria');

//Pode ser usado a variavel para se referir ao nome nas frases
console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');

//Podemos apenas reservar a variavel sem inicializarmos
let segundoNome;
//Para somente depois inserir um valor na memoria
segundoNome = 'Silva';
console.log(segundoNome);
//E posteriormente redefinir este valor
segundoNome = 'Klovis';
console.log(segundoNome);