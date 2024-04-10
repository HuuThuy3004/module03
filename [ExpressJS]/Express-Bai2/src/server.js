const express = require('express');
const app = express()
const router = require('./apiRouter.js')

let checkAdmin = (req , res , next) => {
    if (dangnhap) {
        user.role = 'admin'
    }else{
        res.send('Bạn chưa đăng nhập !');
    }
}

let sayHello = (req , res , next)=>{
    res.send('I am thuy')
    next()
}

app.get('/', sayHello , (req, res , next) => {
    console.log('middleware 2');
    // res.send('I am student of Duy Tan Unnivercity');
    // next()
});


app.use('/api' , router);


app.listen(8080, () => {
    console.log(`Server started on port`);
});

