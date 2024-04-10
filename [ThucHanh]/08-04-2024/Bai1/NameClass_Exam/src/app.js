const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello xin chào Client');
});



app.listen(3000, () => {
    console.log(`Server started on 3000`);
});