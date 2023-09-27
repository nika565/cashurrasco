/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA EXCLUIR DADOS DO USUÁRIO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointUsuario } from "../../router/apiRota";

/*
    Função para deletar: é nescessário passar um id do usuário no parâmetro da função.
*/
export default async function apagarUsuario(id) {

    try {

        const request = await fetch(`${url}${endpointUsuario}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const response = await request.json();

        return response;
        
    } catch (error) {
        console.log(error);
        return {msg: "Ocorreu um erro ao excluir os dados", status: "error"};
    }

}