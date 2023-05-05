(function(idade, peso, altura){
    const sobreNome = 'Avila';
    function criaNome(nome){
        return nome + ' ' + sobreNome;
    }

    function falaNome(){
        console.log(criaNome('Guilherme'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30,80,180);