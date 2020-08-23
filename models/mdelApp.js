const mongoose=require('mongoose');

let employeessSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    description:{type:String},
    imgURl:{type:String}



})
const employee=mongoose.model('plogs',employeessSchema)
module.exports=employee