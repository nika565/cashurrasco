/*
    -----------------------------------------------------------------------------------------------------------------------------
                                    FUNÇÃO PARA BUSCAR TODOS EVENTOS DO USUÁRIO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointTodosEventos } from "../../router/apiRota";

/*
    Função para buscar: é nescessário passar o id da pessoa que organizou o evento no parâmetro da função.
*/
export async function todosEventos(id) {

    try {

        const request = await fetch(`${url}${endpointTodosEventos}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);

        return {msg: "Ocorreu um erro ao buscar os dados", status: "error"};
    }

}