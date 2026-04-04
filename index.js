import express from "express";
import usuariosroutes from "./routes/usuariosrouter.js";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static(join(__dirname, 'public'))) 

app.use('/auth', usuariosroutes)

app.listen(port, () => {
    console.log("Escuchando el puerto ", port)
})