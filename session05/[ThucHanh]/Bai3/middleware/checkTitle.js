const fs = require('fs')
const dataTodos = fs.readFileSync('./data/todos.json' , 'utf-8')

const checkExistTitle = ( req, res, next) => {
    let getDataTodos = JSON.parse(dataTodos)
    const titleClient = req.body.title

    const resultTitle = getDataTodos.findIndex((todosItem)=>{
        return todosItem.title == titleClient
    })
    
    //Xet truong hop cua title:
    if (resultTitle == -1) {
        next()
    }
    else{
        res.status(201).json({message:"Todo already exists"})
    }
}


module.exports = checkExistTitle