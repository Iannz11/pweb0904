const express = require('express')

// cria um "mini app" de rotas
const router = express.Router()

// rota teste
router.get('/', (req, res) => {
    res.send('Rota principal do router')
})

// exemplo com users
router.get('/users', (req, res) => {
    res.send('USUÁRIOS')
})

router.get('/users/signup', (req, res) => {
    res.send('SIGNUP')
})

router.get('/users/signin/:id', (req, res) => {
    const id = req.params.id
    res.send(`Bem-vindo ${id}`)
})

// exporta o router
module.exports = router