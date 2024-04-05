var express = require("express")
var router = express.Router()

router.get('/', (req, res) => {
    // Cách 1:
    let userId = req.params.idUser

    //Cách 2:
    // có thể dùng destructoring để lấy giá trị
    const { idUser } = req.params

    res.send('Get 1 Usser')
})

router.post('/' , (req , res)=>{
    res.send('Post() aaa')
})

module.exports = router
// module.exports = { router }


// export default router