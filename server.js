console.log("Hello")
const { request, response } = require("express");
//create a variable nodejs
const express = require("express");//loading the express module -this returns a function ,set to express

//create an application in node js
const app = express();//calling the above function -returns an object type express

//this object has so many usefull methods
// app.get()
//app.post()
// app.put()
//app.delete()
app.listen(5001,() =>{
    console.log("server is running")
})

app.get("/",(request,response)=>{
    response.send("Hello World");
})