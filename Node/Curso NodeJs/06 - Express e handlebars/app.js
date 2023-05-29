const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{

  const itens = ["Tenis", "Camisa", "Faca"]
  res.render('dashboard', {itens})
})

app.get('/post', (req, res)=>{
  const post = {
    title: 'Aprender Node.Js',
    category: 'JavaScript',
    body: 'Todo o texto do artigo',
    coments: 4,
  }

  res('blogpost', {post})
})

app.get('/', (req, res) =>{

  const user ={
    name: 'Guilherme',
    surName: 'Avila',
  }

  const palavra = 'Teste'

  const auth = true

  const approved = true

  res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000)