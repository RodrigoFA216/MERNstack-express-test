const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/listar', (req, res) => {
    res.send('retornando proyectores');
})

router.post('/crear', (req, res) => {
    res.send('Hello World!');
})

router.get('/', (req, res) => {
    res.send('Hello World!');
})

module.exports = router;