const { Console } = require('console');
const fs=require('fs')
const form=(req,res)=>{
    let fname=req.body.name;
    var data = req.body.data;
    if(fs.existsSync(`./users/${fname}.txt`))
    {
        res.render('form',{errmsg:'Name already exist'})
    }
    else{
        fs.writeFile(`./users/${fname}.txt`,`${data}`,(err)=>{
            if (err){
                res.render('form',{errmsg:'Something went wrogn'})
            }else{
                res.render('form',{succmsg:"Register Added Suceccfully"})
            }
        })
    }
    
}

const readdata=(req,res)=>{
    let fname=req.body.name;
    var data=fs.readFileSync(`./users/${fname}.txt`)
    res.render('read',{content:data})
}

const updatedata=(req,res)=>{
    let fname=req.body.name;
    let bodydata=req.body.msg;
    var data=fs.readFileSync(`./users/${fname}.txt`)
    fs.appendFileSync(`./users/${fname}.txt`,bodydata)
    console.log(data.toString());
    res.render('update',{content:data,Fname:fname})
}

const deletedata=(req,res)=>{
    let fname=req.body.name;
    fs.unlinkSync(`./users/${fname}.txt`);
    res.render('delete',{title:`${fname}.txt file is deleted successfully`,Fname:fname})
}
module.exports={form,readdata,updatedata,deletedata}