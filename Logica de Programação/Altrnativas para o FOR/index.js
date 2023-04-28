//FOR IN
//ler os index de um array

const frutas = ['Pera', 'Maça', 'Uva'];
for (let index in frutas){
    console.log(frutas[index]);
}

//Com objetos

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Avila',
    idade:23
};

for(let i in pessoa){
    console.log(pessoa[i]);
}

//FOR OF
//Para strings 
//Retorna o valor ao invés do indice
const nome = 'JAMAL';

for (let valor of nome){
    console.log(valor);
}

//Para array 

for(valor of frutas){
    console.log(valor);
}