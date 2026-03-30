import express from "express";
const router= express.Router();


app.router('/',(req,res)=>{
    res.send("Hola Estoy ejecutando el servidor")
})

export default router;