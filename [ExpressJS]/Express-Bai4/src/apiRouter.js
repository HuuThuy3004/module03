const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/register', (req, res) => {
    var username , password
    username = req.body.username
    password = req.body.password

    console.log(username , password)
    res.send('POST');
});


module.exports = router



