const express=require('express')
const upload=require('./middlewares/upload')
const app=express()





app.post('/upload',upload.single('myImage'),(req,res)=>{
   console.log(req.file)
   console.log(req.body)
})
app.post('/multiple',upload.array('images',3),(req,res)=>{
    console.log(req.files)
})
const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))