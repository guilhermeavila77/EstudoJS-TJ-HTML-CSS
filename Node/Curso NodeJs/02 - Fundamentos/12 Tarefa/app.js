const inquirer = require('inquire');
const chalk = require('chalk');

inquirer.prompt([
    {name:'nome', messahge:'Qual seu nome? '},
    {name:'idade', messahge:'Qual sua idade? '}
]).then((answers) =>{
    console.log(chalk.bgRed.yellow(answers));
}).cath((e) => console.log(e))