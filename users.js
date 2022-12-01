const fs=require('fs');
const registration=(req,res)=>{
    let {name,email,pass,conpass,age}=req.body;
    if(fs.existsSync(`./users/${email}.txt`))
    {
        res.render('register',
        {errMsg:'Email already registered'})
    }
    else{
        fs.writeFile(`./users/${email}.txt`,`${name}\n${email}\n${pass}\n${conpass}\n${age}\n${pass}\n${conpass}`,(err)=>{
            if(err){
            res.render("register",{errMsg: "Something went wrong"})
        }else{
            res.render("register",{succMsg:"Registered successfully"})
        }
        })
    }
}
const login =((req,res)=>{

})
module.exports = registration