const express = require('express');
const router = express.Router();

router.get('/getData', (req, res) => {
    res.send('path: /getData')
});



module.exports = router