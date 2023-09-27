/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA LIDAR COM O LOGIN
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do login
import { url, endpointLogin } from "../../router/apiRota";

/*
    Função para cuidar do login: é nescessário passar um objeto no parâmetro da função contendo "nome" e "email"
*/
export async function login(obj) {

    try {

        const request = await fetch(`${url}${endpointLogin}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);
        return {msg: "Ocorreu um erro ao fazer login", status: "error"};
    }

}