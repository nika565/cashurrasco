import { Alert } from "react-native";

// Função para exibir um alerta na tela onde o usuário pode escolher
export default function Confirma (titulo, msg) {
    Alert.alert(titulo, msg, [

        {
            text: "Cancelar",
            onPress: () => true
        },

        {
            text: "Ok",
            onPress: () => false
        }

    ])
}