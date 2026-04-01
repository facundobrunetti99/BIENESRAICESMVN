import express from "express";
import usuariosroutes from "./routes/usuariosrouter.js";

const app = express()
const port=3000;
//importar pug
app.set('view engine','pug')
app.set('views','./views')
app.use('/auth',usuariosroutes)

app.listen(port,()=>{

    console.log("Escuchando el puuerto ",port)
}

)