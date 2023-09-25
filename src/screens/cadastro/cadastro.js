import React from "react";
import { View, Text, Button } from "react-native";

function TelaCadastro({ navigation }){
    return(
        <View>
            <Text>Tela de cadastro</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
            <Button title="Cadastrar" onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}

export default TelaCadastro;