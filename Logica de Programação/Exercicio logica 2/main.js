function fizzBuzz(num){

    //Verifica se realmente é um numero, caso não seja já encerra a função
    if (typeof num != 'number') return 'Não é um numero';

    let FizzKey = (num % 3 === 0) ? true : false;
    let BuzzKey = (num % 5 === 0) ? true : false;

    if (FizzKey && BuzzKey === true) return 'BuzzFizz';
    if (FizzKey === true) return 'Fizz';
    if (BuzzKey === true) return 'Buzz';
    return num; 
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}
