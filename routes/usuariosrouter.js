import express from "express";
const router= express.Router();


router.get('/contacto',(req,res)=>{
    res.send("Hola Estoy ejecutando el servidor aa")
})


router.post('/usuarios',(req,res)=>{
    res.json({msg:'respuesta post'})
}
)
export default router;

