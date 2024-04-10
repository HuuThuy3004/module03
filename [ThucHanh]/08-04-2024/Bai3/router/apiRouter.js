const express = require('express')
const router = express.Router()
const fs = require('fs')
const dataTodos = fs.readFileSync('./data/todos.json' , 'utf-8')
const checkExistId = require('../middleware/checkId.js')
const checkExistTitle = require('../middleware/checkTitle.js')

router.get('/:id', checkExistId , (req, res , next) => {
    let getDataTodos = JSON.parse(dataTodos)

    const idClient = req.params.id

    const indexTodo = getDataTodos.findIndex((todosItem)=>{
        return todosItem.id == idClient
    })

    res.send(getDataTodos[indexTodo]);
});

//POST
router.post('/post', checkExistTitle , (req, res , next) => {
    let getDataTodos = JSON.parse(dataTodos)
    let todos = req.body
    getDataTodos.push(todos)
    fs.writeFileSync('./data/todos.json' , JSON.stringify(getDataTodos))
    res.send('Add successfully');
});

//PUT
router.put('/put', checkExistId , (req, res) => {
    let getDataTodos = JSON.parse(dataTodos)
    let idClient = req.body.id

    let indexTodo = getDataTodos.findIndex((todosItem)=>{
        return todosItem.id == idClient
    })

    getDataTodos[indexTodo] = req.body
    fs.writeFileSync('./data/todos.json' , JSON.stringify(getDataTodos))
    res.send('Update successfully')
})

//DELETE
router.delete('/delete', checkExistId ,(req, res) => {
    let getDataTodos = JSON.parse(dataTodos)
    let idClient = req.body.id

    let indexTodo = getDataTodos.findIndex((todosItem)=>{
        return todosItem.id == idClient
    })

    getDataTodos.splice(indexTodo , 1)
    fs.writeFileSync('./data/todos.json' , JSON.stringify(getDataTodos))
    res.send('Delete successfully')
});

module.exports = router