const express = require('express');
const app = express()
const router = require('./apiRouter.js')




app.use('/api' , router);

app.listen(8080, () => {
    console.log(`Server started on 8080`);
});