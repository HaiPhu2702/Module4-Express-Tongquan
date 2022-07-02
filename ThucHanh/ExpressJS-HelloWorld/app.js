
const express=require('express')
const routerHome=require('./routes/home')
const port=8087


const app = express()



app.use('/',routerHome)





app.listen(port,()=>{
    console.log('running http://localhost:'+port)
})