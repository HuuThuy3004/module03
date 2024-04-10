const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var fs = require('fs')
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = app.get('/api/v1/users', (req, res) => {
    let getData = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'))
    res.send(getData)
})

app.get('/api/v1/users/:id', (req, res) => {
    const { id } = req.params
    let getData = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'))
    const request = getData.users.find((users) => {
        return users.id == id
    })
    res.send(request)
})

//Thêm dữ liệu
app.post('/api/v1/users', (req, res) => {
    const dataUser = req.body
    const getData = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'))
    getData.push(dataUser)
    fs.writeFileSync('./data/db.json', JSON.stringify(getData))
    return res.status(201).json({
        message: "Thêm thành công !!"
    })
})

//Xóa dữ liệu
app.delete('/api/v1/users/:id', (req, res) => {
    const { id } = req.params
    const getData = JSON.parse(fs.readFileSync('./data/db.json', 'utf-8'))
    const response = getData.users.filter((user) => {
        return user.id != id;
    })

    fs.writeFileSync('./data/db.json', JSON.stringify(response))

    return res.status(200).json({
        message: "Xoá thành công !!"
    })
})
//Update dữ liệu
app.patch('/api/v1/users/:id', (req, res) => {
    const dataUpdate = req.body
    
    res.send('OK')
})

server.listen(port, () => {
    console.log(`Đang gọi server`)
})