import React from "react";
import { View, Text, Button } from "react-native"

function TelaCalculadora({ navigation }){
    return(
        <View>
            <Text>Calculadora de churras</Text>
            {/* Estes 3 botões abaixo vão ficar no offcanvas */}
            <Button title="Receitas" onPress={() => navigation.navigate("ListaReceitas")} />
            <Button title="Histórico" onPress={() => navigation.navigate("Historico")} />
            <Button title="Sair" onPress={() => navigation.navigate("Login")} />

            {/* Esse botão vai ficar no final da página */}
            <Button title="Calcular" onPress={() => navigation.navigate("Resultado")} />
        </View>
    )
}

export default TelaCalculadora