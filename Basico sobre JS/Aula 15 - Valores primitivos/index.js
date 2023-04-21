//Dados de referencia
//Aponta para o mesmo lugar da memoria
let a = [1,2,3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

//Copia o valor para dentro da array
let c = [... a]