import mongoose from "mongoose";
    var mongoURL= "mongodb+srv://utkarsh:<password>@cluster0.uxlfmnf.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(mongoURL ,{useUnifiedtopology: true, useNewUrlParser: true})
    var connection =mongoose.connection;
    connection.on("error", ()=>{
        console.log("Connection Failed");
    })
    connection.on("connected", ()=>{
        console.log("connection with MongoDB successful");
    })

module.exports=mongoose