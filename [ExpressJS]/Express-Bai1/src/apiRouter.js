const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('router empty');
})

router.get('/user', (req, res) => {
    res.send('router empty -> user');
})

router.get('/user/name', (req, res) => {
    res.send('router empty -> user -> name');
})

router.get('/user/name/:id', (req, res) => {
    const { id } = req.params
    console.log('Lấy id của user là: ', id);
    res.send('router empty -> user -> name -> id');
})

module.exports = router

