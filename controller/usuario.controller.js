const formularioLogin= (req,res)=>{ 
    res.render('auth/login',{
        autenticated:true
    })
}




export{
    formularioLogin
}