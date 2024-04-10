//Khởi tạo các biến từ npm
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
var fs = require('fs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Tạo 2 biến để lưu các file .json của folder data
const dataTodos = fs.readFileSync('./data/todos.json', 'utf-8')
const dataTodosBackup = fs.readFileSync('./data/backup-todos.json', 'utf-8')

//Buoc 1:
app.get('/api/v1/todos', (req, res) => {
    let getTodos = JSON.parse(dataTodos)
    res.send(getTodos);
});

//Buoc 2:
app.get('/api/v1/todos/:id', (req, res) => {
    const {id} = req.params
    let getTodos = JSON.parse(dataTodos)
    
    const result = getTodos.find((todos)=>{
        return id == todos.id
    })

    res.send(result);
});

//Buoc 3:
app.post('/api/v1/todos', (req, res) => {
    let getTodos = JSON.parse(dataTodos)
    let todoTitleClient = req.body.title

    let indexTodo = getTodos.findIndex((todos)=>{
        return todos.title == todoTitleClient
    })
    
   if (indexTodo == -1) {
        getTodos.push(req.body)
        fs.writeFileSync('./data/todos.json' , JSON.stringify(getTodos))
        return res.status(201).json({
            message: 'Create successfully'
        })
   }
   else{
        return res.status(201).json({
            message: 'Todo already exists'
        })
   }
});

//Buoc 4:
app.put('/api/v1/todos', (req, res) => {
    let getTodos = JSON.parse(dataTodos)
    let todoIdClient = req.body.id

    let indexTodos = getTodos.findIndex((todos)=>{
        return todos.id == todoIdClient
    }) 

   if (indexTodos == -1) {
        return res.status(201).json({
            message: 'Todo not found'
        })
   }
   else{
        // console.log('i am updating the todos')
        getTodos[indexTodos] = req.body
        fs.writeFileSync('./data/todos.json' , JSON.stringify(getTodos))

        return res.status(201).json({
            message: 'Update successfully'
        })
   }
});

//Buoc 5:
app.delete('/api/v1/todos/:id', (req, res) => {
    const {id} = req.params
    let getTodos = JSON.parse(dataTodos)

    let indexTodos = getTodos.findIndex((todos)=>{
        return todos.id == id
    }) 

    if (indexTodos == -1) {
        return res.status(201).json({
            message: 'Todo not found'
        })
   }
   else{
        getTodos.splice(indexTodos , 1)
        fs.writeFileSync('./data/todos.json' , JSON.stringify(getTodos))
        return res.status(201).json({
            message: 'Delete successfully'
        })
   }
});





app.listen(8080, () => {
    console.log(`Server started on 8080`);
});