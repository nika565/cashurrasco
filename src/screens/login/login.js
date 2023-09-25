import react from "react";
import { View, Text, Button } from "react-native"

function TelaLogin({ navigation }){
    return(
        <View>
            <Text>Tela de login</Text>
            <Button title="Entrar" onPress={() => navigation.navigate("Calculadora")}/>
            <Button title="Cadastre-se" onPress={() => navigation.navigate("Cadastro")}/>
        </View>
    )
}

export default TelaLogin;