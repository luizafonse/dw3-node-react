import mongoose from "mongoose";
import moongoose from "mongoose";

const dbUser = "afonsomain";
const dbPassword = "teste";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@clusterafonso.30qufat.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=CLusterafonso`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB. ");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso. ");
  });
};
connect();
export default mongoose;
