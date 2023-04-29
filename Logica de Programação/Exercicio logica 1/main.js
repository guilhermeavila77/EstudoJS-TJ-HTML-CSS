function comparaNumero(a, b){
    if(a>b) return a;
    if(b>a) return b;
    return 'Nummeros iguais'
}

console.log(comparaNumero(6, 6));

//Resposta do curso

const max = (x, y) => x > y ? x:y;

console.log(max(6, 10));