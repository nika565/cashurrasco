/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA BUSCAR DADOS DO USUÁRIO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointUsuario } from "../../router/apiRota";

/*
    Função para bsucar: é nescessário passar um id do usuário no parâmetro da função.
*/

export async function buscarUsuario(id) {

    try {

        const request = await fetch(`${url}${endpointUsuario}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);
        return {msg: "Ocorreu um erro ao buscar os dados", status: "error"};
    }

}