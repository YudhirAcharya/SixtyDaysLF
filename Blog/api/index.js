//oy8UI5oWKHFSNMOb
//mongodb+srv://yudhirach77:<oy8UI5oWKHFSNMOb>@cluster0.nulgdbd.mongodb.net/?retryWrites=true&w=majority
const express= require('express')
const cors =require('cors');
const mongoose =require('mongoose')
const app =express()
const User =require('./models/User')

app.use(cors())
app.use(express.json());

mongoose.connect('mongodb+srv://yudhirach77:<oy8UI5oWKHFSNMOb>@cluster0.nulgdbd.mongodb.net/?retryWrites=true&w=majority')

app.post('/register',async (req,res)=>
{
    const {username, password} = req.body;
   await User.create({
        username,
        password,
    })
    res.json({requestData:{username,password}})
    
    
})

app.listen(4000)