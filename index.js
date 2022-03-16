console.log("hello");
// var http = require("http");
// const PORT = process.env.PORT || 4000;
// http.createServer(function(req,res)
// {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write('this is coming from the server we created')
//     res.end()
// }).listen(PORT);
const http =require("http");
const app =require("./src/app");
const PORT = process.env.PORT || 4000;

const server =http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
