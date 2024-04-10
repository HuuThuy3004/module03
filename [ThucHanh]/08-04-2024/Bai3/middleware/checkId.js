const fs = require('fs')
const dataTodos = fs.readFileSync('./data/todos.json' , 'utf-8')

const checkExistId = ( req, res, next) => {
    let getDataTodos = JSON.parse(dataTodos)
    let idClient1 = req.params.id
    let idClient2 = req.body.id
    
    const resultId = getDataTodos.findIndex((todosItem)=>{
        return todosItem.id == idClient1 || todosItem.id == idClient2
    })
    //Xet truong hop cua id:
    if (resultId == -1) {
        res.status(201).json({message:"Todo not found"})
    }
    else{
        next()
    }
}

module.exports = checkExistId