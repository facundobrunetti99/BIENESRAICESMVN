import express from "express";
const router= express.Router();
import { formularioLogin } from "../controller/usuario.controller.js";

router.get('/login',formularioLogin)

export default router;

