/*
    -----------------------------------------------------------------------------------------------------------------------------
                                            FUNÇÃO PARA LIDAR COM O LOGIN
    -----------------------------------------------------------------------------------------------------------------------------
*/

// Importando as rotas do login
import { url, endpointLogin } from "../../router/apiRota";
import Alerta from "../../../components/alerta";

/*
    Função para cuidar do login: é nescessário passar um objeto no parâmetro da função contendo "nome" e "email"
*/
export default async function Login(obj) {

    try {

        const request = await fetch(`${url}${endpointLogin}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        const response = await request.json();

        if(response.status === 'success') {
            Alerta('Sucesso!.', response.msg)
            return true;
        };
        
        if(response.status === 'error') Alerta('Algo deu errado.', response.msg);

        return false;
        
    } catch (error) {
        console.log(error);
        return {msg: "Ocorreu um erro ao fazer login", status: "error"};
    }

}