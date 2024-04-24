const express = require("express");
const cors = require("cors");
const mydb = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(cors());


app.get("/",cors(), (req,res)=>{
    res.render(index);

});


app.post("/",async (req,res)=>{
    
    //const mydb req.body

    const data= new mydb(req.body)
    await data.save();
    res.send('save data')
   // await mydb.insertMany([data])

   
})
app.listen(8000,()=>{
    console.log('port connected');
})