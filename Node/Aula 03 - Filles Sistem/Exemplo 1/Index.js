const fs = require('fs').promises;
const path = require('path');

fs.readdir(path.resolve(__dirname))
    .then(filles => console.log(filles))
    .catch(e => console.log(e));

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs readdir(rootDir);
    wallk(files);
}