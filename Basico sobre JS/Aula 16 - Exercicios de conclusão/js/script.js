function funcaoPrincipal(){
    const form = document.querySelector('.form'); //Pega pela classe do html
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento){
        evento.preventDefalt(); //Não deixa que o navegador envie o formulario e apague tudo
        const nome =form.querySelector('.nome');
        const sobrenome =form.querySelector('.sobrenome');
        const peso =form.querySelector('.peso');
        const altura =form.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += <p>`${nome}`</p>
        resultado.innerHTML += <p>`${sobrenome}`</p>
        resultado.innerHTML += <p>`${peso}`</p>
        resultado.innerHTML += <p>`${altura}`</p>
    };
    form.addEventListener('submit', receberEventoForm);
}
funcaoPrincipal();