/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA BUSCAR UM EVENTO ESPECÍFICO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointEvento } from "../../router/apiRota";

/*
    Função para buscar: é nescessário passar um id do evento no parâmetro da função.
*/
export async function buscarEvento(id) {

    try {

        const request = await fetch(`${url}${endpointEvento}/${id}`, {
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