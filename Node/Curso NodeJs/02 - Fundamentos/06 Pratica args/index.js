const minimist = require('minimist');
const soma = require('./modSoma').soma;

const args = minimist(process.argv.slice(2));

const x = parseInt(args['x']);
const y = parseInt(args['y']);

soma(x,y);
