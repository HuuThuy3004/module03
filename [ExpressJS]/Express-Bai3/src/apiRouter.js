const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST');
});

router.patch('/', (req, res) => {
    res.send('PATCH');
});

router.delete('/', (req, res) => {
    res.send('DELETE');
});


module.exports = router
