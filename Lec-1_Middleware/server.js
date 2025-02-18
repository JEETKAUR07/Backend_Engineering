const express = require("express");
const app = express();
app.use(m1);
app.use(m2);

app.get("/",(req,res)=>{
    console.log("running get request on path /");
    res.send("Home")
})

app.get("/about",(req,res)=>{
    console.log("running about reqest");
    res.send("about page")
})

function m1(req,res,next){
    console.log("running middleware 1....");
    next();
}
function m2(req,res,next){
    console.log("running middleware 2....");
    next();
}



app.listen(3555,()=>{
    console.log("server started")
})