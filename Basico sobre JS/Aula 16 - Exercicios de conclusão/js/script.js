function funcaoPrincipal(){
    const form = document.querySelector('.form'); //Pega pela classe do html
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();
        const nome =form.querySelector('.nome');
        const sobrenome =form.querySelector('.sobrenome');
        const peso =form.querySelector('.peso');
        const altura =form.querySelector('.altura');
        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });
        console.log(pessoas);
        resultado.innerHTML = ``;
        resultado.innerHTML += `<p>Seu nome é ${nome.value}</p>`;
        resultado.innerHTML += `<p>Seu sobrenome é ${sobrenome.value}<p>`;
        resultado.innerHTML += `<p>Seu peso é ${peso.value}<p>`;
        resultado.innerHTML += `<p>Sua altura é ${altura.value}<p>`;
    };

    form.addEventListener('submit', receberEventoForm);

}
funcaoPrincipal();