const express = require("express");
const app = express();
const port = 3000;

const path = require('path')

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

app.get('/users/add', (req, res)=>{
  res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) =>{
  console.log(req.body)
  res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log(`Buscando user ID ${id}`)
  res.sendFile(`${basePath}/users.html`)
})

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
