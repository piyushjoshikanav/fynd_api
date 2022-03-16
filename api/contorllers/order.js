const mongoose= require("mongoose");
const order = require("../models/order.js");
const user = require("./../models/user.js")
const create_order=(req,res,next)=>

{const Order= new order({
    _id: mongoose.Types.ObjectId(),    
    OrderName:req.body.OrderName,
    Address:req.body.Address,
    Username:req.body.Username
});
Order.save()
.then(
   result=>{
       console.log("thid is from create");
       console.log(result);
       res.status(200).json({
           message:"order created"
       })
   }
)
.catch(error=>{res.status(500).json({message:"there is some error",console:error})})

}
const get_all_order=(req,res,next)=>
{
    order.find()
.exec()
.then( 
    result=>{
    console.log("all the orders ");
        console.log(res);
        res.status(200).json({
            message:"HERE",
            result
        })
    }
)
.catch(error=>{res.status(500).json({message:"there is some error",console:error})})

}
const get_single_order=(req,res,next)=>{
    const {orderId} = req.params;
    console.log(orderId)
    order.find(
        {
            _id:orderId
        }
    )
    .exec()
    .then( 
        result=>{
        console.log("single order ");
            console.log(result);
            res.status(200).json({
                message:"single order is",
                result
            })
        }
    )
    .catch(error=>{res.status(500).json({message:"there is some error",console:error})})
    

}

const update_single_order=(req,res,next)=>
{

}
const delete_single_order=(req,res,next)=>
{
    const {orderId}= req.params;
    order.remove({
        _id:orderId 
    })
    .exec()
    .then( 
        result=>{
        console.log("single order ");
            console.log(res);
            res.status(200).json({
                message:"single order is",
                result
            })
        }
    )
    .catch(error=>{res.status(500).json({message:"there is some error",console:error})})
   
}
module.exports={create_order,get_all_order,get_single_order,delete_single_order,update_single_order};  
