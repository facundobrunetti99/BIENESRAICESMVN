import express from "express";
const router= express.Router();

import { formularioLogin,formularioRegister } from "../controller/usuario.controller.js";

router.get('/login',formularioLogin)
router.get('/register',formularioRegister)
export default router;

