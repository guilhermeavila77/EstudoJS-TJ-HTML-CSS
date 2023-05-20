const express = require("express");
const app = express();
const port = 3000;

const path = require('path')

const users = require('./users')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
  req.authStatus = true

  if(req.authStatus){
    console.log('Continuar')
    next()
  } else{
    console.log('Parar')
    next()
  }
}

app.use(checkAuth)

app.use(express.urlencoded({extended: true,}))

app.use(express.json())

app.use(express.static('public'))

app.use('/users', users)
app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

// pag 404

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
