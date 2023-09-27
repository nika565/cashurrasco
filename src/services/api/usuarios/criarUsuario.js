/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA CRIAR USUÁRIO
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do usuário
import { url, endpointUsuario } from "../../router/apiRota";

/*
    Função para criar: é nescessário passar um objeto no parâmetro da função contendo "nome", "email", "celular", e "senha".
*/

export async function criarUsuario(obj) {

    try {

        const request = await fetch(`${url}${endpointUsuario}`, {
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
        return {msg: "Ocorreu um erro ao criar um novo usuário", status: "error"};
    }

}