const Category = require('../app/models/Category')

async function getCate(req, res, next){
    try{
        const cate = await Category.find({})
        const cateArr = cate.map(item=> {
            return item.toObject()
        })
        req.cate = cateArr
    } catch(error){
        console.log(error)
    } finally{
        next()
    }
}

module.exports = getCate