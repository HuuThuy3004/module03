const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = require('../router/apiRouter.js');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api' , router);


app.listen(8080, () => {
    console.log(`Server started on 8080`);
});

