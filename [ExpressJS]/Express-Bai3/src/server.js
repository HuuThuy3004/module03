// Cách sử dụng phương thức GET , POST , DELETE , PUT/PATCH
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const router = require('./apiRouter.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World ExpressJS');
});

app.use('/api' , router)

app.listen(8080, () => {
    console.log(`Server started on 8080`);
});