import userService from "../services/userService.js";
import jwt from "jsonwebtoken";
// JWTSecret
const JWTSecret = "apigamessecret";

//Cadastrando novo user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // AQUI SERIA FEITO O PROCESSO DE HASH DE SENHA
    await userService.Create(name, email, password);
    res.sendStatus(201); // cod. 201 (created)
  } catch (error) {
    console.log(error);
    res.sendStatus(500); //erro interno servidor
  }
};

//autenticando um usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // E-mail válido (se o usuário está cadastrado)
    if (email != undefined) {
      //Busca o usuario no banco
      const user = await userService.getOne(email);
      //usuario encontrado
      if ((user != undefined)) {
        // Senha correta
        if (user.password == password) {
          //gerando o token
          jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: "48h" },
            (error, token) => {
              if (error) {
                res.status(400).json({ error: "Erro ao gerar o token. " }); // Bad request
              } else {
                res.status(200).json({ token: token });
              }
            }
          );
          //Senha incorreta
        } else {
          res.status(401).jso({ error: "Credenciais inválidas" }); //Unhauthorized
        }
        //usuario nao encontrado
      } else {
        res.status(404).json({ error: "usuario nao encontrado. " });
      }
      //E-mail inválido ou vazio
    } else {
      res.status(400).json({ error: "O e-mail enviado é inválido." }); //bad request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser };
