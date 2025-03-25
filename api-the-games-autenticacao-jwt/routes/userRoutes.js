import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

// endpoint para cadastrar um usuario
userRoutes.post("/user", userController.createUser);

// endpoint para autenticação (login) de um usuario
userRoutes.post("/auth", userController.loginUser);

export default userRoutes;
//ir importar rotas na index IMPORTANTE