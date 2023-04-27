// Operação ternaria é uma alternativa ao IF e Else
const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
} else {
    console.log('Usuario normal');
}

//substituindo
//(condição) ? valor para verdadeiro : valor para falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

//com SHORT
//Caso o primeiro valor for falsy, vai para a proxima condição até ser verdadeira
const corUsuario = null;
const corAtual = corUsuario || 'Preta';

console.log(nivelUsuario, corAtual);