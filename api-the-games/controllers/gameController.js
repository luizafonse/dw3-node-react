import gameService from "../services/gameService.js";

const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    //REQUISIÇÃO feita com sucesso - cod 200 (ok)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do Servidor." });
  }
};
export default { getAllGames };
