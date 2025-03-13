import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// Criando rota da api(ENDPOINT) endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames);

//endpoint para cadastrar um jogo
gameRoutes.post("/games", gameController.createGame)

//endpoint para excluir um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame)

//endpoint para alterar um jogo
gameRoutes.put("/games/:id", gameController.updateGame)

//endpoint para listar um unico jogo
gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;
