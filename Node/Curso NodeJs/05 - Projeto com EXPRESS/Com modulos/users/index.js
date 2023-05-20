const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`Buscando user ID ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router
