const express = require('express')
const multer=require('multer')
const upload=multer();

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

const arrayBlog=[]
app.get('/', function(req, res){
    res.render('blog')
})



app.post('/blog/save',upload.none(),(req, res) => {
    if(req.body.blog){
        const blog={
            blog:req.body.blog
        }
        arrayBlog.push(blog)
        console.log(arrayBlog)
        res.redirect('/views/blog')
    }

})
app.get('/views/blog',((req, res) => {

            res.render('view',{data: arrayBlog})

    }
))

app.listen(8085)