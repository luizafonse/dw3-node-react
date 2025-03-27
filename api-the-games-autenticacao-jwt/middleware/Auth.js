import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

//função para checagem da autenticação]
const Authorization = (req, res, next) => {
  // coletar o token do cabeçalho da requisição
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    const bearer = authToken.split(" "); //cortar entre o bearer e o token p separar
    const token = bearer[1]; //apos cortar viraram dois arrays [0]bearer [1]e o token, aqui especificamos que queremos so o indice 1
    //validando token
    jwt.verify(token, userController.JWTSecret, (error, data) => {
      if (error) {
        res.status(401).json({ error: "Token inválido. Não autorizado." });
        //se o token for válido:
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Token inválido." });
  }
};
export default { Authorization };
