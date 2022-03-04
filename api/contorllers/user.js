
// let users=[
//     {
//         name:"piyush",
//         id:1
//     },
//     {
//         name:"joshi",
//         id:2
//     }
// ]

// const create_user=(req,res,next)=>{
//     users.push(req.body)
//     res.json({
//         message: "successfully pushed"
//     })
// }
// const get_all_user=(req,res,next)=>{
//     res.json({
//     //    message:"this is coming from the /users/routewhen   we do get"
//          users:users
//     })
// }
//  const getall_users=
// module.exports = {create_user,get_all_user}


// connecting with database
const User =require("../models/user.js");
const  mongoose  = require("mongoose");
const create_user =(req,res,next)=>{
    //1 try finding if the user exists or not
    User.find({email:req.body.email})
.exec()
.then(user=>{
    console.log("this is the user");
    console.log(user);
    console.log("user ends");
    //2. if user email is found that means user already exists
    if(user.length>=1){
        return res.status(409).json({
            message:"email already exists"
        })
    }
    else{
        // if we are in this block . that means user is not found,that means we have to create a new user
        const user = new User({
            _id: new mongoose.Types.object.id(),
            first_name:req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            password:req.body.password,
            accessLevel:req.body.accessLevel
        })
        user.save()
        .then(result =>{
            //in this block , we capture the success result.
            console.log("this is the result from saving the user");
            console.log(result);
            // constructing successful response
            res.status(201).json({
                message:"user successfully added",
                user:result,
            })
        })
        
    }
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
}
const get_all_user=(req,res,next)=>{
    user.find()
    .exec()
    .then((users)=>{
        console.log(users);
        res.status(200).json({
            message:"got all users successfully",
            users
        });
    })
    .catch((err)=>console.log(err));
};
module.exports={
    create_user,
    get_all_user,
};
