const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/RRTest")
.then(()=>{
    console.log('connected');
})
.catch(()=>{
    console.log('Failed');
})


const newSchema = new mongoose.Schema({
    
    headline:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    }
})

const mydb = mongoose.model('mydb',newSchema);

module.exports= mydb;