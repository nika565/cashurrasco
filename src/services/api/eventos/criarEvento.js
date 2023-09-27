/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA CRIAR UM EVENTO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointEvento } from "../../router/apiRota";

/*
    Função para buscar: é nescessário passar um objeto com as especificações do evento do evento no parâmetro da função.
*/
export default async function criarEvento(obj) {

    try {

        const request = await fetch(`${url}${endpointEvento}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);
        return {msg: "Ocorreu um erro ao criar evento", status: "error"};
    }

}