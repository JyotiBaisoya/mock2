const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb+srv://jyotibaisoya:baisoya@cluster0.0gxpf.mongodb.net/fooddeliverydb?retryWrites=true&w=majority");

module.exports={connection}