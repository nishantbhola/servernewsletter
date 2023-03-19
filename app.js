const express = require ("express");
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/success",(req,res)=>{
    res.sendFile(__dirname + "/index2.html");
})


app.get("/failure",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})



app.listen(3000,()=>{
    console.log("listening to port 3000")
});