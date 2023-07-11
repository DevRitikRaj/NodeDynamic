const express=require("express");
const app=express();
const port=process.env.PORT ||3000;

//routing
//app.get(path,callback)

app.get("/",(req,res)=>{
    res.send("Hii I am Awesome")
})

//Server Create
app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})