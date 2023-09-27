/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA EDITAR UM EVENTO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointEvento } from "../../router/apiRota";

/*
    Função para buscar: é nescessário passar o id do evento específico no parâmetro da função.
*/
export default async function editarEvento(id, obj) {

    try {

        const request = await fetch(`${url}${endpointEvento}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);
        return {msg: "Ocorreu um erro ao editar o evento", status: "error"};
    }

}