const mongoose = require("mongoose")
const { text } = require("body-parser")
const { modelName } = require("./product")
const orderSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    OrderName:{type:String,required:true},
    Address:{type:String,required:true},
    Username:{type:String,required:true}
})


module.exports=mongoose.model("order",orderSchema)