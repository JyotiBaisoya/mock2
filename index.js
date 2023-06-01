const express = require("express");

const app = express();
const {connection} = require("./config/dbconnection");
const {userRouter} = require("./routers/userRouter")
app.use(express.json());

app.use(userRouter)
app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.listen(8080,async()=>{
    try {
       await connection 
       console.log("connected to db") ;
       console.log("Running on the port 8080");
    } catch (error) {
        console.log(error)
    }
   
})