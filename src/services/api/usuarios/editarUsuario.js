/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA EDITAR USUÁRIO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointUsuario } from "../../router/apiRota";

/*
    Função para editar: é nescessário passar o ID do usuário e um
    objeto no parâmetro da função contendo "nome", "email", "celular", e "senha".
*/

export async function editarUsuario(id, obj) {

    try {

        const request = await fetch(`${url}${endpointUsuario}/${id}`, {
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
    }

}