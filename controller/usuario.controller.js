const formularioLogin= (req,res)=>{ 
    res.render('auth/login',{
        autenticated:true
    })
}

const formularioRegister=(req,res)=>{
    res.render('auth/register',{
        
    })
}


export{
    formularioLogin,
    formularioRegister
}