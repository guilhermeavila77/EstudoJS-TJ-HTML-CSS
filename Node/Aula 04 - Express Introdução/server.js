const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send(`
    <form action="/"  method="POST">
    Nome: <input type="text" name="nome">
    <button>Post</buton>
    </form>
    `);
});

app.post('/',(req, res) =>{
    res.send(`Formulario enviado`)
});

app.get('/contato',(req, res) =>{
    res.send('Paguina de contato');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
});
