/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA EXCLUIR O EVENTO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointEvento } from "../../router/apiRota";

/*
    Função para deletar: é nescessário passar um id do evento no parâmetro da função.
*/
export async function apagarEvento(id) {

    try {

        const request = await fetch(`${url}${endpointEvento}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);
    }

}