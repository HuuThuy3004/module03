const express = require('express')
var bodyParser = require('body-parser')
var router = require("../router/index.js")
const app = express()
const port = 8080
//Phân tích các yêu cầu có dạng parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Phân tích các yêu cầu parse application /json
app.use(bodyParser.json())


// app.get('/api/v1/users', (req, res) => {
//     // res.write('Hello Thuy')
//     // res.write('Hello Thuy')
//     res.send('<h1>All username</h1>')
// })

// app.get('/api/v1/users/:idUser', (req, res) => {
//     // res.write('Hello Thuy')
//     // res.write('Hello Thuy')
//     console.log('request: ', req);

//     // Cách 1:
//     let userId = req.params.idUser

//     //Cách 2:
//     // có thể dùng destructoring để lấy giá trị
//     const { idUser } = req.params


//     console.log(22222, userId);
//     console.log(33333, idUser);

//     res.send('Lấy 1 user')
// })

// //I.Thêm dữ liệu khi dùng post()
// app.post('/api/v1/users', (req, res) => {
//     console.log(req.body);
//     res.send('Hàm Post()')
// })

// //II.Xóa dữ liệu khi dùng delete()
// app.delete('', (req, res) => { res.send('1') })

// //III.Cập nhật dữ liệu khi dùng put() hoặc patch()
// //put(): cập nhật hết trường dữ liệu - nếu cập nhật 1 trường thì các trường còn lại mật
// //patch(): cập nhật 1 trường dữ liệu - nếu cập nhật 1 trường thì các trường vẫn giữ nguyên dữ liệu
// app.put('', (req, res) => { res.send('1') })
// app.patch('', (req, res) => { res.send('1') })

//-----------------------------------------------------
app.use('/api/v1/users', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
