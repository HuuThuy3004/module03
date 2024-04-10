const express = require('express')
var app = express()
var router = require('./apiRouter.js')

app.get('/', (req, res) => {
    res.send('Hello Xin chào')
})

app.use('/api/', router)

app.listen(8080, () => {
    console.log('Đang chạy server 8080');
})

