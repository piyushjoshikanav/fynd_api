const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    ProductName: {Type:String,required:true},
    ProductCategory:{Type:String},
    ProductPrice:{Type:Number,required:true},
    ProductImage:[mongoose.Schema.Types.Mixed],
    AddedOn:{Type:Number,required:true, default:new Date().getTime()    }
})

module.exports= mongoose.model("product",productSchema)