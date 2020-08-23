const mongosse=require('mongoose')


const indexSchema=new mongosse.Schema({
    name:String,
    price:Number,
    total:Number,
    description:String,
    imgURL:String
})


const indexModel=mongosse.model('data',indexSchema)

module.exports=indexModel