const Books = require('../Models/Books')

//Index
const index = async (req,res)=>{
    try{
        res.json(await Books.find({}))
    }catch(error){
        res.status(400).json(error)
    }
}

const create = async (req,res) => {
    try {
        res.json(await Books.create(req.body))
    }catch (err){
        res.status(400).json(err)
    }
}

module.exports = {
    index,
    create,
}