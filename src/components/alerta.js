import { Alert } from "react-native";

// Função para exibir um alerta na tela
export default function Alerta (titulo, msg) {
    Alert.alert(titulo, msg, [
        {
            text: "OK",
        }
    ])
}