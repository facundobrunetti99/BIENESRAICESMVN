import express from "express";
import usuariosroutes from "./routes/usuariosrouter.js";

const app = express()

const port=3000;

app.get('/',usuariosroutes)

app.listen(port,()=>{

    console.log("Escuchando el puuerto ",port)
}

)