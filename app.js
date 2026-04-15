const express = require('express')
const app = express()
app.set('view engine', 'ejs')

// IMPORTA o router
const router = require('./router')

// USA o router
app.use(router)

app.listen(3000, () => {
    console.log('Servidor rodando')
})

//const app = express()
const port = 3000


//endpoints

app.get('/', (req, res) => {
    res.send('HOME')
})


app.get('/about', (req, res) => {
    res.send('SOBRE')
})

///////////////////////////////////////////////////////////////////


app.get('/users/signin/:id', (req, res) => {
    const id = req.params.id

    if(!id) {
        return res.redirect('/users/signup')
    }
    res.send(`<h1>Seja Bem Vindo! ${id}</h1>`)
})

app.get('/users', (req, res) => {
    res.send('USUÁRIOS')
})

// Ao acessar uma rota Users, os valores de id e pwd serão armazenados nas constantes definidas, e a resposta será:
app.get('/users/:id/:pwd', (req, res) => {
    const id = req.params.id
    const pwd = req.params.pwd
    res.send(`ID: ${id}, Senha: ${pwd}`) // <-- Isso !
})

///////////////////////////////////////////////////////////////////

app.get('/users/signup', (req, res) => {
    res.send('SIGNUP')
})



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => { //indica que o server está rodando com uma mensagem noterminal, além disso, listen ouve as requisições dentro do app.
    console.log('server running')
})

app.get('/*splat', (req, res) => {
    res.status(404).send('error')
}) //Se for uma rota diferente da que está definida aqui, retornará erro.

///////////////////////////////////////////////////////////////////

app.post('/data', (req, res) => {
    const id = req.body.id
    const pwd = req.body.pwd

    if (!id || !pwd){
        return res.status(400).send("Nome e senha obrigatórios")
    }

    res.send(`Usuário ${id} criado. TESTE POST`)
})