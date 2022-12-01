const express=require('express');
const exphbs=require('express-handlebars');
const { existsSync } = require('fs');
const PORT=3000;
const app=express();
const {form,readdata,updatedata,deletedata} =require('./controllers/users')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render("home")
})
app.get('/create',(req,res)=>{
    res.render("form",{err:"",succmsg:""})
})

app.get('/read',(req,res)=>{
    res.render("read",{content:""})
})

app.get('/update',(req,res)=>{
    res.render("update",{content:""})
})

app.get('/delete',(req,res)=>{
    res.render("delete",{title:"",Fname:""})
})
app.post("/postdata",form)
app.post("/readdata",readdata)
app.post("/updatedata",updatedata)
app.post("/deletedata",deletedata)
 
app.listen(PORT,(err)=>{
    if(err) throw err
    else console.log(`Port Running on Port${PORT}`);
})