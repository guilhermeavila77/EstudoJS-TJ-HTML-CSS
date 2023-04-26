function calculaGorgeta (){

    let valorConta = 0;
    let gorjeta = 0;
    let valorTotal = 0;

    valorConta = parseFloat(prompt('Digite o valor da conta: ')) 
    gorjeta = parseFloat(prompt('Digite a gorjeta (decimal)%: ')) 

    valorTotal += valorConta
    valorTotal += (valorConta * gorjeta) / 100

    return valorTotal
}

const valorDaConta = calculaGorgeta();
console.log(valorDaConta);

function atualizarPag(){
    let rend = document.getElementById("pagar");

    rend.innerHTML = `<p> O valor total a se pagar é ${valorDaConta}`;
}

atualizarPag();