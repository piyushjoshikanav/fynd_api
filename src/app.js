console.log("hello");
// const express = require("express");
// const app=express();

// const userRouter=require("../api/routes/user.js")


//use implements midleware irespective of where or which request is sent

// app.get("/",(req,res,next)=>{
//     res.json({message:"this works,thank you!"})
//     next();
// })
// for user router request
// app.use("/users",userRouter)
// app.get("/",(req,res,next)=>{
//     res.json({message:"this works,thank you part 2 but this would not work as first one is selected!"})
//     next();
// })
// // app.use()
// app.post("/",(req,res,next)=>{
//     res.json({message:"this works,thank you! but it is a post request"})
//     next();
// })
// app.post("/joshi",(req,res,next)=>{
//     res.json({message:"this works,thank you! but it is a post request and on joshi"})
//     next();
// // })
// const morgan =require("morgan");
// const bodyParser =require("body-parser");
// app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use("/users",userRouter);

// app.use((req,res,next)=>{
//     console.log("first use of all middleware ran");
//     next();
// },(req,res,next)=>{
//     console.log("second use of all middleware ran");
//     next();
// })   

// module.exports=app;



// //03-03-22
// const express = require("express");
// const app=express();
// const mongoose = require("mongoose")
// const dbUrl="mongodb+srv://piyushjoshi1:piyush123@fyndjs.ljlal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose.connect(dbUrl,{
//     useNewUrlParser:true,
//     // useCreateIndex:true,
//     useUnifiedTopology:true
// }).then(
//     ()=>console.log("mongoDB Is Connected")
// ).catch(
//     (err)=>console.log(err)
// )
// const userRouter=require("../api/routes/user.js")


// const morgan =require("morgan");
// const bodyParser =require("body-parser");
// app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use("/users",userRouter);

// module.exports=app;

//08-03-22
const express = require("express");
const app=express();
const mongoose = require("mongoose")
const dbUrl="mongodb+srv://piyushjoshi1:piyush123@fyndjs.ljlal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
}).then(
    ()=>console.log("mongoDB Is Connected")
).catch(
    (err)=>console.log(err)
)
const userRouter=require("../api/routes/order.js")


const morgan =require("morgan");
const bodyParser =require("body-parser");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/users",userRouter);

module.exports=app;
