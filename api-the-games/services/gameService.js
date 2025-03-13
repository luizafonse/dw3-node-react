import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  //     //sucesso
  // }).catch(error => {
  //     //falha
  // })
  // função para listar jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // função para excluir jogos
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        // title : title
        title,
        platform,
        year,
        price,
      });
      // metodo do mongoose para cadastrar algo .save()
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  //Função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  //Função para alterar jogos
  async Update(id, title, platform, year, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        title,
        platform,
        year,
        price,
      });
      console.log(`Dados com a id ${id} alterados com sucesso. `);
    } catch (error) {
      console.log(error);
    }
  }

  //Função para listar um unico jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
