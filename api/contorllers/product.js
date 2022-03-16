const mongoose = require("mongoose");
const Product = require("../models/product.js")
const create_single_product = (req,res,next)=>{
const product = new Product({
    _id:mongoose.Types.ObjectId,
    ProductName:req.body.ProductName,
    ProductPrice:req.body.ProductPrice
});
product.save()
.then(
   
)
.catch(error=>{res.status(500).json({message:"some error occured",console.error})})

}
const get_all_products = ()=>{
Product.find()
.exec()
.then( 
    result=>{
    console.log("this is result from getting sinlge product");
        console.log(result);
        res.status(200).json({
            message:
        })
}
)
.catch(error=>{res.status(500).json({message:"some error occured",console.error})})
}
const get_single_product = ()=>{
const {productId}=req.params;
Product.find({
    _id:productId
})
.exec()
.then()
.catch(error=>{res.status(500).json({message:"some error occured",console.error})})

}
const update_single_product = ()=>{
const {productId}:req.params;
const updateOps ={};
}
const delete_single_product = ()=>{

}
module.exports={create_single_product,get_all_products,get_single_product,update_single_product,delete_single_product};


