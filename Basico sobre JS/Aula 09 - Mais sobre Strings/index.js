//String padrão
let umaString = "Um texto";
console.log(umaString);

//Para colocar aspas dentro do texto
umaString = "Um 'texto'";
console.log(umaString);
//ou
umaString = 'Um "texto"';
console.log(umaString);
//ou
umaString = "Um \"texto\"";
console.log(umaString);

//Colocando barra invertida no texto
umaString = "Um \\texto";
console.log(umaString);

//Substituir palavras
console.log(umaString.replace('Um', 'Outra'));

//Maiuscula e Minuscula
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

//As strings são indexadas
//Ou seja, são arrays 
//           01234567
umaString = "Um texto";
console.log(umaString[4]);
//ou
console.log(umaString.charAt(4));
//Procurar onde está o caracter
console.log(umaString.indexOf('o', 0));
console.log(umaString.lastIndexOf('x', 7));
//Sabendo o tamanho da string
console.log(umaString.length);
//Contando uma palavra
umaString = "Um texto maior";
console.log(umaString.slice(2, 8));
//De tras para frente é só usar o -
console.log(umaString.length);
console.log(umaString.slice(-5));
//ou
console.log(umaString.slice(9));

//Separando a string em um array 
console.log(umaString.split(" "));
//ou
console.log(umaString.split(" ", 2));