const express=require("express");
const app=express();

app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})


app.listen(4545,()=>{
    console.log("Server starded.....")
})