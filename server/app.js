const express =require('express');
const app=express()
const PORT=3000
const mongoose=require('mongoose')
const {mongouri}=require('./keys')


mongoose.connect(mongouri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDb")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})
 require('./models/user')
 require('./models/post')

 app.use(express.json())
 app.use(require('./routes/auth'))
 app.use(require('./routes/post'))

app.listen(PORT,()=>{
    console.log("server is reunning at ",PORT)
})