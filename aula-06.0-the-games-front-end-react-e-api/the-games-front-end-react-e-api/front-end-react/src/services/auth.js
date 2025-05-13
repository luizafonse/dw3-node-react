import axios from "axios";
//Criando um objeto para ser o cabeçalho da requisição
export const axiosConfig = {
  headers: {
    authorization: ` Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("token") : ""
    }`,
  },
};

// Função de Login

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:4000/auth", {
      email,
      password,
    });
    const token = response.data.token;
    // console.log(token);
    localStorage.setItem("token", token);

    // Atualizando o token que está no navegador ao fazer o login
    axiosConfig.headers.authorization = `Bearer ${token}`;

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

// Função Logout
export const logout = (router) => {
  localStorage.removeItem("token");
  axiosConfig.headers.authorization = "";
  router.push("/")
};
