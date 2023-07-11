  const mongoose=require("mongoose");

  // creating a database

  mongoose.connect("mongodb://localhost:27017/ritikdatabase",{

// useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true

  }).then(()=>{
    console.log("Connection Sucessful");
  }).catch((error)=>{
    console.log("Error");
  })