import React from "react";
import { View, Text, Button } from "react-native";

function TelaResultado({ navigation }){
    return(
        <View>
            <Text>Aqui ficará o resultado do cálculo</Text>
            <Button title="Veja nossas receitas" onPress={() => navigation.navigate("ListaReceitas")}/>
        </View>
    )
}

export default TelaResultado;

