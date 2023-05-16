//Modulos externos
//const chalk = require('chalk');
const inquirer = require('inquirer');

//Modulos internos
const fs = require('fs');

//Chamando o programa
iniciaPrograma();

//Função principal
const iniciaPrograma = () =>{
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Qual é a ação? ',
        choices: ['teste 1', 'teste 2'],
    }]).then().cath((e) => console.log(e))
}

